import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
const root=document.getElementById('panoFrame');
const canvas=document.getElementById('panoCanvas');
const backdrop=document.getElementById('stageBackdrop');
const mask=document.getElementById('panoMask');
const transition=document.getElementById('stageTransition');
const hotspots=document.getElementById('panoHotspots');
const detail=document.getElementById('hotspotDetail');
const title=document.getElementById('roomTitle');
const description=document.getElementById('roomDescription');
const facts=document.getElementById('roomFacts');
const indexEl=document.getElementById('roomIndex');
const sourceLabel=document.getElementById('roomSource');
const tabs=[...document.querySelectorAll('#panoFrame [data-room]')];
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const halls={
 grand:{title:'Grand Ballroom',index:'01 / 03',description:'A graceful setting for gatherings that leave lasting memories.',facts:'CAPACITY: ON REQUEST  ·  EVENT SETUP: ON REQUEST',photo:'/assets/grand-1.webp',panorama:'/hfu/user_3JJdXTgHZ1RefQgaL5TKAYaM9hz/cd706b80-84a6-44a5-aa71-8d46c06d13b3.jpg',hotspots:[{yaw:-.68,pitch:-.12,title:'An elegant setting',copy:'Ask our team about arrangements and room layouts.'},{yaw:.62,pitch:.18,title:'Hospitality details',copy:'Menus and service options can be discussed during your visit.'}]},
 royal:{title:'Royal Hall',index:'02 / 03',description:'An inviting setting with privacy and warm hospitality.',facts:'CAPACITY: ON REQUEST  ·  FACILITIES: ON REQUEST',photo:'/assets/royal-1.webp',panorama:'/hfu/user_3JJdXTgHZ1RefQgaL5TKAYaM9hz/93327ffc-0088-4fbb-a540-4f04f5025b3e.jpg',hotspots:[{yaw:-.45,pitch:0,title:'A thoughtful atmosphere',copy:'Contact the venue to discuss configurations for your gathering.'},{yaw:.83,pitch:.14,title:'Room features',copy:'Our team can explain the amenities currently available.'}]},
 salon:{title:'Salon',index:'03 / 03',description:'A more intimate atmosphere for personal gatherings.',facts:'CAPACITY: ON REQUEST  ·  EVENT TYPES: ON REQUEST',photo:'/assets/salon-1.webp',panorama:'/hfu/user_3JJdXTgHZ1RefQgaL5TKAYaM9hz/f60298ad-a067-4e0f-ac74-ce1af46e8e68.jpg',hotspots:[{yaw:-.4,pitch:-.11,title:'A personal setting',copy:'Ask about hosting smaller ceremonies or private gatherings.'},{yaw:.7,pitch:.1,title:'Tailored assistance',copy:'Discuss your requirements directly with our team.'}]}
};
let current='grand',renderer=null,scene=null,camera=null,mesh=null,texture=null,started=false,ready=false,visible=true,loadingId=0;
let yaw=0,pitch=0,targetYaw=0,targetPitch=0,zoom=75,targetZoom=75,lastX=0,lastY=0,dragging=false,rafId=null;
let hotspotEls=[];
function renderInfo(id){
 const h=halls[id];current=id;
 title.textContent=h.title;description.textContent=h.description;facts.textContent=h.facts;indexEl.textContent=h.index;
 backdrop.style.backgroundImage='url("'+h.photo+'")';
 tabs.forEach(b=>{const on=b.dataset.room===id;b.classList.toggle('active',on);b.setAttribute('aria-selected',String(on))});
 detail.hidden=true;
}
function resize(){if(!renderer)return;const w=root.clientWidth,h=root.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()}
function makeHotspots(){
 hotspots.replaceChildren();hotspotEls=[];
 for(const spot of halls[current].hotspots){
  const b=document.createElement('button');b.type='button';b.className='tour-hotspot';
  b.textContent='+';b.setAttribute('aria-label',spot.title);
  b.addEventListener('click',()=>{
   detail.hidden=false;detail.replaceChildren();
   const strong=document.createElement('strong'),para=document.createElement('p');
   strong.textContent=spot.title;para.textContent=spot.copy;
   detail.append(strong,para);
  });
  hotspots.append(b);hotspotEls.push({element:b,spot});
 }
}
function updateHotspots(){
 if(!ready||!camera)return;
 for(const {element,spot} of hotspotEls){
  // Forward direction of equirectangular sphere in camera space.
  const v=new THREE.Vector3(Math.sin(spot.yaw)*Math.cos(spot.pitch),Math.sin(spot.pitch),-Math.cos(spot.yaw)*Math.cos(spot.pitch));
  v.project(camera);
  const onScreen=v.z<1&&v.z>-1&&Math.abs(v.x)<.92&&Math.abs(v.y)<.92;
  element.hidden=!onScreen;
  if(onScreen){element.style.left=((v.x+1)*50)+'%';element.style.top=((1-v.y)*50)+'%'}
 }
}
function fadePause(ms){return new Promise(r=>setTimeout(r,reduced?20:ms))}
async function showHall(id){
 if(!halls[id])return;
 const version=++loadingId;
 transition.classList.add('active');
 transition.querySelector('span').textContent='ENTERING '+halls[id].title.toUpperCase();
 await fadePause(420);
 renderInfo(id);
 if(!started){transition.classList.remove('active');return}
 ready=false;hotspots.replaceChildren();sourceLabel.textContent='Verifying panoramic image…';
 const url=halls[id].panorama;
 let incoming=null;
 try{
  incoming=await new THREE.TextureLoader().loadAsync(url);
  if(version!==loadingId){incoming.dispose();return}
  const w=incoming.image?.width||0,h=incoming.image?.height||0;
  if(w<512||h<256||Math.abs(w/h-2)>.11){throw new Error('Not an equirectangular 2:1 panorama')}
  incoming.colorSpace=THREE.SRGBColorSpace;
  incoming.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());
  const old=texture;texture=incoming;mesh.material.map=texture;mesh.material.needsUpdate=true;
  if(old)old.dispose();
  canvas.style.display='block';root.classList.add('tour-ready');
  sourceLabel.textContent='360° panorama visualisation — source requires venue verification.';
  yaw=targetYaw=pitch=targetPitch=0;ready=true;makeHotspots();
 }catch(error){
  if(incoming&&incoming!==texture)incoming.dispose();
  canvas.style.display='none';root.classList.remove('tour-ready');
  sourceLabel.textContent='Photographic preview only — a verified 2:1 panorama is required for true 360° viewing.';
  detail.hidden=false;detail.textContent='The immersive panoramic source is unavailable. This is a standard venue photograph, not a 360° panorama.';
  ready=false;
 }
 if(version===loadingId){await fadePause(120);transition.classList.remove('active')}
}
function init(){
 if(started)return;started=true;
 try{
  renderer=new THREE.WebGLRenderer({canvas,antialias:false,alpha:false,powerPreference:'default'});
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.6));
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  scene=new THREE.Scene();
  camera=new THREE.PerspectiveCamera(zoom,1,.1,1000);
  const geometry=new THREE.SphereGeometry(90,80,56);geometry.scale(-1,1,1);
  mesh=new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({color:0xffffff}));
  scene.add(mesh);resize();
  mask.classList.add('dismissed');showHall(current);
  tick();
 }catch(error){started=false;mask.classList.remove('dismissed');sourceLabel.textContent='WebGL unavailable — the real venue photographs remain accessible.'}
}
function tick(){
 rafId=requestAnimationFrame(tick);
 if(!renderer||!ready||document.hidden||!visible)return;
 if(!dragging&&!reduced)targetYaw+=.0002;
 yaw+=(targetYaw-yaw)*.09;pitch+=(targetPitch-pitch)*.09;zoom+=(targetZoom-zoom)*.11;
 camera.rotation.order='YXZ';camera.rotation.y=yaw;camera.rotation.x=pitch;camera.fov=zoom;camera.updateProjectionMatrix();
 renderer.render(scene,camera);updateHotspots();
}
document.getElementById('panoStart').addEventListener('click',init);
tabs.forEach(b=>b.addEventListener('click',()=>showHall(b.dataset.room)));
canvas.addEventListener('pointerdown',e=>{canvas.setPointerCapture(e.pointerId);dragging=true;lastX=e.clientX;lastY=e.clientY;canvas.classList.add('dragging')});
canvas.addEventListener('pointermove',e=>{if(!dragging)return;targetYaw+=(e.clientX-lastX)*.005;targetPitch+=(e.clientY-lastY)*.004;targetPitch=Math.max(-1.27,Math.min(1.27,targetPitch));lastX=e.clientX;lastY=e.clientY});
for(const event of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(event,()=>{dragging=false;canvas.classList.remove('dragging')});
canvas.addEventListener('wheel',e=>{if(!ready)return;e.preventDefault();targetZoom=Math.max(43,Math.min(90,targetZoom+e.deltaY*.035))},{passive:false});
canvas.addEventListener('keydown',e=>{let changed=true;switch(e.key){case 'ArrowLeft':targetYaw-=.16;break;case 'ArrowRight':targetYaw+=.16;break;case 'ArrowUp':targetPitch=Math.max(-1.27,targetPitch-.14);break;case 'ArrowDown':targetPitch=Math.min(1.27,targetPitch+.14);break;default:changed=false}if(changed)e.preventDefault()});
document.getElementById('panoZoomIn').addEventListener('click',()=>targetZoom=Math.max(43,targetZoom-9));
document.getElementById('panoZoomOut').addEventListener('click',()=>targetZoom=Math.min(90,targetZoom+9));
document.getElementById('panoFull').addEventListener('click',()=>document.fullscreenElement?document.exitFullscreen():root.requestFullscreen?.().catch(()=>{}));
new ResizeObserver(resize).observe(root);
new IntersectionObserver(entries=>{visible=entries.some(e=>e.isIntersecting)},{threshold:0}).observe(root);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)resize()});
document.addEventListener('click',e=>{const card=e.target.closest('[data-space]');if(!card)return;const id=card.dataset.space;if(halls[id])showHall(id)});
renderInfo(current);
