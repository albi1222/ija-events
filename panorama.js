const root=document.getElementById('panoFrame');
const canvas=document.getElementById('panoCanvas');
const mask=document.getElementById('panoMask');
const start=document.getElementById('panoStart');
const buttons=[...document.querySelectorAll('[data-room]')];
const full=document.getElementById('panoFull');
const rooms={
 grand:'/hfu/user_3JJdXTgHZ1RefQgaL5TKAYaM9hz/cd706b80-84a6-44a5-aa71-8d46c06d13b3.jpg',
 royal:'/hfu/user_3JJdXTgHZ1RefQgaL5TKAYaM9hz/93327ffc-0088-4fbb-a540-4f04f5025b3e.jpg',
 salon:'/hfu/user_3JJdXTgHZ1RefQgaL5TKAYaM9hz/f60298ad-a067-4e0f-ac74-ce1af46e8e68.jpg'
};
const fallback={grand:'/assets/grand-1.webp',royal:'/assets/royal-1.webp',salon:'/assets/salon-1.webp'};
let room='grand',THREE,renderer,scene,camera,sphere,material,active=false,visible=false,dragging=false,lastX=0,lastY=0;
let yaw=0,pitch=0,desiredYaw=0,desiredPitch=0,targetFov=74;
const motion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const pickRoom=(r)=>{
 room=r;
 buttons.forEach(b=>b.classList.toggle('active',b.dataset.room===r));
 document.querySelector('.pano-fallback').src=fallback[r];
 if(active)loadRoom(r);
};
buttons.forEach(b=>b.addEventListener('click',()=>pickRoom(b.dataset.room)));
async function init(){
 if(active)return;
 start.disabled=true;
 const oldText=start.querySelector('span');if(oldText)oldText.textContent='LOADING 360°...';
 try{
 THREE=await import('https://unpkg.com/three@0.160.0/build/three.module.js');
 renderer=new THREE.WebGLRenderer({canvas,antialias:false,alpha:false,powerPreference:'default'});
 renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.6));
 renderer.outputColorSpace=THREE.SRGBColorSpace;
 scene=new THREE.Scene();
 camera=new THREE.PerspectiveCamera(74,root.clientWidth/root.clientHeight,.1,1000);
 const geometry=new THREE.SphereGeometry(80,72,48);
 geometry.scale(-1,1,1);
 material=new THREE.MeshBasicMaterial({color:0xffffff,side:THREE.FrontSide});
 sphere=new THREE.Mesh(geometry,material);scene.add(sphere);
 resize();
 active=true;
 await loadRoom(room);
 canvas.style.display='block';mask.classList.add('hidden');
 observe.observe(root);visible=true;render();
 }catch(err){console.warn('Panorama unavailable',err);start.disabled=false;if(oldText)oldText.textContent='PROVO PËRSËRI / RETRY';}
}
const loader=()=>new THREE.TextureLoader();
let loadVersion=0;
async function loadRoom(r){
 if(!material)return;
 const version=++loadVersion;
 try{
 const tex=await new Promise((resolve,reject)=>loader().load(rooms[r],resolve,undefined,reject));
 if(version!==loadVersion){tex.dispose();return}
 tex.colorSpace=THREE.SRGBColorSpace;
 tex.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());
 const prev=material.map;material.map=tex;material.needsUpdate=true;
 if(prev)prev.dispose();
 }catch(e){console.warn('Room panorama unavailable',r,e)}
}
function resize(){
 if(!renderer||!camera)return;
 const w=root.clientWidth,h=root.clientHeight;
 renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();
}
const ro=new ResizeObserver(resize);ro.observe(root);
const observe=new IntersectionObserver(entries=>{visible=entries.some(e=>e.isIntersecting)},{threshold:0});
const points=new Map();
canvas.addEventListener('pointerdown',e=>{canvas.setPointerCapture(e.pointerId);points.set(e.pointerId,{x:e.clientX,y:e.clientY});dragging=true;lastX=e.clientX;lastY=e.clientY;canvas.classList.add('dragging')});
canvas.addEventListener('pointermove',e=>{
 if(!points.has(e.pointerId))return;
 if(points.size===1){desiredYaw+=(e.clientX-lastX)*.005;desiredPitch+=(e.clientY-lastY)*.004;desiredPitch=Math.max(-1.2,Math.min(1.2,desiredPitch))}
 lastX=e.clientX;lastY=e.clientY;points.set(e.pointerId,{x:e.clientX,y:e.clientY});
});
const end=e=>{points.delete(e.pointerId);dragging=points.size>0;if(!dragging)canvas.classList.remove('dragging')};
canvas.addEventListener('pointerup',end);canvas.addEventListener('pointercancel',end);
canvas.addEventListener('wheel',e=>{e.preventDefault();targetFov=Math.max(42,Math.min(88,targetFov+e.deltaY*.025))},{passive:false});
function render(){
 requestAnimationFrame(render);
 if(!visible||!renderer||document.hidden)return;
 if(!dragging&&!motion)desiredYaw+=.00065;
 yaw+=(desiredYaw-yaw)*.09;pitch+=(desiredPitch-pitch)*.09;
 camera.rotation.order='YXZ';camera.rotation.y=-yaw;camera.rotation.x=-pitch;
 camera.fov+=(targetFov-camera.fov)*.08;camera.updateProjectionMatrix();
 renderer.render(scene,camera);
}
full.addEventListener('click',()=>{
 if(!document.fullscreenElement)root.requestFullscreen?.().catch(()=>{});
 else document.exitFullscreen?.();
});
document.addEventListener('fullscreenchange',resize);
start.addEventListener('click',init);
