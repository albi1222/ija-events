import * as THREE from 'three';
gsap.registerPlugin(ScrollTrigger);

/* =====================================================================
   CONTENT (SQ default · EN)
   ===================================================================== */
const HFU='/hfu/user_3JJdXTgHZ1RefQgaL5TKAYaM9hz/';
const PANO={grand:HFU+'cd706b80-84a6-44a5-aa71-8d46c06d13b3.jpg',royal:HFU+'93327ffc-0088-4fbb-a540-4f04f5025b3e.jpg',salon:HFU+'f60298ad-a067-4e0f-ac74-ce1af46e8e68.jpg'};
const T={
 sq:{'nav.menu':'Menu','nav.halls':'Sallat','nav.x360':'Përvoja 360°','nav.events':'Eventet','nav.menus':'Menutë','nav.gallery':'Galeria','nav.loc':'Vendndodhja','nav.reserve':'Rezervo','hint':'Zbrit',
  'h.t':'Çdo moment meriton <em>një mjedis</em> të jashtëzakonshëm','h.s':'Tiranë · Që nga viti 2000','h.ch1':'Mbërritja','h.ch2':'Salla',
  'h.c2k':'02 · Hyrja','h.c2t':'Dera hapet, <em>mbrëmja fillon.</em>','h.c2p':'Dritë e ngrohtë, tavane me stuko dhe tavolina të shtruara me kujdes. Kështu ju pret çdo sallë e IJA Events.',
  'h.c4k':'Salla e Madhe','h.c4t':'Një sallë <em>për të gjithë të dashurit.</em>','h.c4p':'Tavan me kasetona, dritë e ngrohtë dhe tavolina për dhjetë veta, gati për mbrëmjen tuaj.','h.c3k':'03 · Brenda, në 360°','h.c3t':'Qëndroni <em>në mes të sallës.</em>','h.c3p':'Vazhdoni të zbrisni dhe salla rrotullohet rreth jush. Më poshtë mund ta drejtoni vetë.','h.cta1':'Zbuloni sallat',
  'i.k':'IJA Events · Që nga 2000','i.t':'Për më shumë se njëzet vjet, familjet e Tiranës kanë festuar këtu momentet më të rëndësishme të jetës. Ne kujdesemi për sallën, tryezën dhe çdo detaj, që ju të mendoni vetëm për të ftuarit tuaj.',
  'st.1':'Që nga viti','st.2':'Salla elegante','st.3':'Të ftuar në Sallën e Madhe','st.4':'Menu të plota',
  'halls.k':'Sallat tona','halls.t':'Zgjidhni <em>ambientin tuaj.</em>','halls.l':'Tre salla, secila me karakterin e vet. Hyni në secilën në 360°, shikoni fotot reale dhe planifikoni mbrëmjen para se të na vizitoni.',
  'cap':'Kapaciteti','evs':'Për','tbc':'(për t\'u konfirmuar)','enter':'Hyni në 360°','photos':'Shiko fotot','more':'Më shumë foto',
  'x.k':'Përvoja 360°','x.t':'Mos shikoni vetëm. <em>Hyni brenda.</em>','x.l':'Tërhiqni për t\'u rrotulluar, zmadhoni me rrotë ose me dy gishta dhe ndiqni pikat e arta nëpër sallë.','x.drag':'Tërhiq për të parë përreth','x.note':'Pamjet 360° janë vizualizime të krijuara mbi bazën e fotove të sallave tona; fotot në galeri janë reale.','x.auto':'Rrotullim automatik','x.full':'Ekran i plotë',
  'ev.k':'Eventet','ev.t':'Çdo festë, <em>historia e vet.</em>','ev.l':'Nga dasma e madhe te darka intime, çdo event ka atmosferën e vet te IJA Events.',
  'mn.k':'Tryeza','mn.t':'Katër menu. <em>Një standard.</em>','mn.l':'Çdo menu përfshin pjatën e parë, dy pjata kryesore, pjata anësore dhe një ëmbëlsirë sipas zgjedhjes, si dhe kafe, pije, ujë dhe fruta.','mn.dk':'Ëmbëlsira: zgjidhni një','mn.dv':'Hallvë · Revani · Grurë të ëmbël','mn.ik':'Të përfshira','mn.iv':'Kafe · Pije të gazuara (1L, Pepsi) · Ujë natyral & i gazuar · Fruta miks','mn.f':'Pjata e parë','mn.m':'Pjatat kryesore','mn.s':'Pjatat anësore','mn.pp':'LEKË / PERSON',
  'g.k':'Galeria','g.t':'Ambienti, <em>në kuadro.</em>','g.l':'Foto reale nga sallat tona. Prekni çdo foto për ta parë në ekran të plotë.',
  'sv.k':'Shërbimet','sv.t':'Gjithçka, <em>e kujdesur.</em>',
  'lo.k':'Vendndodhja','lo.t':'Na gjeni <em>në Tiranë.</em>','lo.l':'Hyrja jonë, e ndriçuar çdo mbrëmje. Rrotullojeni hartën 3D ose hapeni direkt në Google Maps për udhëzime.','lo.a':'Adresa','lo.p':'Telefon & WhatsApp','lo.dir':'Merr udhëzimet','lo.gm':'Google Maps','lo.load':'Duke ngarkuar hartën 3D…','lo.err':'Harta nuk u ngarkua. Hapeni në Google Maps.',
  'c.k':'Rezervime','c.t':'Le ta nisim <em>mbrëmjen tuaj.</em>','c.l':'Na tregoni për eventin tuaj dhe ju kthejmë përgjigje me disponueshmërinë dhe një ofertë të personalizuar.','c.call':'Na telefononi','c.wa':'Na shkruani në WhatsApp',
  'f.type':'Lloji i eventit','f.date':'Data e preferuar','f.guests':'Numri i të ftuarve','f.hall':'Salla','f.menu':'Menuja','f.name':'Emri i plotë','f.phone':'Telefoni','f.msg':'Mesazhi','f.msgph':'Orari, kërkesa të veçanta…','f.note':'Kërkesa hapet në WhatsApp si mesazh gati për t\'u dërguar. Asgjë nuk dërgohet pa shtypur ju "Dërgo".','f.submit':'Përgatit kërkesën','f.ok':'Kërkesa juaj është gati.','f.okd':'Shtypni më poshtë për ta hapur në WhatsApp, pastaj dërgojeni.','f.wa':'Dërgo në WhatsApp','f.e1':'Ju lutem zgjidhni llojin e eventit.','f.e2':'Zgjidhni një datë në të ardhmen.','f.e3':'Nga 10 deri në 600 të ftuar.','f.e4':'Ju lutem shkruani emrin.','f.e5':'Shkruani një numër të vlefshëm.','f.nopref':'Pa preferencë','f.undec':'Ende pa vendosur',
  'ft.d':'Salla elegante për dasma, fejesa dhe festa familjare në Tiranë, që nga viti 2000.','ft.e':'Eksploro','ft.c':'Kontakt','ft.tag':'Çdo moment meriton një mjedis të jashtëzakonshëm.',
  'wa.hi':'Përshëndetje IJA Events,\nDëshiroj të bëj një kërkesë për rezervim.','wa.ev':'Eventi','wa.date':'Data','wa.g':'Të ftuar','wa.h':'Salla','wa.m':'Menuja','wa.n':'Emri','wa.p':'Telefoni','wa.x':'Shënime','wa.thx':'Faleminderit!',
  'cur.view':'Shiko','cur.drag':'Tërhiq','cur.open':'Hap'},
 en:{'nav.menu':'Menu','nav.halls':'Our Halls','nav.x360':'360° Experience','nav.events':'Events','nav.menus':'Menus','nav.gallery':'Gallery','nav.loc':'Location','nav.reserve':'Reserve','hint':'Scroll',
  'h.t':'Every moment deserves <em>an extraordinary</em> setting','h.s':'Tirana · Since 2000','h.ch1':'Arrival','h.ch2':'The hall',
  'h.c2k':'02 · The entrance','h.c2t':'The door opens, <em>the evening begins.</em>','h.c2p':'Warm light, stucco ceilings and carefully laid tables. This is how every IJA Events hall welcomes you.',
  'h.c4k':'Grand Ballroom','h.c4t':'A hall <em>for everyone you love.</em>','h.c4p':'A coffered ceiling, warm light and tables for ten, ready for your evening.','h.c3k':'03 · Inside, in 360°','h.c3t':'Stand <em>in the middle of the hall.</em>','h.c3p':'Keep scrolling and the hall turns around you. Further down you can steer it yourself.','h.cta1':'Discover the halls',
  'i.k':'IJA Events · Since 2000','i.t':'For more than twenty years, Tirana\'s families have celebrated the most important moments of their lives here. We take care of the hall, the table and every detail, so you only think about your guests.',
  'st.1':'Established','st.2':'Elegant halls','st.3':'Guests in the Grand Ballroom','st.4':'Full menus',
  'halls.k':'Our Halls','halls.t':'Choose your <em>setting.</em>','halls.l':'Three halls, each with its own character. Step inside any of them in 360°, see the real photos and plan your evening before you visit.',
  'cap':'Capacity','evs':'For','tbc':'(to be confirmed)','enter':'Step inside in 360°','photos':'See photos','more':'More photos',
  'x.k':'360° Experience','x.t':'Don\'t just look. <em>Stand inside.</em>','x.l':'Drag to turn, scroll or pinch to zoom, and follow the golden markers through the room.','x.drag':'Drag to look around','x.note':'360° views are visualisations based on photographs of our halls; the gallery photos are real.','x.auto':'Auto-rotate','x.full':'Fullscreen',
  'ev.k':'Events','ev.t':'Every occasion, <em>its own story.</em>','ev.l':'From grand weddings to intimate dinners, every event has its own atmosphere at IJA Events.',
  'mn.k':'The Table','mn.t':'Four menus. <em>One standard.</em>','mn.l':'Every menu includes a first course, two mains, sides and one dessert of your choice, plus coffee, soft drinks, water and fresh fruit.','mn.dk':'Dessert: choose one','mn.dv':'Halva · Revani · Sweet wheat','mn.ik':'Included','mn.iv':'Coffee · Soft drinks (1L, Pepsi) · Still & sparkling water · Mixed fruit','mn.f':'First course','mn.m':'Main courses','mn.s':'Sides','mn.pp':'LEK / PERSON',
  'g.k':'Gallery','g.t':'The venue, <em>in frames.</em>','g.l':'Real photographs of our halls. Tap any photo to see it full screen.',
  'sv.k':'Services','sv.t':'Everything, <em>taken care of.</em>',
  'lo.k':'Location','lo.t':'Find us <em>in Tirana.</em>','lo.l':'Our entrance, lit every evening. Turn the 3D map or open it directly in Google Maps for directions.','lo.a':'Address','lo.p':'Phone & WhatsApp','lo.dir':'Get directions','lo.gm':'Google Maps','lo.load':'Loading 3D map…','lo.err':'The map could not load. Open it in Google Maps.',
  'c.k':'Reservations','c.t':'Let\'s begin <em>your evening.</em>','c.l':'Tell us about your event and we\'ll come back to you with availability and a tailored proposal.','c.call':'Call us','c.wa':'Message us on WhatsApp',
  'f.type':'Event type','f.date':'Preferred date','f.guests':'Number of guests','f.hall':'Hall','f.menu':'Menu','f.name':'Full name','f.phone':'Phone','f.msg':'Message','f.msgph':'Timing, special requests…','f.note':'Your request opens in WhatsApp as a ready-to-send message. Nothing is sent until you press send.','f.submit':'Prepare request','f.ok':'Your request is ready.','f.okd':'Tap below to open WhatsApp with your details, then press send.','f.wa':'Send on WhatsApp','f.e1':'Please choose an event type.','f.e2':'Please choose a future date.','f.e3':'Between 10 and 600 guests.','f.e4':'Please enter your name.','f.e5':'Please enter a valid phone number.','f.nopref':'No preference','f.undec':'Not decided yet',
  'ft.d':'Elegant halls for weddings, engagements and family celebrations in Tirana, since 2000.','ft.e':'Explore','ft.c':'Contact','ft.tag':'Every moment deserves an extraordinary setting.',
  'wa.hi':'Hello IJA Events,\nI\'d like to request a reservation.','wa.ev':'Event','wa.date':'Date','wa.g':'Guests','wa.h':'Hall','wa.m':'Menu','wa.n':'Name','wa.p':'Phone','wa.x':'Notes','wa.thx':'Thank you!',
  'cur.view':'View','cur.drag':'Drag','cur.open':'Open'}
};
const HALLS=[
 {id:'grand',imgs:['grand-1','grand-2','grand-3'],pano:PANO.grand,
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
 {id:'salon',imgs:['salon-2','salon-1'],pano:PANO.salon,
  name:{sq:'Salla Kristal',en:'Crystal Salon'},alt:{sq:'Crystal Salon',en:'Salla Kristal'},cap:{sq:'Deri në 60 të ftuar',en:'Up to 60 guests'},
  ev:{sq:'Fejesa · Ditëlindje · Pritje',en:'Engagements · Birthdays · Receptions'},
  desc:{sq:'Mure gri të butë, korniza të bardha, llambadar kristali dhe barin e vet të kafesë me dollapë me ar.',en:'Soft grey walls, white mouldings, a crystal chandelier and its own coffee bar with gold-trimmed cabinets.'},
  hs:[{yaw:0,pitch:56,t:{sq:'Llambadari kristal',en:'Crystal chandelier'},p:{sq:'Llambadar kristali nën një tavan të ndriçuar.',en:'A crystal chandelier beneath a lit tray ceiling.'}},
      {yaw:2,pitch:5,t:{sq:'Muri kryesor',en:'Feature wall'},p:{sq:'Pilastra klasike dhe ekran për prezantime, fjalime ose video.',en:'Classical pilasters and a screen for slideshows and speeches.'}},
      {yaw:2,pitch:-56,t:{sq:'Mozaiku në dysheme',en:'Stone inlay'},p:{sq:'Mozaik gjeometrik guri në dyshemenë prej mermeri.',en:'A geometric stone inlay set into the marble floor.'}},
      {yaw:-162,pitch:-8,t:{sq:'Bari i kafesë',en:'Coffee bar'},p:{sq:'Bari i kafesë me dollapë me ar dhe makinë profesionale espresso.',en:'The coffee bar with gold-trimmed cabinets and a professional espresso machine.'}}]}
];
const EVENTS=[
 [{sq:'Dasma',en:'Weddings'},{sq:'Nga vallja e parë te dolli i fundit, në një sallë të veshur me dritë.',en:'From the first dance to the last toast, in a hall dressed in light.'},'grand-2'],
 [{sq:'Fejesa',en:'Engagements'},{sq:'Sallone intime për mbrëmjen kur bashkohen dy familje.',en:'Intimate salons for the evening two families come together.'},'royal-1'],
 [{sq:'Ditëlindje',en:'Birthdays'},{sq:'Nga ditëlindja e parë te e tetëdhjeta, me menu dhe dekor të kujdesur.',en:'From the first birthday to the eightieth, with menus and decoration taken care of.'},'salon-2'],
 [{sq:'Darka gala',en:'Gala Dinners'},{sq:'Tavolina të shtruara, dritë e ngrohtë dhe shërbim elegant.',en:'Laid tables, warm light and elegant service.'},'grand-1'],
 [{sq:'Evente korporative',en:'Corporate Events'},{sq:'Prezantime, darka dhe pritje me ekran, zë dhe shërbim të kujdesshëm.',en:'Presentations, dinners and receptions with screens, sound and attentive service.'},'salon-1'],
 [{sq:'Mbledhje familjare',en:'Family Gatherings'},{sq:'Përvjetorë dhe ribashkime në një sallë që është e juaja për atë ditë.',en:'Anniversaries and reunions in a hall that is yours for the day.'},'royal-2']
];
const MENUS=[
 {n:1,p:1900,f:[['Supë orientale','Oriental soup'],['Supë me perime','Vegetable soup']],m:[['Biftek viçi, furrë, me patate','Oven-baked veal steak with potatoes'],['Pilaf ramstek, me djathë','Rice pilaf with rump steak & cheese']],s:[['Sallatë miks e stinës','Seasonal mixed salad'],['Djathë me ullinj','Cheese with olives'],['Sallatë me perime sote','Sautéed vegetable salad'],['Byrek','Byrek']]},
 {n:2,p:2200,f:[['Supë krem pule','Cream of chicken soup'],['Supë me perime','Vegetable soup']],m:[['Eskallop viçi me patate furre','Veal escalope with oven potatoes'],['Pilaf me fileto pule zgare','Pilaf with grilled chicken fillet']],s:[['Sallatë trikolor','Tricolour salad'],['Sallatë ulliri me limon, djathë dhe portokall','Olive salad, lemon, cheese & orange'],['Sallatë me perime të zgarës','Grilled vegetable salad'],['Byrek me qumësht','Byrek with milk']]},
 {n:3,p:2500,f:[['Supë krem pule','Cream of chicken soup'],['Supë me perime','Vegetable soup']],m:[['Eskallop viçi me patate furre','Veal escalope with oven potatoes'],['Pilaf me berxollë zgare','Pilaf with grilled chop']],s:[['Sallatë miks e stinës','Seasonal mixed salad'],['Sallatë me rukola, grana padano dhe tomate qershi','Rocket, grana padano & cherry tomato'],['Perime të zgarës','Grilled vegetables']]},
 {n:4,p:2800,f:[['Supë "Pasha qoftë"','"Pasha" meatball soup'],['Supë me perime','Vegetable soup']],m:[['Lazanjë bolonjeze','Lasagne bolognese'],['Mish qengji me patate të furrës','Lamb with oven potatoes']],s:[['Sallatë miks e stinës','Seasonal mixed salad'],['Sallatë ulliri me limon dhe portokall','Olive salad with lemon & orange'],['Miks djathrash','Cheese selection']]}
];
const GALLERY=[['grand-1','grand'],['royal-1','royal'],['salon-2','salon'],['grand-3','grand'],['exterior','ext'],['royal-2','royal'],['grand-2','grand'],['salon-1','salon']];
const SERVICES=[
 [{sq:'Planifikim eventi',en:'Event Planning'},{sq:'Përgatisim bashkë me ju orarin, vendosjen e tavolinave dhe çdo detaj, nga vizita e parë deri te i ftuari i fundit.',en:'We plan the timing, table layout and every detail with you, from the first visit to the last guest.'},'<path d="M8 3v3M16 3v3M3.5 9h17M5 5h14a1.5 1.5 0 011.5 1.5v12A1.5 1.5 0 0119 20H5a1.5 1.5 0 01-1.5-1.5v-12A1.5 1.5 0 015 5z"/><path d="M8 14l2.5 2.5L16 12"/>'],
 [{sq:'Kuzhina jonë',en:'Our Kitchen'},{sq:'Katër menu nga kuzhina jonë, të shërbyera në tavolinë, me pije, kafe dhe fruta të përfshira.',en:'Four set menus from our own kitchen, served at the table, with drinks, coffee and fruit included.'},'<path d="M3 15h18M5 15a7 7 0 0114 0M12 6v2M2 18h20"/>'],
 [{sq:'Dekorim',en:'Decoration'},{sq:'Lule, tavolina dhe atmosferë drite sipas ngjyrave dhe stilit tuaj.',en:'Florals, table design and lighting styled to your colours and taste.'},'<path d="M12 21V11M12 11c-3 0-5-2.5-5-6 3 0 5 2.5 5 6zM12 11c3 0 5-2.5 5-6-3 0-5 2.5-5 6z"/>'],
 [{sq:'Dritë & zë',en:'Light & Sound'},{sq:'Zë profesional, ndriçim dhe ekrane për fjalime, video ose muzikë live.',en:'Professional sound, lighting and screens for speeches, slideshows or live music.'},'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12"/>'],
 [{sq:'Koordinim në ditën e eventit',en:'On-the-day Coordination'},{sq:'Ekipi ynë drejton orarin dhe shërbimin, që ju vetëm të festoni.',en:'Our team runs the schedule and the service, so you only celebrate.'},'<circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0114 0"/>'],
 [{sq:'Bar kafeje',en:'Coffee Bar'},{sq:'Kafe e freskët dhe pije gjatë gjithë eventit, nga bari ynë i kafesë.',en:'Fresh coffee and drinks throughout the event, from our own coffee bar.'},'<path d="M4 9h12v5a5 5 0 01-5 5H9a5 5 0 01-5-5V9zM16 10h2a2 2 0 010 4h-2M7 3c0 1.5 1 1.5 1 3M11 3c0 1.5 1 1.5 1 3"/>']
];
const EVTYPES=[['Dasmë','Wedding'],['Fejesë','Engagement'],['Ditëlindje','Birthday'],['Darkë gala','Gala dinner'],['Event korporativ','Corporate'],['Mbledhje familjare','Family gathering']];
const IJA={lat:41.3398973,lng:19.8395694};

/* =====================================================================
   HELPERS & I18N
   ===================================================================== */
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,FINE=matchMedia('(hover:hover) and (pointer:fine)').matches,MOBILE=innerWidth<760;
let LANG='sq';try{const s=localStorage.getItem('ija-lang');if(s==='en'||s==='sq')LANG=s;}catch(e){}
const t=k=>T[LANG][k]??T.sq[k]??k,L=o=>o[LANG]??o.sq;
const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),range=(p,a,b)=>clamp((p-a)/(b-a)),ease=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,eOut=x=>1-Math.pow(1-x,3),eIn=x=>x*x*x;
const img=(f,sm)=>`/assets/${f}${sm?'-sm':''}.webp`;
const hallName=id=>{const h=HALLS.find(x=>x.id===id);return h?L(h.name):(LANG==='sq'?'Hyrja':'Entrance');};
$('#yr').textContent=new Date().getFullYear();

function splitChars(el){
  const parts=el.innerHTML.split(/(<br\s*\/?>|<em>|<\/em>)/i);let html='';
  parts.forEach(part=>{if(/^<\/?(br|em)/i.test(part)){html+=part;return;}
    part.split(/( +)/).forEach(w=>{if(!w)return;if(/^ +$/.test(w)){html+=' ';return;}
      html+='<span class="w">'+[...w].map(ch=>`<span class="char">${ch}</span>`).join('')+'</span>';});});
  el.innerHTML=html;
}
function splitWords(el){el.innerHTML=el.textContent.split(/\s+/).map(w=>`<span class="wd">${w}</span>`).join(' ');}

function applyLang(){
  document.documentElement.lang=LANG;
  document.title=LANG==='sq'?'IJA Events · Çdo moment meriton një mjedis të jashtëzakonshëm':'IJA Events · Every moment deserves an extraordinary setting';
  $$('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
  $$('[data-i18n-html]').forEach(el=>el.innerHTML=t(el.dataset.i18nHtml));
  $$('[data-i18n-ph]').forEach(el=>el.placeholder=t(el.dataset.i18nPh));
  $$('[data-i18n-title]').forEach(el=>{el.title=t(el.dataset.i18nTitle);el.setAttribute('aria-label',el.title);});
  $$('.lang button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===LANG));
  $$('.split').forEach(splitChars); splitWords($('#bigText'));
  render();
  if(window.__vHall)setHall(window.__vHall,true);
  $$('main h3, .hall h3').forEach(()=>{});
}
$$('.lang button').forEach(b=>b.addEventListener('click',()=>{if(b.dataset.lang===LANG)return;LANG=b.dataset.lang;try{localStorage.setItem('ija-lang',LANG);}catch(e){}
  gsap.to('main,#film .cap,footer',{opacity:0,duration:.3,onComplete:()=>{applyLang();bind(true);gsap.to('main,footer',{opacity:1,duration:.7});gsap.set('#film .cap',{clearProps:'opacity'});film.force=true;}});}));

const arrow='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2 8h12M9 3l5 5-5 5"/></svg>';
function render(){
  $('#hallGrid').innerHTML=HALLS.map((h,i)=>`<article class="hall"><i class="glow"></i><div class="ph" data-photos="${h.id}" data-cursor="cur.view"><img src="${img(h.imgs[0])}" alt="${L(h.name)}" loading="lazy"><span class="badge">360° · ${h.imgs.length} ${LANG==="sq"?"foto":"photos"}</span></div><div class="bd"><span class="no">0${i+1}</span><h3>${L(h.name)}</h3><span class="alt">${L(h.alt)}</span><p>${L(h.desc)}</p><dl class="specs"><dt>${t('cap')}</dt><dd>${L(h.cap)} <span class="tbc">${t('tbc')}</span></dd><dt>${t('evs')}</dt><dd>${L(h.ev)}</dd></dl><div class="row"><a href="#experience" class="btn btn-gold magnetic" data-hall="${h.id}">${t('enter')}${arrow}</a><button class="btn btn-line" data-photos="${h.id}">${t('photos')}</button></div></div></article>`).join('');
  const words=EVENTS.map(e=>L(e[0])),row=a=>a.concat(a).map((w,i)=>`<span>${i%2?'':'<b></b>'}${w}</span>`).join('');
  $('#mq1').innerHTML=row(words.concat(words));$('#mq2').innerHTML=row(words.slice().reverse().concat(words.slice().reverse()));
  $('#mTabs').innerHTML=MENUS.map((m,i)=>`<button class="mtab${i===curMenu?' on':''}" data-m="${i}"><b>Menu ${m.n}</b><span>${m.p.toLocaleString('de-DE')} L</span></button>`).join('');
  $$('.mtab').forEach(b=>b.onclick=()=>showMenu(+b.dataset.m));
  showMenu(curMenu,true);
  $('#gTrack').innerHTML=GALLERY.map(([f,hh],i)=>`<figure class="gfig gi" data-i="${i}" data-cursor="cur.view" tabindex="0"><img src="${img(f)}" alt="${hallName(hh)}" loading="lazy"><figcaption><span>${String(i+1).padStart(2,'0')}</span><b>${hallName(hh)}</b></figcaption></figure>`).join('');
  $('#gTot').textContent=String(GALLERY.length).padStart(2,'0');
  $('#svGrid').innerHTML=SERVICES.map(([ti,p,ic])=>`<div class="sv"><svg viewBox="0 0 24 24">${ic}</svg><h3>${L(ti)}</h3><p>${L(p)}</p></div>`).join('');
  $('#chips').innerHTML=EVTYPES.map(([sq,en])=>`<label class="chip"><input type="radio" name="type" value="${LANG==='sq'?sq:en}"><span>${LANG==='sq'?sq:en}</span></label>`).join('');
  $('#fHall').innerHTML=`<option>${t('f.nopref')}</option>`+HALLS.map(h=>`<option>${L(h.name)}</option>`).join('');
  $('#fMenu').innerHTML=`<option>${t('f.undec')}</option>`+MENUS.map(m=>`<option>Menu ${m.n} · ${m.p} L</option>`).join('');
  $('#vTabs').innerHTML=HALLS.filter(h=>h.pano).map(h=>`<button data-h="${h.id}" class="${h.id===window.__vHall?'on':''}">${L(h.name)}</button>`).join('');
  $$('#vTabs button').forEach(b=>b.onclick=()=>setHall(b.dataset.h));
}
let curMenu=0;
function showMenu(i,instant){
  curMenu=i;const m=MENUS[i],li=a=>a.map(([sq,en])=>`<li>${LANG==='sq'?sq:en}<i>${LANG==='sq'?en:sq}</i></li>`).join('');
  $$('.mtab').forEach((b,j)=>b.classList.toggle('on',j===i));
  const card=$('#mCard'),html=`<span class="big">${m.n}</span><span class="eyebrow">Menu ${m.n}</span><div class="pr"><b data-mc>${m.p.toLocaleString('de-DE')}</b><small>${t('mn.pp')}</small></div>
    <div class="cols"><div><h4>${t('mn.f')}</h4><ul>${li(m.f)}</ul></div><div><h4>${t('mn.m')}</h4><ul>${li(m.m)}</ul></div><div><h4>${t('mn.s')}</h4><ul>${li(m.s)}</ul></div></div>
    <div class="inc"><div><b>${t('mn.dk')}</b>${t('mn.dv')}</div><div><b>${t('mn.ik')}</b>${t('mn.iv')}</div></div>`;
  if(instant||RM){card.innerHTML=html;return;}
  gsap.to(card.children,{opacity:0,y:-14,duration:.25,stagger:.02,onComplete:()=>{card.innerHTML=html;
    gsap.from(card.children,{opacity:0,y:24,duration:.8,stagger:.05,ease:'expo.out'});
    const o={v:m.p-400},el=$('[data-mc]',card);gsap.to(o,{v:m.p,duration:1,ease:'power3.out',onUpdate:()=>el.textContent=Math.round(o.v).toLocaleString('de-DE')});}});
}

/* =====================================================================
   CURSOR · NAV · MENU
   ===================================================================== */
const cur=$('.cur'),curT=$('#curT');let cx=innerWidth/2,cy=innerHeight/2,ox=cx,oy=cy;
if(FINE){addEventListener('pointermove',e=>{cx=e.clientX;cy=e.clientY;const tg=e.target.closest('[data-cursor]');cur.classList.toggle('big',!!tg);if(tg)curT.textContent=t(tg.dataset.cursor);},{passive:true});
  gsap.ticker.add(()=>{ox+=(cx-ox)*.18;oy+=(cy-oy)*.18;cur.style.transform=`translate(${ox}px,${oy}px)`;});}
const nav=$('#nav');let lastY=0;
addEventListener('scroll',()=>{const y=scrollY;nav.classList.toggle('solid',y>innerHeight*.5&&!document.body.classList.contains('mopen'));
  nav.classList.toggle('up',y>lastY&&y>innerHeight&&!document.body.classList.contains('mopen'));lastY=y;},{passive:true});
$('#mbtn').onclick=()=>{const o=document.body.classList.toggle('mopen');nav.classList.remove('up');
  $$('#menu nav a span').forEach((s,i)=>s.style.transitionDelay=o?(.25+i*.06)+'s':'0s');};
$('#menuPv').innerHTML=$$('#menu nav a').map(a=>`<img data-k="${a.dataset.pv}" src="${img(a.dataset.pv)}" alt="" loading="lazy">`).join('');
$$('#menu nav a').forEach(a=>a.addEventListener('pointerenter',()=>$$('#menuPv img').forEach(i=>i.classList.toggle('on',i.dataset.k===a.dataset.pv))));
let lenis=null;
if(window.Lenis&&!RM){lenis=new Lenis({duration:1.15,smoothWheel:true});lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(tm=>lenis.raf(tm*1000));gsap.ticker.lagSmoothing(0);lenis.stop();}
const smoothTo=y=>lenis?lenis.scrollTo(y,{duration:1.6}):scrollTo({top:y,behavior:RM?'auto':'smooth'});
document.addEventListener('click',e=>{
  const ph=e.target.closest('[data-photos]');if(ph){const h=HALLS.find(x=>x.id===ph.dataset.photos);openLb(h.imgs.map(f=>[f,h.id]),0);return;}
  const a=e.target.closest('a[href^="#"]');if(!a)return;e.preventDefault();document.body.classList.remove('mopen');
  if(a.dataset.hall)setHall(a.dataset.hall);
  const id=a.getAttribute('href');if(id==='#top')return smoothTo(0);
  const el=$(id);if(el)smoothTo(el.getBoundingClientRect().top+scrollY-(id==='#experience'?0:0));});

/* =====================================================================
   FILM HERO — exterior push-in → door light → hall → 360°
   ===================================================================== */
const film={p:0,tp:0,force:true,el:$('#film'),vid:$('#fVid'),glow:$('#fGlow'),c1:$('#c1'),c2:$('#c2'),c3:$('#c3'),c4:$('#c4'),bt:$('#bt'),bb:$('#bb'),cue:$('#cue'),pg:$('#hudPg'),tc:$('#hudTc'),ch:$$('#hudCh li'),dur:34.7,ready:false};
const VEND=.87, TDOOR=[7.3,9.0];
let pr,ps,pc,psph,pReady=false;
function initPano(){
  const cv=$('#panoC');
  try{pr=new THREE.WebGLRenderer({canvas:cv,antialias:false,powerPreference:'high-performance'});}catch(e){return;}
  pr.setPixelRatio(Math.min(devicePixelRatio,1.5));pr.outputColorSpace=THREE.SRGBColorSpace;
  ps=new THREE.Scene();pc=new THREE.PerspectiveCamera(90,innerWidth/innerHeight,.1,100);
  const g=new THREE.SphereGeometry(10,72,48);g.scale(-1,1,1);psph=new THREE.Mesh(g,new THREE.MeshBasicMaterial({color:0}));psph.rotation.y=-Math.PI/2;ps.add(psph);
  const rs=()=>{pr.setSize(innerWidth,innerHeight,false);pc.aspect=innerWidth/innerHeight;pc.updateProjectionMatrix();};rs();addEventListener('resize',rs);
  new THREE.TextureLoader().load(PANO.grand,tx=>{tx.colorSpace=THREE.SRGBColorSpace;psph.material=new THREE.MeshBasicMaterial({map:tx});pReady=true;film.force=true;});
}
/* hero video: fully buffered as a blob so scroll-seeking is instant */
const VSRC=innerWidth<760?'/assets/film-832.mp4':'/assets/film-1280.mp4';
function loadFilm(onProg){
  const v=film.vid,done=()=>{film.ready=true;film.dur=v.duration||film.dur;film.force=true;};
  v.addEventListener('loadedmetadata',()=>{film.dur=v.duration;},{once:true});
  return fetch(VSRC).then(async r=>{
    const total=+r.headers.get('content-length')||0;if(!r.body||!total){const b=await r.blob();return b;}
    const rd=r.body.getReader(),chunks=[];let got=0;
    for(;;){const{done:d,value}=await rd.read();if(d)break;chunks.push(value);got+=value.length;onProg(got/total);}
    return new Blob(chunks,{type:'video/mp4'});
  }).then(b=>{v.src=URL.createObjectURL(b);v.load();v.addEventListener('loadeddata',done,{once:true});})
    .catch(()=>{v.src=VSRC;v.load();v.addEventListener('loadeddata',done,{once:true});});
}
let filmTime=0,lastSeek=-1;
function filmFrame(){
  const r=film.el.getBoundingClientRect(),max=film.el.offsetHeight-innerHeight;
  film.tp=clamp(-r.top/max);
  const d=film.tp-film.p;film.p+=Math.abs(d)<1e-4?d:d*(RM?1:.12);
  const p=film.p;
  if(r.bottom<=0&&!film.force)return;film.force=false;
  // video scrub
  const vt=range(p,0,VEND)*(film.dur-.05);
  if(film.ready&&!film.vid.seeking&&Math.abs(vt-lastSeek)>.02){film.vid.currentTime=vt;lastSeek=vt;}
  film.vid.style.transform=`scale(${1+range(p,VEND-.06,VEND+.04)*.18})`;
  $('#fExtWrap').style.opacity=1-range(p,VEND-.02,VEND+.04);
  // warm light through the door
  const g=range(vt,TDOOR[0],TDOOR[0]+.9)*(1-range(vt,TDOOR[1]-.6,TDOOR[1]+.4));film.glow.style.opacity=(g*.85).toFixed(3);
  // 360 pano finale
  const pp=range(p,VEND,1);
  $('#panoC').style.opacity=pReady?range(p,VEND-.02,VEND+.05).toFixed(3):0;
  if(pr&&pReady&&p>VEND-.04){pc.fov=96-eOut(pp)*24;pc.updateProjectionMatrix();pc.rotation.order='YXZ';pc.rotation.y=-(pp*Math.PI*1.4)-filmTime*.02;pc.rotation.x=.04-pp*.06;pr.render(ps,pc);}
  // letterbox & captions
  const b=1-eOut(range(p,.02,.16));film.bt.style.transform=film.bb.style.transform=`scaleY(${b})`;
  const c1=range(p,0,.07);film.c1.style.opacity=1-c1;film.c1.style.transform=`translateY(${-c1*60}px) scale(${1+c1*.06})`;film.c1.style.filter=`blur(${c1*8}px)`;
  const cap=(el,a,b2,dx)=>{const i=range(vt,a,a+.8),o=range(vt,b2-.8,b2),v=i*(1-o);el.style.opacity=v;el.style.transform=`translate(${(1-i)*dx}px,${(1-i)*30-o*30}px)`;};
  cap(film.c2,1.6,TDOOR[0]-.2,-40);cap(film.c4,14,23,40);
  const c3=range(p,VEND+.04,VEND+.09);film.c3.style.opacity=c3;film.c3.style.transform=`translateY(${(1-c3)*40}px)`;film.c3.style.pointerEvents=c3>.5?'auto':'none';
  film.cue.style.opacity=1-range(p,0,.02);$('#fShade').style.opacity=1-range(p,.01,.08);
  film.pg.style.transform=`scaleX(${p})`;
  const s=Math.floor(vt);film.tc.textContent=`00:${String(s).padStart(2,'0')}`;
  const chap=p>=VEND?2:vt<8.6?0:1;film.ch.forEach((li,i)=>li.classList.toggle('on',i===chap));
}
function loop(time){filmTime=time/1000;if(film.p>VEND-.05)film.force=true;filmFrame();requestAnimationFrame(loop);}

/* =====================================================================
   SCROLL ANIMATIONS
   ===================================================================== */
let triggers=[];
function bind(isRelang){
  triggers.forEach(s=>s.kill());triggers=[];
  const reg=a=>{if(a&&a.scrollTrigger)triggers.push(a.scrollTrigger);return a;};
  const fr=(tg,from,to)=>reg(gsap.fromTo(tg,from,to));
  const once=(tg,st='top 88%')=>({trigger:tg,start:st,once:true});
  bindLb();
  if(RM){ScrollTrigger.refresh();return;}
  $$('main .split').forEach(h=>fr($$('.char',h),{opacity:0,yPercent:100,rotate:6},{opacity:1,yPercent:0,rotate:0,duration:1.2,stagger:.018,ease:'expo.out',scrollTrigger:once(h,'top 88%')}));
  $$('.rv').forEach(el=>fr(el,{opacity:0,y:40},{opacity:1,y:0,duration:1.3,ease:'power3.out',scrollTrigger:once(el,'top 92%')}));
  $$('main .eyebrow').forEach(el=>fr(el,{'--ls':0,opacity:0},{'--ls':1,opacity:1,duration:1.3,ease:'expo.out',scrollTrigger:once(el,'top 94%')}));
  // statement — words light up with scroll
  fr('#bigText .wd',{opacity:.14},{opacity:1,stagger:.05,ease:'none',scrollTrigger:{trigger:'#bigText',start:'top 80%',end:'bottom 45%',scrub:true}});
  $$('.stat').forEach((s,i)=>fr(s,{opacity:0,y:50},{opacity:1,y:0,duration:1.2,delay:i*.1,ease:'expo.out',scrollTrigger:once(s,'top 94%')}));
  $$('[data-count]').forEach(el=>{const to=+el.dataset.count,from=+(el.dataset.from||0),o={v:from};fr(o,{v:from},{v:to,duration:2.2,ease:'power3.out',scrollTrigger:once(el,'top 95%'),onUpdate:()=>el.innerHTML=Math.round(o.v)+(el.dataset.suf?`<sup>${el.dataset.suf}</sup>`:'')});});
  // halls — cards rise in 3D, photos open like curtains, tilt with the pointer
  $$('.hall').forEach((hl,i)=>{
    fr(hl,{opacity:0,y:120,rotateX:14},{opacity:1,y:0,rotateX:0,duration:1.5,delay:i*.12,ease:'expo.out',scrollTrigger:once('#hallGrid','top 88%')});
    fr($('.ph',hl),{clipPath:'inset(100% 0% 0% 0%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:1.7,delay:.2+i*.12,ease:'expo.inOut',scrollTrigger:once('#hallGrid','top 88%')});
    fr($('.ph img',hl),{yPercent:-10},{yPercent:2,ease:'none',scrollTrigger:{trigger:hl,start:'top bottom',end:'bottom top',scrub:true}});
    fr($$('.bd > *',hl),{opacity:0,y:24},{opacity:1,y:0,duration:1,stagger:.06,delay:.5+i*.12,ease:'expo.out',scrollTrigger:once('#hallGrid','top 88%')});
    if(FINE){hl.onpointermove=e=>{const r=hl.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;hl.style.setProperty('--mx',x*100+'%');hl.style.setProperty('--my',y*100+'%');gsap.to(hl,{rotateY:(x-.5)*10,rotateX:(.5-y)*8,duration:.8,ease:'power3.out',transformPerspective:1200});};
      hl.onpointerleave=()=>gsap.to(hl,{rotateY:0,rotateX:0,duration:1.2,ease:'elastic.out(1,.5)'});}
  });
  fr('.marquee .mq-row',{opacity:0,y:40},{opacity:1,y:0,duration:1.4,stagger:.15,ease:'expo.out',scrollTrigger:once('.marquee','top 95%')});
  // 360 viewer opens like a lens
  fr('#viewer',{clipPath:'inset(12% 10% 12% 10% round 22px)'},{clipPath:'inset(0% 0% 0% 0% round 22px)',ease:'none',scrollTrigger:{trigger:'#viewer',start:'top 100%',end:'top 25%',scrub:true}});
  // menus
  fr('.mtab',{opacity:0,x:-40},{opacity:1,x:0,duration:1,stagger:.08,ease:'expo.out',scrollTrigger:once('.mtabs','top 85%')});
  fr('#mCard',{opacity:0,y:60,rotateX:-12,transformPerspective:1200},{opacity:1,y:0,rotateX:0,duration:1.4,ease:'expo.out',scrollTrigger:once('#mCard','top 85%')});
  // gallery — pinned horizontal film strip
  const tr=$('#gTrack');
  if(innerWidth>900&&tr){
    const hs=reg(gsap.to(tr,{x:()=>-(tr.scrollWidth-innerWidth),ease:'none',scrollTrigger:{trigger:'#hgal',start:'top top',end:()=>'+='+(tr.scrollWidth-innerWidth),pin:true,scrub:1,invalidateOnRefresh:true,
      onUpdate:st=>{$('#gBar').style.transform=`scaleX(${st.progress})`;$('#gCnt').textContent=String(1+Math.round(st.progress*(GALLERY.length-1))).padStart(2,'0');}}}));
    $$('.gfig',tr).forEach(g=>{fr($('img',g),{xPercent:-8,scale:1.15},{xPercent:8,scale:1.15,ease:'none',scrollTrigger:{trigger:g,containerAnimation:hs,start:'left right',end:'right left',scrub:true}});
      fr(g,{clipPath:'inset(12% 0% 12% 0% round 6px)'},{clipPath:'inset(0% 0% 0% 0% round 6px)',ease:'none',scrollTrigger:{trigger:g,containerAnimation:hs,start:'left 100%',end:'left 55%',scrub:true}});});
  } else $$('.gfig').forEach(g=>fr(g,{opacity:0,y:40},{opacity:1,y:0,duration:1.2,ease:'expo.out',scrollTrigger:once(g,'top 95%')}));
  // services
  $$('.sv').forEach((s,i)=>fr(s,{opacity:0,y:40},{opacity:1,y:0,duration:1.1,delay:(i%3)*.1,ease:'expo.out',scrollTrigger:once(s,'top 92%')}));
  $$('.sv svg *').forEach(p=>{let l=60;try{l=Math.ceil(p.getTotalLength()+2);}catch(e){}fr(p,{strokeDasharray:l,strokeDashoffset:l},{strokeDashoffset:0,duration:1.8,ease:'power2.inOut',scrollTrigger:once(p.closest('.sv'),'top 90%')});});
  // location — the photo opens from a small window to the full frame
  if(innerWidth>760){fr('#locWin',{clipPath:'inset(18% 26% 18% 26% round 20px)'},{clipPath:'inset(0% 0% 0% 0% round 20px)',ease:'none',scrollTrigger:{trigger:'#locFig',start:'top 85%',end:'center 55%',scrub:1}});
    fr('#locWin img',{scale:1.25},{scale:1,ease:'none',scrollTrigger:{trigger:'#locFig',start:'top 85%',end:'center 55%',scrub:1}});}
  else gsap.set('#locWin img',{scale:1});
  fr('#locCard',{opacity:0,y:80},{opacity:1,y:0,duration:1.4,ease:'expo.out',scrollTrigger:once('#locCard','top 92%')});
  fr($$('#locCard > *'),{opacity:0,y:20},{opacity:1,y:0,duration:1,stagger:.07,delay:.3,ease:'expo.out',scrollTrigger:once('#locCard','top 92%')});
  fr('#mapbox',{opacity:0,y:60,scale:.96},{opacity:1,y:0,scale:1,duration:1.5,ease:'expo.out',scrollTrigger:once('#mapbox','top 88%')});
  // form & footer
  fr('#resForm .f,#resForm .fend',{opacity:0,y:30},{opacity:1,y:0,duration:1,stagger:.05,ease:'expo.out',scrollTrigger:once('#resForm','top 85%')});
  {const tx=$('#mega text');let L2=3000;try{L2=tx.getComputedTextLength()*2.2;}catch(e){}
   fr(tx,{strokeDasharray:L2,strokeDashoffset:L2,fillOpacity:0},{strokeDashoffset:0,duration:2.6,ease:'power2.inOut',scrollTrigger:once('#mega','top 95%')});
   fr(tx,{fillOpacity:0},{fillOpacity:1,duration:1.6,delay:1.8,ease:'power2.out',scrollTrigger:once('#mega','top 95%')});}
  // magnetic buttons
  if(FINE)$$('.magnetic,.btn-gold').forEach(m=>{m.onpointermove=e=>{const r=m.getBoundingClientRect();gsap.to(m,{x:(e.clientX-r.left-r.width/2)*.25,y:(e.clientY-r.top-r.height/2)*.35,duration:.6,ease:'power3.out'});};
    m.onpointerleave=()=>gsap.to(m,{x:0,y:0,duration:1,ease:'elastic.out(1,.45)'});});
  // section headings drift slightly with scroll
  $$('main .head .h2').forEach(h=>fr(h,{x:-30},{x:30,ease:'none',scrollTrigger:{trigger:h,start:'top bottom',end:'bottom top',scrub:true}}));
  if(isRelang)ScrollTrigger.getAll().forEach(s=>{if(s.vars.once&&s.start<scrollY+innerHeight&&s.animation)s.animation.progress(1);});
  ScrollTrigger.refresh();
}
function bindEvents(){
  const fl=$('#evFloat');if(!FINE)return;
  $$('.evr').forEach(r=>{r.onpointerenter=()=>{$$('img',fl).forEach(i=>i.classList.toggle('on',i.dataset.k===r.dataset.img));gsap.to(EVF,{s:1,o:1,duration:.6,ease:'expo.out'});};
    r.onpointerleave=()=>gsap.to(EVF,{s:.6,o:0,duration:.5,ease:'expo.out'});});
  if(!window.__evTick){window.__evTick=1;let fx=0,fy=0,tx=0,ty=0,vx=0;addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY;},{passive:true});
    gsap.ticker.add(()=>{const dx=tx-fx;fx+=dx*.12;fy+=(ty-fy)*.12;vx+=(dx*.04-vx)*.2;fl.style.opacity=EVF.o;fl.style.transform=`translate(${fx}px,${fy}px) rotate(${clamp(vx,-8,8)}deg) scale(${EVF.s})`;});}
}
const EVF={s:.6,o:0};

/* gold light follows the pointer across sections */
if(FINE)addEventListener('pointermove',e=>{const s=e.target.closest&&e.target.closest('.sec');if(!s)return;const r=s.getBoundingClientRect();s.style.setProperty('--gx',(e.clientX-r.left)+'px');s.style.setProperty('--gy',(e.clientY-r.top)+'px');},{passive:true});
/* marquee — reacts to scroll speed */
{let x1=0,x2=0,vel=0,ly=scrollY;gsap.ticker.add(()=>{const dy=scrollY-ly;ly=scrollY;vel+=(dy-vel)*.1;const sp=1+Math.min(Math.abs(vel)*.15,8);
  const r1=$('#mq1'),r2=$('#mq2');if(!r1)return;const w1=r1.scrollWidth/2,w2=r2.scrollWidth/2;if(!w1)return;x1-=.6*sp;x2+=.6*sp;if(-x1>w1)x1+=w1;if(x2>0)x2-=w2;
  const sk=Math.max(-10,Math.min(10,-vel*.15));r1.style.transform=`translateX(${x1}px) skewX(${sk}deg)`;r2.style.transform=`translateX(${x2}px) skewX(${sk}deg)`;});}
/* lightbox */
const lb=$('#lb'),lbImg=$('img',lb),lbCap=$('.cap',lb);let lbList=[],lbI=0;
function lbShow(n){lbI=(n+lbList.length)%lbList.length;const[f,h]=lbList[lbI];gsap.to(lbImg,{opacity:0,scale:.96,duration:.2,onComplete:()=>{lbImg.onload=()=>gsap.to(lbImg,{opacity:1,scale:1,duration:.7,ease:'expo.out'});lbImg.src=img(f);lbCap.textContent=`${lbI+1} / ${lbList.length} · ${hallName(h)}`;}});}
function openLb(list,i){lbList=list;lb.classList.add('open');lbShow(i);}
function bindLb(){$$('.gi').forEach(g=>{const o=()=>openLb(GALLERY,+g.dataset.i);g.onclick=o;g.onkeydown=e=>{if(e.key==='Enter')o();};});}
$('.p',lb).onclick=()=>lbShow(lbI-1);$('.n',lb).onclick=()=>lbShow(lbI+1);$('.c',lb).onclick=()=>lb.classList.remove('open');lb.onclick=e=>{if(e.target===lb)lb.classList.remove('open');};
addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')lb.classList.remove('open');if(e.key==='ArrowRight')lbShow(lbI+1);if(e.key==='ArrowLeft')lbShow(lbI-1);});

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
   360° VIEWER
   ===================================================================== */
let viewerFull=false;
const V={yaw:0,pitch:0,tyaw:0,tpitch:0,fov:75,tfov:75,vy:0,vp:0,drag:false,auto:true,busy:false,visible:false};
const vbox=$('#viewer'),vc=$('#vcanvas'),hsLayer=$('#hsLayer'),card=$('#hsCard'),vfade=$('#vFade');
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
  vc.addEventListener('wheel',e=>{if(!viewerFull&&!e.ctrlKey&&Math.abs(e.deltaY)<40)return;e.preventDefault();V.tfov+=e.deltaY*.03;},{passive:false});
  new IntersectionObserver(es=>V.visible=es[0].isIntersecting,{threshold:.05}).observe(vbox);
  const tmp=new THREE.Vector3();
  (function vloop(){requestAnimationFrame(vloop);if(!V.visible&&!viewerFull)return;
    if(!V.drag){V.tyaw+=V.vy;V.tpitch+=V.vp;V.vy*=.92;V.vp*=.92;if(V.auto)V.tyaw+=.0009;}
    V.tpitch=THREE.MathUtils.clamp(V.tpitch,-1.35,1.35);V.tfov=THREE.MathUtils.clamp(V.tfov,30,95);
    V.yaw+=(V.tyaw-V.yaw)*.1;V.pitch+=(V.tpitch-V.pitch)*.1;V.fov+=(V.tfov-V.fov)*.1;
    vcam.fov=V.fov;vcam.updateProjectionMatrix();vcam.rotation.order='YXZ';vcam.rotation.y=-V.yaw;vcam.rotation.x=V.pitch;vr.render(vs,vcam);
    const w=vbox.clientWidth,h=vbox.clientHeight;
    (V.hs||[]).forEach(({el,v})=>{tmp.copy(v).project(vcam);const b=tmp.z>1;el.style.transform=`translate(${(tmp.x*.5+.5)*w}px,${(-tmp.y*.5+.5)*h}px)`;el.style.opacity=b?0:1;el.style.pointerEvents=b?'none':'auto';});
  })();
}
const ypToVec=(yw,pt)=>{const y=THREE.MathUtils.degToRad(yw),p=THREE.MathUtils.degToRad(pt);return new THREE.Vector3(Math.sin(y)*Math.cos(p)*9,Math.sin(p)*9,-Math.cos(y)*Math.cos(p)*9);};
const loadTex=src=>texCache[src]?Promise.resolve(texCache[src]):new Promise((res,rej)=>new THREE.TextureLoader().load(src,tx=>{tx.colorSpace=THREE.SRGBColorSpace;tx.anisotropy=vr.capabilities.getMaxAnisotropy();texCache[src]=tx;res(tx);},undefined,rej));
async function setHall(id,relabel){
  const h=HALLS.find(x=>x.id===id);if(!h||!h.pano)return;if(!vr)initViewer();
  const label=()=>{$('#vAlt').textContent=L(h.alt);$('#vName').innerHTML=[...L(h.name)].map((c,i)=>c===' '?' ':`<span class="char" style="animation-delay:${i*.035}s">${c}</span>`).join('');
    $$('#vTabs button').forEach(b=>b.classList.toggle('on',b.dataset.h===id));
    hsLayer.innerHTML='';V.hs=h.hs.map(s=>{const el=document.createElement('button');el.className='hs';el.innerHTML=`<i></i><span>${L(s.t)}</span>`;el.setAttribute('aria-label',L(s.t));
      el.onclick=ev=>{ev.stopPropagation();$('#hcK').textContent=L(h.name);$('#hcH').textContent=L(s.t);$('#hcP').textContent=L(s.p);card.classList.add('show');V.auto=false;V.tyaw=THREE.MathUtils.degToRad(s.yaw);V.tpitch=THREE.MathUtils.degToRad(s.pitch)*.8;V.tfov=55;};
      hsLayer.appendChild(el);return{el,v:ypToVec(s.yaw,s.pitch)};});};
  if(relabel&&window.__vHall===id){label();return;}
  if(V.busy||window.__vHall===id)return;V.busy=true;card.classList.remove('show');
  vfade.style.opacity=1;V.tfov=45;await new Promise(r=>setTimeout(r,window.__vHall?700:50));
  window.__vHall=id;label();
  try{sphere.material.dispose();sphere.material=new THREE.MeshBasicMaterial({map:await loadTex(h.pano)});}catch(e){console.warn(e);}
  V.yaw=-.3;V.tyaw=0;V.pitch=V.tpitch=0;V.fov=100;V.tfov=75;vfade.style.opacity=0;V.busy=false;
}
$('.x',card).onclick=()=>{card.classList.remove('show');V.tfov=75;};
$('#vAuto').onclick=()=>{V.auto=!V.auto;$('#vAuto').classList.toggle('on',V.auto);};
$('#vFull').onclick=()=>{if(document.fullscreenElement)document.exitFullscreen();else vbox.requestFullscreen?.().catch(()=>{});};
document.addEventListener('fullscreenchange',()=>{viewerFull=!!document.fullscreenElement;vbox.classList.toggle('fs',viewerFull);});
new IntersectionObserver(es=>{if(es[0].isIntersecting&&!window.__vHall)setHall('grand');},{rootMargin:'600px'}).observe(vbox);

/* =====================================================================
   3D MAP (MapLibre GL + OpenFreeMap, 3D buildings)
   ===================================================================== */
let map,mapRot=true;
function loadMap(){
  const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css';document.head.appendChild(css);
  const s=document.createElement('script');s.src='https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js';s.onload=initMap;s.onerror=mapFail;document.head.appendChild(s);
}
function mapFail(){$('#mapbox .mfb').textContent=t('lo.err');}
function initMap(){
  try{
    map=new maplibregl.Map({container:'map',style:'https://tiles.openfreemap.org/styles/positron',center:[IJA.lng,IJA.lat],zoom:15.2,pitch:0,bearing:0,maxPitch:75,attributionControl:{compact:true},cooperativeGestures:MOBILE});
  }catch(e){return mapFail();}
  map.addControl(new maplibregl.NavigationControl({visualizePitch:true}),'bottom-right');
  map.on('error',e=>console.warn('map',e&&e.error));
  map.on('load',()=>{
    $('#mapbox .mfb').style.display='none';
    const src=Object.entries(map.getStyle().sources).find(([k,v])=>v.type==='vector')?.[0];
    const before=map.getStyle().layers.find(l=>l.type==='symbol')?.id;
    if(src){
      try{map.addLayer({id:'ija-3d',type:'fill-extrusion',source:src,'source-layer':'building',minzoom:13,
        paint:{'fill-extrusion-color':['interpolate',['linear'],['coalesce',['get','render_height'],8],0,'#e9dfcc',30,'#d9c49c',80,'#c9a96d'],
          'fill-extrusion-height':['interpolate',['linear'],['zoom'],13,0,14.5,['coalesce',['get','render_height'],8]],
          'fill-extrusion-base':['coalesce',['get','render_min_height'],0],'fill-extrusion-opacity':.92}},before);}catch(e){console.warn(e);}
    }
    const el=document.createElement('div');el.className='pin';el.innerHTML='<div class="bd"><img src="/assets/ija-logo-gold.svg" alt="">IJA Events</div><i class="st"></i><i class="dt"></i>';
    el.onclick=()=>open('https://www.google.com/maps/place/Ija+Events/@41.3398973,19.8395694,17z','_blank');
    new maplibregl.Marker({element:el,anchor:'bottom'}).setLngLat([IJA.lng,IJA.lat]).addTo(map);
    // cinematic fly-in, then slow orbit
    map.flyTo({center:[IJA.lng,IJA.lat],zoom:17.2,pitch:62,bearing:-28,duration:RM?0:5200,essential:true,curve:1.4});
    map.once('moveend',orbit);
    ['dragstart','zoomstart','rotatestart','pitchstart','touchstart'].forEach(ev=>map.on(ev,e=>{if(e.originalEvent){mapRot=false;$('#mRot').classList.remove('on');}}));
  });
}
function orbit(){if(!map||!mapRot||RM)return;map.easeTo({bearing:map.getBearing()+40,duration:16000,easing:x=>x});map.once('moveend',()=>mapRot&&orbit());}
$('#mRot').onclick=()=>{mapRot=!mapRot;$('#mRot').classList.toggle('on',mapRot);if(mapRot)orbit();else map&&map.stop();};
new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){o.disconnect();loadMap();}},{rootMargin:'800px'}).observe($('#mapbox'));

/* =====================================================================
   LOADER & BOOT
   ===================================================================== */
const pct=$('#pct');let loadP=0;function setLoad(v){loadP=Math.max(loadP,v);gsap.to('#lbar',{scaleX:loadP/100,duration:.6,ease:'power2.out'});pct.textContent=Math.round(loadP);}
fetch('/assets/ija-logo-gold.svg').then(r=>r.text()).then(svg=>{const box=$('#loaderLogo');box.innerHTML=svg;const ps=$$('path',box);
  ps.forEach(p=>{let l=400;try{l=p.getTotalLength();}catch(e){}p.style.strokeDasharray=l;p.style.strokeDashoffset=l;});
  gsap.to(ps,{strokeDashoffset:0,duration:1.6,stagger:.04,ease:'power2.inOut',onComplete:()=>box.classList.add('filled')});}).catch(()=>{});
const po=new Image();po.src='/assets/film-poster.jpg';
loadFilm(f=>setLoad(10+f*88)).then(()=>{}).finally(()=>{});
const waitReady=setInterval(()=>{if(film.ready){clearInterval(waitReady);finish();}},120);
let finished=false;
function finish(){if(finished)return;finished=true;setLoad(100);
  gsap.timeline({delay:.9})
   .to('#loader .lg,#loader .tg,#loader .cnt',{opacity:0,y:-20,duration:.6,stagger:.05,ease:'power2.in'})
   .to('#loader',{clipPath:'inset(0 0 100% 0)',duration:1.2,ease:'expo.inOut'})
   .add(()=>{document.body.classList.remove('lock');lenis&&lenis.start();},'-=.6')
   .fromTo('#fExtWrap',{scale:1.2,filter:'brightness(.3)'},{scale:1,filter:'brightness(1)',duration:2.2,ease:'expo.out',clearProps:'transform,filter'},'-=.9')
   .from('#c1 .lg',{opacity:0,y:30,duration:1.2,ease:'expo.out'},'-=1.8')
   .from('#c1 h1 .char',{opacity:0,yPercent:110,rotate:8,duration:1.3,stagger:.018,ease:'expo.out'},'-=1.5')
   .from('#c1 p',{opacity:0,letterSpacing:'1em',duration:1.4,ease:'expo.out'},'-=1.1')
   .from('#nav',{opacity:0,duration:1,ease:'power2.out',clearProps:'opacity'},'-=1.2')
   .from('.hud,#cue',{opacity:0,duration:1},'-=.8')
   .set('#loader',{display:'none'});
}
setTimeout(finish,15000);
applyLang();bind();initPano();requestAnimationFrame(loop);setLoad(6);
addEventListener('load',()=>ScrollTrigger.refresh());
