import Lenis from 'lenis';
import * as THREE from 'three';
const HFU='/hfu/user_3JJdXTgHZ1RefQgaL5TKAYaM9hz/';
const PANO={grand:HFU+'cd706b80-84a6-44a5-aa71-8d46c06d13b3.jpg',royal:HFU+'93327ffc-0088-4fbb-a540-4f04f5025b3e.jpg',salon:HFU+'f60298ad-a067-4e0f-ac74-ce1af46e8e68.jpg'};
const HALLS=[
 {id:'grand',imgs:['grand-1','grand-2','grand-3'],pano:PANO.grand,vid:'/assets/film-hall.mp4',
  name:{sq:'Salla e Madhe',en:'Grand Ballroom'},alt:{sq:'Grand Ballroom',en:'Salla e Madhe'},cap:{sq:'Deri në 350 të ftuar',en:'Up to 350 guests'},
  ev:{sq:'Dasma · Korporative · Pritje',en:'Weddings · Corporate · Receptions'},
  desc:{sq:'Kolona klasike, tavan me kasetona në dritë të ngrohtë, relieve stukoje në mure dhe tavolina mermeri për dhjetë veta.',en:'Classical columns, a coffered ceiling in warm light, stucco reliefs on the walls and marble-topped tables for ten.'},
  hs:[{yaw:-1,pitch:18,t:{sq:'Llambadari',en:'The chandelier'},p:{sq:'Llambadari në zemër të sallës, i rrethuar nga tavani me kasetona dhe një shirit drite të ngrohtë.',en:'The chandelier at the heart of the hall, framed by the coffered ceiling and a ribbon of warm light.'}},
      {yaw:-60,pitch:58,t:{sq:'Tavani me kasetona',en:'Coffered ceiling'},p:{sq:'Kasetona stuko përgjatë gjithë sallës, secila me dritën e vet.',en:'Coffered stucco panels run the full length of the hall, each with its own light.'}},
      {yaw:18,pitch:1,t:{sq:'Koka e sallës',en:'Head of the hall'},p:{sq:'Muri i fundit me emblemën IJA Events: sfond natyral për tavolinën kryesore ose hyrjen e çiftit.',en:'The far wall with the IJA Events crest: a natural backdrop for the head table or the couple\'s entrance.'}},
      {yaw:14,pitch:-36,t:{sq:'Shtrimi i tavolinës',en:'Table setting'},p:{sq:'Tavolina për dhjetë veta, me servis të plotë, gota dhe karrige kadifeje.',en:'Tables for ten, with full place settings, glassware and tufted velvet chairs.'}},
      {yaw:-131,pitch:10,t:{sq:'Relievet prej stukoje',en:'Stucco reliefs'},p:{sq:'Medalione baroke dhe korniza stukoje mes kolonave klasike.',en:'Baroque stucco medallions and panel mouldings between classical columns.'}}]},
 {id:'royal',imgs:['royal-1','royal-2'],pano:PANO.royal,
  name:{sq:'Salloni Mbretëror',en:'Royal Salon'},alt:{sq:'Royal Salon',en:'Salloni Mbretëror'},cap:{sq:'Deri në 40 të ftuar',en:'Up to 40 guests'},
  ev:{sq:'Fejesa · Mbledhje familjare',en:'Engagements · Family gatherings'},
  desc:{sq:'Sallon në ngjyrë fildishi me dy llambadarë kristali, mure me panele damasku, divan kapitone dhe dysheme mermeri.',en:'An ivory salon with two crystal chandeliers, damask-panelled walls, a tufted sofa and marble floors.'},
  hs:[{yaw:58,pitch:52,t:{sq:'Llambadarët kristal',en:'Crystal chandeliers'},p:{sq:'Dy llambadarë kristali shpërndajnë dritën në tavanin fildish.',en:'Two crystal chandeliers scatter light across the ivory ceiling.'}},
      {yaw:-4,pitch:-22,t:{sq:'Këndi i ndenjes',en:'Lounge corner'},p:{sq:'Divan kapitone në ngjyrë shampanje, ideal për të ftuarit e nderit ose fotot.',en:'A tufted champagne sofa, perfect for guests of honour or photographs.'}},
      {yaw:-98,pitch:14,t:{sq:'Muret me panele',en:'Panelled walls'},p:{sq:'Panele damasku në korniza të bardha, me aplikë dhe një orë muri dekorative.',en:'Damask panels in white mouldings, with sconces and a statement wall clock.'}},
      {yaw:0,pitch:-66,t:{sq:'Dyshemeja e mermerit',en:'Marble floor'},p:{sq:'Mermer i bardhë i lëmuar në gjithë sallonin.',en:'Polished white marble throughout.'}}]},
 {id:'salon',imgs:['salon-2','salon-1'],pano:PANO.salon,vid:'/assets/walk-salon.mp4',
  name:{sq:'Salla Kristal',en:'Crystal Salon'},alt:{sq:'Crystal Salon',en:'Salla Kristal'},cap:{sq:'Deri në 60 të ftuar',en:'Up to 60 guests'},
  ev:{sq:'Fejesa · Ditëlindje · Pritje',en:'Engagements · Birthdays · Receptions'},
  desc:{sq:'Mure gri të butë, korniza të bardha, llambadar kristali dhe barin e vet të kafesë me dollapë me ar.',en:'Soft grey walls, white mouldings, a crystal chandelier and its own coffee bar with gold-trimmed cabinets.'},
  hs:[{yaw:0,pitch:56,t:{sq:'Llambadari kristal',en:'Crystal chandelier'},p:{sq:'Llambadar kristali nën një tavan të ndriçuar.',en:'A crystal chandelier beneath a lit tray ceiling.'}},
      {yaw:2,pitch:5,t:{sq:'Muri kryesor',en:'Feature wall'},p:{sq:'Pilastra klasike dhe ekran për prezantime, fjalime ose video.',en:'Classical pilasters and a screen for slideshows and speeches.'}},
      {yaw:2,pitch:-56,t:{sq:'Mozaiku në dysheme',en:'Stone inlay'},p:{sq:'Mozaik gjeometrik guri në dyshemenë prej mermeri.',en:'A geometric stone inlay set into the marble floor.'}},
      {yaw:-162,pitch:-8,t:{sq:'Bari i kafesë',en:'Coffee bar'},p:{sq:'Bari i kafesë me dollapë me ar dhe makinë profesionale espresso.',en:'The coffee bar with gold-trimmed cabinets and a professional espresso machine.'}}]}
];
const MENUS=[
 {n:1,p:1900,f:[['Supë orientale','Oriental soup'],['Supë me perime','Vegetable soup']],m:[['Biftek viçi, furrë, me patate','Oven-baked veal steak with potatoes'],['Pilaf ramstek, me djathë','Rice pilaf with rump steak & cheese']],s:[['Sallatë miks e stinës','Seasonal mixed salad'],['Djathë me ullinj','Cheese with olives'],['Sallatë me perime sote','Sautéed vegetable salad'],['Byrek','Byrek']]},
 {n:2,p:2200,f:[['Supë krem pule','Cream of chicken soup'],['Supë me perime','Vegetable soup']],m:[['Eskallop viçi me patate furre','Veal escalope with oven potatoes'],['Pilaf me fileto pule zgare','Pilaf with grilled chicken fillet']],s:[['Sallatë trikolor','Tricolour salad'],['Sallatë ulliri me limon, djathë dhe portokall','Olive salad, lemon, cheese & orange'],['Sallatë me perime të zgarës','Grilled vegetable salad'],['Byrek me qumësht','Byrek with milk']]},
 {n:3,p:2500,f:[['Supë krem pule','Cream of chicken soup'],['Supë me perime','Vegetable soup']],m:[['Eskallop viçi me patate furre','Veal escalope with oven potatoes'],['Pilaf me berxollë zgare','Pilaf with grilled chop']],s:[['Sallatë miks e stinës','Seasonal mixed salad'],['Sallatë me rukola, grana padano dhe tomate qershi','Rocket, grana padano & cherry tomato'],['Perime të zgarës','Grilled vegetables']]},
 {n:4,p:2800,f:[['Supë "Pasha qoftë"','"Pasha" meatball soup'],['Supë me perime','Vegetable soup']],m:[['Lazanjë bolonjeze','Lasagne bolognese'],['Mish qengji me patate të furrës','Lamb with oven potatoes']],s:[['Sallatë miks e stinës','Seasonal mixed salad'],['Sallatë ulliri me limon dhe portokall','Olive salad with lemon & orange'],['Miks djathrash','Cheese selection']]}
];

/* =====================================================================
   COPY (SQ default · EN)
   ===================================================================== */
const T={
 sq:{quote:'Rezervo',d1:'Një udhëtim kinematografik drejt hyrjes sonë, për ceremoni, përkujtime dhe mbledhje familjare në Tiranë.',d2:'Tavane me kasetona, dritë e ngrohtë dhe shërbim i heshtur. Çdo detaj i menduar me kujdes.',d3:'Që nga viti 2000, familjet e Tiranës vijnë këtu për të kujtuar, për t\'u mbledhur dhe për të qëndruar pranë njëri-tjetrit.',
  echoLead:['Që nga viti','2000'],echoFoot:['Memorial','& Events'],echoDesc:'Tre salla elegante, shërbim i kujdesshëm dhe një ekip që qëndron pranë familjes në çdo moment, nga ngushëllimi te festa.',
  dTitle:['Një vend i qetë','për çdo kujtim'],s1:'Vite përvojë',s2:'Salla elegante',s3:'Vende në sallën kryesore',
  zoom:['Ku dinjiteti','takon mikpritjen'],addr:'Adresa',showroom:'Na gjeni në Google Maps',play:'Luaj',
  hallsK:'Sallat në 360°',xnote:'Tërhiqni për t\'u rrotulluar, zmadhoni dhe prekni pikat ✦. Pamjet 360° janë vizualizime mbi bazën e fotove reale.',
  menusK:'Drekat përkujtimore',mF:'Pjata e parë',mM:'Pjatat kryesore',mS:'Pjatat anësore',mPP:'Lekë / person',mInc:'Të përfshira',mIncV:'Kafe · Pije (1L) · Ujë natyral & i gazuar · Fruta · Ëmbëlsirë: hallvë, revani ose grurë',
  locK:'Vendndodhja',dir:'Udhëzimet',locT:['Na gjeni','në Tiranë'],mapLoad:'Duke ngarkuar hartën 3D…',mapErr:'Harta nuk u ngarkua · Hapeni në Google Maps',
  contactK:'Kontakt',h24:'Në dispozicion 24/7',cT:['Jemi këtu','për ju'],cLead:'Na telefononi në çdo orë ose na lini një kërkesë. Ju kthejmë përgjigje sa më shpejt, me qetësi dhe kujdes.',tel:'Telefon',
  fType:'Lloji i shërbimit',fDate:'Data',fGuests:'Të ftuar',fHall:'Salla',fMenu:'Menuja',fName:'Emri i plotë',fPhone:'Telefoni',fMsg:'Mesazhi',submit:'Përgatit kërkesën',fNote:'Kërkesa hapet në WhatsApp si mesazh gati. Asgjë nuk dërgohet pa shtypur ju "Dërgo".',ok:'Kërkesa është gati',okd:'Shtypni më poshtë për ta dërguar në WhatsApp.',e1:'Zgjidhni llojin.',e2:'Zgjidhni një datë.',e3:'Nga 10 deri në 600.',e4:'Shkruani emrin.',e5:'Numër i pavlefshëm.',nopref:'Pa preferencë',undec:'Ende pa vendosur',
  fT:['Jemi pranë jush','në çdo moment'],nHome:'Kreu',nMenus:'Menutë',nLoc:'Vendndodhja',
  wa:['Përshëndetje IJA Events,\nDëshiroj të bëj një kërkesë.','Shërbimi','Data','Të ftuar','Salla','Menuja','Emri','Telefoni','Shënime','Faleminderit.'],
  words:[['Dinjitet','dhe','Kujtim'],['Elegancë','në','Detaje'],['Mikpritje','që nga','2000']]},
 en:{quote:'Reserve',d1:'A cinematic journey to our entrance, for ceremonies, remembrance and family gatherings in Tirana.',d2:'Coffered ceilings, warm light and discreet service. Every detail considered with care.',d3:'Since 2000, Tirana\'s families have come here to remember, to gather and to stay close to one another.',
  echoLead:['Since','2000'],echoFoot:['Memorial','& Events'],echoDesc:'Three elegant halls, attentive service and a team that stands by the family at every moment, from condolence to celebration.',
  dTitle:['A quiet place','for every memory'],s1:'Years of care',s2:'Elegant halls',s3:'Seats in the main hall',
  zoom:['Where dignity','meets hospitality'],addr:'Address',showroom:'Find us on Google Maps',play:'Play',
  hallsK:'The halls in 360°',xnote:'Drag to turn, zoom in and tap the ✦ markers. The 360° views are visualisations based on real photographs.',
  menusK:'Memorial lunches',mF:'First course',mM:'Main courses',mS:'Sides',mPP:'Lek / person',mInc:'Included',mIncV:'Coffee · Drinks (1L) · Still & sparkling water · Fruit · Dessert: halva, revani or sweet wheat',
  locK:'Location',dir:'Directions',locT:['Find us','in Tirana'],mapLoad:'Loading 3D map…',mapErr:'Map could not load · Open in Google Maps',
  contactK:'Contact',h24:'Available 24/7',cT:['We are here','for you'],cLead:'Call us at any hour or leave a request. We will reply as soon as possible, with calm and care.',tel:'Phone',
  fType:'Type of service',fDate:'Date',fGuests:'Guests',fHall:'Hall',fMenu:'Menu',fName:'Full name',fPhone:'Phone',fMsg:'Message',submit:'Prepare request',fNote:'Your request opens in WhatsApp as a ready message. Nothing is sent until you press send.',ok:'Your request is ready',okd:'Tap below to send it on WhatsApp.',e1:'Choose a type.',e2:'Choose a date.',e3:'Between 10 and 600.',e4:'Enter your name.',e5:'Invalid number.',nopref:'No preference',undec:'Not decided yet',
  fT:['We stand by you','at every moment'],nHome:'Home',nMenus:'Menus',nLoc:'Location',
  wa:['Hello IJA Events,\nI\'d like to make a request.','Service','Date','Guests','Hall','Menu','Name','Phone','Notes','Thank you.'],
  words:[['Dignity','and','Memory'],['Elegance','in','Detail'],['Welcome','since','2000']]}
};
const EVTYPES=[['Ceremoni mortore','Funeral ceremony'],['Përkujtim','Remembrance'],['Mbledhje familjare','Family gathering'],['Fejesë / Dasmë','Engagement / Wedding'],['Ditëlindje','Birthday'],['Event korporativ','Corporate']];
let LANG='sq';try{const s=localStorage.getItem('ija-lang');if(s==='en'||s==='sq')LANG=s;}catch(e){}
const C=T[LANG],L=o=>o[LANG]??o.sq;
document.documentElement.lang=LANG;
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
$$('[data-t]').forEach(el=>{const v=C[el.dataset.t];if(typeof v==='string')el.textContent=v;});
$('#yr').textContent=new Date().getFullYear();
$$('.lng button').forEach(b=>{b.setAttribute('aria-pressed',b.dataset.lang===LANG);b.onclick=()=>{try{localStorage.setItem('ija-lang',b.dataset.lang);}catch(e){}location.reload();};});

/* =====================================================================
   MOTION ENGINE — springs, shared ticker, scroll poses
   ===================================================================== */
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const HOVER=matchMedia('(min-width: 769px)');
const easeOutExpo=t=>t===1?1:1-Math.pow(2,-10*t),easeOutQuart=t=>1-Math.pow(1-t,4),easeOutQuint=t=>1-Math.pow(1-t,5),easeInQuad=t=>t*t,easeInOutQuart=t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,easeInOutQuint=t=>t<.5?16*t**5:1-Math.pow(-2*t+2,5)/2;
const clamp01=v=>Math.min(1,Math.max(0,v)),span=(p,[a,b])=>clamp01((p-a)/(b-a)),easeInOutSine=t=>(1-Math.cos(t*Math.PI))/2,easeOutSine=t=>Math.sin(t*Math.PI/2);
const settle=d=>({duration:d,easing:easeOutExpo});
const TIMELINE_FOLLOW={tension:90,friction:26},FOOTER_FOLLOW={tension:140,friction:30},BADGE_FOLLOW={tension:300,friction:40},SCROLL_LETTER={tension:170,friction:26},DEFAULT={tension:170,friction:26};
const COUNT_UP={duration:2200,easing:easeOutQuint},PRELOADER_COUNT={duration:2800,easing:easeOutQuart},PRELOADER_WIPE={duration:1200,easing:easeInOutQuart},PRELOADER_FADE={duration:800,easing:easeInOutQuart},PRELOADER_RULE={duration:800,easing:easeInOutQuint},GRID_INTRO={duration:800,easing:easeInQuad},DOCK_TOGGLE={duration:350,easing:easeOutQuart};
const REVEAL={label:{stagger:35,config:settle(1500)},cta:{stagger:12,config:settle(800)},quote:{stagger:7,config:settle(1600)}};
const HERO_INTRO={span:750,config:{duration:750,easing:easeOutQuart}};

const springs=new Set();
class Spring{
  constructor(v,cfg=DEFAULT,onChange){this.pos=v;this.to=v;this.vel=0;this.cfg=cfg;this.on=onChange;this.from=v;this.el=0;this.delay=0;this.active=false;}
  set(to,{cfg,delay=0,immediate}={}){if(cfg)this.cfg=cfg;if(immediate||RM){this.to=to;this.pos=to;this.vel=0;this.active=false;springs.delete(this);this.on&&this.on(to);return;}
    if(to===this.to&&this.active)return;if(to===this.to&&!this.active&&this.pos===to)return;this.to=to;this.from=this.pos;this.el=0;this.delay=delay;this.vel=this.cfg.duration?0:this.vel;this.active=true;springs.add(this);}
  step(dt){if(this.delay>0){this.delay-=dt;if(this.delay>0)return;dt=-this.delay;this.delay=0;}
    const c=this.cfg;
    if(c.duration){this.el+=dt;const k=Math.min(1,this.el/c.duration);this.pos=this.from+(this.to-this.from)*c.easing(k);if(k>=1){this.pos=this.to;this.active=false;}}
    else{for(let i=0;i<dt;i++){const f=-c.tension*1e-6*(this.pos-this.to),d=-c.friction*1e-3*this.vel;this.vel+=f+d;this.pos+=this.vel;}
      if(Math.abs(this.vel)<.001&&Math.abs(this.pos-this.to)<=.001*Math.max(1,Math.abs(this.to))){this.pos=this.to;this.vel=0;this.active=false;}}
    this.on&&this.on(this.pos);if(!this.active)springs.delete(this);}
}
const subs=[];let lenis;
const onTick=fn=>subs.push(fn);
let last=performance.now();
function frame(t){const dt=Math.min(64,t-last);last=t;
  try{lenis&&lenis.raf(t);}catch(e){console.error(e);}
  for(const fn of subs){try{fn(t,dt);}catch(e){console.error(e);}}
  for(const s of [...springs]){try{s.step(Math.round(dt));}catch(e){console.error(e);}}
  requestAnimationFrame(frame);}
requestAnimationFrame(frame);
const pose=(el,start,end)=>{const bb=el.getBoundingClientRect(),h=innerHeight;const P={top_top:bb.top,center_top:bb.top+bb.height/2,bottom_top:bb.bottom,top_bottom:bb.top-h,center_bottom:bb.top+bb.height/2-h,bottom_bottom:bb.bottom-h,top_center:bb.top-h/2,center_center:bb.top+bb.height/2-h/2,bottom_center:bb.bottom-h/2};
  const s=P[start.split(' ').join('_')],e=P[end.split(' ').join('_')],len=Math.abs(s-e)||1;return Math.min(Math.max(0,1-(s+len)/len),1);};

/* root font-size above 1440 */
const rootSize=()=>{const w=innerWidth;if(w>1440){const size=16-(16*(((1440-w)/1440)*100*.6666))/100;document.documentElement.style.fontSize=size+'px';}else document.documentElement.style.removeProperty('font-size');};
rootSize();addEventListener('resize',rootSize);

/* =====================================================================
   LETTER ENGINE
   ===================================================================== */
const RECIPES={slide:(t,el)=>{el.style.opacity=t;el.style.transform=`translateX(${(1-t)*-40}px)`;const b=(1-t)*12;el.style.filter=b>.05?`blur(${b}px)`:'none';},
  rise:(t,el)=>{el.style.opacity=t;el.style.transform=`translateY(${(1-t)*105}%)`;const b=(1-t)*12;el.style.filter=b>.05?`blur(${b}px)`:'none';}};
function engine(container,text,{recipe='rise',clip=true,cfg=SCROLL_LETTER,offset=0,stagger=0,justify}={}){
  const wrap=document.createElement('span');wrap.className='le'+(clip?' clip':'');wrap.setAttribute('aria-hidden','true');if(justify)wrap.style.justifyContent=justify;
  const letters=[];let gi=0;
  text.split(' ').forEach(w=>{const wd=document.createElement('span');wd.className='wd';
    [...w].forEach(ch=>{const lt=document.createElement('span');lt.className='lt';lt.textContent=ch;wd.appendChild(lt);
      const s=new Spring(0,cfg,v=>RECIPES[recipe](v,lt));RECIPES[recipe](0,lt);letters.push({s,i:offset+gi});gi++;});
    wrap.appendChild(wd);});
  container.appendChild(wrap);
  return {letters,count:gi,
    all(on,{immediate,stg=stagger}={}){letters.forEach(l=>l.s.set(on?1:0,{delay:on?l.i*stg:0,immediate}));},
    progress(p){const n=letters.length;letters.forEach((l,k)=>l.s.set(p>k/n?1:0));}};
}
function revealLines(container,lines,timing,{clip=true,rootMargin='0px',enabled=()=>true,justify}={}){
  const sr=document.createElement('span');sr.className='sr';sr.textContent=lines.join(' ');container.appendChild(sr);
  let off=0;const eng=lines.map(line=>{const row=document.createElement('span');row.style.display='block';container.appendChild(row);const e=engine(row,line,{recipe:'rise',clip,cfg:timing.config,offset:off,stagger:timing.stagger,justify});off+=e.count;return e;});
  let inView=false,on=false;
  const upd=()=>{const want=enabled()&&inView;if(want===on)return;on=want;eng.forEach(e=>e.letters.forEach(l=>want?l.s.set(1,{delay:l.i*timing.stagger}):l.s.set(0,{immediate:true})));};
  new IntersectionObserver(es=>{inView=es[0].isIntersecting;upd();},{rootMargin}).observe(container);
  return {update:upd};
}

/* =====================================================================
   STORE · PRELOADER
   ===================================================================== */
const store={framesProgress:0,introReady:false,dockHidden:false,ls:new Set(),set(k,v){if(this[k]===v)return;this[k]=v;this.ls.forEach(f=>f(k,v));}};
const html=document.documentElement;html.classList.add('loading');scrollTo(0,0);
const showErr=msg=>{const e=$('#err');e.style.display='block';e.textContent=msg;};
{
  const STEPS=Array.from({length:101},(_,v)=>v),BLANK=' ';
  const COLS=[v=>v<100?BLANK:'1',v=>v<10?BLANK:String(Math.floor((v%100)/10)),v=>String(v%10)];
  ['#c0','#c1','#c2'].forEach((id,k)=>{$(id).innerHTML=STEPS.map(v=>`<span>${COLS[k](v).replace(' ','&nbsp;')}</span>`).join('');});
  const clock=new Spring(0,PRELOADER_COUNT),loaded=new Spring(0,DEFAULT);clock.set(1);
  let exiting=false;const t0=performance.now();
  const sub=(t)=>{if(exiting&&pre.gone)return;loaded.set(store.framesProgress);
    const c=Math.min(clock.pos,loaded.pos)*100,n=Math.round(c);
    $('#trav').style.left=c+'%';$('#trav').style.transform=`translateX(-${c}%)`;
    ['#c0','#c1','#c2'].forEach(id=>$(id).style.transform=`translateY(-${n*.9}em)`);
    $('#preFill').style.transform=`scaleX(${Math.min(clock.pos,loaded.pos)})`;
    if(!exiting&&t-t0>=2800&&store.framesProgress>=1){exiting=true;exit();}};
  const pre={gone:false};onTick(sub);
  function exit(){
    $$('#pre .cols i').forEach((col,i)=>{const s=new Spring(1,PRELOADER_WIPE,v=>col.style.transform=`scaleY(${v})`);s.set(0,{delay:i*100});});
    const lb=$('#pre .lbl'),f=new Spring(1,PRELOADER_FADE,v=>{lb.style.opacity=v;lb.style.transform=`translateY(${(1-v)*-40}px)`;});f.set(0);
    const rl=$('#pre .rule'),r=new Spring(1,PRELOADER_RULE,v=>rl.style.transform=`scaleX(${v})`);r.set(0);
    [...$$('#trav .col'),$('#cpc')].forEach((el,i)=>{const s=new Spring(1,PRELOADER_FADE,v=>{el.style.opacity=v;el.style.transform=(el.id==='cpc'?'':`translateY(-${Math.round(Math.min(clock.pos,loaded.pos)*100)*.9}em) `)+`translateX(${(1-v)*-40}px)`;});s.set(0,{delay:(3-i)*50});});
    html.classList.remove('loading');lenis&&lenis.start();
    setTimeout(()=>store.set('introReady',true),1200);
    setTimeout(()=>{$('#pre').remove();pre.gone=true;},1600);
  }
}

/* =====================================================================
   SCENE — 1400vh track, sticky stage
   ===================================================================== */
const TRACK_VH=1400,TRAVEL_VH=TRACK_VH-100;
const PHASE={sequence:[0,.4],heroOneExit:[.08,.13],heroTwoEnter:[.13,.18],heroTwoExit:[.21,.26],heroThreeEnter:[.26,.31],echo:[.4,.53],details:[.53,.66],star:[.66,.74],showreelReveal:[.74,.79],showreelZoom:[.79,1]};
const HERO_GONE_AT=[PHASE.heroOneExit[1],PHASE.heroTwoExit[1],PHASE.echo[1]];
const exitOpacity=r=>p=>1-easeInOutSine(span(p,r)),exitTransform=r=>p=>`translate3d(${-2.5*easeInOutSine(span(p,r))}rem,0,0)`,exitFilter=r=>p=>{const b=.75*easeInOutSine(span(p,r));return b>0?`blur(${b}rem)`:'none';};
const heroDesc=[p=>1-span(p,PHASE.heroOneExit),p=>span(p,PHASE.heroTwoEnter)*(1-span(p,PHASE.heroTwoExit)),p=>span(p,PHASE.heroThreeEnter)];
const reveal=p=>span(p,PHASE.showreelReveal),zoom=p=>easeInOutSine(span(p,PHASE.showreelZoom));
const sceneFlags=p=>({canvas:p<PHASE.echo[1],echoLead:p>=PHASE.echo[0],echoFoot:span(p,PHASE.echo)>=.9,details:p>=PHASE.details[0],showreel:p>=PHASE.star[0],zoom:p>=PHASE.showreelReveal[0]});
const track=$('#top');
let flags=sceneFlags(0);

/* hero words */
const W=C.words;
[1,2,3].forEach(b=>$(`#b${b}sr`).textContent=W[b-1].join(' '));
const heroEng=[[],[],[]];
$$('[data-w]').forEach(slot=>{const [b,i]=slot.dataset.w.slice(1).split('.').map(Number);const word=W[b-1][i];
  const e=engine(slot,word,{recipe:'slide',clip:false,cfg:b===1?HERO_INTRO.config:SCROLL_LETTER,stagger:b===1?HERO_INTRO.span/word.length:0});heroEng[b-1].push(e);});
store.ls.add((k,v)=>{if(k==='introReady'&&v){heroEng[0].forEach(e=>e.letters.forEach((l,j)=>l.s.set(1,{delay:j*(HERO_INTRO.span/e.count)})));
  const g=$('#grid'),gs=new Spring(0,GRID_INTRO,x=>g.style.opacity=x);gs.set(1);}});
/* ECHO + details text */
const echoWord=engine($('#echoWord'),'IJA',{recipe:'slide',clip:false,cfg:SCROLL_LETTER});
const rlEchoLead=revealLines($('#echoLead'),C.echoLead,REVEAL.label,{enabled:()=>flags.echoLead});
const rlEchoFoot=revealLines($('#echoFoot'),C.echoFoot,REVEAL.label,{enabled:()=>flags.echoFoot});
const rlDT=revealLines($('#dTitle'),C.dTitle,REVEAL.label,{enabled:()=>flags.details});
const rlZoom=revealLines($('#zoomT'),C.zoom,REVEAL.label,{enabled:()=>flags.zoom});
/* stats drums */
const drums=$$('.drum').map(el=>{const v=+el.dataset.v;const s=new Spring(0,COUNT_UP,n=>{const rest=1-n/v;el.style.filter=rest>.01?`blur(${rest*.5}rem)`:'none';el.style.transform=`translate3d(0,${rest*1.25}rem,0)`;el.textContent=Math.floor(n);});s.on(0);return {s,v};});

/* frames */
const FRAME_TIERS={desktop:{name:'desktop',count:240,width:1600,height:900},mobile:{name:'mobile',count:120,width:1024,height:576}};
const tier=(innerWidth<1024||matchMedia('(hover: none) and (pointer: coarse)').matches)?FRAME_TIERS.mobile:FRAME_TIERS.desktop;
const framePath=(t,i)=>`/assets/seq/${t.name}/${String(i).padStart(3,'0')}.webp`;
const cv=$('#seq'),ctx=cv.getContext('2d');cv.width=tier.width;cv.height=tier.height;
const frames=new Array(tier.count).fill(null);let settled=0,painted=-1,failed=0;
const nearest=i=>{for(let s=0;s<tier.count;s++){const im=frames[i-s]??frames[i+s];if(im)return im;}return null;};
const pSpring=new Spring(0,TIMELINE_FOLLOW);
const seqFrame=(p,n)=>Math.min(n-1,Math.floor(span(p,PHASE.sequence)*n));
const draw=(force)=>{const i=seqFrame(pSpring.pos,tier.count);if(!force&&i===painted)return;const im=nearest(i);if(!im)return;ctx.drawImage(im,0,0,tier.width,tier.height);painted=i;};
(async()=>{let cur=0;const pump=async()=>{for(;;){const i=cur++;if(i>=tier.count)return;const im=new Image();im.decoding='async';im.src=framePath(tier,i);let ok=im;try{await im.decode();}catch(e){ok=null;failed++;}
  frames[i]=ok;settled++;store.framesProgress=settled/tier.count;if(ok&&i<=painted+2)draw(true);}};
  await Promise.all(Array.from({length:6},pump));if(failed>tier.count*.5)showErr('Frame sequence failed to load: '+framePath(tier,0));draw(true);})();

/* layers */
const L_=id=>$(id);
const els={canvas:L_('#canvasL'),gridIn:L_('#gridIn'),b:[L_('#b1'),L_('#b2'),L_('#b3')],bx:[L_('#b1x'),L_('#b2x')],d:[L_('#d1'),L_('#d2'),L_('#d3')],echo:L_('#echoL'),echoImg:L_('#echoImg'),det:L_('#detL'),detImg:L_('#detImg'),star:L_('#star'),tint:L_('#starTint'),reel:L_('#reel'),ovL:L_('#ovL'),ovA:L_('#ovA'),ovS:L_('#ovS'),video:L_('#reelV')};
const tb={b2:$('#tb2'),b3:$('#tb3'),echo:$('#tbE')};
let lastRaw=-1;
onTick(()=>{
  const r=track.getBoundingClientRect();if(r.bottom<-innerHeight*2&&lastRaw===1&&!pSpring.active)return;
  const raw=pose(track,'top top','bottom bottom');
  if(raw!==lastRaw){lastRaw=raw;pSpring.set(raw);
    const nf=sceneFlags(raw);
    if(nf.echoLead!==flags.echoLead||nf.echoFoot!==flags.echoFoot||nf.details!==flags.details||nf.zoom!==flags.zoom||nf.showreel!==flags.showreel||nf.canvas!==flags.canvas){
      const prev=flags;flags=nf;rlEchoLead.update();rlEchoFoot.update();rlDT.update();rlZoom.update();
      if(nf.details!==prev.details)drums.forEach(d=>nf.details?d.s.set(d.v,{cfg:COUNT_UP}):d.s.set(0,{immediate:true}));
      if(nf.showreel!==prev.showreel){nf.showreel?els.video.play().catch(()=>{}):els.video.pause();}}
    // progress-driven letters read their trigger boxes
    const p2=pose(tb.b2,'top top','bottom bottom'),p3=pose(tb.b3,'top top','bottom bottom'),pe=pose(tb.echo,'top top','bottom bottom');
    heroEng[1].forEach(e=>e.progress(p2));heroEng[2].forEach(e=>e.progress(p3));echoWord.progress(pe);}
  const p=pSpring.pos;
  if(flags.canvas&&!document.hidden)draw();
  els.canvas.style.opacity=1-span(p,PHASE.echo);
  const go=1-span(p,PHASE.sequence);els.gridIn.style.opacity=go;els.gridIn.style.visibility=go>0?'visible':'hidden';
  els.b.forEach((b,i)=>b.style.visibility=p<HERO_GONE_AT[i]?'visible':'hidden');
  [[0,PHASE.heroOneExit],[1,PHASE.heroTwoExit]].forEach(([i,rg])=>{const x=els.bx[i];x.style.opacity=exitOpacity(rg)(p);x.style.transform=exitTransform(rg)(p);x.style.filter=exitFilter(rg)(p);});
  els.b[2].style.opacity=1-span(p,PHASE.echo);
  els.d.forEach((d,i)=>d.style.opacity=heroDesc[i](p));
  els.echo.style.transform=`translate3d(0,${(1-span(p,PHASE.echo))*100}%,0)`;
  els.echoImg.style.transform=`scale(${1.1-.1*span(p,PHASE.echo)})`;
  els.det.style.clipPath=`inset(${(1-span(p,PHASE.details))*100}% 0 0 0)`;
  els.detImg.style.transform=`scale(${1.1-.1*span(p,PHASE.details)})`;
  els.star.style.transform=`scale(${.04+Math.pow(span(p,PHASE.star),5)*16})`;els.tint.setAttribute('opacity',span(p,PHASE.star));
  const rv=reveal(p),zm=zoom(p);
  els.reel.style.clipPath=`inset(${(1-rv)*100}% 0 0 0)`;els.reel.style.transform=`translate(-50%,calc(-50% + ${(1-rv)*10}%)) scale(${1+zm*.8})`;
  [els.ovL,els.ovA,els.ovS].forEach(o=>{o.style.opacity=rv;o.style.visibility=rv>0?'visible':'hidden';});
  els.ovL.style.transform=`translate3d(${(1-zm)*7.5}rem,-50%,0)`;els.ovA.style.transform=`translate3d(${-(1-zm)*7.5}rem,-50%,0)`;
});
/* PLAY badge */
{const bd=$('#badge'),bx=new Spring(0,BADGE_FOLLOW),by=new Spring(0,BADGE_FOLLOW),bo=new Spring(0,BADGE_FOLLOW),bs=new Spring(.7,BADGE_FOLLOW);
 onTick(()=>{bd.style.transform=`translate3d(${bx.pos}px,${by.pos}px,0) scale(${bs.pos})`;bd.style.opacity=bo.pos;});
 const v=els.video;v.addEventListener('mouseenter',e=>{bx.set(e.clientX,{immediate:true});by.set(e.clientY,{immediate:true});bo.set(1);bs.set(1);});
 v.addEventListener('mousemove',e=>{bx.set(e.clientX);by.set(e.clientY);});v.addEventListener('mouseleave',()=>{bo.set(0);bs.set(.7);});
 v.addEventListener('click',()=>openVideo('/assets/seq/showreel.mp4'));}
function openVideo(src){const m=$('#lb'),v=$('video',m);v.src=src;m.classList.add('open');v.play().catch(()=>{});}
$('#lb button').onclick=()=>{$('#lb').classList.remove('open');$('#lb video').pause();};
document.addEventListener('click',e=>{const a=e.target.closest('[data-video]');if(a){e.preventDefault();openVideo(a.dataset.video);}});

/* =====================================================================
   360° HALLS — drag / touch / pinch, zoom, fullscreen, hotspots, room fades
   ===================================================================== */
const V={yaw:0,pitch:0,tyaw:0,tpitch:0,fov:75,tfov:75,vy:0,vp:0,drag:false,auto:true,busy:false,visible:false,hall:null,hs:[]};
const vbox=$('#halls'),vc=$('#vcanvas'),hsLayer=$('#hsLayer'),hcard=$('#hsCard'),vfade=$('#vFade');
let vr,vs,vcam,sphere;const texCache={};let viewerFull=false;
function initViewer(){
  vr=new THREE.WebGLRenderer({canvas:vc,antialias:true});vr.setPixelRatio(Math.min(devicePixelRatio,2));vr.outputColorSpace=THREE.SRGBColorSpace;
  vs=new THREE.Scene();vcam=new THREE.PerspectiveCamera(75,1,.1,100);
  const geo=new THREE.SphereGeometry(10,96,64);geo.scale(-1,1,1);sphere=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({color:0}));sphere.rotation.y=-Math.PI/2;vs.add(sphere);
  const rs=()=>{const w=vbox.clientWidth,h=vbox.clientHeight;vr.setSize(w,h,false);vcam.aspect=w/h;vcam.updateProjectionMatrix();};rs();new ResizeObserver(rs).observe(vbox);
  const pts=new Map();let lx,ly,p0=0,f0=75;
  vc.addEventListener('pointerdown',e=>{vc.setPointerCapture(e.pointerId);pts.set(e.pointerId,{x:e.clientX,y:e.clientY});V.drag=true;V.auto=false;$('#vAuto').classList.remove('on');lx=e.clientX;ly=e.clientY;V.vy=V.vp=0;
    if(pts.size===2){const[a,b]=[...pts.values()];p0=Math.hypot(a.x-b.x,a.y-b.y);f0=V.tfov;}});
  vc.addEventListener('pointermove',e=>{if(!pts.has(e.pointerId))return;pts.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pts.size===2){const[a,b]=[...pts.values()];V.tfov=f0*p0/Math.hypot(a.x-b.x,a.y-b.y);return;}
    const k=THREE.MathUtils.degToRad(V.fov)/vbox.clientHeight,dx=(e.clientX-lx)*k,dy=(e.clientY-ly)*k;lx=e.clientX;ly=e.clientY;V.tyaw-=dx;V.tpitch+=dy;V.vy=-dx*.9;V.vp=dy*.9;});
  const up=e=>{pts.delete(e.pointerId);if(!pts.size)V.drag=false;};vc.addEventListener('pointerup',up);vc.addEventListener('pointercancel',up);
  vc.addEventListener('wheel',e=>{if(!viewerFull&&!e.ctrlKey)return;e.preventDefault();V.tfov+=e.deltaY*.03;},{passive:false});
  new IntersectionObserver(es=>V.visible=es[0].isIntersecting,{threshold:.02}).observe(vbox);
  const tmp=new THREE.Vector3();
  onTick(()=>{if(!V.visible&&!viewerFull)return;
    if(!V.drag){V.tyaw+=V.vy;V.tpitch+=V.vp;V.vy*=.92;V.vp*=.92;if(V.auto)V.tyaw+=.0008;}
    V.tpitch=THREE.MathUtils.clamp(V.tpitch,-1.35,1.35);V.tfov=THREE.MathUtils.clamp(V.tfov,30,95);
    V.yaw+=(V.tyaw-V.yaw)*.08;V.pitch+=(V.tpitch-V.pitch)*.08;V.fov+=(V.tfov-V.fov)*.08;
    vcam.fov=V.fov;vcam.updateProjectionMatrix();vcam.rotation.order='YXZ';vcam.rotation.y=-V.yaw;vcam.rotation.x=V.pitch;vr.render(vs,vcam);
    const w=vbox.clientWidth,h=vbox.clientHeight;
    V.hs.forEach(({el,v})=>{tmp.copy(v).project(vcam);const b=tmp.z>1;el.style.transform=`translate(${(tmp.x*.5+.5)*w}px,${(-tmp.y*.5+.5)*h}px)`;el.style.opacity=b?0:1;el.style.pointerEvents=b?'none':'auto';});});
}
const ypToVec=(yw,pt)=>{const y=THREE.MathUtils.degToRad(yw),p=THREE.MathUtils.degToRad(pt);return new THREE.Vector3(Math.sin(y)*Math.cos(p)*9,Math.sin(p)*9,-Math.cos(y)*Math.cos(p)*9);};
const loadTex=src=>texCache[src]?Promise.resolve(texCache[src]):new Promise((res,rej)=>new THREE.TextureLoader().load(src,tx=>{tx.colorSpace=THREE.SRGBColorSpace;tx.anisotropy=vr.capabilities.getMaxAnisotropy();texCache[src]=tx;res(tx);},undefined,rej));
let hallTitle=null;
$('#xRooms').innerHTML=HALLS.map(h=>`<button data-h="${h.id}">${L(h.name)}</button>`).join('');
$$('#xRooms button').forEach(b=>b.onclick=()=>setHall(b.dataset.h));
async function setHall(id){
  const h=HALLS.find(x=>x.id===id);if(!h||V.busy||V.hall===id)return;if(!vr)initViewer();V.busy=true;hcard.classList.remove('show');
  vfade.style.opacity=1;V.tfov=40;await new Promise(r=>setTimeout(r,V.hall?800:50));V.hall=id;
  const idx=HALLS.indexOf(h);$('#hallPg').textContent=`${String(idx+1).padStart(2,'0')} / ${String(HALLS.length).padStart(2,'0')}`;
  $$('#xRooms button').forEach(b=>b.classList.toggle('on',b.dataset.h===id));
  $('#hallCap').textContent=L(h.cap);const hn=$('#hallName');hn.innerHTML='';const e=engine(hn,L(h.name),{recipe:'slide',clip:false,cfg:settle(900)});e.letters.forEach((l,k)=>l.s.set(1,{delay:k*30}));
  hsLayer.innerHTML='';V.hs=h.hs.map(s=>{const el=document.createElement('button');el.className='hs';el.innerHTML=`<i></i><span>${L(s.t)}</span>`;el.setAttribute('aria-label',L(s.t));
    el.onclick=ev=>{ev.stopPropagation();$('#hcK').textContent=L(h.name);$('#hcH').textContent=L(s.t);$('#hcP').textContent=L(s.p);hcard.classList.add('show');V.auto=false;V.tyaw=THREE.MathUtils.degToRad(s.yaw);V.tpitch=THREE.MathUtils.degToRad(s.pitch)*.8;V.tfov=55;};
    hsLayer.appendChild(el);return {el,v:ypToVec(s.yaw,s.pitch)};});
  try{sphere.material.dispose();sphere.material=new THREE.MeshBasicMaterial({map:await loadTex(h.pano)});}catch(err){showErr('360° panorama failed to load: '+h.pano);}
  V.yaw=-.4;V.tyaw=0;V.pitch=V.tpitch=0;V.fov=105;V.tfov=75;vfade.style.opacity=0;V.busy=false;
}
const stepHall=d=>{const i=HALLS.findIndex(h=>h.id===V.hall);setHall(HALLS[(i+d+HALLS.length)%HALLS.length].id);};
$('#hPrev').onclick=()=>stepHall(-1);$('#hNext').onclick=()=>stepHall(1);
$('.x',hcard).onclick=()=>{hcard.classList.remove('show');V.tfov=75;};
$('#vAuto').onclick=()=>{V.auto=!V.auto;$('#vAuto').classList.toggle('on',V.auto);};
$('#vZi').onclick=()=>V.tfov-=12;$('#vZo').onclick=()=>V.tfov+=12;
$('#vFull').onclick=()=>{if(document.fullscreenElement)document.exitFullscreen();else vbox.requestFullscreen?.().catch(()=>{});};
document.addEventListener('fullscreenchange',()=>viewerFull=!!document.fullscreenElement);
new IntersectionObserver(es=>{if(es[0].isIntersecting&&!V.hall)setHall('grand');},{rootMargin:'600px'}).observe(vbox);

/* =====================================================================
   MENUS — the client-story layout with a working pager
   ===================================================================== */
let mi=0;const story=$('#story');
const MENU_IMG=['grand-3','grand-2','royal-2','salon-2'];
function renderMenu(){const m=MENUS[mi],li=a=>a.map(([sq,en])=>`<li>${LANG==='sq'?sq:en}<i>${LANG==='sq'?en:sq}</i></li>`).join('');
  $('#menuPg').textContent=`${String(mi+1).padStart(2,'0')} / ${String(MENUS.length).padStart(2,'0')}`;
  story.innerHTML=`<figure><div class="portrait"><img src="/assets/${MENU_IMG[mi]}.webp" alt=""></div><div class="copy"><span class="qmark" aria-hidden="true">${m.p.toLocaleString('de-DE')}<small>${C.mPP}</small></span>
   <div class="dishes"><div><h4>${C.mF}</h4><ul>${li(m.f)}</ul></div><div><h4>${C.mM}</h4><ul>${li(m.m)}</ul></div><div><h4>${C.mS}</h4><ul>${li(m.s)}</ul></div></div>
   <figcaption class="incl"><b>Menu ${String(mi+1).padStart(2,'0')}</b>${C.mIncV}</figcaption></div></figure>`;
  const f=$('figure',story),s=new Spring(0,{tension:120,friction:14},v=>{f.style.opacity=Math.min(1,v);f.style.transform=`translateY(${(1-v)*24}px)`;});s.set(1);}
renderMenu();
const stepMenu=d=>{mi=(mi+d+MENUS.length)%MENUS.length;renderMenu();};
$('#mPrev').onclick=()=>stepMenu(-1);$('#mNext').onclick=()=>stepMenu(1);

/* location + contact headings */
revealLines($('#locT'),C.locT,REVEAL.label);
revealLines($('#cT'),C.cT,REVEAL.label);

/* =====================================================================
   3D MAP
   ===================================================================== */
{let map;const IJA=[19.8395694,41.3398973];
 const fail=()=>$('#location .mfb').textContent=C.mapErr;
 const init=()=>{try{map=new maplibregl.Map({container:'map',style:'https://tiles.openfreemap.org/styles/positron',center:IJA,zoom:15.2,maxPitch:75,attributionControl:{compact:true},cooperativeGestures:innerWidth<768});}catch(e){return fail();}
  map.addControl(new maplibregl.NavigationControl({visualizePitch:true}),'bottom-right');
  map.on('load',()=>{$('#location .mfb').style.display='none';
    const src=Object.entries(map.getStyle().sources).find(([k,v])=>v.type==='vector')?.[0],before=map.getStyle().layers.find(l=>l.type==='symbol')?.id;
    if(src){try{map.addLayer({id:'b3d',type:'fill-extrusion',source:src,'source-layer':'building',minzoom:13,paint:{'fill-extrusion-color':['interpolate',['linear'],['coalesce',['get','render_height'],8],0,'#2a2418',40,'#3a2e18',90,'#4a3714'],'fill-extrusion-height':['interpolate',['linear'],['zoom'],13,0,14.5,['coalesce',['get','render_height'],8]],'fill-extrusion-base':['coalesce',['get','render_min_height'],0],'fill-extrusion-opacity':.92}},before);}catch(e){}}
    const el=document.createElement('div');el.className='pin';el.innerHTML='<div class="bd"><img src="/assets/ija-logo-gold.svg" alt="">IJA Events</div><i class="st"></i>';
    el.onclick=()=>open('https://www.google.com/maps/place/Ija+Events/@41.3398973,19.8395694,17z','_blank');
    new maplibregl.Marker({element:el,anchor:'bottom'}).setLngLat(IJA).addTo(map);
    map.flyTo({center:IJA,zoom:17.2,pitch:62,bearing:-28,duration:RM?0:5200,essential:true});
    let rot=true;const orbit=()=>{if(!rot||RM)return;map.easeTo({bearing:map.getBearing()+40,duration:16000,easing:x=>x});map.once('moveend',()=>rot&&orbit());};map.once('moveend',orbit);
    ['dragstart','zoomstart','rotatestart','pitchstart'].forEach(ev=>map.on(ev,e=>{if(e.originalEvent)rot=false;}));});};
 new IntersectionObserver((es,o)=>{if(!es[0].isIntersecting)return;o.disconnect();const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css';document.head.appendChild(css);
  const s=document.createElement('script');s.src='https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js';s.onload=init;s.onerror=fail;document.head.appendChild(s);},{rootMargin:'800px'}).observe($('#map'));}

/* =====================================================================
   RESERVATION → WhatsApp
   ===================================================================== */
{$('#chips').innerHTML=EVTYPES.map(([sq,en])=>`<label class="chip"><input type="radio" name="type" value="${LANG==='sq'?sq:en}"><span>${LANG==='sq'?sq:en}</span></label>`).join('');
 $('#fHall').innerHTML=`<option>${C.nopref}</option>`+HALLS.map(h=>`<option>${L(h.name)}</option>`).join('');
 $('#fMenu').innerHTML=`<option>${C.undec}</option>`+MENUS.map((m,i)=>`<option>Menu ${i+1} · ${m.p} L</option>`).join('');
 const f=$('#resForm'),dt=$('#fDate'),today=new Date();today.setHours(0,0,0,0);dt.min=today.toISOString().slice(0,10);
 f.addEventListener('submit',e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f));let ok=true;
  const chk=(c,el)=>{el.closest('.f').classList.toggle('bad',!c);if(!c&&ok){ok=false;el.focus();}};
  chk(!!d.type,$('#chips input'));chk(d.date&&new Date(d.date)>=today,dt);chk(+d.guests>=10&&+d.guests<=600,$('#fGuests'));chk((d.name||'').trim().length>1,$('#fName'));chk(/^[+\d][\d\s().-]{6,}$/.test((d.phone||'').trim()),$('#fPhone'));
  if(!ok)return;const w=C.wa,date=new Date(d.date).toLocaleDateString(LANG==='sq'?'sq-AL':'en-GB',{day:'numeric',month:'long',year:'numeric'});
  const msg=`${w[0]}\n\n• ${w[1]}: ${d.type}\n• ${w[2]}: ${date}\n• ${w[3]}: ${d.guests}\n• ${w[4]}: ${d.hall}\n• ${w[5]}: ${d.menu}\n• ${w[6]}: ${d.name.trim()}\n• ${w[7]}: ${d.phone.trim()}${d.msg?`\n• ${w[8]}: ${d.msg.trim()}`:''}\n\n${w[9]}`;
  $('#waLink').href='https://wa.me/355692087803?text='+encodeURIComponent(msg);$('#sent').classList.add('show');});
 f.addEventListener('input',e=>e.target.closest('.f')?.classList.remove('bad'));}

/* =====================================================================
   REVEAL FOOTER — spacer progress, CTA, two-voice wordmark
   ===================================================================== */
{const foot=$('#foot'),spacer=$('#spacer'),desk=matchMedia('(min-width: 768px)');
 const wm=$('#wm'),letters=[];
 'IJA Events'.split(' ').forEach((w,wi)=>{const ws=document.createElement('span');ws.className='word';[...w].forEach((ch,i)=>{const c=document.createElement('span');c.className='ch';c.textContent=ch;ws.appendChild(c);letters.push({c,i});});wm.appendChild(ws);if(wi===0)wm.appendChild(document.createTextNode(' '));});
 let ctaActive=false;const rlF=revealLines($('#fT'),C.fT,REVEAL.cta,{enabled:()=>!desk.matches||ctaActive,justify:desk.matches?'flex-start':'center'});
 const EVEN={step:.02,start:0,end:.48,shift:5.625},ODD={start:.12,end:.72,shift:8.75};
 const wShift=(f,i)=>{const even=(i+1)%2===0,s=even?EVEN.start+i*EVEN.step:ODD.start,e=even?EVEN.end+i*EVEN.step:ODD.end,st=easeOutSine(clamp01((f-s)/(e-s)));return `translate3d(0,${(1-st)*(even?EVEN.shift:ODD.shift)}rem,0)`;};
 const fS=new Spring(0,FOOTER_FOLLOW,f=>{if(desk.matches)letters.forEach(({c,i})=>c.style.transform=wShift(f,i));});fS.on(0);
 let lastF=-1;onTick(()=>{if(!desk.matches){foot.style.visibility='visible';letters.forEach(({c})=>c.style.transform='none');return;}
  const r=spacer.getBoundingClientRect();if(r.top>innerHeight*1.2&&lastF<=0)return;
  const pr=pose(spacer,'top bottom','bottom bottom');if(pr===lastF)return;lastF=pr;fS.set(pr);foot.style.visibility=pr>0?'visible':'hidden';
  const ca=pr>=.2;if(ca!==ctaActive){ctaActive=ca;rlF.update();}});}

/* =====================================================================
   DOCK
   ===================================================================== */
{const nav=$('#dockNav'),menu=$('#dock-menu'),mb=$('#mb');let open=false;
 const dS=new Spring(0,DOCK_TOGGLE,v=>{nav.style.opacity=1-v;nav.style.transform=`translateY(${v*40}px)`;});
 const mS=new Spring(0,DOCK_TOGGLE,v=>{menu.style.opacity=v;menu.style.transform=`translateY(${(1-v)*12}px)`;});
 const setOpen=o=>{open=o&&!store.dockHidden;mS.set(open?1:0);menu.inert=!open;menu.style.pointerEvents=open?'auto':'none';mb.setAttribute('aria-expanded',open);mb.setAttribute('aria-label',open?'Close menu':'Open menu');
   $('#mbIcon').innerHTML=open?'<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>':'<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>';};
 mb.onclick=()=>setOpen(!open);$$('a',menu).forEach(a=>a.addEventListener('click',()=>setOpen(false)));addEventListener('keydown',e=>{if(e.key==='Escape')setOpen(false);});
 new IntersectionObserver(es=>{const hid=es[0].boundingClientRect.top<innerHeight;store.set('dockHidden',hid);dS.set(hid?1:0);nav.inert=hid;nav.style.pointerEvents=hid?'none':'auto';if(hid)setOpen(false);},{threshold:[0,1]}).observe($('#dockSentinel'));}

/* =====================================================================
   SMOOTH SCROLL
   ===================================================================== */
lenis=new Lenis({smoothWheel:true,anchors:true});window.lenis=lenis;lenis.stop();
