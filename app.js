import * as THREE from 'three';
gsap.registerPlugin(ScrollTrigger);

const HFU='/hfu/user_3JJdXTgHZ1RefQgaL5TKAYaM9hz/';
const PANO={grand:HFU+'cd706b80-84a6-44a5-aa71-8d46c06d13b3.jpg',royal:HFU+'93327ffc-0088-4fbb-a540-4f04f5025b3e.jpg',salon:HFU+'f60298ad-a067-4e0f-ac74-ce1af46e8e68.jpg'};
const T={
 sq:{'nav.mem':'Ceremonitë','nav.halls':'Sallat','nav.events':'Shërbimet','nav.menus':'Menutë','nav.gallery':'Galeria','nav.loc':'Vendndodhja','nav.contact':'Kontakt',
  'h.k':'Tiranë · Që nga viti 2000','h.t':'Me dinjitet, <em class="goldt">për çdo kujtim.</em>',
  'h.k2':'02 · Mbërritja','h.t2':'Një vend i qetë <em>për t\'u mbledhur.</em>','h.p2':'Prej më shumë se njëzet vjetësh, familjet e Tiranës vijnë këtu për të përshëndetur, për të kujtuar dhe për të qëndruar pranë njëri-tjetrit.',
  'h.k3':'03 · Hyrja','h.t3':'Dyert tona <em>janë të hapura.</em>','h.p3':'Salla të qeta, shërbim i kujdesshëm dhe një ekip që kujdeset për çdo detaj.','h.cta1':'Ceremonitë',
  'i.since':'QË NGA VITI','i.t':'Çdo jetë lë pas një histori. Ne krijojmë hapësirën ku ajo kujtohet me respekt.','i.n':'IJA Events ofron salla të qeta dhe elegante për ceremoni mortore, përkujtime dhe mbledhje familjare, me shërbim të heshtur dhe të kujdesshëm.',
  'st.1':'Vite përvojë','st.2':'Salla','st.3':'Vende në sallën kryesore',
  'm.k':'Ceremonitë','m.t':'Ngushëllime <em>me dinjitet.</em>','m.l':'Në ditët më të vështira, ne kujdesemi për gjithçka, që familja të qëndrojë pranë të afërmve.','m.cta':'Na kontaktoni',
  'm.1':'Salla të përgatitura për ngushëllime, me ulëse për të afërmit dhe të ftuarit.','m.2':'Pritje e të ftuarve me kafe, ujë dhe shërbim të heshtur gjatë gjithë ditës.','m.3':'Drekë përkujtimore me menu tradicionale, sipas dëshirës së familjes.','m.4':'Ekran për foto ose video në kujtim të të ndjerit.','m.5':'Përkujtime vjetore dhe mbledhje familjare në qetësi.',
  's.k':'Sallat','s.t':'Tre salla, <em>një mikpritje.</em>','s.l':'Hapësira të qeta e të ndriçuara, me detaje klasike, për ngushëllime, përkujtime dhe mbledhje familjare.',
  'cap':'Kapaciteti','tbc':'për t\'u konfirmuar','enter':'360°','photos':'Fotot','video':'Video',
  'x.k':'Përvoja 360°','x.t':'Hyni <em>në sallë.</em>','x.note':'Pamjet 360° janë vizualizime mbi bazën e fotove të sallave; fotot në faqe janë reale.','x.auto':'Rrotullim automatik','x.full':'Ekran i plotë',
  'ev.k':'Shërbimet','ev.t':'Për çdo rast, <em>me kujdes.</em>','ev.l':'Krahas ceremonive, sallat tona presin edhe momentet e gëzuara të familjes.',
  'mn.k':'Tryeza','mn.t':'Drekat <em>përkujtimore.</em>','mn.l':'Katër menu tradicionale, me pjatën e parë, dy pjata kryesore, pjata anësore dhe ëmbëlsirë sipas zakonit, si dhe kafe, pije, ujë dhe fruta.','mn.dk':'Ëmbëlsira','mn.dv':'Hallvë · Revani · Grurë (një sipas zgjedhjes)','mn.ik':'Të përfshira','mn.iv':'Kafe · Pije (1L, Pepsi) · Ujë natyral & i gazuar · Fruta','mn.f':'Pjata e parë','mn.m':'Pjatat kryesore','mn.s':'Pjatat anësore','mn.pp':'LEKË PËR PERSON',
  'g.k':'Galeria','g.t':'Ambientet <em>tona.</em>',
  'sv.k':'Kujdesi ynë','sv.t':'Çdo detaj, <em>i menduar.</em>',
  'lo.k':'Vendndodhja','lo.t':'Na gjeni <em>në Tiranë.</em>','lo.a':'Adresa','lo.p':'Telefon & WhatsApp','lo.dir':'Udhëzimet','lo.load':'Duke ngarkuar hartën…','lo.err':'Harta nuk u ngarkua · Hapeni në Google Maps',
  'c.k':'Kontakt','c.t':'Jemi këtu <em>për ju.</em>','c.l':'Na telefononi në çdo orë ose na lini një kërkesë. Ju kthejmë përgjigje sa më shpejt, me qetësi dhe kujdes.','c.call':'Telefon',
  'f.type':'Lloji i shërbimit','f.date':'Data','f.guests':'Numri i të ftuarve','f.hall':'Salla','f.menu':'Menuja','f.name':'Emri i plotë','f.phone':'Telefoni','f.msg':'Mesazhi','f.msgph':'Orari, kërkesa të veçanta…','f.note':'Kërkesa hapet në WhatsApp si mesazh gati. Asgjë nuk dërgohet pa shtypur ju "Dërgo".','f.submit':'Përgatit kërkesën','f.ok':'Kërkesa juaj është gati.','f.okd':'Shtypni më poshtë për ta dërguar në WhatsApp.','f.wa':'Dërgo në WhatsApp','f.e1':'Zgjidhni llojin.','f.e2':'Zgjidhni një datë.','f.e3':'Nga 10 deri në 600.','f.e4':'Shkruani emrin.','f.e5':'Shkruani një numër të vlefshëm.','f.nopref':'Pa preferencë','f.undec':'Ende pa vendosur',
  'ft.c':'Kontakt','ft.e':'Eksploro','ft.tag':'Me dinjitet, për çdo kujtim.','ft.since':'Që nga viti 2000',
  'wa.hi':'Përshëndetje IJA Events,\nDëshiroj të bëj një kërkesë.','wa.ev':'Shërbimi','wa.date':'Data','wa.g':'Të ftuar','wa.h':'Salla','wa.m':'Menuja','wa.n':'Emri','wa.p':'Telefoni','wa.x':'Shënime','wa.thx':'Faleminderit.',
  'cur.view':'Shiko','cur.drag':'Tërhiq'},
 en:{'nav.mem':'Ceremonies','nav.halls':'Halls','nav.events':'Services','nav.menus':'Menus','nav.gallery':'Gallery','nav.loc':'Location','nav.contact':'Contact',
  'h.k':'Tirana · Since 2000','h.t':'With dignity, <em class="goldt">for every memory.</em>',
  'h.k2':'02 · Arrival','h.t2':'A quiet place <em>to come together.</em>','h.p2':'For more than twenty years, Tirana\'s families have come here to say farewell, to remember and to stay close to one another.',
  'h.k3':'03 · The entrance','h.t3':'Our doors <em>are open.</em>','h.p3':'Quiet halls, attentive service and a team that looks after every detail.','h.cta1':'Ceremonies',
  'i.since':'SINCE','i.t':'Every life leaves a story behind. We create the space where it is remembered with respect.','i.n':'IJA Events offers quiet, elegant halls for funeral ceremonies, remembrance and family gatherings, with discreet and attentive service.',
  'st.1':'Years of care','st.2':'Halls','st.3':'Seats in the main hall',
  'm.k':'Ceremonies','m.t':'Condolences <em>with dignity.</em>','m.l':'On the hardest days, we take care of everything, so the family can stay close to their loved ones.','m.cta':'Contact us',
  'm.1':'Halls prepared for condolences, with seating for family and guests.','m.2':'Guests welcomed with coffee, water and discreet service throughout the day.','m.3':'A traditional memorial lunch, arranged to the family\'s wishes.','m.4':'A screen for photographs or video in memory of the departed.','m.5':'Annual remembrances and family gatherings in calm surroundings.',
  's.k':'The Halls','s.t':'Three halls, <em>one welcome.</em>','s.l':'Quiet, light-filled rooms with classical details, for condolences, remembrance and family gatherings.',
  'cap':'Capacity','tbc':'to be confirmed','enter':'360°','photos':'Photos','video':'Video',
  'x.k':'360° Experience','x.t':'Step <em>inside.</em>','x.note':'360° views are visualisations based on photographs of the halls; the photos on this site are real.','x.auto':'Auto-rotate','x.full':'Fullscreen',
  'ev.k':'Services','ev.t':'For every occasion, <em>with care.</em>','ev.l':'Alongside ceremonies, our halls also host the joyful moments of family life.',
  'mn.k':'The Table','mn.t':'Memorial <em>lunches.</em>','mn.l':'Four traditional menus, with a first course, two mains, sides and a customary dessert, plus coffee, drinks, water and fruit.','mn.dk':'Dessert','mn.dv':'Halva · Revani · Sweet wheat (one of your choice)','mn.ik':'Included','mn.iv':'Coffee · Drinks (1L, Pepsi) · Still & sparkling water · Fruit','mn.f':'First course','mn.m':'Main courses','mn.s':'Sides','mn.pp':'LEK PER PERSON',
  'g.k':'Gallery','g.t':'Our <em>halls.</em>',
  'sv.k':'Our care','sv.t':'Every detail, <em>considered.</em>',
  'lo.k':'Location','lo.t':'Find us <em>in Tirana.</em>','lo.a':'Address','lo.p':'Phone & WhatsApp','lo.dir':'Directions','lo.load':'Loading map…','lo.err':'The map could not load · Open in Google Maps',
  'c.k':'Contact','c.t':'We are here <em>for you.</em>','c.l':'Call us at any hour or leave a request. We\'ll reply as soon as possible, with calm and care.','c.call':'Phone',
  'f.type':'Type of service','f.date':'Date','f.guests':'Number of guests','f.hall':'Hall','f.menu':'Menu','f.name':'Full name','f.phone':'Phone','f.msg':'Message','f.msgph':'Timing, special requests…','f.note':'Your request opens in WhatsApp as a ready message. Nothing is sent until you press send.','f.submit':'Prepare request','f.ok':'Your request is ready.','f.okd':'Tap below to send it on WhatsApp.','f.wa':'Send on WhatsApp','f.e1':'Choose a type.','f.e2':'Choose a date.','f.e3':'Between 10 and 600.','f.e4':'Enter your name.','f.e5':'Enter a valid phone number.','f.nopref':'No preference','f.undec':'Not decided yet',
  'ft.c':'Contact','ft.e':'Explore','ft.tag':'With dignity, for every memory.','ft.since':'Since 2000',
  'wa.hi':'Hello IJA Events,\nI\'d like to make a request.','wa.ev':'Service','wa.date':'Date','wa.g':'Guests','wa.h':'Hall','wa.m':'Menu','wa.n':'Name','wa.p':'Phone','wa.x':'Notes','wa.thx':'Thank you.',
  'cur.view':'View','cur.drag':'Drag'}
};
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
const EVENTS=[
 [{sq:'Ceremoni mortore',en:'Funeral ceremonies'},{sq:'Ngushëllime në salla të qeta, me shërbim të heshtur dhe kujdes për çdo detaj.',en:'Condolences in quiet halls, with discreet service and care for every detail.'},'royal-2'],
 [{sq:'Përkujtime',en:'Remembrances'},{sq:'Dyzetditëshi, përvjetorë dhe mbledhje në kujtim të më të dashurve.',en:'Forty-day, annual and family remembrances for those we hold dear.'},'royal-1'],
 [{sq:'Mbledhje familjare',en:'Family gatherings'},{sq:'Një sallë që është e familjes për atë ditë.',en:'A hall that belongs to the family for the day.'},'grand-3'],
 [{sq:'Fejesa & dasma',en:'Engagements & weddings'},{sq:'Edhe momentet e gëzuara gjejnë vendin e tyre këtu.',en:'The joyful moments find their place here too.'},'grand-1'],
 [{sq:'Ditëlindje & festa',en:'Birthdays & celebrations'},{sq:'Me menu dhe shërbim të kujdesur.',en:'With menus and service taken care of.'},'salon-2'],
 [{sq:'Evente korporative',en:'Corporate events'},{sq:'Pritje dhe darka me ekran dhe zë.',en:'Receptions and dinners with screen and sound.'},'salon-1']
];
const GALLERY=[['grand-1','grand',''],['royal-1','royal','a'],['salon-2','salon',''],['exterior','ext',''],['royal-2','royal','a'],['grand-3','grand',''],['salon-1','salon','a'],['grand-2','grand','']];
const SERVICES=[
 [{sq:'Organizim i plotë',en:'Complete arrangements'},{sq:'Nga përgatitja e sallës deri te largimi i të ftuarit të fundit.',en:'From preparing the hall to the departure of the last guest.'}],
 [{sq:'Shërbim i heshtur',en:'Discreet service'},{sq:'Kafe, ujë dhe pritje e të ftuarve gjatë gjithë ditës.',en:'Coffee, water and guests welcomed throughout the day.'}],
 [{sq:'Kuzhina jonë',en:'Our kitchen'},{sq:'Drekë përkujtimore tradicionale, e shërbyer në tavolinë.',en:'A traditional memorial lunch, served at the table.'}],
 [{sq:'Lule & dekor',en:'Flowers & décor'},{sq:'Kurora, lule dhe dekor i thjeshtë e dinjitoz.',en:'Wreaths, flowers and simple, dignified décor.'}],
 [{sq:'Ekran & zë',en:'Screen & sound'},{sq:'Foto, video ose fjalime në kujtim.',en:'Photographs, video or eulogies in remembrance.'}],
 [{sq:'Në dispozicion 24/7',en:'Available 24/7'},{sq:'Na telefononi në çdo orë, jemi këtu për ju.',en:'Call us at any hour, we are here for you.'}]
];
const EVTYPES=[['Ceremoni mortore','Funeral ceremony'],['Përkujtim','Remembrance'],['Mbledhje familjare','Family gathering'],['Fejesë / Dasmë','Engagement / Wedding'],['Ditëlindje','Birthday'],['Event korporativ','Corporate']];
const IJA={lat:41.3398973,lng:19.8395694};
const ROMAN=['I','II','III','IV','V','VI','VII','VIII','IX','X'];

const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,FINE=matchMedia('(hover:hover) and (pointer:fine)').matches,MOBILE=innerWidth<760,WIDE=innerWidth>900;
let LANG='sq';try{const s=localStorage.getItem('ija-lang');if(s==='en'||s==='sq')LANG=s;}catch(e){}
const t=k=>T[LANG][k]??T.sq[k]??k,L=o=>o[LANG]??o.sq;
const img=f=>`/assets/${f}.webp`;
const clamp01=v=>Math.min(1,Math.max(0,v)),range=(p,a,b)=>clamp01((p-a)/(b-a)),eOut=x=>1-Math.pow(1-x,3);
const hallName=id=>{const h=HALLS.find(x=>x.id===id);return h?L(h.name):(LANG==='sq'?'Hyrja':'Entrance');};
const arrow='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2 8h12M9 3l5 5-5 5"/></svg>';
$('#yr').textContent=new Date().getFullYear();

/* laurel wreath — drawn as SVG strokes */
function wreath(svg){
  const cx=100,cy=100,r=78;let d='';
  for(const side of [-1,1]){
    let stem='';for(let i=0;i<=24;i++){const a=(Math.PI/2)+side*(0.25+i*0.105);const x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;stem+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1);}
    d+=`<path d="${stem}"/>`;
    for(let i=1;i<=11;i++){const a=(Math.PI/2)+side*(0.25+i*0.21);const x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;
      const tang=a+side*Math.PI/2;for(const o of [-1,1]){const ang=tang+o*0.6*side,len=16-i*.4;
        const x2=x+Math.cos(ang)*len,y2=y+Math.sin(ang)*len,mx=(x+x2)/2+Math.cos(ang+Math.PI/2)*4,my=(y+y2)/2+Math.sin(ang+Math.PI/2)*4,mx2=(x+x2)/2-Math.cos(ang+Math.PI/2)*4,my2=(y+y2)/2-Math.sin(ang+Math.PI/2)*4;
        d+=`<path d="M${x.toFixed(1)} ${y.toFixed(1)}Q${mx.toFixed(1)} ${my.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}Q${mx2.toFixed(1)} ${my2.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}"/>`;}}
  }
  d+=`<path d="M${cx-10} ${cy+r+4}q10 8 20 0"/>`;
  svg.innerHTML=d;svg.classList.add('wreath');
  $$('path',svg).forEach(p=>{let l=100;try{l=p.getTotalLength();}catch(e){}p.style.strokeDasharray=l;p.style.strokeDashoffset=l;});
  return $$('path',svg);
}

/* olive branch — peace for memorials, festivity for celebrations */
function olive(svg){
  const cy=58;let d=`<path d="M60 ${cy} Q380 ${cy-22} 700 ${cy}"/>`;
  for(let i=0;i<24;i++){const t=(i+.5)/24,x=60+t*640,y=cy-22*4*t*(1-t)*.5*2*.5*2*.5,up=i%2?-1:1,len=26-Math.abs(t-.5)*18;
    const dir=t<.5?-1:1,a=(up<0?-Math.PI/2:Math.PI/2)+dir*0.75*(up<0?1:-1)*-1;
    const tx=x+Math.cos(a)*len,ty=y+Math.sin(a)*len,nx=-Math.sin(a)*5,ny=Math.cos(a)*5,mx=(x+tx)/2,my=(y+ty)/2;
    d+=`<path d="M${x.toFixed(1)} ${y.toFixed(1)}Q${(mx+nx).toFixed(1)} ${(my+ny).toFixed(1)} ${tx.toFixed(1)} ${ty.toFixed(1)}Q${(mx-nx).toFixed(1)} ${(my-ny).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}"/>`;
    if(i%6===3)d+=`<ellipse cx="${(x+Math.cos(a)*6).toFixed(1)}" cy="${(y-up*9).toFixed(1)}" rx="3" ry="4"/>`;}
  svg.innerHTML=d;$$('path,ellipse',svg).forEach(p=>{let l=100;try{l=p.getTotalLength();}catch(e){}p.style.strokeDasharray=l;p.style.strokeDashoffset=l;});
}
olive($('#ped'));
/* golden embers */
{const c=$('#embers'),x=c.getContext('2d');let W,H,P=[];const N=MOBILE?22:46;
 const rs=()=>{W=c.width=innerWidth*Math.min(devicePixelRatio,1.5);H=c.height=innerHeight*Math.min(devicePixelRatio,1.5);c.style.width=innerWidth+'px';c.style.height=innerHeight+'px';};rs();addEventListener('resize',rs);
 for(let i=0;i<N;i++)P.push({x:Math.random(),y:Math.random(),r:.6+Math.random()*1.8,s:.00012+Math.random()*.0004,w:Math.random()*6.28,a:.15+Math.random()*.5});
 let vel=0,ly=scrollY;
 (function tick(){requestAnimationFrame(tick);if(document.hidden||RM)return;const dy=scrollY-ly;ly=scrollY;vel+=(dy-vel)*.08;x.clearRect(0,0,W,H);
  for(const p of P){p.y-=p.s*(1+Math.abs(vel)*.08);p.w+=.01;p.x+=Math.sin(p.w)*.0003;if(p.y<-.02){p.y=1.02;p.x=Math.random();}
   const px=p.x*W,py=p.y*H,rr=p.r*Math.min(devicePixelRatio,1.5),g=x.createRadialGradient(px,py,0,px,py,rr*5);
   g.addColorStop(0,`rgba(255,222,160,${p.a})`);g.addColorStop(1,'rgba(200,161,90,0)');x.fillStyle=g;x.beginPath();x.arc(px,py,rr*5,0,6.28);x.fill();}})();}
/* page progress */
addEventListener('scroll',()=>{const m=document.documentElement.scrollHeight-innerHeight;$('#prog').style.transform=`scaleX(${m>0?scrollY/m:0})`;},{passive:true});
function splitChars(el){
  const parts=el.innerHTML.split(/(<br\s*\/?>|<em[^>]*>|<\/em>)/i);let html='';
  parts.forEach(part=>{if(/^<\/?(br|em)/i.test(part)){html+=part;return;}
    part.split(/( +)/).forEach(w=>{if(!w)return;if(/^ +$/.test(w)){html+=' ';return;}
      html+='<span class="w">'+[...w].map(ch=>`<span class="char">${ch}</span>`).join('')+'</span>';});});
  el.innerHTML=html;
}
function applyLang(){
  document.documentElement.lang=LANG;
  document.title=LANG==='sq'?'IJA Events · Me dinjitet, për çdo kujtim':'IJA Events · With dignity, for every memory';
  $$('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
  $$('[data-i18n-html]').forEach(el=>el.innerHTML=t(el.dataset.i18nHtml));
  $$('[data-i18n-ph]').forEach(el=>el.placeholder=t(el.dataset.i18nPh));
  $$('[data-i18n-title]').forEach(el=>{el.title=t(el.dataset.i18nTitle);el.setAttribute('aria-label',el.title);});
  $$('.lang button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===LANG));
  $$('.split').forEach(splitChars);
  const bt=$('#bigText');bt.innerHTML=bt.textContent.split(/\s+/).map(w=>`<span class="wd">${w}</span>`).join(' ');
  render();
  if(window.__vHall)setHall(window.__vHall,true);
}
$$('.lang button').forEach(b=>b.addEventListener('click',()=>{if(b.dataset.lang===LANG)return;LANG=b.dataset.lang;try{localStorage.setItem('ija-lang',LANG);}catch(e){}
  gsap.to('main,footer,.hc',{opacity:0,duration:.3,onComplete:()=>{applyLang();bind(true);gsap.to('main,footer',{opacity:1,duration:.7});hero.force=true;}});}));

function render(){
  $('#memList').innerHTML=[1,2,3,4,5].map(i=>`<li><b>${String(i).padStart(2,'0')}</b><span>${t('m.'+i)}</span></li>`).join('');
  $('#colonnade').innerHTML=HALLS.map((h,i)=>`<article class="hall"><figure class="arch" data-photos="${h.id}" data-cursor="cur.view"><img src="${img(h.imgs[0])}" alt="${L(h.name)}" loading="lazy"></figure>
    <div class="nm">${String(i+1).padStart(2,'0')}</div><h3>${L(h.name)}</h3><div class="cap">${L(h.cap)} · <span style="font-size:.8em;opacity:.7">${t('tbc')}</span></div><p>${L(h.desc)}</p>
    <div class="row" style="margin-top:22px"><a href="#experience" class="btn fill" data-hall="${h.id}">${t('enter')}</a><button class="btn" data-photos="${h.id}">${t('photos')}</button>${h.vid?`<button class="btn" data-video="${h.vid}">${t('video')}</button>`:''}</div></article>`).join('');
  $('#xRooms').innerHTML=HALLS.map(h=>`<button data-h="${h.id}" class="${h.id===window.__vHall?'on':''}">${L(h.name)}</button>`).join('');
  $$('#xRooms button').forEach(b=>b.onclick=()=>setHall(b.dataset.h));
  $('#evList').innerHTML=EVENTS.map(([ti,p,im],i)=>`<li class="evi" data-img="${im}"><span class="n">${String(i+1).padStart(2,'0')}</span><div><h3>${L(ti)}</h3><p>${L(p)}</p></div></li>`).join('');
  $('#evImg').innerHTML=[...new Set(EVENTS.map(e=>e[2]))].map((im,i)=>`<img data-k="${im}" src="${img(im)}" alt="" loading="lazy"${i?'':' class="on"'}>`).join('');
  $('#mTabs').innerHTML=MENUS.map((m,i)=>`<button class="mtab${i===curMenu?' on':''}" data-m="${i}">Menu ${String(i+1).padStart(2,'0')}</button>`).join('');
  $$('.mtab').forEach(b=>b.onclick=()=>showMenu(+b.dataset.m));showMenu(curMenu,true);
  $('#gTrack').innerHTML=GALLERY.map(([f,h,c],i)=>`<figure class="gfr ${c}" data-i="${i}" data-cursor="cur.view" tabindex="0"><img src="${img(f)}" alt="${hallName(h)}" loading="lazy"><figcaption>${String(i+1).padStart(2,'0')} · ${hallName(h)}</figcaption></figure>`).join('');
  $('#svGrid').innerHTML=SERVICES.map(([ti,p],i)=>`<div class="sv"><span class="n">${String(i+1).padStart(2,'0')}</span><h3>${L(ti)}</h3><p>${L(p)}</p></div>`).join('');
  $('#chips').innerHTML=EVTYPES.map(([sq,en])=>`<label class="chip"><input type="radio" name="type" value="${LANG==='sq'?sq:en}"><span>${LANG==='sq'?sq:en}</span></label>`).join('');
  $('#fHall').innerHTML=`<option>${t('f.nopref')}</option>`+HALLS.map(h=>`<option>${L(h.name)}</option>`).join('');
  $('#fMenu').innerHTML=`<option>${t('f.undec')}</option>`+MENUS.map((m,i)=>`<option>Menu ${String(i+1).padStart(2,'0')} · ${m.p} L</option>`).join('');
}
let curMenu=0;
function showMenu(i,instant){
  curMenu=i;const m=MENUS[i],li=a=>a.map(([sq,en])=>`<li>${LANG==='sq'?sq:en}<i>${LANG==='sq'?en:sq}</i></li>`).join('');
  $$('.mtab').forEach((b,j)=>b.classList.toggle('on',j===i));
  const card=$('#mCard'),html=`<div class="pr"><b class="goldt" data-mc>${m.p.toLocaleString('de-DE')}</b><small>${t('mn.pp')} · MENU ${String(i+1).padStart(2,'0')}</small></div>
    <div class="cols"><div><h4>${t('mn.f')}</h4><ul>${li(m.f)}</ul></div><div><h4>${t('mn.m')}</h4><ul>${li(m.m)}</ul></div><div><h4>${t('mn.s')}</h4><ul>${li(m.s)}</ul></div></div>
    <div class="inc"><div><b>${t('mn.dk')}</b>${t('mn.dv')}</div><div><b>${t('mn.ik')}</b>${t('mn.iv')}</div></div>`;
  if(instant||RM){card.innerHTML=html;return;}
  gsap.to(card.children,{opacity:0,y:-12,filter:'blur(6px)',duration:.25,stagger:.03,onComplete:()=>{card.innerHTML=html;
    gsap.from(card.children,{opacity:0,y:24,filter:'blur(8px)',duration:1,stagger:.08,ease:'expo.out'});
    const o={v:m.p-400},el=$('[data-mc]',card);gsap.to(o,{v:m.p,duration:1.2,ease:'power3.out',onUpdate:()=>el.textContent=Math.round(o.v).toLocaleString('de-DE')});}});
}

/* smooth scroll · cursor · nav */
let lenis=null;
if(window.Lenis&&!RM){lenis=new Lenis({duration:1.2,smoothWheel:true});lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(tm=>lenis.raf(tm*1000));gsap.ticker.lagSmoothing(0);lenis.stop();}
const smoothTo=y=>lenis?lenis.scrollTo(y,{duration:1.8}):scrollTo({top:y,behavior:RM?'auto':'smooth'});
const cur=$('.cur'),curT=$('#curT');let cx=innerWidth/2,cy=innerHeight/2,ox=cx,oy=cy;
if(FINE){addEventListener('pointermove',e=>{cx=e.clientX;cy=e.clientY;const tg=e.target.closest('[data-cursor]');cur.classList.toggle('big',!!tg);if(tg)curT.textContent=t(tg.dataset.cursor);},{passive:true});
  gsap.ticker.add(()=>{ox+=(cx-ox)*.2;oy+=(cy-oy)*.2;cur.style.transform=`translate(${ox}px,${oy}px)`;});}
const nav=$('#nav');let lastY=0;
addEventListener('scroll',()=>{const y=scrollY,heroEnd=$('#hero').offsetHeight-innerHeight;nav.classList.toggle('solid',y>heroEnd);
  nav.classList.toggle('up',y>lastY+2&&y>heroEnd+200&&!document.body.classList.contains('mopen'));if(y<lastY-2)nav.classList.remove('up');lastY=y;},{passive:true});
$('#mb').onclick=()=>document.body.classList.toggle('mopen');
document.addEventListener('click',e=>{
  const vb=e.target.closest('[data-video]');if(vb){const m=$('#vm'),v=$('video',m);v.src=vb.dataset.video;m.classList.add('open');v.play().catch(()=>{});return;}
  const ph=e.target.closest('[data-photos]');if(ph){const h=HALLS.find(x=>x.id===ph.dataset.photos);openLb(h.imgs.map(f=>[f,h.id]),0);return;}
  const a=e.target.closest('a[href^="#"]');if(!a)return;e.preventDefault();document.body.classList.remove('mopen');
  if(a.dataset.hall)setHall(a.dataset.hall);
  const id=a.getAttribute('href');if(id==='#top')return smoothTo(0);
  const el=$(id);if(el)smoothTo(el.getBoundingClientRect().top+scrollY);});
$('#vm .c').onclick=()=>{const m=$('#vm');m.classList.remove('open');$('video',m).pause();};

/* =====================================================================
   I · CINEMATIC HERO — the exterior walk, scrubbed by scroll
   (an all-keyframe copy of the original, visually identical, for exact seeking)
   ===================================================================== */
const hero={el:$('#hero'),v:$('#heroV'),p:0,tp:0,dur:9.08,ready:false,last:-1,force:true,c:[$('#hc1'),$('#hc2'),$('#hc3')],hud:$$('#hHud .n')};
const HSRC='/assets/bg-exterior.mp4';
let frLen=1000;
function loadHero(onProg){
  const v=hero.v,done=()=>{hero.dur=v.duration||hero.dur;hero.ready=true;hero.force=true;};
  return fetch(HSRC).then(async r=>{const total=+r.headers.get('content-length')||0;if(!r.body||!total)return r.blob();
    const rd=r.body.getReader(),ch=[];let got=0;for(;;){const{done:d,value}=await rd.read();if(d)break;ch.push(value);got+=value.length;onProg(got/total);}return new Blob(ch,{type:'video/mp4'});})
  .then(b=>{v.src=URL.createObjectURL(b);v.load();v.addEventListener('loadeddata',done,{once:true});})
  .catch(()=>{v.src=HSRC;v.load();v.addEventListener('loadeddata',done,{once:true});});
}
addEventListener('touchstart',()=>{hero.v.play().then(()=>hero.v.pause()).catch(()=>{});},{once:true,passive:true});
const fr=$('#frRect');fr.style.strokeDasharray=1000;fr.style.strokeDashoffset=1000;
const fillCtx=$('#heroFill').getContext('2d');
hero.v.addEventListener('seeked',()=>{try{fillCtx.drawImage(hero.v,0,0,96,54);}catch(e){}});
function heroFrame(){
  const r=hero.el.getBoundingClientRect(),max=hero.el.offsetHeight-innerHeight;hero.tp=clamp01(-r.top/max);
  const d=hero.tp-hero.p;hero.p+=Math.abs(d)<1e-4?d:d*(RM?1:.1);const p=hero.p;
  if(r.bottom>0||hero.force){hero.force=false;
    const vt=range(p,0,.9)*(hero.dur-.04);
    if(hero.ready&&!hero.v.seeking&&Math.abs(vt-hero.last)>.012){hero.v.currentTime=vt;hero.last=vt;}
    
    $('#hShade').style.opacity=(.55-range(p,.02,.2)*.13+range(p,.9,1)*.45).toFixed(3);
    
    // ancient frame & columns draw in
    fr.style.strokeDashoffset=1000*(1-eOut(range(p,0,.25)));
    
    // chapters
    const show=(el,a,b)=>{const i=range(p,a,a+.06),o=b>=1?0:range(p,b-.06,b),v=i*(1-o);el.style.opacity=v;el.style.transform=`translateY(${(1-i)*40-o*40}px)`;el.style.filter=`blur(${(1-v)*8}px)`;el.style.pointerEvents=v>.6?'auto':'none';};
    const c1o=range(p,.08,.15);hero.c[0].style.opacity=1-c1o;hero.c[0].style.transform=`translateY(${-c1o*40}px) scale(${1+c1o*.05})`;hero.c[0].style.filter=`blur(${c1o*8}px)`;
    show(hero.c[1],.24,.5);show(hero.c[2],.62,1.01);
    $('#cue').style.opacity=1-range(p,0,.04);
    $('#hPg').style.transform=`scaleX(${p})`;
    const ch=p<.2?0:p<.56?1:2;hero.hud.forEach((n,i)=>n.classList.toggle('on',i<=ch));
  }
  requestAnimationFrame(heroFrame);
}

/* =====================================================================
   SCROLL CHOREOGRAPHY
   ===================================================================== */
let triggers=[];const wreaths={};
function bind(isRelang){
  triggers.forEach(s=>s.kill());triggers=[];
  const reg=a=>{if(a&&a.scrollTrigger)triggers.push(a.scrollTrigger);return a;};
  const fr=(tg,from,to)=>reg(gsap.fromTo(tg,from,to));
  const once=(tg,st='top 85%')=>({trigger:tg,start:st,once:true});
  bindLb();
  if(RM){ScrollTrigger.refresh();return;}
  $$('main .split').forEach(h=>fr($$('.char',h),{opacity:0,y:30,filter:'blur(12px)'},{opacity:1,y:0,filter:'blur(0px)',duration:1.4,stagger:.02,ease:'expo.out',scrollTrigger:once(h,'top 86%')}));
  $$('.rv').forEach(el=>fr(el,{opacity:0,y:24,filter:'blur(6px)'},{opacity:1,y:0,filter:'blur(0px)',duration:1.4,ease:'power3.out',scrollTrigger:once(el,'top 92%')}));
  $$('main .k').forEach(el=>fr(el,{'--ls':0,opacity:0,letterSpacing:'.8em'},{'--ls':1,opacity:1,letterSpacing:'.38em',duration:1.6,ease:'expo.out',scrollTrigger:once(el,'top 94%')}));
  // meander dividers unroll
  $$('.sec+.sec').forEach(s=>reg(gsap.fromTo(s,{'--mx':0},{'--mx':1,duration:1.6,ease:'expo.inOut',scrollTrigger:once(s,'top 92%')})));
  // counters
  $$('[data-count]').forEach(el=>{const to=+el.dataset.count,from=+(el.dataset.from||0),o={v:from};fr(o,{v:from},{v:to,duration:2.4,ease:'power3.out',scrollTrigger:once(el,'top 95%'),onUpdate:()=>el.textContent=Math.round(o.v)+(el.dataset.suf||'')});});
  // headings: a soft light passes over the gold words once revealed
  $$('main .h2').forEach(h=>triggers.push(ScrollTrigger.create({trigger:h,start:'top 75%',once:true,onEnter:()=>{$$('em .char',h).forEach((c,i)=>c.style.setProperty('--ci',i));setTimeout(()=>h.classList.add('lit'),900);}})));
  // images: slow parallax drift on every photo frame
  $$('.loc .ph img,#evImg').forEach(im=>fr(im,{yPercent:-4},{yPercent:4,ease:'none',scrollTrigger:{trigger:im,start:'top bottom',end:'bottom top',scrub:true}}));
  // section titles drift apart gently while scrolling
  $$('main .hd .h2, #events .lft .h2').forEach(h=>fr(h,{letterSpacing:'.02em'},{letterSpacing:'-.015em',ease:'none',scrollTrigger:{trigger:h,start:'top bottom',end:'bottom top',scrub:true}}));
  // II intro — laurel draws, words light, numbers rise
  if(!wreaths.in)wreaths.in=wreath($('#inWreath'));
  fr(wreaths.in,{strokeDashoffset:(i,el)=>el.style.strokeDasharray},{strokeDashoffset:0,duration:2.4,stagger:.015,ease:'power2.inOut',scrollTrigger:once('#intro .wr','top 85%')});
  fr('#intro .wr b,#intro .wr small',{opacity:0,scale:.85},{opacity:1,scale:1,duration:1.6,delay:.8,stagger:.15,ease:'expo.out',scrollTrigger:once('#intro .wr','top 85%')});
  fr('#bigText .wd',{opacity:.15},{opacity:1,stagger:.05,ease:'none',scrollTrigger:{trigger:'#bigText',start:'top 80%',end:'bottom 50%',scrub:true}});
  fr('.pillars div',{opacity:0,y:50},{opacity:1,y:0,duration:1.3,stagger:.15,ease:'expo.out',scrollTrigger:once('.pillars','top 90%')});
  // III memorial — arch opens from the bottom like a doorway
  fr('#memPh',{clipPath:'inset(100% 0% 0% 0%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:2,ease:'expo.inOut',scrollTrigger:once('#memPh','top 85%')});
  fr('#memPh img',{scale:1.3,yPercent:-10},{scale:1,yPercent:0,duration:2.6,ease:'expo.out',scrollTrigger:once('#memPh','top 85%')});
  fr('#memPh img',{yPercent:0},{yPercent:-12,ease:'none',scrollTrigger:{trigger:'#memorial',start:'top bottom',end:'bottom top',scrub:true}});
  fr('#memList li',{opacity:0,x:40},{opacity:1,x:0,duration:1.1,stagger:.1,ease:'expo.out',scrollTrigger:once('#memList','top 88%')});
  // IV halls — the colonnade rises, arches open
  $$('.hall').forEach((hl,i)=>{
    fr($('.arch',hl),{clipPath:'inset(100% 0% 0% 0% round 999px 999px 0 0)'},{clipPath:'inset(0% 0% 0% 0% round 999px 999px 0 0)',duration:2,delay:i*.18,ease:'expo.inOut',scrollTrigger:once('#colonnade','top 85%')});
    fr($('.arch img',hl),{scale:1.35},{scale:1,duration:2.6,delay:i*.18,ease:'expo.out',scrollTrigger:once('#colonnade','top 85%')});
    fr($$('.nm,h3,.cap,p,.row',hl),{opacity:0,y:24},{opacity:1,y:0,duration:1.1,stagger:.08,delay:.9+i*.18,ease:'expo.out',scrollTrigger:once('#colonnade','top 85%')});
    if(FINE){const a=$('.arch',hl);hl.onpointermove=e=>{const r=a.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;gsap.to($('img',a),{x:-x*24,y:-y*24,duration:1,ease:'power3.out'});};hl.onpointerleave=()=>gsap.to($('img',a),{x:0,y:0,duration:1.2,ease:'power3.out'});}
    if(WIDE)fr(hl,{y:[60,0,90][i]},{y:[-30,-80,-10][i],ease:'none',scrollTrigger:{trigger:'#halls',start:'top bottom',end:'bottom top',scrub:true}});
  });
  // V 360
  fr('.x-head',{opacity:0,y:40},{opacity:1,y:0,duration:1.4,ease:'expo.out',scrollTrigger:once('#experience','top 60%')});
  fr('#experience .fr',{clipPath:'inset(50% 50% 50% 50%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:1.8,ease:'expo.inOut',scrollTrigger:once('#experience','top 60%')});
  // VI events — each numeral lights up, image follows
  $$('.evi').forEach(li=>triggers.push(ScrollTrigger.create({trigger:li,start:'top 60%',end:'bottom 40%',toggleClass:'on',onToggle:st=>{if(st.isActive)$$('#evImg img').forEach(im=>im.classList.toggle('on',im.dataset.k===li.dataset.img));}})));
  fr('#evImg',{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0 0 0% 0)',duration:1.8,ease:'expo.inOut',scrollTrigger:once('#evImg','top 85%')});
  // VII menus
  fr('.mtabs',{opacity:0,y:30},{opacity:1,y:0,duration:1.2,ease:'expo.out',scrollTrigger:once('.mtabs','top 90%')});
  fr('#mCard',{opacity:0,y:60,filter:'blur(10px)'},{opacity:1,y:0,filter:'blur(0px)',duration:1.6,ease:'expo.out',scrollTrigger:once('#mCard','top 85%')});
  // VIII gallery — pinned horizontal gallery of framed pictures
  const tr=$('#gTrack');
  if(WIDE){const hs=reg(gsap.to(tr,{x:()=>-(tr.scrollWidth-innerWidth),ease:'none',scrollTrigger:{trigger:'#gallery',start:'top top',end:()=>'+='+(tr.scrollWidth-innerWidth),pin:true,scrub:1,invalidateOnRefresh:true}}));
    $$('.gfr',tr).forEach(g=>{fr(g,{opacity:.3,scale:.9,filter:'blur(4px)'},{opacity:1,scale:1,filter:'blur(0px)',ease:'none',scrollTrigger:{trigger:g,containerAnimation:hs,start:'left 100%',end:'left 55%',scrub:true}});});}
  else $$('.gfr').forEach(g=>fr(g,{opacity:0,y:40},{opacity:1,y:0,duration:1.2,ease:'expo.out',scrollTrigger:once(g,'top 95%')}));
  // IX services — diamonds bloom, cells rise
  $$('.sv').forEach((s,i)=>{fr(s,{opacity:0,y:40},{opacity:1,y:0,duration:1.2,delay:(i%3)*.12,ease:'expo.out',scrollTrigger:once(s,'top 92%')});fr(s,{'--ds':0},{'--ds':1,duration:1,delay:.4+(i%3)*.12,ease:'back.out(3)',scrollTrigger:once(s,'top 92%')});});
  // X location
  fr('#locPh',{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0% 0 0)',duration:1.6,ease:'expo.inOut',scrollTrigger:once('#locPh','top 85%')});
  fr('#locPh img',{scale:1.3},{scale:1,duration:2.2,ease:'expo.out',scrollTrigger:once('#locPh','top 85%')});
  fr('#mapbox',{opacity:0,y:60},{opacity:1,y:0,duration:1.5,ease:'expo.out',scrollTrigger:once('#mapbox','top 88%')});
  // XI contact
  fr('form.res',{opacity:0,y:60,filter:'blur(10px)'},{opacity:1,y:0,filter:'blur(0px)',duration:1.6,ease:'expo.out',scrollTrigger:once('form.res','top 85%')});
  fr('.cdir a',{opacity:0,x:-30},{opacity:1,x:0,duration:1.1,stagger:.12,ease:'expo.out',scrollTrigger:once('.cdir','top 90%')});
  // footer — the pediment draws, logo descends
  fr($$('#ped path,#ped ellipse'),{strokeDashoffset:(i,el)=>el.style.strokeDasharray},{strokeDashoffset:0,duration:2.6,stagger:.01,ease:'power2.inOut',scrollTrigger:once('#ped','top 95%')});
  fr('footer .fl',{opacity:0,y:20},{opacity:1,y:0,duration:1.6,delay:1,ease:'expo.out',scrollTrigger:once('#ped','top 92%')});
  fr('footer .meander',{scaleX:0},{scaleX:1,duration:2,ease:'expo.inOut',scrollTrigger:once('footer .meander','top 98%')});
  if(FINE)$$('.btn').forEach(m=>{m.onpointermove=e=>{const r=m.getBoundingClientRect();gsap.to(m,{x:(e.clientX-r.left-r.width/2)*.18,y:(e.clientY-r.top-r.height/2)*.28,duration:.6,ease:'power3.out'});};m.onpointerleave=()=>gsap.to(m,{x:0,y:0,duration:1,ease:'elastic.out(1,.45)'});});
  if(isRelang)ScrollTrigger.getAll().forEach(s=>{if(s.vars.once&&s.start<scrollY+innerHeight&&s.animation)s.animation.progress(1);});
  ScrollTrigger.refresh();
}

/* lightbox */
const lb=$('#lb'),lbImg=$('img',lb),lbCap=$('.cap',lb);let lbList=[],lbI=0;
function lbShow(n){lbI=(n+lbList.length)%lbList.length;const[f,h]=lbList[lbI];gsap.to(lbImg,{opacity:0,scale:.97,duration:.2,onComplete:()=>{lbImg.onload=()=>gsap.to(lbImg,{opacity:1,scale:1,duration:.7,ease:'expo.out'});lbImg.src=img(f);lbCap.textContent=`${lbI+1} / ${lbList.length} · ${hallName(h)}`;}});}
function openLb(list,i){lbList=list;lb.classList.add('open');lbShow(i);}
function bindLb(){$$('.gfr').forEach(g=>{const o=()=>openLb(GALLERY,+g.dataset.i);g.onclick=o;g.onkeydown=e=>{if(e.key==='Enter')o();};});}
$('.p',lb).onclick=()=>lbShow(lbI-1);$('.n',lb).onclick=()=>lbShow(lbI+1);$('.c',lb).onclick=()=>lb.classList.remove('open');lb.onclick=e=>{if(e.target===lb)lb.classList.remove('open');};
addEventListener('keydown',e=>{if(e.key==='Escape'){lb.classList.remove('open');$('#vm').classList.remove('open');$('#vm video').pause();}if(!lb.classList.contains('open'))return;if(e.key==='ArrowRight')lbShow(lbI+1);if(e.key==='ArrowLeft')lbShow(lbI-1);});

/* reservation → WhatsApp */
{const f=$('#resForm'),dt=$('#fDate');const today=new Date();today.setHours(0,0,0,0);dt.min=today.toISOString().slice(0,10);
 f.addEventListener('submit',e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f));let ok=true;
  const chk=(c,el)=>{el.closest('.f').classList.toggle('bad',!c);if(!c&&ok){ok=false;el.focus();}};
  chk(!!d.type,$('#chips input'));chk(d.date&&new Date(d.date)>=today,dt);chk(+d.guests>=10&&+d.guests<=600,$('#fGuests'));
  chk((d.name||'').trim().length>1,$('#fName'));chk(/^[+\d][\d\s().-]{6,}$/.test((d.phone||'').trim()),$('#fPhone'));
  if(!ok){gsap.fromTo(f,{x:-10},{x:0,duration:.7,ease:'elastic.out(1,.3)'});return;}
  const date=new Date(d.date).toLocaleDateString(LANG==='sq'?'sq-AL':'en-GB',{day:'numeric',month:'long',year:'numeric'});
  const msg=`${t('wa.hi')}\n\n• ${t('wa.ev')}: ${d.type}\n• ${t('wa.date')}: ${date}\n• ${t('wa.g')}: ${d.guests}\n• ${t('wa.h')}: ${d.hall}\n• ${t('wa.m')}: ${d.menu}\n• ${t('wa.n')}: ${d.name.trim()}\n• ${t('wa.p')}: ${d.phone.trim()}${d.msg?`\n• ${t('wa.x')}: ${d.msg.trim()}`:''}\n\n${t('wa.thx')}`;
  $('#waLink').href='https://wa.me/355692087803?text='+encodeURIComponent(msg);const s=$('#sent');s.classList.add('show');gsap.fromTo(s,{opacity:0,y:20},{opacity:1,y:0,duration:.8,ease:'expo.out'});});
 f.addEventListener('input',e=>e.target.closest('.f')?.classList.remove('bad'));f.addEventListener('change',e=>e.target.closest('.f')?.classList.remove('bad'));}

/* =====================================================================
   6 · 360° VIEWER — full screen, drag/touch, zoom, hotspots, room transitions
   ===================================================================== */
let viewerFull=false;
const V={yaw:0,pitch:0,tyaw:0,tpitch:0,fov:75,tfov:75,vy:0,vp:0,drag:false,auto:true,busy:false,visible:false};
const vbox=$('#experience'),vc=$('#vcanvas'),hsLayer=$('#hsLayer'),card=$('#hsCard'),vfade=$('#vFade');
let vr,vs,vcam,sphere;const texCache={};
function initViewer(){
  vr=new THREE.WebGLRenderer({canvas:vc,antialias:true});vr.setPixelRatio(Math.min(devicePixelRatio,2));vr.outputColorSpace=THREE.SRGBColorSpace;
  vs=new THREE.Scene();vcam=new THREE.PerspectiveCamera(75,1,.1,100);
  const geo=new THREE.SphereGeometry(10,96,64);geo.scale(-1,1,1);
  sphere=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({color:0}));sphere.rotation.y=-Math.PI/2;vs.add(sphere);
  const rs=()=>{const w=vbox.clientWidth,h=vbox.clientHeight;vr.setSize(w,h,false);vcam.aspect=w/h;vcam.updateProjectionMatrix();};rs();new ResizeObserver(rs).observe(vbox);
  const pts=new Map();let lx,ly,p0=0,f0=75;
  vc.addEventListener('pointerdown',e=>{vc.setPointerCapture(e.pointerId);pts.set(e.pointerId,{x:e.clientX,y:e.clientY});V.drag=true;V.auto=false;$('#vAuto').classList.remove('on');lx=e.clientX;ly=e.clientY;V.vy=V.vp=0;
    if(pts.size===2){const[a,b]=[...pts.values()];p0=Math.hypot(a.x-b.x,a.y-b.y);f0=V.tfov;}});
  vc.addEventListener('pointermove',e=>{if(!pts.has(e.pointerId))return;pts.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pts.size===2){const[a,b]=[...pts.values()];V.tfov=f0*p0/Math.hypot(a.x-b.x,a.y-b.y);return;}
    const k=THREE.MathUtils.degToRad(V.fov)/vbox.clientHeight,dx=(e.clientX-lx)*k,dy=(e.clientY-ly)*k;lx=e.clientX;ly=e.clientY;V.tyaw-=dx;V.tpitch+=dy;V.vy=-dx*.9;V.vp=dy*.9;});
  const up=e=>{pts.delete(e.pointerId);if(!pts.size)V.drag=false;};vc.addEventListener('pointerup',up);vc.addEventListener('pointercancel',up);
  vc.addEventListener('wheel',e=>{if(!viewerFull&&!e.ctrlKey)return;e.preventDefault();V.tfov+=e.deltaY*.03;},{passive:false});
  new IntersectionObserver(es=>V.visible=es[0].isIntersecting,{threshold:.05}).observe(vbox);
  const tmp=new THREE.Vector3();
  (function vloop(){requestAnimationFrame(vloop);if(!V.visible&&!viewerFull)return;
    if(!V.drag){V.tyaw+=V.vy;V.tpitch+=V.vp;V.vy*=.92;V.vp*=.92;if(V.auto)V.tyaw+=.0008;}
    V.tpitch=THREE.MathUtils.clamp(V.tpitch,-1.35,1.35);V.tfov=THREE.MathUtils.clamp(V.tfov,30,95);
    V.yaw+=(V.tyaw-V.yaw)*.08;V.pitch+=(V.tpitch-V.pitch)*.08;V.fov+=(V.tfov-V.fov)*.08;
    vcam.fov=V.fov;vcam.updateProjectionMatrix();vcam.rotation.order='YXZ';vcam.rotation.y=-V.yaw;vcam.rotation.x=V.pitch;vr.render(vs,vcam);
    const w=vbox.clientWidth,h=vbox.clientHeight;
    (V.hs||[]).forEach(({el,v})=>{tmp.copy(v).project(vcam);const b=tmp.z>1;el.style.transform=`translate(${(tmp.x*.5+.5)*w}px,${(-tmp.y*.5+.5)*h}px)`;el.style.opacity=b?0:1;el.style.pointerEvents=b?'none':'auto';});
  })();
}
const ypToVec=(yw,pt)=>{const y=THREE.MathUtils.degToRad(yw),p=THREE.MathUtils.degToRad(pt);return new THREE.Vector3(Math.sin(y)*Math.cos(p)*9,Math.sin(p)*9,-Math.cos(y)*Math.cos(p)*9);};
const loadTex=src=>texCache[src]?Promise.resolve(texCache[src]):new Promise((res,rej)=>new THREE.TextureLoader().load(src,tx=>{tx.colorSpace=THREE.SRGBColorSpace;tx.anisotropy=vr.capabilities.getMaxAnisotropy();texCache[src]=tx;res(tx);},undefined,rej));
async function setHall(id,relabel){
  const h=HALLS.find(x=>x.id===id);if(!h||!h.pano)return;if(!vr)initViewer();
  const label=()=>{$$('#xRooms button').forEach(b=>b.classList.toggle('on',b.dataset.h===id));
    hsLayer.innerHTML='';V.hs=h.hs.map(s=>{const el=document.createElement('button');el.className='hs';el.innerHTML=`<i></i><span>${L(s.t)}</span>`;el.setAttribute('aria-label',L(s.t));
      el.onclick=ev=>{ev.stopPropagation();$('#hcK').textContent=L(h.name);$('#hcH').textContent=L(s.t);$('#hcP').textContent=L(s.p);card.classList.add('show');V.auto=false;V.tyaw=THREE.MathUtils.degToRad(s.yaw);V.tpitch=THREE.MathUtils.degToRad(s.pitch)*.8;V.tfov=55;};
      hsLayer.appendChild(el);return{el,v:ypToVec(s.yaw,s.pitch)};});};
  if(relabel&&window.__vHall===id){label();return;}
  if(V.busy||window.__vHall===id)return;V.busy=true;card.classList.remove('show');
  vfade.style.opacity=1;V.tfov=40;await new Promise(r=>setTimeout(r,window.__vHall?800:50));
  window.__vHall=id;label();
  try{sphere.material.dispose();sphere.material=new THREE.MeshBasicMaterial({map:await loadTex(h.pano)});}catch(e){console.warn(e);}
  V.yaw=-.4;V.tyaw=0;V.pitch=V.tpitch=0;V.fov=105;V.tfov=75;vfade.style.opacity=0;V.busy=false;
}
$('.x',card).onclick=()=>{card.classList.remove('show');V.tfov=75;};
$('#vAuto').onclick=()=>{V.auto=!V.auto;$('#vAuto').classList.toggle('on',V.auto);};
$('#vZi').onclick=()=>V.tfov-=12;$('#vZo').onclick=()=>V.tfov+=12;
$('#vFull').onclick=()=>{if(document.fullscreenElement)document.exitFullscreen();else vbox.requestFullscreen?.().catch(()=>{});};
document.addEventListener('fullscreenchange',()=>{viewerFull=!!document.fullscreenElement;});
new IntersectionObserver(es=>{if(es[0].isIntersecting&&!window.__vHall)setHall('grand');},{rootMargin:'600px'}).observe(vbox);

/* =====================================================================
   11 · 3D MAP (MapLibre GL + OpenFreeMap, 3D buildings)
   ===================================================================== */
let map,mapRot=true;
function loadMap(){const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css';document.head.appendChild(css);
  const s=document.createElement('script');s.src='https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js';s.onload=initMap;s.onerror=mapFail;document.head.appendChild(s);}
function mapFail(){$('#mapbox .mfb').textContent=t('lo.err');}
function initMap(){
  try{map=new maplibregl.Map({container:'map',style:'https://tiles.openfreemap.org/styles/positron',center:[IJA.lng,IJA.lat],zoom:15.2,pitch:0,maxPitch:75,attributionControl:{compact:true},cooperativeGestures:MOBILE});}catch(e){return mapFail();}
  map.addControl(new maplibregl.NavigationControl({visualizePitch:true}),'bottom-right');
  map.on('load',()=>{$('#mapbox .mfb').style.display='none';
    const src=Object.entries(map.getStyle().sources).find(([k,v])=>v.type==='vector')?.[0],before=map.getStyle().layers.find(l=>l.type==='symbol')?.id;
    if(src){try{map.addLayer({id:'ija-3d',type:'fill-extrusion',source:src,'source-layer':'building',minzoom:13,paint:{'fill-extrusion-color':['interpolate',['linear'],['coalesce',['get','render_height'],8],0,'#2a2418',30,'#3a2e18',80,'#4a3714'],'fill-extrusion-height':['interpolate',['linear'],['zoom'],13,0,14.5,['coalesce',['get','render_height'],8]],'fill-extrusion-base':['coalesce',['get','render_min_height'],0],'fill-extrusion-opacity':.92}},before);}catch(e){}}
    const el=document.createElement('div');el.className='pin';el.innerHTML='<div class="bd"><img src="/assets/ija-logo-gold.svg" alt="">IJA Events</div><i class="st"></i><i class="dt"></i>';
    el.onclick=()=>open('https://www.google.com/maps/place/Ija+Events/@41.3398973,19.8395694,17z','_blank');
    new maplibregl.Marker({element:el,anchor:'bottom'}).setLngLat([IJA.lng,IJA.lat]).addTo(map);
    map.flyTo({center:[IJA.lng,IJA.lat],zoom:17.2,pitch:62,bearing:-28,duration:RM?0:5200,essential:true});
    map.once('moveend',orbit);
    ['dragstart','zoomstart','rotatestart','pitchstart'].forEach(ev=>map.on(ev,e=>{if(e.originalEvent){mapRot=false;$('#mRot').classList.add('off');}}));});
}
function orbit(){if(!map||!mapRot||RM)return;map.easeTo({bearing:map.getBearing()+40,duration:16000,easing:x=>x});map.once('moveend',()=>mapRot&&orbit());}
$('#mRot').onclick=()=>{mapRot=!mapRot;$('#mRot').classList.toggle('off',!mapRot);if(mapRot)orbit();else map&&map.stop();};
new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){o.disconnect();loadMap();}},{rootMargin:'800px'}).observe($('#mapbox'));

/* =====================================================================
   LOADER & BOOT
   ===================================================================== */
const pct=$('#pct');let loadP=0;function setLoad(v){loadP=Math.max(loadP,v);gsap.to('#lbar',{scaleX:loadP/100,duration:.6,ease:'power2.out'});pct.textContent=Math.round(loadP)+'%';}
{const lw=wreath($('#ldWreath'));gsap.to(lw,{strokeDashoffset:0,duration:2.2,stagger:.012,ease:'power2.inOut'});}
fetch('/assets/ija-logo-gold.svg').then(r=>r.text()).then(svg=>{const box=$('#loaderLogo');box.innerHTML=svg;const ps=$$('path',box);
  ps.forEach(p=>{let l=400;try{l=p.getTotalLength();}catch(e){}p.style.strokeDasharray=l;p.style.strokeDashoffset=l;});
  gsap.to(ps,{strokeDashoffset:0,duration:1.6,delay:.4,stagger:.04,ease:'power2.inOut',onComplete:()=>box.classList.add('filled')});}).catch(()=>{});
let finished=false;
loadHero(f=>setLoad(6+f*92));
const waitHero=setInterval(()=>{if(hero.ready){clearInterval(waitHero);finish();}},120);
function finish(){if(finished)return;finished=true;setLoad(100);
  gsap.timeline({delay:1})
   .to('#loader .lw,#loader .cnt',{opacity:0,scale:.96,duration:.7,ease:'power2.in'})
   .to('#loader',{opacity:0,duration:1,ease:'power2.inOut'})
   .add(()=>{document.body.classList.remove('lock');lenis&&lenis.start();},'-=.6')
   .fromTo('#heroV',{filter:'brightness(.2)'},{filter:'brightness(1)',duration:2.4,ease:'expo.out',clearProps:'filter'},'<')
   .from('#hc1 .lg',{opacity:0,y:-20,duration:1.4,ease:'expo.out'},'-=2')
   .from('#hc1 .k',{opacity:0,letterSpacing:'1em',duration:1.6,ease:'expo.out'},'-=1.2')
   .from('#hc1 h1',{opacity:0,y:30,filter:'blur(12px)',duration:1.6,ease:'expo.out'},'-=1.3')
   .from('#nav,.h-hud',{opacity:0,duration:1.2,clearProps:'opacity'},'-=1')
   .set('#loader',{display:'none'});
}
setTimeout(finish,12000);
applyLang();bind();requestAnimationFrame(heroFrame);
addEventListener('load',()=>ScrollTrigger.refresh());
