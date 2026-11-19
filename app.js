import * as THREE from 'three';
gsap.registerPlugin(ScrollTrigger);

/* =====================================================================
   CONTENT (SQ default · EN)
   ===================================================================== */
const HFU='/hfu/user_3JJdXTgHZ1RefQgaL5TKAYaM9hz/';
const PANO={grand:HFU+'cd706b80-84a6-44a5-aa71-8d46c06d13b3.jpg',royal:HFU+'93327ffc-0088-4fbb-a540-4f04f5025b3e.jpg',salon:HFU+'f60298ad-a067-4e0f-ac74-ce1af46e8e68.jpg'};
const T={
 sq:{'nav.venue':'Ambienti','nav.halls':'Sallat','nav.events':'Eventet','nav.menus':'Menutë','nav.gallery':'Galeria','nav.loc':'Vendndodhja','nav.reserve':'Rezervo',
  'h.k':'IJA Events · Tiranë · Që nga 2000','h.l1':'Çdo moment','h.l2':'meriton <em>një mjedis</em>','h.l3':'të jashtëzakonshëm.','h.side':'Salla elegante për dasma, fejesa, festa familjare dhe ceremoni. Hyni brenda para se të na vizitoni.','h.cta':'Zbuloni sallat','h.c1':'Zbrit dhe kamera ecën drejt hyrjes',
  'i.k':'Që nga viti 2000','i.t':'Për më shumë se njëzet vjet, familjet e Tiranës kanë zgjedhur IJA Events për momentet që mbeten.','i.n':'Ne kujdesemi për sallën, tryezën dhe çdo detaj, nga mbrëmjet e gëzuara te ditët që kërkojnë qetësi dhe respekt.',
  'st.1':'Që nga viti','st.2':'Salla','st.3':'Të ftuar',
  'r.a':'Dritë','r.b':'& qetësi','r.l':'Salla Kristal · video reale',
  'v.k':'Ambienti','v.t':'Arkitekturë <em>e ngrohtë,</em><br>detaje klasike.','v.f1t':'Tavane me stuko','v.f1':'Kasetona, korniza dhe dritë e fshehur që e bëjnë sallën të ngrohtë në çdo orë të mbrëmjes.','v.f2t':'Bari i kafesë','v.f2':'Kafe e freskët dhe pije gjatë gjithë eventit, nga bari ynë me dollapë me ar.',
  's.k':'Sallat','s.t':'Tre salla, <em>tre karaktere.</em>','s.l':'Lëvizni për të kaluar nga një sallë te tjetra. Shikoni videot reale, fotot dhe hyni në secilën në 360°.','s.end':'Gati ta shihni nga afër?',
  'cap':'Kapaciteti','evs':'Për','tbc':'për t\'u konfirmuar','enter':'360°','photos':'Fotot','video':'Video',
  'x.k':'Përvoja 360°','x.t':'Qëndroni <em>brenda.</em>','x.l':'Tërhiqni për t\'u rrotulluar, zmadhoni dhe prekni pikat e arta për detajet e sallës.','x.drag':'Tërhiq për të parë përreth','x.note':'Pamjet 360° janë vizualizime të krijuara mbi bazën e fotove të sallave; fotot dhe videot në faqe janë reale.','x.auto':'Rrotullim automatik','x.full':'Ekran i plotë',
  'ev.k':'Eventet','ev.t':'Çdo moment, <em>me kujdesin e duhur.</em>','ev.l':'Nga dasmat dhe festat familjare te ceremonitë mortore, IJA Events ofron ambientin dhe shërbimin e duhur për çdo rast.',
  'mn.k':'Tryeza','mn.t':'Katër menu. <em>Një standard.</em>','mn.l':'Çdo menu përfshin pjatën e parë, dy pjata kryesore, pjata anësore dhe një ëmbëlsirë sipas zgjedhjes, si dhe kafe, pije, ujë dhe fruta.','mn.dk':'Ëmbëlsira','mn.dv':'Hallvë · Revani · Grurë të ëmbël (një sipas zgjedhjes)','mn.ik':'Të përfshira','mn.iv':'Kafe · Pije të gazuara (1L, Pepsi) · Ujë natyral & i gazuar · Fruta miks','mn.f':'Pjata e parë','mn.m':'Pjatat kryesore','mn.s':'Pjatat anësore','mn.pp':'LEKË / PERSON',
  'g.k':'Galeria','g.t':'Ambienti, <em>në kuadro.</em>','g.l':'Foto reale nga sallat tona. Prekni për ta parë në ekran të plotë.',
  'sv.k':'Shërbimet','sv.t':'Gjithçka, <em>e kujdesur.</em>',
  'lo.k':'Vendndodhja','lo.t':'Na gjeni <em>në Tiranë.</em>','lo.l':'Hyrja jonë, e ndriçuar çdo mbrëmje. Rrotullojeni hartën 3D ose hapeni në Google Maps për udhëzime.','lo.a':'Adresa','lo.p':'Telefon & WhatsApp','lo.dir':'Merr udhëzimet','lo.load':'Duke ngarkuar hartën 3D…','lo.err':'Harta nuk u ngarkua. Hapeni në Google Maps.',
  'c.k':'Rezervime','c.t':'Le ta nisim <em>bashkë.</em>','c.l':'Na tregoni për eventin tuaj dhe ju kthejmë përgjigje me disponueshmërinë dhe një ofertë të personalizuar.','c.call':'Telefon',
  'f.type':'Lloji i eventit','f.date':'Data e preferuar','f.guests':'Numri i të ftuarve','f.hall':'Salla','f.menu':'Menuja','f.name':'Emri i plotë','f.phone':'Telefoni','f.msg':'Mesazhi','f.msgph':'Orari, kërkesa të veçanta…','f.note':'Kërkesa hapet në WhatsApp si mesazh gati. Asgjë nuk dërgohet pa shtypur ju "Dërgo".','f.submit':'Përgatit kërkesën','f.ok':'Kërkesa juaj është gati.','f.okd':'Shtypni më poshtë për ta hapur në WhatsApp, pastaj dërgojeni.','f.wa':'Dërgo në WhatsApp','f.e1':'Zgjidhni llojin e eventit.','f.e2':'Zgjidhni një datë në të ardhmen.','f.e3':'Nga 10 deri në 600 të ftuar.','f.e4':'Shkruani emrin.','f.e5':'Shkruani një numër të vlefshëm.','f.nopref':'Pa preferencë','f.undec':'Ende pa vendosur',
  'ft.k':'Rezervime','ft.h':'Data juaj, <em>salla jonë.</em>','ft.d':'Salla elegante për dasma, fejesa, festa familjare dhe ceremoni në Tiranë, që nga viti 2000.','ft.e':'Eksploro','ft.c':'Kontakt','ft.tag':'Çdo moment meriton një mjedis të jashtëzakonshëm.',
  'wa.hi':'Përshëndetje IJA Events,\nDëshiroj të bëj një kërkesë për rezervim.','wa.ev':'Eventi','wa.date':'Data','wa.g':'Të ftuar','wa.h':'Salla','wa.m':'Menuja','wa.n':'Emri','wa.p':'Telefoni','wa.x':'Shënime','wa.thx':'Faleminderit!',
  'cur.view':'Shiko','cur.drag':'Tërhiq','cur.play':'Luaj'},
 en:{'nav.venue':'The Venue','nav.halls':'Halls','nav.events':'Events','nav.menus':'Menus','nav.gallery':'Gallery','nav.loc':'Location','nav.reserve':'Reserve',
  'h.k':'IJA Events · Tirana · Since 2000','h.l1':'Every moment','h.l2':'deserves <em>a setting</em>','h.l3':'beyond the ordinary.','h.side':'Elegant halls for weddings, engagements, family celebrations and ceremonies. Step inside before you visit.','h.cta':'Discover the halls','h.c1':'Scroll and the camera walks to the entrance',
  'i.k':'Since 2000','i.t':'For more than twenty years, Tirana\'s families have chosen IJA Events for the moments that stay.','i.n':'We take care of the hall, the table and every detail, from joyful evenings to days that call for calm and respect.',
  'st.1':'Established','st.2':'Halls','st.3':'Guests',
  'r.a':'Light','r.b':'& calm','r.l':'Crystal Salon · real footage',
  'v.k':'The Venue','v.t':'Warm <em>architecture,</em><br>classic details.','v.f1t':'Stucco ceilings','v.f1':'Coffers, mouldings and hidden light that keep the hall warm at every hour of the evening.','v.f2t':'The coffee bar','v.f2':'Fresh coffee and drinks throughout the event, from our gold-trimmed bar.',
  's.k':'The Halls','s.t':'Three halls, <em>three characters.</em>','s.l':'Scroll to move from one hall to the next. Watch the real footage, see the photos and step inside each in 360°.','s.end':'Ready to see it up close?',
  'cap':'Capacity','evs':'For','tbc':'to be confirmed','enter':'360°','photos':'Photos','video':'Video',
  'x.k':'360° Experience','x.t':'Stand <em>inside.</em>','x.l':'Drag to turn, zoom in and tap the golden markers for details of the hall.','x.drag':'Drag to look around','x.note':'360° views are visualisations based on photographs of the halls; the photos and videos on this site are real.','x.auto':'Auto-rotate','x.full':'Fullscreen',
  'ev.k':'Events','ev.t':'Every moment, <em>with the right care.</em>','ev.l':'From weddings and family celebrations to funeral ceremonies, IJA Events offers the right setting and service for every occasion.',
  'mn.k':'The Table','mn.t':'Four menus. <em>One standard.</em>','mn.l':'Every menu includes a first course, two mains, sides and one dessert of your choice, plus coffee, soft drinks, water and fresh fruit.','mn.dk':'Dessert','mn.dv':'Halva · Revani · Sweet wheat (one of your choice)','mn.ik':'Included','mn.iv':'Coffee · Soft drinks (1L, Pepsi) · Still & sparkling water · Mixed fruit','mn.f':'First course','mn.m':'Main courses','mn.s':'Sides','mn.pp':'LEK / PERSON',
  'g.k':'Gallery','g.t':'The venue, <em>in frames.</em>','g.l':'Real photographs of our halls. Tap to view full screen.',
  'sv.k':'Services','sv.t':'Everything, <em>taken care of.</em>',
  'lo.k':'Location','lo.t':'Find us <em>in Tirana.</em>','lo.l':'Our entrance, lit every evening. Turn the 3D map or open it in Google Maps for directions.','lo.a':'Address','lo.p':'Phone & WhatsApp','lo.dir':'Get directions','lo.load':'Loading 3D map…','lo.err':'The map could not load. Open it in Google Maps.',
  'c.k':'Reservations','c.t':'Let\'s begin <em>together.</em>','c.l':'Tell us about your event and we\'ll come back to you with availability and a tailored proposal.','c.call':'Phone',
  'f.type':'Event type','f.date':'Preferred date','f.guests':'Number of guests','f.hall':'Hall','f.menu':'Menu','f.name':'Full name','f.phone':'Phone','f.msg':'Message','f.msgph':'Timing, special requests…','f.note':'Your request opens in WhatsApp as a ready message. Nothing is sent until you press send.','f.submit':'Prepare request','f.ok':'Your request is ready.','f.okd':'Tap below to open WhatsApp with your details, then press send.','f.wa':'Send on WhatsApp','f.e1':'Choose an event type.','f.e2':'Choose a future date.','f.e3':'Between 10 and 600 guests.','f.e4':'Enter your name.','f.e5':'Enter a valid phone number.','f.nopref':'No preference','f.undec':'Not decided yet',
  'ft.k':'Reservations','ft.h':'Your date, <em>our hall.</em>','ft.d':'Elegant halls for weddings, engagements, family celebrations and ceremonies in Tirana, since 2000.','ft.e':'Explore','ft.c':'Contact','ft.tag':'Every moment deserves an extraordinary setting.',
  'wa.hi':'Hello IJA Events,\nI\'d like to request a reservation.','wa.ev':'Event','wa.date':'Date','wa.g':'Guests','wa.h':'Hall','wa.m':'Menu','wa.n':'Name','wa.p':'Phone','wa.x':'Notes','wa.thx':'Thank you!',
  'cur.view':'View','cur.drag':'Drag','cur.play':'Play'}
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
 [{sq:'Dasma',en:'Weddings'},{sq:'Nga vallja e parë te dolli i fundit, në një sallë të veshur me dritë.',en:'From the first dance to the last toast, in a hall dressed in light.'},'grand-2'],
 [{sq:'Fejesa',en:'Engagements'},{sq:'Sallone intime për mbrëmjen kur bashkohen dy familje.',en:'Intimate salons for the evening two families come together.'},'royal-1'],
 [{sq:'Ditëlindje',en:'Birthdays'},{sq:'Nga ditëlindja e parë te e tetëdhjeta, me menu dhe dekor të kujdesur.',en:'From the first birthday to the eightieth, with menus and decoration taken care of.'},'salon-2'],
 [{sq:'Darka gala',en:'Gala Dinners'},{sq:'Tavolina të shtruara, dritë e ngrohtë dhe shërbim elegant.',en:'Laid tables, warm light and elegant service.'},'grand-1'],
 [{sq:'Mbledhje familjare',en:'Family Gatherings'},{sq:'Përvjetorë dhe ribashkime në një sallë që është e juaja për atë ditë.',en:'Anniversaries and reunions in a hall that is yours for the day.'},'grand-3'],
 [{sq:'Evente korporative',en:'Corporate Events'},{sq:'Prezantime, darka dhe pritje me ekran, zë dhe shërbim të kujdesshëm.',en:'Presentations, dinners and receptions with screens, sound and attentive service.'},'salon-1'],
 [{sq:'Ceremoni mortore',en:'Funeral Ceremonies'},{sq:'Ambiente të qeta dhe dinjitoze për ngushëllime dhe përkujtime, me shërbim të kujdesshëm dhe të heshtur. Ne kujdesemi për çdo detaj, që familja të qëndrojë pranë të afërmve.',en:'Calm, dignified rooms for condolences and remembrance, with discreet and attentive service. We look after every detail so the family can stay close to their loved ones.'},'royal-2']
];
const GALLERY=[['grand-1','grand','wide'],['royal-1','royal','tall'],['salon-2','salon',''],['exterior','ext','wide'],['grand-3','grand','sq'],['royal-2','royal',''],['salon-1','salon','tall'],['grand-2','grand','wide']];
const SERVICES=[
 [{sq:'Planifikim eventi',en:'Event planning'},{sq:'Orari, vendosja e tavolinave dhe çdo detaj, të përgatitura bashkë me ju që nga vizita e parë.',en:'Timing, table layout and every detail, prepared with you from the very first visit.'}],
 [{sq:'Kuzhina jonë',en:'Our kitchen'},{sq:'Katër menu nga kuzhina jonë, të shërbyera në tavolinë, me pije, kafe dhe fruta të përfshira.',en:'Four set menus from our own kitchen, served at the table, with drinks, coffee and fruit included.'}],
 [{sq:'Dekorim',en:'Decoration'},{sq:'Lule, tavolina dhe dritë sipas ngjyrave dhe stilit tuaj.',en:'Florals, table design and light styled to your colours and taste.'}],
 [{sq:'Dritë & zë',en:'Light & sound'},{sq:'Zë profesional, ndriçim dhe ekrane për fjalime, video ose muzikë live.',en:'Professional sound, lighting and screens for speeches, slideshows or live music.'}],
 [{sq:'Ceremoni & përkujtime',en:'Ceremonies & remembrance'},{sq:'Organizim i qetë dhe me respekt për ngushëllime, me ambiente të përshtatura për familjen.',en:'Quiet, respectful arrangements for condolences, with rooms prepared for the family.'}],
 [{sq:'Koordinim në ditën e eventit',en:'On-the-day coordination'},{sq:'Ekipi ynë drejton orarin dhe shërbimin, që ju të jeni me të ftuarit.',en:'Our team runs the schedule and the service, so you can be with your guests.'}]
];
const EVTYPES=[['Dasmë','Wedding'],['Fejesë','Engagement'],['Ditëlindje','Birthday'],['Darkë gala','Gala dinner'],['Event korporativ','Corporate'],['Mbledhje familjare','Family gathering'],['Ceremoni mortore','Funeral ceremony']];
const IJA={lat:41.3398973,lng:19.8395694};

/* =====================================================================
   HELPERS & I18N
   ===================================================================== */
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,FINE=matchMedia('(hover:hover) and (pointer:fine)').matches,MOBILE=innerWidth<760,WIDE=innerWidth>900;
let LANG='sq';try{const s=localStorage.getItem('ija-lang');if(s==='en'||s==='sq')LANG=s;}catch(e){}
const t=k=>T[LANG][k]??T.sq[k]??k,L=o=>o[LANG]??o.sq;
const img=f=>`/assets/${f}.webp`;
const hallName=id=>{const h=HALLS.find(x=>x.id===id);return h?L(h.name):(LANG==='sq'?'Hyrja':'Entrance');};
const arrow='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2 8h12M9 3l5 5-5 5"/></svg>';
$('#yr').textContent=new Date().getFullYear();
function splitChars(el){
  const parts=el.innerHTML.split(/(<br\s*\/?>|<em[^>]*>|<\/em>)/i);let html='';
  parts.forEach(part=>{if(/^<\/?(br|em)/i.test(part)){html+=part;return;}
    part.split(/( +)/).forEach(w=>{if(!w)return;if(/^ +$/.test(w)){html+=' ';return;}
      html+='<span class="w">'+[...w].map(ch=>`<span class="char">${ch}</span>`).join('')+'</span>';});});
  el.innerHTML=html;
}
function applyLang(){
  document.documentElement.lang=LANG;
  document.title=LANG==='sq'?'IJA Events · Çdo moment meriton një mjedis të jashtëzakonshëm':'IJA Events · Every moment deserves an extraordinary setting';
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
  gsap.to('main,footer,.h-title,.h-side,.h-meta',{opacity:0,duration:.3,onComplete:()=>{applyLang();bind(true);gsap.to('main,footer,.h-title,.h-side,.h-meta',{opacity:1,duration:.7});}});}));

function render(){
  // spaces — each hall has its own composition
  const H=Object.fromEntries(HALLS.map(h=>[h.id,h]));
  const meta=h=>`<div class="meta"><span>${t('cap')} <b>${L(h.cap)}</b></span><span>${t('tbc')}</span></div>`;
  const btns=h=>`<div class="row"><a href="#experience" class="btn btn-gold" data-hall="${h.id}">${t('enter')}${arrow}</a><button class="btn btn-line" data-photos="${h.id}">${t('photos')} · ${h.imgs.length}</button>${h.vid?`<button class="btn btn-line" data-video="${h.vid}">▶ ${t('video')}</button>`:''}</div>`;
  const g=H.grand,r=H.royal,s=H.salon;
  $('#hzTrack').innerHTML=`<div class="hz-intro"><span class="k">${t('s.k')}</span><h2 class="disp">${t('s.t')}</h2><p>${t('s.l')}</p></div>
   <article class="sp sp-a"><div class="media" data-photos="grand" data-cursor="cur.view"><img src="${img(g.imgs[0])}" alt="${L(g.name)}" loading="lazy"></div>
     <div><span class="num">01</span><h3>${L(g.name)}</h3></div><div>${meta(g)}<p style="margin:14px 0 22px">${L(g.desc)}</p>${btns(g)}</div></article>
   <article class="sp sp-b"><div class="media m1" data-photos="royal" data-cursor="cur.view"><img src="${img(r.imgs[0])}" alt="${L(r.name)}" loading="lazy"></div>
     <div><span class="num">02</span><h3>${L(r.name)}</h3>${meta(r)}<p style="margin:14px 0 22px">${L(r.desc)}</p>${btns(r)}</div>
     <div class="media m2" data-photos="royal" data-cursor="cur.view"><img src="${img(r.imgs[1])}" alt="" loading="lazy"></div></article>
   <article class="sp sp-c"><div class="tx"><span class="num">03</span><h3>${L(s.name)}</h3>${meta(s)}<p style="margin:14px 0 22px">${L(s.desc)}</p>${btns(s)}</div>
     <div class="media" data-photos="salon" data-cursor="cur.view"><img src="${img(s.imgs[0])}" alt="${L(s.name)}" loading="lazy"></div></article>
   <div class="hz-end"><h3>${t('s.end')}</h3><a href="#contact" class="btn btn-gold">${t('nav.reserve')}${arrow}</a></div>`;
  $('#xRooms').innerHTML=HALLS.map(h=>`<button data-h="${h.id}" class="${h.id===window.__vHall?'on':''}">${L(h.name)}</button>`).join('');
  $$('#xRooms button').forEach(b=>b.onclick=()=>setHall(b.dataset.h));
  $('#evEd').innerHTML=EVENTS.map(([ti,p,im],i)=>i<6?`<article class="ev ev${i+1}"><div class="im"><img src="${img(im)}" alt="" loading="lazy"></div><span class="no">0${i+1}</span><h3>${L(ti)}</h3><p>${L(p)}</p></article>`
    :`<article class="ev ev7"><div class="im"><img src="${img(im)}" alt="" loading="lazy"></div><div><span class="no">0${i+1}</span><h3>${L(ti)}</h3><p>${L(p)}</p></div></article>`).join('');
  $('#mTabs').innerHTML=MENUS.map((m,i)=>`<button class="mtab${i===curMenu?' on':''}" data-m="${i}">Menu ${m.n}</button>`).join('');
  $$('.mtab').forEach(b=>b.onclick=()=>showMenu(+b.dataset.m));showMenu(curMenu,true);
  $('#mas').innerHTML=GALLERY.map(([f,h,c],i)=>`<figure class="${c}" data-i="${i}" data-cursor="cur.view" tabindex="0"><img src="${img(f)}" alt="${hallName(h)}" loading="lazy"><figcaption>${hallName(h)}</figcaption></figure>`).join('');
  $('#svl').innerHTML=SERVICES.map(([ti,p],i)=>`<div class="svr"><span class="n">0${i+1}</span><h3>${L(ti)}</h3><p>${L(p)}</p></div>`).join('');
  $('#chips').innerHTML=EVTYPES.map(([sq,en])=>`<label class="chip"><input type="radio" name="type" value="${LANG==='sq'?sq:en}"><span>${LANG==='sq'?sq:en}</span></label>`).join('');
  $('#fHall').innerHTML=`<option>${t('f.nopref')}</option>`+HALLS.map(h=>`<option>${L(h.name)}</option>`).join('');
  $('#fMenu').innerHTML=`<option>${t('f.undec')}</option>`+MENUS.map(m=>`<option>Menu ${m.n} · ${m.p} L</option>`).join('');
}
let curMenu=0;
function showMenu(i,instant){
  curMenu=i;const m=MENUS[i],li=a=>a.map(([sq,en])=>`<li>${LANG==='sq'?sq:en}<i>${LANG==='sq'?en:sq}</i></li>`).join('');
  $$('.mtab').forEach((b,j)=>b.classList.toggle('on',j===i));
  const card=$('#mCard'),html=`<div class="pr"><b data-mc>${m.p.toLocaleString('de-DE')}</b><small>${t('mn.pp')} · MENU ${m.n}</small></div>
    <div class="sec"><h4>${t('mn.f')}</h4><ul>${li(m.f)}</ul></div><div class="sec"><h4>${t('mn.m')}</h4><ul>${li(m.m)}</ul></div><div class="sec"><h4>${t('mn.s')}</h4><ul>${li(m.s)}</ul></div>
    <div class="sec"><h4>${t('mn.dk')}</h4><p class="inc">${t('mn.dv')}</p></div><div class="sec"><h4>${t('mn.ik')}</h4><p class="inc">${t('mn.iv')}</p></div>`;
  if(instant||RM){card.innerHTML=html;return;}
  gsap.to(card.children,{opacity:0,y:-12,filter:'blur(6px)',duration:.25,stagger:.02,onComplete:()=>{card.innerHTML=html;
    gsap.from(card.children,{opacity:0,y:24,filter:'blur(8px)',duration:.9,stagger:.06,ease:'expo.out'});
    const o={v:m.p-400},el=$('[data-mc]',card);gsap.to(o,{v:m.p,duration:1.1,ease:'power3.out',onUpdate:()=>el.textContent=Math.round(o.v).toLocaleString('de-DE')});}});
}

/* =====================================================================
   SMOOTH SCROLL · CURSOR · NAV
   ===================================================================== */
let lenis=null;
if(window.Lenis&&!RM){lenis=new Lenis({duration:1.15,smoothWheel:true});lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(tm=>lenis.raf(tm*1000));gsap.ticker.lagSmoothing(0);lenis.stop();}
const smoothTo=y=>lenis?lenis.scrollTo(y,{duration:1.6}):scrollTo({top:y,behavior:RM?'auto':'smooth'});
const cur=$('.cur'),curT=$('#curT');let cx=innerWidth/2,cy=innerHeight/2,ox=cx,oy=cy;
if(FINE){addEventListener('pointermove',e=>{cx=e.clientX;cy=e.clientY;const tg=e.target.closest('[data-cursor]');cur.classList.toggle('big',!!tg);if(tg)curT.textContent=t(tg.dataset.cursor);},{passive:true});
  gsap.ticker.add(()=>{ox+=(cx-ox)*.2;oy+=(cy-oy)*.2;cur.style.transform=`translate(${ox}px,${oy}px)`;});}
const nav=$('#nav');let lastY=0;
addEventListener('scroll',()=>{const y=scrollY;nav.classList.toggle('up',y>lastY+2&&y>innerHeight*.8&&!document.body.classList.contains('mopen'));if(y<lastY-2)nav.classList.remove('up');lastY=y;
  $$('.nav .lk a').forEach(a=>{const el=$(a.getAttribute('href'));if(!el)return;const r=el.getBoundingClientRect();a.classList.toggle('on',r.top<innerHeight*.5&&r.bottom>innerHeight*.5);});},{passive:true});
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
   BACKGROUND FILM — the exterior walk, fixed behind the whole site.
   Scrolling drives the camera (every frame is a keyframe, so seeking is exact).
   ===================================================================== */
const bg={v:$('#bgV'),scrim:$('#scrim'),p:0,tp:0,dur:9.08,ready:false,last:-1};
const BGSRC='/assets/bg-exterior.mp4';
function loadBg(onProg){
  const v=bg.v,done=()=>{bg.dur=v.duration||bg.dur;bg.ready=true;};
  return fetch(BGSRC).then(async r=>{const total=+r.headers.get('content-length')||0;if(!r.body||!total)return r.blob();
    const rd=r.body.getReader(),ch=[];let got=0;for(;;){const{done:d,value}=await rd.read();if(d)break;ch.push(value);got+=value.length;onProg(got/total);}return new Blob(ch,{type:'video/mp4'});})
  .then(b=>{v.src=URL.createObjectURL(b);v.load();v.addEventListener('loadeddata',done,{once:true});})
  .catch(()=>{v.src=BGSRC;v.load();v.addEventListener('loadeddata',done,{once:true});});
}
/* iOS: a muted play/pause unlocks seeking */
addEventListener('touchstart',()=>{bg.v.play().then(()=>bg.v.pause()).catch(()=>{});},{once:true,passive:true});
function bgFrame(){
  const max=document.documentElement.scrollHeight-innerHeight;bg.tp=max>0?clamp01(scrollY/max):0;
  const d=bg.tp-bg.p;bg.p+=Math.abs(d)<1e-4?d:d*(RM?1:.09);
  const vt=bg.p*(bg.dur-.06);
  if(bg.ready&&!bg.v.seeking&&Math.abs(vt-bg.last)>.015){bg.v.currentTime=vt;bg.last=vt;}
  // slow cinematic push + darker scrim once the content starts
  bg.v.style.transform=`scale(${1.04+bg.p*.12})`;
  const hero=clamp01(scrollY/innerHeight);bg.scrim.style.opacity=(.25+hero*.62).toFixed(3);
  $('#hPg').style.transform=`scaleX(${bg.p})`;$('#hTc').textContent='00:'+String(Math.floor(vt)).padStart(2,'0');
  requestAnimationFrame(bgFrame);
}
const clamp01=v=>Math.min(1,Math.max(0,v));

/* =====================================================================
   SCROLL CHOREOGRAPHY
   ===================================================================== */
let triggers=[];
function bind(isRelang){
  triggers.forEach(s=>s.kill());triggers=[];
  const reg=a=>{if(a&&a.scrollTrigger)triggers.push(a.scrollTrigger);return a;};
  const fr=(tg,from,to)=>reg(gsap.fromTo(tg,from,to));
  const once=(tg,st='top 85%')=>({trigger:tg,start:st,once:true});
  bindLb();
  if(RM){ScrollTrigger.refresh();return;}
  // headings: characters rise from blur
  $$('main .split').forEach(h=>fr($$('.char',h),{opacity:0,yPercent:80,filter:'blur(10px)'},{opacity:1,yPercent:0,filter:'blur(0px)',duration:1.3,stagger:.016,ease:'expo.out',scrollTrigger:once(h,'top 86%')}));
  $$('.rv').forEach(el=>fr(el,{opacity:0,y:30,filter:'blur(6px)'},{opacity:1,y:0,filter:'blur(0px)',duration:1.3,ease:'power3.out',scrollTrigger:once(el,'top 92%')}));
  $$('main .k').forEach(el=>fr(el,{'--ls':0,opacity:0},{'--ls':1,opacity:1,duration:1.4,ease:'expo.out',scrollTrigger:once(el,'top 94%')}));
  fr('.h-title',{y:0,opacity:1,filter:'blur(0px)'},{y:-140,opacity:0,filter:'blur(8px)',ease:'none',scrollTrigger:{trigger:'#hero',start:'top top',end:'70% top',scrub:true}});
  fr('.h-side',{y:0,opacity:1},{y:-60,opacity:0,ease:'none',scrollTrigger:{trigger:'#hero',start:'top top',end:'50% top',scrub:true}});
  // light panels rise and settle over the film
  $$('.light,#gallery').forEach(p=>fr(p,{y:120,scale:.96,borderRadius:'60px'},{y:0,scale:1,borderRadius:'',ease:'none',scrollTrigger:{trigger:p,start:'top bottom',end:'top 55%',scrub:true}}));
  fr('#ftCard',{y:100,scale:.95},{y:0,scale:1,ease:'none',scrollTrigger:{trigger:'#ftCard',start:'top bottom',end:'top 60%',scrub:true}});
  // 2 intro — words light, image parallax, counters
  fr('#bigText .wd',{opacity:.13},{opacity:1,stagger:.05,ease:'none',scrollTrigger:{trigger:'#bigText',start:'top 80%',end:'bottom 50%',scrub:true}});
  fr('#introPic',{clipPath:'inset(100% 0 0 0)'},{clipPath:'inset(0% 0 0 0)',duration:1.8,ease:'expo.inOut',scrollTrigger:once('#introPic','top 85%')});
  fr('#introPic img',{yPercent:-12},{yPercent:0,ease:'none',scrollTrigger:{trigger:'#introPic',start:'top bottom',end:'bottom top',scrub:true}});
  $$('[data-count]').forEach(el=>{const to=+el.dataset.count,from=+(el.dataset.from||0),o={v:from};fr(o,{v:from},{v:to,duration:2.2,ease:'power3.out',scrollTrigger:once(el,'top 95%'),onUpdate:()=>el.innerHTML=Math.round(o.v)+(el.dataset.suf?`<sup>${el.dataset.suf}</sup>`:'')});});
  // 4 venue — layered parallax at different speeds
  if(WIDE){[['#vp1',-6,10],['#vp2',30,-20],['#vp3',20,-30],['#vf1',40,-40],['#vf2',20,-20]].forEach(([s,a,b])=>fr(s,{yPercent:a},{yPercent:b,ease:'none',scrollTrigger:{trigger:'#venue',start:'top bottom',end:'bottom top',scrub:true}}));}
  $$('#venue .pp').forEach((p,i)=>{fr(p,{clipPath:['inset(0 100% 0 0)','inset(100% 0 0 0)','inset(0 0 0 100%)'][i]},{clipPath:'inset(0 0% 0 0%)',duration:1.8,ease:'expo.inOut',scrollTrigger:once(p,'top 88%')});
    fr($('img,video',p),{scale:1.3},{scale:1,duration:2.4,ease:'expo.out',scrollTrigger:once(p,'top 88%')});});
  $$('#venue .fl').forEach(f=>fr(f,{opacity:0,y:30},{opacity:1,y:0,duration:1.2,ease:'expo.out',scrollTrigger:once(f,'top 90%')}));
  // 5 spaces — pinned horizontal journey
  const tr=$('#hzTrack');
  if(WIDE){
    const hs=reg(gsap.to(tr,{x:()=>-(tr.scrollWidth-innerWidth),ease:'none',scrollTrigger:{trigger:'#spaces',start:'top top',end:()=>'+='+(tr.scrollWidth-innerWidth)*1.1,pin:true,scrub:1,invalidateOnRefresh:true,onUpdate:st=>$('#hzBar').style.transform=`scaleX(${st.progress})`}}));
    $$('.sp .media',tr).forEach(m=>{fr($('img,video',m),{xPercent:-6,scale:1.12},{xPercent:6,scale:1.12,ease:'none',scrollTrigger:{trigger:m,containerAnimation:hs,start:'left right',end:'right left',scrub:true}});
      fr(m,{clipPath:'inset(14% 0% 14% 0%)'},{clipPath:'inset(0% 0% 0% 0%)',ease:'none',scrollTrigger:{trigger:m,containerAnimation:hs,start:'left 100%',end:'left 50%',scrub:true}});});
    $$('.sp h3,.sp .meta,.sp p,.sp .row',tr).forEach(x=>fr(x,{opacity:0,x:60},{opacity:1,x:0,ease:'none',scrollTrigger:{trigger:x,containerAnimation:hs,start:'left 95%',end:'left 65%',scrub:true}}));
  } else $$('.sp').forEach(s=>fr(s,{opacity:0,y:50},{opacity:1,y:0,duration:1.2,ease:'expo.out',scrollTrigger:once(s,'top 90%')}));
  // 6 360 — title drifts as the viewer enters
  fr('.x-head',{opacity:0,y:40},{opacity:1,y:0,duration:1.4,ease:'expo.out',scrollTrigger:once('#experience','top 60%')});
  fr('#xRooms button',{opacity:0,x:40},{opacity:1,x:0,duration:1.2,stagger:.1,ease:'expo.out',scrollTrigger:once('#experience','top 50%')});
  // 7 events — images reveal with different masks, slow parallax
  $$('.ev').forEach((ev,i)=>{const im=$('.im',ev);
    fr(im,{clipPath:['inset(0 0 100% 0)','inset(0 100% 0 0)','inset(100% 0 0 0)','inset(0 0 0 100%)'][i%4]},{clipPath:'inset(0 0 0% 0)',duration:1.7,ease:'expo.inOut',scrollTrigger:once(ev,'top 85%')});
    fr($('img',im),{yPercent:-10},{yPercent:0,ease:'none',scrollTrigger:{trigger:ev,start:'top bottom',end:'bottom top',scrub:true}});
    fr($$('.no,h3,p',ev),{opacity:0,y:24},{opacity:1,y:0,duration:1.1,stagger:.08,delay:.4,ease:'expo.out',scrollTrigger:once(ev,'top 85%')});});
  // 8 menus
  fr('#mCard',{opacity:0,y:50,filter:'blur(10px)'},{opacity:1,y:0,filter:'blur(0px)',duration:1.4,ease:'expo.out',scrollTrigger:once('#mCard','top 85%')});
  // 9 gallery — staggered curtain
  $$('#mas figure').forEach((f,i)=>{fr(f,{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0 0 0% 0)',duration:1.5,delay:(i%3)*.12,ease:'expo.inOut',scrollTrigger:once(f,'top 94%')});fr($('img',f),{scale:1.3},{scale:1,duration:2.2,delay:(i%3)*.12,ease:'expo.out',scrollTrigger:once(f,'top 94%')});});
  // 10 services — lines draw, rows rise
  $$('.svr').forEach((r,i)=>{fr(r,{'--sx':0},{'--sx':1,duration:1.6,ease:'expo.inOut',scrollTrigger:once(r,'top 92%')});fr($$('.n,h3,p',r),{opacity:0,y:20},{opacity:1,y:0,duration:1,stagger:.08,delay:.3,ease:'expo.out',scrollTrigger:once(r,'top 92%')});});
  // 11 location
  fr('#locPh',{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0% 0 0)',duration:1.6,ease:'expo.inOut',scrollTrigger:once('#locPh','top 85%')});
  fr('#locPh img',{scale:1.3},{scale:1,duration:2.2,ease:'expo.out',scrollTrigger:once('#locPh','top 85%')});
  fr('#mapbox',{opacity:0,y:60},{opacity:1,y:0,duration:1.5,ease:'expo.out',scrollTrigger:once('#mapbox','top 88%')});
  fr('form.res',{opacity:0,y:60,filter:'blur(10px)'},{opacity:1,y:0,filter:'blur(0px)',duration:1.5,ease:'expo.out',scrollTrigger:once('form.res','top 85%')});
  if(FINE)$$('.btn-gold').forEach(m=>{m.onpointermove=e=>{const r=m.getBoundingClientRect();gsap.to(m,{x:(e.clientX-r.left-r.width/2)*.22,y:(e.clientY-r.top-r.height/2)*.32,duration:.6,ease:'power3.out'});};m.onpointerleave=()=>gsap.to(m,{x:0,y:0,duration:1,ease:'elastic.out(1,.45)'});});
  if(isRelang)ScrollTrigger.getAll().forEach(s=>{if(s.vars.once&&s.start<scrollY+innerHeight&&s.animation)s.animation.progress(1);});
  ScrollTrigger.refresh();
}

/* lightbox */
const lb=$('#lb'),lbImg=$('img',lb),lbCap=$('.cap',lb);let lbList=[],lbI=0;
function lbShow(n){lbI=(n+lbList.length)%lbList.length;const[f,h]=lbList[lbI];gsap.to(lbImg,{opacity:0,scale:.97,duration:.2,onComplete:()=>{lbImg.onload=()=>gsap.to(lbImg,{opacity:1,scale:1,duration:.7,ease:'expo.out'});lbImg.src=img(f);lbCap.textContent=`${lbI+1} / ${lbList.length} · ${hallName(h)}`;}});}
function openLb(list,i){lbList=list;lb.classList.add('open');lbShow(i);}
function bindLb(){$$('#mas figure').forEach(g=>{const o=()=>openLb(GALLERY,+g.dataset.i);g.onclick=o;g.onkeydown=e=>{if(e.key==='Enter')o();};});}
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
  vc.addEventListener('pointerdown',e=>{vc.setPointerCapture(e.pointerId);pts.set(e.pointerId,{x:e.clientX,y:e.clientY});V.drag=true;V.auto=false;$('#vAuto').classList.remove('on');lx=e.clientX;ly=e.clientY;V.vy=V.vp=0;$('#vHint').style.opacity=0;
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
    if(src){try{map.addLayer({id:'ija-3d',type:'fill-extrusion',source:src,'source-layer':'building',minzoom:13,paint:{'fill-extrusion-color':['interpolate',['linear'],['coalesce',['get','render_height'],8],0,'#ece4d4',30,'#dcc9a5',80,'#c9a46a'],'fill-extrusion-height':['interpolate',['linear'],['zoom'],13,0,14.5,['coalesce',['get','render_height'],8]],'fill-extrusion-base':['coalesce',['get','render_min_height'],0],'fill-extrusion-opacity':.92}},before);}catch(e){}}
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
const pct=$('#pct');let loadP=0;function setLoad(v){loadP=Math.max(loadP,v);gsap.to('#lbar',{scaleX:loadP/100,duration:.6,ease:'power2.out'});pct.textContent=Math.round(loadP);}
fetch('/assets/ija-logo-gold.svg').then(r=>r.text()).then(svg=>{const box=$('#loaderLogo');box.innerHTML=svg;const ps=$$('path',box);
  ps.forEach(p=>{let l=400;try{l=p.getTotalLength();}catch(e){}p.style.strokeDasharray=l;p.style.strokeDashoffset=l;});
  gsap.to(ps,{strokeDashoffset:0,duration:1.6,stagger:.04,ease:'power2.inOut',onComplete:()=>box.classList.add('filled')});}).catch(()=>{});
let finished=false;
loadBg(f=>setLoad(8+f*90));
const waitBg=setInterval(()=>{if(bg.ready){clearInterval(waitBg);finish();}},120);
function finish(){if(finished)return;finished=true;setLoad(100);
  gsap.timeline({delay:.8})
   .to('#loader .lg,#loader .tg,#loader .cnt',{opacity:0,y:-20,duration:.6,stagger:.05,ease:'power2.in'})
   .to('#loader',{clipPath:'inset(0 0 100% 0)',duration:1.2,ease:'expo.inOut'})
   .add(()=>{document.body.classList.remove('lock');lenis&&lenis.start();},'-=.7')
   .fromTo('#bg',{scale:1.15,filter:'brightness(.25)'},{scale:1,filter:'brightness(1)',duration:2.4,ease:'expo.out',clearProps:'transform,filter'},'<')
   .from('.h-title .k',{opacity:0,x:-30,duration:1.2,ease:'expo.out'},'-=1.7')
   .from('.h-title .ln>span',{yPercent:110,duration:1.5,stagger:.12,ease:'expo.out'},'-=1.4')
   .from('.h-side>*',{opacity:0,y:30,filter:'blur(8px)',duration:1.2,stagger:.12,ease:'expo.out'},'-=1')
   .from('#nav',{opacity:0,duration:1,clearProps:'opacity'},'-=1.1')
   .from('.h-meta',{opacity:0,duration:1},'-=.8')
   .set('#loader',{display:'none'});
}
setTimeout(finish,12000);
applyLang();bind();requestAnimationFrame(bgFrame);
addEventListener('load',()=>ScrollTrigger.refresh());
