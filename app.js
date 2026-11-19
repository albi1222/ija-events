import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
gsap.registerPlugin(ScrollTrigger);

/* ====================================================================
   CONTENT & TRANSLATIONS (SQ default, EN)
   ==================================================================== */
const MODEL_URL='/hf/user_3JJdXTgHZ1RefQgaL5TKAYaM9hz/hf_20261119_160442_907292f9-6b02-4bd7-bf06-16befa0764b6.glb';
const HFU='/hfu/user_3JJdXTgHZ1RefQgaL5TKAYaM9hz/';
const T={
 sq:{'nav.venue':'Ambienti','nav.halls':'Sallat','nav.x360':'Përvoja 360°','nav.events':'Eventet','nav.menus':'Menutë','nav.gallery':'Galeria','nav.reserve':'Rezervo','hint':'Zbrit',
  's1.t':'Çdo <br>Moment','s1.a':'Çdo moment meriton një mjedis të jashtëzakonshëm. Që nga viti 2000, IJA Events hap dyert për mbrëmjet që familjet i kujtojnë gjithë jetën.','s1.b':'Aty ku festat e paharrueshme bëhen kujtime të përjetshme: tavane me stuko, dritë kristali, gur i lëmuar dhe një shërbim që nuk harron asnjë detaj.',
  's2.t':'Salla e <br>Madhe','s2.d':'Kolona klasike, tavan me kasetona në dritë të ngrohtë dhe tavolina të rrumbullakëta për dhjetë veta. E krijuar për dasma dhe mbrëmje gala, ku çdo i ftuar ndihet pjesë e festës.',
  's3.t':'Dritë Kristali','s3.d':'Salla intime në fildish dhe gri të butë, me llambadarë kristali, për fejesa, ditëlindje dhe pritje që kërkojnë diçka më personale.',
  's4.t':'Kujtime të <br>Përjetshme','s4.d':'Hyni brenda para se të na vizitoni. Ecni në çdo sallë në 360°, zgjidhni menunë dhe filloni të planifikoni mbrëmjen që do të kujtohet për vite.','s4.c1':'Zbuloni sallat','s4.c2':'Eksploroni përvojën',
  'halls.k':'Sallat tona','halls.t':'Zgjidhni <em>ambientin tuaj.</em>','halls.l':'Tre salla, secila me karakterin e vet. Hyni në secilën në 360°, hapni detajet dhe ecni nëpër sallë para se të na vizitoni.',
  'cap':'Kapaciteti','evs':'Evente','tbc':'(për t\'u konfirmuar)','enter':'Hyni në 360°','v360':'Pamje 360°',
  'st.1':'Që nga viti','st.2':'Salla elegante','st.3':'Të ftuar në Sallën e Madhe','st.4':'Menu, pijet të përfshira',
  'x.k':'Përvoja 360°','x.t':'Mos shikoni vetëm. <em>Hyni brenda.</em>','x.l':'Tërhiqni për t\'u rrotulluar, zmadhoni me rrotë ose me dy gishta dhe ndiqni pikat e arta nëpër sallë.','x.drag':'Tërhiq për të parë përreth','x.note':'Pamjet 360° janë vizualizime të krijuara me AI mbi bazën e fotove të sallave tona. Për sallën reale, shikoni videon.','x.real':'Video reale nga salla','x.walk':'Video reale','x.auto':'Rrotullim automatik','x.full':'Ekran i plotë',
  'ev.k':'Evente & përvoja','ev.t':'Çdo festë, <em>historia e vet.</em>','ev.l':'Nga dasma e madhe te darka intime, çdo event ka atmosferën e vet te IJA Events.',
  'mn.k':'Tryeza','mn.t':'Katër menu. <em>Një standard.</em>','mn.l':'Çdo menu përfshin pjatën e parë, dy pjata kryesore, pjata anësore dhe një ëmbëlsirë sipas zgjedhjes, si dhe kafe, pije, ujë dhe fruta.','mn.dk':'Ëmbëlsira: zgjidhni një','mn.dv':'Hallvë · Revani · Grurë të ëmbël','mn.ik':'Të përfshira në çdo menu','mn.iv':'Kafe · Pije të gazuara (1L, Pepsi) · Ujë natyral & i gazuar · Fruta miks','mn.f':'Pjata e parë','mn.m':'Pjatat kryesore','mn.s':'Pjatat anësore','mn.pp':'Për person',
  'g.k':'Galeria','g.t':'Ambienti, <em>në kuadro.</em>','g.l':'Prekni çdo foto për ta parë në ekran të plotë.',
  'sv.k':'Përvoja & detajet','sv.t':'Gjithçka, <em>e kujdesur.</em>',
  'c.k':'Rezervime','c.t':'Le ta nisim <em>mbrëmjen tuaj.</em>','c.l':'Na tregoni për eventin tuaj dhe ju kthejmë përgjigje me disponueshmërinë dhe një ofertë të personalizuar.','c.call':'Na telefononi','c.wa':'Na shkruani direkt',
  'f.type':'Lloji i eventit','f.date':'Data e preferuar','f.guests':'Numri i të ftuarve','f.hall':'Salla','f.menu':'Menuja','f.name':'Emri i plotë','f.phone':'Telefoni','f.msg':'Mesazhi','f.msgph':'Tema, orari, kërkesa të veçanta…','f.note':'Kërkesa juaj hapet në WhatsApp si mesazh gati për t\'u dërguar te IJA Events. Asgjë nuk dërgohet pa shtypur ju "Dërgo".','f.submit':'Përgatit kërkesën','f.ok':'Kërkesa juaj është gati.','f.okd':'Shtypni më poshtë për ta hapur në WhatsApp me të dhënat tuaja, pastaj dërgojeni.','f.wa':'Dërgo në WhatsApp','f.e1':'Ju lutem zgjidhni llojin e eventit.','f.e2':'Zgjidhni një datë në të ardhmen.','f.e3':'Nga 10 deri në 600 të ftuar.','f.e4':'Ju lutem shkruani emrin.','f.e5':'Shkruani një numër të vlefshëm.','f.nopref':'Pa preferencë','f.undec':'Ende pa vendosur',
  'ft.d':'Salla luksoze për dasma, fejesa dhe festa që nga viti 2000.','ft.e':'Eksploro','ft.c':'Kontakt','ft.tag':'Çdo moment meriton një mjedis të jashtëzakonshëm.',
  'wa.hi':'Përshëndetje IJA Events,\nDëshiroj të bëj një kërkesë për rezervim.','wa.ev':'Eventi','wa.date':'Data','wa.g':'Të ftuar','wa.h':'Salla','wa.m':'Menuja','wa.n':'Emri','wa.p':'Telefoni','wa.x':'Shënime','wa.thx':'Faleminderit!',
  'cur.view':'Shiko','cur.enter':'Hyni','cur.drag':'Tërhiq'},
 en:{'nav.venue':'The Venue','nav.halls':'Our Halls','nav.x360':'360° Experience','nav.events':'Events','nav.menus':'Menus','nav.gallery':'Gallery','nav.reserve':'Reserve','hint':'Scroll',
  's1.t':'Every <br>Moment','s1.a':'Every moment deserves an extraordinary setting. Since 2000, IJA Events has opened its doors to the evenings families remember for a lifetime.','s1.b':'Where unforgettable celebrations become timeless memories: stucco ceilings, crystal light, polished stone and service that never misses a detail.',
  's2.t':'Grand <br>Ballroom','s2.d':'Classical columns, a coffered ceiling in warm light and round tables for ten. Built for weddings and gala nights where every guest feels part of the celebration.',
  's3.t':'Crystal Light','s3.d':'Intimate salons in ivory and soft grey, crowned with crystal chandeliers, for engagements, birthdays and receptions that call for something more personal.',
  's4.t':'Timeless <br>Memories','s4.d':'Step inside before you visit. Walk through every hall in 360°, choose your menu and begin planning the evening that will be remembered for years.','s4.c1':'Discover Our Venues','s4.c2':'Explore the Experience',
  'halls.k':'Our Halls','halls.t':'Choose your <em>setting.</em>','halls.l':'Three halls, each with its own character. Step inside any of them in 360°, open the details and walk the room before you visit.',
  'cap':'Capacity','evs':'Events','tbc':'(to be confirmed)','enter':'Step inside in 360°','v360':'360° view',
  'st.1':'Established','st.2':'Elegant halls','st.3':'Guests in the Grand Ballroom','st.4':'Menus, drinks included',
  'x.k':'360° Experience','x.t':'Don\'t just look. <em>Stand inside.</em>','x.l':'Drag to turn, scroll or pinch to zoom, and follow the golden markers through the room.','x.drag':'Drag to look around','x.note':'360° views are AI-generated visualisations based on photographs of our halls. For the real room, play the video.','x.real':'Real on-site footage','x.walk':'Real video','x.auto':'Auto-rotate','x.full':'Fullscreen',
  'ev.k':'Events & Experiences','ev.t':'Every occasion, <em>its own story.</em>','ev.l':'From grand weddings to intimate dinners, every event has its own atmosphere at IJA Events.',
  'mn.k':'The Table','mn.t':'Four menus. <em>One standard.</em>','mn.l':'Every menu includes a first course, two mains, sides and one dessert of your choice, plus coffee, soft drinks, water and fresh fruit.','mn.dk':'Dessert: choose one','mn.dv':'Halva · Revani · Sweet wheat','mn.ik':'Included with every menu','mn.iv':'Coffee · Soft drinks (1L, Pepsi) · Still & sparkling water · Mixed fruit','mn.f':'First course','mn.m':'Main courses','mn.s':'Sides','mn.pp':'Per person',
  'g.k':'Gallery','g.t':'The venue, <em>in frames.</em>','g.l':'Tap any photo to see it full screen.',
  'sv.k':'Experience & Details','sv.t':'Everything, <em>taken care of.</em>',
  'c.k':'Reservations','c.t':'Let\'s begin <em>your evening.</em>','c.l':'Tell us about your event and we\'ll come back to you with availability and a tailored proposal.','c.call':'Call us','c.wa':'Message us directly',
  'f.type':'Event type','f.date':'Preferred date','f.guests':'Number of guests','f.hall':'Hall','f.menu':'Menu','f.name':'Full name','f.phone':'Phone','f.msg':'Message','f.msgph':'Theme, timing, special requests…','f.note':'Your request opens in WhatsApp as a ready-to-send message to IJA Events. Nothing is sent until you press send.','f.submit':'Prepare request','f.ok':'Your request is ready.','f.okd':'Tap below to open WhatsApp with your details filled in, then press send.','f.wa':'Send on WhatsApp','f.e1':'Please choose an event type.','f.e2':'Please choose a future date.','f.e3':'Between 10 and 600 guests.','f.e4':'Please enter your name.','f.e5':'Please enter a valid phone number.','f.nopref':'No preference','f.undec':'Not decided yet',
  'ft.d':'Luxury event halls for weddings, engagements and celebrations since 2000.','ft.e':'Explore','ft.c':'Contact','ft.tag':'Every moment deserves an extraordinary setting.',
  'wa.hi':'Hello IJA Events,\nI\'d like to request a reservation.','wa.ev':'Event','wa.date':'Date','wa.g':'Guests','wa.h':'Hall','wa.m':'Menu','wa.n':'Name','wa.p':'Phone','wa.x':'Notes','wa.thx':'Thank you!',
  'cur.view':'View','cur.enter':'Enter','cur.drag':'Drag'}
};
const HALLS=[
 {id:'grand',img:'/assets/grand-1.webp',pano:HFU+'cd706b80-84a6-44a5-aa71-8d46c06d13b3.jpg',walk:'/assets/walk-grand.mp4',
  name:{sq:'Salla e Madhe',en:'Grand Ballroom'},alt:{sq:'Grand Ballroom',en:'Salla e Madhe'},cap:{sq:'Deri në 350 të ftuar',en:'Up to 350 guests'},
  ev:{sq:'Dasma · Darka gala · Korporative',en:'Weddings · Gala dinners · Corporate'},
  desc:{sq:'Salla jonë më e madhe: kolona klasike, tavan me kasetona stuko në dritë të ngrohtë dhe tavolina të rrumbullakëta për dhjetë veta.',en:'Our largest hall: classical columns, a coffered stucco ceiling in warm cove light and round banquet tables for ten.'},
  hs:[{yaw:-1,pitch:18,t:{sq:'Llambadari prej bronzi',en:'Bronze chandelier'},p:{sq:'Një llambadar bronzi në zemër të sallës, i rrethuar nga tavani me rrjetë dhe një shirit drite të ngrohtë.',en:'A bronze chandelier at the heart of the hall, framed by a lattice ceiling and a ribbon of warm cove light.'}},
      {yaw:-60,pitch:58,t:{sq:'Tavani me kasetona',en:'Coffered ceiling'},p:{sq:'Kasetona stuko të punuara me dorë përgjatë gjithë sallës, secila me dritën e vet.',en:'Hand-finished coffered stucco panels run the full length of the ballroom, each with its own light.'}},
      {yaw:18,pitch:1,t:{sq:'Koka e sallës',en:'Head of the hall'},p:{sq:'Muri i fundit me emblemën IJA Events dhe dyert prej xhami: sfond natyral për tavolinën kryesore, hyrjen e çiftit ose skenën.',en:'The far wall with the IJA Events crest and glass doors: a natural backdrop for the head table, the couple\'s entrance or a stage.'}},
      {yaw:14,pitch:-36,t:{sq:'Shtrimi i tavolinës',en:'Table setting'},p:{sq:'Tavolina të rrumbullakëta për dhjetë veta, me servis të plotë, gota kristali dhe karrige kadifeje.',en:'Round tables for ten, with full place settings, glassware and tufted velvet chairs.'}},
      {yaw:-131,pitch:10,t:{sq:'Relievet prej stukoje',en:'Stucco reliefs'},p:{sq:'Medalione baroke dhe korniza stukoje mes kolonave klasike.',en:'Baroque stucco medallions and panel mouldings between classical columns.'}}]},
 {id:'royal',img:'/assets/royal-1.webp',pano:HFU+'93327ffc-0088-4fbb-a540-4f04f5025b3e.jpg',
  name:{sq:'Salloni Mbretëror',en:'Royal Salon'},alt:{sq:'Royal Salon',en:'Salloni Mbretëror'},cap:{sq:'Deri në 40 të ftuar',en:'Up to 40 guests'},
  ev:{sq:'Fejesa · Mbledhje familjare',en:'Engagements · Family gatherings'},
  desc:{sq:'Një sallon në ngjyrë fildishi pas dyerve me xham të gdhendur, me dy llambadarë kristali, mure me panele, divan kapitone dhe dysheme mermeri.',en:'An ivory salon behind etched glass doors with two crystal chandeliers, panelled walls, a tufted sofa and white marble floors.'},
  hs:[{yaw:58,pitch:52,t:{sq:'Llambadarët kristal',en:'Crystal chandeliers'},p:{sq:'Dy llambadarë kristali me kate shpërndajnë dritën në tavanin fildish.',en:'Two tiered crystal chandeliers scatter light across the ivory ceiling.'}},
      {yaw:-4,pitch:-22,t:{sq:'Këndi i ndenjes',en:'Lounge corner'},p:{sq:'Një divan kapitone në ngjyrë shampanje, ideal për çiftin, të ftuarit e nderit ose fotot.',en:'A tufted champagne sofa, perfect for the couple, the guests of honour or photographs.'}},
      {yaw:-98,pitch:14,t:{sq:'Muret me panele',en:'Panelled walls'},p:{sq:'Panele me tekstil damask në korniza të bardha, me aplikë bronzi dhe një orë muri dekorative.',en:'Damask panels in white mouldings, with brass sconces and a statement wall clock.'}},
      {yaw:150,pitch:-4,t:{sq:'Dyert me xham',en:'Etched glass doors'},p:{sq:'Dyer të bardha dyfletëshe me xham të gdhendur.',en:'White double doors with etched frosted glass.'}},
      {yaw:0,pitch:-66,t:{sq:'Dyshemeja e mermerit',en:'Marble floor'},p:{sq:'Mermer i bardhë i lëmuar në gjithë sallonin.',en:'Polished white marble throughout.'}}]},
 {id:'crystal',img:'/assets/crystal-1.webp',pano:HFU+'f60298ad-a067-4e0f-ac74-ce1af46e8e68.jpg',walk:'/assets/walk-crystal.mp4',
  name:{sq:'Salla Kristal',en:'Crystal Salon'},alt:{sq:'Crystal Salon',en:'Salla Kristal'},cap:{sq:'Deri në 60 të ftuar',en:'Up to 60 guests'},
  ev:{sq:'Fejesa · Ditëlindje · Pritje',en:'Engagements · Birthdays · Receptions'},
  desc:{sq:'Mure gri të butë, harqe të bardha dhe një llambadar kristali me kate, me divanë, tavolina koktejli dhe barin e vet të kafesë.',en:'Soft grey walls, white arched mouldings and a cascading crystal chandelier, with lounge sofas and its own coffee bar.'},
  hs:[{yaw:0,pitch:56,t:{sq:'Llambadari kristal',en:'Crystal chandelier'},p:{sq:'Një llambadar kristali me shumë kate kurorëzon sallonin nën një tavan të ndriçuar.',en:'A multi-tier crystal chandelier crowns the salon beneath a lit tray ceiling.'}},
      {yaw:2,pitch:5,t:{sq:'Muri kryesor',en:'Feature wall'},p:{sq:'Pilastra klasike dhe një hark me ekran për prezantime, fjalime ose video.',en:'Classical pilasters and an arch framing a screen for slideshows and speeches.'}},
      {yaw:80,pitch:-28,t:{sq:'Divanët',en:'Lounge sofas'},p:{sq:'Divanë kadifeje dhe tavolina koktejli për biseda të qeta.',en:'Velvet sofas and cocktail tables for relaxed conversation.'}},
      {yaw:2,pitch:-56,t:{sq:'Mozaiku në dysheme',en:'Stone inlay'},p:{sq:'Një mozaik gjeometrik guri në dyshemenë prej mermeri.',en:'A geometric stone inlay set into the marble floor.'}},
      {yaw:-162,pitch:-8,t:{sq:'Bari i kafesë',en:'Coffee bar'},p:{sq:'Salla lidhet me barin e saj të kafesë, me dollapë me ar dhe makinë profesionale espresso.',en:'The salon opens onto its own coffee bar with gold-trimmed cabinets and a professional espresso machine.'}}]}
];
const EVENTS=[
 {t:{sq:'Dasma',en:'Weddings'},p:{sq:'Nga vallja e parë te dolli i fundit: një sallë e veshur me dritë, me menu, dekor dhe orar sipas jush.',en:'From the first dance to the last toast: a ballroom dressed in light, planned around you.'},img:'/assets/grand-5.webp',t2:'#B58A45',a:'#f1d9a2'},
 {t:{sq:'Fejesa',en:'Engagements'},p:{sq:'Salla intime në kristal dhe fildish për mbrëmjen kur bashkohen familjet.',en:'Intimate salons in crystal and ivory for the evening your families come together.'},img:'/assets/royal-1.webp',t2:'#b98f7d',a:'#f0cdbd'},
 {t:{sq:'Evente korporative',en:'Corporate Events'},p:{sq:'Prezantime, darka dhe pritje me ekran, zë dhe shërbim të kujdesshëm.',en:'Presentations, dinners and receptions with screens, sound and attentive service.'},img:'/assets/crystal-3.webp',t2:'#6d7a84',a:'#cfd8de'},
 {t:{sq:'Festa private',en:'Private Celebrations'},p:{sq:'Përvjetorë, ribashkime dhe arritje në një sallë që është e juaja për atë natë.',en:'Anniversaries, reunions and milestones in a hall that is yours for the night.'},img:'/assets/lounge-2.webp',t2:'#8c6a3c',a:'#d9b273'},
 {t:{sq:'Ditëlindje',en:'Birthdays'},p:{sq:'Nga ditëlindja e parë te e pesëdhjeta: menu, tortë dhe dekor, të gjitha të kujdesura.',en:'First birthdays to fiftieth: menus, cake service and decoration taken care of.'},img:'/assets/grand-2.webp',t2:'#9a6d8a',a:'#e4bcd5'},
 {t:{sq:'Darka gala',en:'Gala Dinners'},p:{sq:'Tavolina të gjata, dritë e ngrohtë dhe një kuzhinë e ndërtuar për shërbim elegant.',en:'Long tables, warm light and a kitchen built for elegant service at scale.'},img:'/assets/grand-6.webp',t2:'#D6AD68',a:'#f6e3b4'},
 {t:{sq:'Evente ekskluzive',en:'Exclusive Events'},p:{sq:'Rezervime private, lansime dhe mbrëmje VIP, me diskrecion të plotë.',en:'Private buy-outs, launches and VIP evenings, arranged with full discretion.'},img:'/assets/crystal-4.webp',t2:'#4a443a',a:'#D6AD68'}
];
const MENUS=[
 {n:1,p:1900,f:[['Supë orientale','Oriental soup'],['Supë me perime','Vegetable soup']],m:[['Biftek viçi, furrë, me patate','Oven-baked veal steak with potatoes'],['Pilaf ramstek, me djathë','Rice pilaf with rump steak & cheese']],s:[['Sallatë miks e stinës','Seasonal mixed salad'],['Djathë me ullinj','Cheese with olives'],['Sallatë me perime sote','Sautéed vegetable salad'],['Byrek','Byrek']]},
 {n:2,p:2200,f:[['Supë krem pule','Cream of chicken soup'],['Supë me perime','Vegetable soup']],m:[['Eskallop viçi me patate furre','Veal escalope with oven potatoes'],['Pilaf me fileto pule zgare','Pilaf with grilled chicken fillet']],s:[['Sallatë trikolor','Tricolour salad'],['Sallatë ulliri me limon, djathë dhe portokall','Olive salad, lemon, cheese & orange'],['Sallatë me perime të zgarës','Grilled vegetable salad'],['Byrek me qumësht','Byrek with milk']]},
 {n:3,p:2500,f:[['Supë krem pule','Cream of chicken soup'],['Supë me perime','Vegetable soup']],m:[['Eskallop viçi me patate furre','Veal escalope with oven potatoes'],['Pilaf me berxollë zgare','Pilaf with grilled chop']],s:[['Sallatë miks e stinës','Seasonal mixed salad'],['Sallatë me rukola, grana padano dhe tomate qershi','Rocket, grana padano & cherry tomato'],['Perime të zgarës','Grilled vegetables']]},
 {n:4,p:2800,f:[['Supë "Pasha qoftë"','"Pasha" meatball soup'],['Supë me perime','Vegetable soup']],m:[['Lazanjë bolonjeze','Lasagne bolognese'],['Mish qengji me patate të furrës','Lamb with oven potatoes']],s:[['Sallatë miks e stinës','Seasonal mixed salad'],['Sallatë ulliri me limon dhe portokall','Olive salad with lemon & orange'],['Miks djathrash','Cheese selection']]}
];
const GALLERY=[['grand-1',{sq:'Salla e Madhe',en:'Grand Ballroom'}],['royal-1',{sq:'Salloni Mbretëror',en:'Royal Salon'}],['crystal-1',{sq:'Salla Kristal',en:'Crystal Salon'}],['grand-3',{sq:'Salla e Madhe',en:'Grand Ballroom'}],['bar-2',{sq:'Bari i kafesë',en:'Coffee bar'}],['grand-ceremony',{sq:'Ceremoni',en:'Ceremony setting'}],['crystal-3',{sq:'Salla Kristal',en:'Crystal Salon'}],['grand-5',{sq:'Tavolinat',en:'Banquet tables'}],['lounge-1',{sq:'Këndi i ndenjes',en:'Salon lounge'}],['ext-2',{sq:'Mbërritja në mbrëmje',en:'Arrival at night'}],['crystal-2',{sq:'Llambadari',en:'Chandelier'}],['grand-4',{sq:'Salla e Madhe',en:'Banquet floor'}],['lounge-3',{sq:'Ulëset',en:'Salon seating'}]];
const SERVICES=[
 [{sq:'Planifikim eventi',en:'Event Planning'},{sq:'Një planifikues i dedikuar përgatit orarin, vendosjen dhe çdo detaj bashkë me ju, nga vizita e parë deri te i ftuari i fundit.',en:'A dedicated planner shapes timing, layout and every detail with you, from the first visit to the last guest.'},'<path d="M8 3v3M16 3v3M3.5 9h17M5 5h14a1.5 1.5 0 011.5 1.5v12A1.5 1.5 0 0119 20H5a1.5 1.5 0 01-1.5-1.5v-12A1.5 1.5 0 015 5z"/><path d="M8 14l2.5 2.5L16 12"/>'],
 [{sq:'Katering premium',en:'Premium Catering'},{sq:'Katër menu nga kuzhina jonë, të shërbyera në tavolinë, me pije, kafe dhe fruta të përfshira.',en:'Four set menus from our own kitchen, served at the table, with drinks, coffee and fruit included.'},'<path d="M3 15h18M5 15a7 7 0 0114 0M12 6v2M2 18h20"/>'],
 [{sq:'Dekorim elegant',en:'Elegant Decoration'},{sq:'Lule, tavolina, sfonde dhe atmosfera drite sipas temës dhe ngjyrave tuaja.',en:'Florals, table design, backdrops and lighting moods styled to your theme and colours.'},'<path d="M12 21V11M12 11c-3 0-5-2.5-5-6 3 0 5 2.5 5 6zM12 11c3 0 5-2.5 5-6-3 0-5 2.5-5 6z"/>'],
 [{sq:'Dritë & zë',en:'Light & Sound'},{sq:'Zë profesional, ndriçim ambienti dhe ekrane për fjalime, video ose muzikë live.',en:'Professional sound, ambient lighting and screens for speeches, slideshows or live music.'},'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12"/>'],
 [{sq:'Koordinim eventi',en:'Event Coordination'},{sq:'Në ditën e eventit, ekipi ynë drejton orarin dhe shërbimin, që ju vetëm të festoni.',en:'On the day, our team runs the schedule and the service, so you only celebrate.'},'<circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0114 0"/>'],
 [{sq:'Përvoja të personalizuara',en:'Tailored Experiences'},{sq:'Menu të personalizuara, mbrëmje me temë dhe rregullime private, të ndërtuara rreth jush.',en:'Custom menus, themed nights and private arrangements, shaped entirely around you.'},'<path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z"/>']
];
const EVTYPES=[['Dasmë','Wedding'],['Fejesë','Engagement'],['Event korporativ','Corporate'],['Ditëlindje','Birthday'],['Darkë gala','Gala dinner'],['Festë private','Private']];

/* ====================================================================
   HELPERS & I18N
   ==================================================================== */
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,MOBILE=matchMedia('(max-width: 760px)').matches,FINE=matchMedia('(hover:hover) and (pointer:fine)').matches;
let LANG='sq'; try{const s=localStorage.getItem('ija-lang');if(s==='en'||s==='sq')LANG=s;}catch(e){}
const t=k=>T[LANG][k]??T.sq[k]??k, L=o=>o[LANG]??o.sq;
$('#yr').textContent=new Date().getFullYear();
function splitChars(el,stagger=0.035){
  const parts=el.innerHTML.split(/(<br\s*\/?>|<em>|<\/em>)/i);let html='',d=0;
  parts.forEach(part=>{ if(/^<\/?(br|em)/i.test(part)){html+=part;return;}
    part.split(/( +)/).forEach(w=>{ if(!w)return; if(/^ +$/.test(w)){html+=' ';return;}
      html+='<span class="w">'+[...w].map(ch=>`<span class="char" style="transition-delay:${(d++)*stagger}s">${ch}</span>`).join('')+'</span>';});});
  el.innerHTML=html;
}
function applyLang(){
  document.documentElement.lang=LANG;
  document.title=LANG==='sq'?'IJA Events · Çdo moment meriton një mjedis të jashtëzakonshëm':'IJA Events · Every Moment Deserves An Extraordinary Setting';
  $$('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
  $$('[data-i18n-html]').forEach(el=>el.innerHTML=t(el.dataset.i18nHtml));
  $$('[data-i18n-ph]').forEach(el=>el.placeholder=t(el.dataset.i18nPh));
  $$('[data-i18n-title]').forEach(el=>{el.title=t(el.dataset.i18nTitle);el.setAttribute('aria-label',el.title);});
  $$('.lang button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===LANG));
  $$('.slide-title').forEach(el=>splitChars(el));
  $$('.split').forEach(el=>splitChars(el,0));
  renderDynamic();
  if(window.__vHall) setHall(window.__vHall,true);
}
$$('.lang button').forEach(b=>b.addEventListener('click',()=>{ if(b.dataset.lang===LANG)return; LANG=b.dataset.lang; try{localStorage.setItem('ija-lang',LANG);}catch(e){}
  gsap.to('main,.cinematic-container,footer',{opacity:0,duration:.35,ease:'power2.in',onComplete:()=>{applyLang();bindDynamic(true);gsap.to('main,.cinematic-container,footer',{opacity:1,duration:.7,ease:'power2.out'});}});}));

function renderDynamic(){
  $('#hallGrid').innerHTML=HALLS.map((h,i)=>`<article class="hall" data-cursor="cur.enter"><i class="glow"></i><div class="ph"><img src="${h.img}" alt="${L(h.name)}" loading="lazy"><span class="badge">${t('v360')}</span></div><div class="bd"><span class="no">0${i+1}</span><h3>${L(h.name)}</h3><span class="alt">${L(h.alt)}</span><p>${L(h.desc)}</p><dl class="specs"><dt>${t('cap')}</dt><dd>${L(h.cap)} <span class="tbc">${t('tbc')}</span></dd><dt>${t('evs')}</dt><dd>${L(h.ev)}</dd></dl><a href="#experience" class="pill pill-line sm magnetic" data-hall="${h.id}">${t('enter')}</a></div></article>`).join('');
  $('#evTrack').innerHTML=EVENTS.map((e,i)=>`<article class="ev" style="--t:${e.t2};--a:${e.a}"><img src="${e.img}" alt="" loading="lazy"><div class="c"><span class="n">0${i+1}</span><div><h3>${L(e.t)}</h3><p>${L(e.p)}</p><div class="bar"></div></div></div></article>`).join('');
  const li=a=>a.map(([sq,en])=>`<li>${LANG==='sq'?sq:en}<i>${LANG==='sq'?en:sq}</i></li>`).join('');
  $('#mnGrid').innerHTML=MENUS.map(m=>`<article class="mn"><span class="no">Menu ${m.n}</span><div class="price"><span data-count="${m.p}" data-from="${m.p-600}">${m.p}</span><small>LEKË</small></div><div class="pp">${t('mn.pp')}</div><h4>${t('mn.f')}</h4><ul>${li(m.f)}</ul><h4>${t('mn.m')}</h4><ul>${li(m.m)}</ul><h4>${t('mn.s')}</h4><ul>${li(m.s)}</ul></article>`).join('');
  $('#masonry').innerHTML=GALLERY.map(([f,c],i)=>`<figure class="gi" data-i="${i}" tabindex="0" data-cursor="cur.view"><div class="gim"><img src="/assets/${f}.webp" alt="${L(c)}" loading="lazy"></div><figcaption>${L(c)}</figcaption></figure>`).join('');
  $('#svGrid').innerHTML=SERVICES.map(([ti,p,ic],i)=>`<div class="sv"><span class="i">0${i+1}</span><svg viewBox="0 0 24 24">${ic}</svg><h3>${L(ti)}</h3><p>${L(p)}</p></div>`).join('');
  $('#chips').innerHTML=EVTYPES.map(([sq,en])=>`<label class="chip"><input type="radio" name="type" value="${LANG==='sq'?sq:en}"><span>${LANG==='sq'?sq:en}</span></label>`).join('');
  $('#fHall').innerHTML=`<option>${t('f.nopref')}</option>`+HALLS.map(h=>`<option>${L(h.name)}</option>`).join('');
  $('#fMenu').innerHTML=`<option>${t('f.undec')}</option>`+MENUS.map(m=>`<option>Menu ${m.n} · ${m.p} L</option>`).join('');
  $('#ftHalls').innerHTML=HALLS.map(h=>`<a href="#experience" data-hall="${h.id}">${L(h.name)}</a>`).join('');
  $('#vTabs').innerHTML=HALLS.map(h=>`<button data-h="${h.id}" class="${h.id===window.__vHall?'on':''}">${L(h.name)}</button>`).join('');
  $$('#vTabs button').forEach(b=>b.onclick=()=>setHall(b.dataset.h));
  const words=EVENTS.map(e=>L(e.t)),row=a=>a.concat(a).map((w,i)=>`<span>${i%2?'':'<b></b>'}${w}</span>`).join('');
  $('#mq1').innerHTML=row(words.concat(words)); $('#mq2').innerHTML=row(words.slice().reverse().concat(words.slice().reverse()));
  $('#sign').innerHTML=[...'IJA EVENTS'].map(c=>c===' '?'&nbsp;':`<span class="li gold-text">${c}</span>`).join('');
}

/* ====================================================================
   WEBGL STAGE (Laocoön structure · Luli palette · celebration cake)
   ==================================================================== */
const canvas=$('#webgl');
let scene,camera,renderer,modelPivot,confetti,bubbles; const confData=[];
const clock=new THREE.Clock();
let currentScroll=0,mouseX=0,mouseY=0,targetMouseX=0,targetMouseY=0;
let cursorX=innerWidth/2,cursorY=innerHeight/2,outerX=cursorX,outerY=cursorY;
const shaderUniforms={uTime:{value:0},uResolution:{value:new THREE.Vector2(innerWidth,innerHeight)},uMouse:{value:new THREE.Vector2()},uScroll:{value:0}};
const sizes={width:innerWidth,height:innerHeight};
const CONF=MOBILE?120:240,BUB=MOBILE?160:320;

function createBackgroundShader(){
  const vertexShader=`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`;
  const fragmentShader=`varying vec2 vUv;uniform float uTime;uniform vec2 uResolution;uniform vec2 uMouse;uniform float uScroll;
    void main(){
      vec2 uv=(gl_FragCoord.xy-0.5*uResolution.xy)/uResolution.y; float aspect=uResolution.x/uResolution.y;
      float time=uTime*0.08; float scroll=uScroll;
      float angle1=0.6,angle2=-0.7,angle3=1.2,freq1=2.4,freq2=3.2,freq3=4.0;
      vec2 w=uv; float sd=scroll*5.0;
      w.x+=sin(uv.y*2.5+time*0.2+sd)*0.35; w.y+=cos(uv.x*2.5-time*0.15-sd*0.8)*0.35;
      w.x+=sin(uv.y*1.2-time*0.1-sd*1.5)*0.25; w.y+=cos(uv.x*1.2+time*0.18+sd*1.2)*0.25;
      w+=vec2(scroll*0.04,-scroll*0.02)+vec2(uMouse.x*aspect*0.05,uMouse.y*0.05);
      vec2 d1=vec2(cos(angle1),sin(angle1)),d2=vec2(cos(angle2),sin(angle2)),d3=vec2(cos(angle3),sin(angle3));
      float w1=sin(dot(w,d1)*freq1+time*1.0); float w2=cos(dot(w,d2)*freq2-time*1.4+w1*0.4); float w3=sin(dot(w,d3)*freq3+time*1.8+w2*0.5);
      float f=w1*0.50+w2*0.35+w3*0.15;
      float crest=pow(max(0.0,1.0-abs(f-0.1)),2.5)*0.5+pow(max(0.0,1.0-abs(f-0.15)),8.0)*0.9;
      vec3 a0=vec3(0.0010,0.0008,0.0006),a1=vec3(0.062,0.040,0.016),a2=vec3(0.034,0.021,0.009),a3=vec3(0.42,0.30,0.15);
      vec3 b0=vec3(0.0008,0.0007,0.0006),b1=vec3(0.046,0.036,0.025),b2=vec3(0.025,0.020,0.014),b3=vec3(0.40,0.34,0.24);
      float t=smoothstep(0.0,1.0,scroll);
      vec3 c=mix(a0,b0,t); c=mix(c,mix(a2,b2,t),smoothstep(-0.6,0.2,f)); c=mix(c,mix(a1,b1,t),smoothstep(0.0,0.8,f));
      c+=mix(a3,b3,t)*crest*1.2; c*=1.0-dot(uv,uv)*0.12;
      gl_FragColor=vec4(c,1.0);
    }`;
  const m=new THREE.Mesh(new THREE.PlaneGeometry(30,30),new THREE.ShaderMaterial({vertexShader,fragmentShader,uniforms:shaderUniforms,depthWrite:false,depthTest:false}));
  m.position.set(0,0,-8);m.renderOrder=-10;camera.add(m);
}
function bubbleTex(){const c=document.createElement('canvas');c.width=c.height=32;const x=c.getContext('2d');const g=x.createRadialGradient(16,16,0,16,16,16);
  g.addColorStop(0,'rgba(255,255,255,.95)');g.addColorStop(.35,'rgba(255,245,220,.55)');g.addColorStop(.7,'rgba(255,230,180,.12)');g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(0,0,32,32);return new THREE.CanvasTexture(c);}
function createCelebration(){
  confetti=new THREE.InstancedMesh(new THREE.PlaneGeometry(.045,.075),new THREE.MeshStandardMaterial({color:0xffffff,metalness:.85,roughness:.28,side:THREE.DoubleSide,envMapIntensity:1.4}),CONF);
  const cols=[0xD6AD68,0xf1d9a2,0xB58A45,0xF5EFE5,0xe8c88a];
  for(let i=0;i<CONF;i++){confData.push({p:new THREE.Vector3((Math.random()-.5)*7,(Math.random()-.5)*6,(Math.random()-.5)*7),r:new THREE.Euler(Math.random()*6,Math.random()*6,Math.random()*6),
    vr:new THREE.Vector3((Math.random()-.5)*3,(Math.random()-.5)*3,(Math.random()-.5)*2),fall:.12+Math.random()*.22,sway:.3+Math.random()*.8,ph:Math.random()*6.28,s:.45+Math.random()*.6});
    confetti.setColorAt(i,new THREE.Color(cols[i%cols.length]));}
  scene.add(confetti);
  const g2=new THREE.BufferGeometry(),pos=new Float32Array(BUB*3),col=new Float32Array(BUB*3);
  for(let i=0;i<BUB;i++){pos[i*3]=(Math.random()-.5)*6.5;pos[i*3+1]=(Math.random()-.5)*5-.5;pos[i*3+2]=(Math.random()-.5)*6.5;const w=Math.random()<.65;col[i*3]=1;col[i*3+1]=w?.86:.97;col[i*3+2]=w?.6:.9;}
  g2.setAttribute('position',new THREE.BufferAttribute(pos,3));g2.setAttribute('color',new THREE.BufferAttribute(col,3));
  bubbles=new THREE.Points(g2,new THREE.PointsMaterial({size:.035,vertexColors:true,transparent:true,opacity:.85,blending:THREE.AdditiveBlending,depthWrite:false,map:bubbleTex()}));
  bubbles.userData.v=[...Array(BUB)].map(()=>({s:.15+Math.random()*.35,sw:.05+Math.random()*.15,ph:Math.random()*6.28,sp:.5+Math.random()*1.5}));
  scene.add(bubbles);
}
function loadModel(done){
  new GLTFLoader().load(MODEL_URL,gltf=>{
    const model=gltf.scene; modelPivot=new THREE.Group(); scene.add(modelPivot); modelPivot.add(model);
    model.traverse(ch=>{ if(ch.isMesh){ ch.castShadow=true; ch.receiveShadow=true;
      if(!ch.geometry.attributes.normal) ch.geometry.computeVertexNormals();
      const old=ch.material; const m=new THREE.MeshStandardMaterial({map:old.map||null,color:0xffffff,roughness:.42,metalness:.15,envMapIntensity:1.1});
      if(m.map){m.map.anisotropy=16;m.map.colorSpace=THREE.SRGBColorSpace;} ch.material=m; }});
    const s0=new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3());
    model.scale.setScalar(3.3/Math.max(s0.x,s0.y,s0.z)); model.updateMatrixWorld(true);
    model.position.sub(new THREE.Box3().setFromObject(model).getCenter(new THREE.Vector3()));
    modelPivot.position.y=-0.35; modelPivot.scale.setScalar(.001);
    gsap.to(modelPivot.scale,{x:1,y:1,z:1,duration:2.4,ease:'expo.out',delay:1.2});
    done&&done();
  },ev=>{if(ev.total)setLoad(25+65*ev.loaded/ev.total);},err=>{console.warn('model',err);done&&done();});
}
function initStage(){
  scene=new THREE.Scene(); scene.background=new THREE.Color('#080706'); scene.fog=new THREE.FogExp2('#080706',0.01);
  camera=new THREE.PerspectiveCamera(50,sizes.width/sizes.height,.1,100); camera.position.set(0,.2,3.0); scene.add(camera);
  createBackgroundShader();
  renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'high-performance'});
  renderer.setSize(sizes.width,sizes.height); renderer.setPixelRatio(Math.min(devicePixelRatio,MOBILE?1.5:2));
  renderer.shadowMap.enabled=true; renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.15;
  scene.environment=new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(renderer),.04).texture;
  scene.add(new THREE.AmbientLight('#ffffff',.14));
  const key=new THREE.SpotLight('#fff3e0',14); key.position.set(4,6,3); key.angle=Math.PI/4; key.penumbra=.9; key.castShadow=true;
  key.shadow.mapSize.set(2048,2048); key.shadow.camera.near=1; key.shadow.camera.far=15; key.shadow.bias=-.001; scene.add(key);
  const rim=new THREE.DirectionalLight('#ffe2b0',6); rim.position.set(-5,3,-4); scene.add(rim);
  const fill=new THREE.DirectionalLight('#fff3e6',.9); fill.position.set(-2,-4,2); scene.add(fill);
  createCelebration();
  addEventListener('resize',()=>{sizes.width=innerWidth;sizes.height=innerHeight;camera.aspect=sizes.width/sizes.height;camera.updateProjectionMatrix();renderer.setSize(sizes.width,sizes.height);shaderUniforms.uResolution.value.set(sizes.width,sizes.height);ScrollTrigger.refresh();});
}

/* cursor */
const cIn=$('.cursor-inner'),cOut=$('.cursor-outer'),cPill=$('.cursor-pill');
addEventListener('mousemove',e=>{cursorX=e.clientX;cursorY=e.clientY;cIn.style.left=cursorX+'px';cIn.style.top=cursorY+'px';targetMouseX=e.clientX/innerWidth*2-1;targetMouseY=e.clientY/innerHeight*2-1;});
document.addEventListener('mouseover',e=>{const lab=e.target.closest('[data-cursor]');cPill.classList.toggle('on',!!lab);if(lab)cPill.textContent=t(lab.dataset.cursor);
  cOut.classList.toggle('hover',!!e.target.closest('a,button,input,select,textarea,label,[data-cursor]'));});

/* scroll model */
const spacer=$('.cine-spacer'),nav=$('#nav'); const cineMax=()=>spacer.offsetHeight-innerHeight;
function updateGridDots(s){$$('.grid-dot').forEach((dot,i)=>{const sy=(i*17)%80+10;let sp=90+(i*55)%180;if(i%2===0)sp=-sp;let y=sy+s*sp;y=((y%100)+100)%100;dot.style.top=y+'%';});}
function updateSlides(s){
  for(let i=1;i<=4;i++){document.getElementById('dash-fill-'+i).style.height=Math.max(0,Math.min(1,(s-(i-1)*.25)/.25))*100+'%';}
  const a=(v,x,y)=>v>=x&&v<=y,past=document.body.classList.contains('past');
  $('#slide-1').classList.toggle('active',a(s,-.1,.12)&&started);
  const a2=a(s,.28,.40);$('#slide-2').classList.toggle('active',a2);$('#slide-2-img').classList.toggle('active',a2);
  $('#slide-3').classList.toggle('active',a(s,.56,.68));
  $('#slide-4').classList.toggle('active',a(s,.84,1.0)&&!past);
}
let lastY=0,last=0,started=false;
function animate(time){
  requestAnimationFrame(animate);
  const dt=Math.min(clock.getDelta(),.05),el=clock.elapsedTime;
  const raw=Math.max(0,Math.min(1,scrollY/cineMax()));
  const past=scrollY>cineMax()-innerHeight*.5; document.body.classList.toggle('past',past); $('#cine').classList.toggle('away',past);
  $('#scrollHint').style.opacity=raw<.02&&started?1:0;
  currentScroll+=(raw-currentScroll)*.025;
  mouseX+=(targetMouseX-mouseX)*.05; mouseY+=(targetMouseY-mouseY)*.05;
  outerX+=(cursorX-outerX)*.2; outerY+=(cursorY-outerY)*.2; cOut.style.left=outerX+'px'; cOut.style.top=outerY+'px'; cPill.style.left=outerX+'px'; cPill.style.top=(outerY+46)+'px';
  updateSlides(currentScroll); updateGridDots(currentScroll);
  nav.classList.toggle('solid',scrollY>40); const dy=scrollY-lastY; if(started&&Math.abs(dy)>6){nav.classList.toggle('hide',dy>0&&scrollY>innerHeight&&!document.body.classList.contains('mopen'));lastY=scrollY;}
  $('#prog').style.transform=`scaleX(${scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)})`;
  if(document.hidden||viewerFull) return;
  if(past&&time-last<50) return; last=time;
  if(modelPivot){modelPivot.rotation.y=mouseX*.25+el*.12;modelPivot.rotation.x=mouseY*.15;modelPivot.position.y=-.35+Math.sin(el*.8)*.04;}
  const vel=Math.abs(raw-currentScroll),sm=1+vel*9,tb=vel*.8;
  const M=new THREE.Matrix4(),Q=new THREE.Quaternion(),S=new THREE.Vector3();
  confData.forEach((c,i)=>{c.p.y-=c.fall*dt*sm;c.p.x+=Math.sin(el*c.sway+c.ph)*.12*dt*(1+tb*4);c.p.z+=Math.cos(el*c.sway+c.ph)*.1*dt*(1+tb*4);
    c.r.x+=c.vr.x*dt*sm;c.r.y+=c.vr.y*dt;c.r.z+=c.vr.z*dt*sm;
    if(c.p.y<-3.2){c.p.y=3.2;c.p.x=(Math.random()-.5)*7;c.p.z=(Math.random()-.5)*7;}
    Q.setFromEuler(c.r);S.setScalar(c.s);M.compose(c.p,Q,S);confetti.setMatrixAt(i,M);});
  confetti.instanceMatrix.needsUpdate=true;
  const p=bubbles.geometry.attributes.position.array,v=bubbles.userData.v;
  for(let i=0;i<BUB;i++){const k=i*3,d=v[i];p[k+1]+=d.s*dt*sm;p[k]+=Math.sin(el*d.sp+d.ph)*d.sw*dt*(1+tb*4);p[k+2]+=Math.cos(el*d.sp+d.ph)*d.sw*dt*(1+tb*4);
    if(p[k+1]>3||Math.abs(p[k])>3.5||Math.abs(p[k+2])>3.5){p[k+1]=-2.5;p[k]=(Math.random()-.5)*3;p[k+2]=(Math.random()-.5)*3;}}
  bubbles.geometry.attributes.position.needsUpdate=true;
  const phi=currentScroll*Math.PI*2,y=.35+Math.sin(currentScroll*Math.PI)*.8,r=4.2-Math.sin(currentScroll*Math.PI)*.6;
  const ease=(Math.cos(Math.min(1,currentScroll/.28)*Math.PI)+1)*.5;
  camera.position.lerp(new THREE.Vector3(r*Math.sin(phi),y,r*Math.cos(phi)),.025);
  camera.lookAt(new THREE.Vector3((MOBILE?0:-.9)*ease,-.15,0));
  shaderUniforms.uTime.value=el; shaderUniforms.uMouse.value.set(mouseX,-mouseY); shaderUniforms.uScroll.value=past?1:currentScroll;
  renderer.render(scene,camera);
}

/* navigation */
const smoothTo=y=>scrollTo({top:y,behavior:RM?'auto':'smooth'});
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;e.preventDefault();document.body.classList.remove('mopen');
  if(a.dataset.hall)setHall(a.dataset.hall);
  if(a.dataset.goto!=null)return smoothTo(cineMax()*+a.dataset.goto);
  const el=$(a.getAttribute('href'));if(el)smoothTo(el.getBoundingClientRect().top+scrollY);});
$('.burger').addEventListener('click',()=>document.body.classList.toggle('mopen'));
addEventListener('scroll',()=>{$$('.links a').forEach(l=>{const h=l.getAttribute('href');let on=false;if(h==='#top')on=scrollY<cineMax();else{const el=$(h);if(el){const r=el.getBoundingClientRect();on=r.top<innerHeight*.5&&r.bottom>innerHeight*.5;}}l.classList.toggle('on',on);});},{passive:true});

/* ====================================================================
   ANIMATIONS (GSAP ScrollTrigger)
   ==================================================================== */
let triggers=[];
function bindDynamic(isRelang){
  triggers.forEach(s=>s.kill()); triggers=[];
  const reg=a=>{if(a&&a.scrollTrigger)triggers.push(a.scrollTrigger);return a;};
  const fr=(tg,from,to)=>reg(gsap.fromTo(tg,from,to));
  const once=(tg,st='top 88%')=>({trigger:tg,start:st,once:true});
  if(RM)return;
  $$('.split').forEach(h=>fr($$('.char',h),{opacity:0,yPercent:90,rotateX:-70,filter:'blur(10px)'},{opacity:1,yPercent:0,rotateX:0,filter:'blur(0px)',duration:1.2,stagger:.022,ease:'expo.out',scrollTrigger:once(h,'top 86%')}));
  $$('.rv').forEach(el=>fr(el,{opacity:0,y:50,filter:'blur(8px)'},{opacity:1,y:0,filter:'blur(0px)',duration:1.3,ease:'power3.out',scrollTrigger:once(el,'top 92%')}));
  $$('.eyebrow').forEach(el=>fr(el,{'--ls':0},{'--ls':1,duration:1.4,ease:'expo.out',scrollTrigger:once(el,'top 94%')}));
  // marquee entrance
  fr('.marquee .mq-row',{opacity:0,y:40},{opacity:1,y:0,duration:1.4,stagger:.15,ease:'expo.out',scrollTrigger:once('.marquee','top 95%')});
  // halls
  $$('.hall').forEach((hl,i)=>{
    fr(hl,{opacity:0,y:120,rotateX:14},{opacity:1,y:0,rotateX:0,duration:1.5,delay:i*.12,ease:'expo.out',scrollTrigger:once('#hallGrid','top 88%')});
    fr($('.ph',hl),{clipPath:'inset(100% 0% 0% 0%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:1.7,delay:.2+i*.12,ease:'expo.inOut',scrollTrigger:once('#hallGrid','top 88%')});
    fr($('.ph img',hl),{yPercent:-10},{yPercent:2,ease:'none',scrollTrigger:{trigger:hl,start:'top bottom',end:'bottom top',scrub:true}});
    if(FINE){hl.onpointermove=e=>{const r=hl.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;hl.style.setProperty('--mx',x*100+'%');hl.style.setProperty('--my',y*100+'%');gsap.to(hl,{rotateY:(x-.5)*10,rotateX:(.5-y)*8,duration:.8,ease:'power3.out',transformPerspective:1200});};
      hl.onpointerleave=()=>gsap.to(hl,{rotateY:0,rotateX:0,duration:1.2,ease:'elastic.out(1,.5)'});}
  });
  // stats
  $$('.stat').forEach((s,i)=>fr(s,{opacity:0,y:60},{opacity:1,y:0,duration:1.2,delay:i*.1,ease:'expo.out',scrollTrigger:{...once(s,'top 92%'),onEnter:()=>s.classList.add('in')}}));
  $$('[data-count]').forEach(el=>{const to=+el.dataset.count,from=+(el.dataset.from||0),o={v:from};fr(o,{v:from},{v:to,duration:2.4,ease:'power3.out',scrollTrigger:once(el,'top 94%'),onUpdate:()=>el.textContent=Math.round(o.v)});});
  // 360 viewer: opens like a lens
  fr('#viewer',{clipPath:'inset(10% 8% 10% 8% round 26px)'},{clipPath:'inset(0% 0% 0% 0% round 26px)',ease:'none',scrollTrigger:{trigger:'#viewer',start:'top 100%',end:'top 30%',scrub:true}});
  // events horizontal
  const track=$('#evTrack');
  if(innerWidth>900){
    const h=reg(gsap.to(track,{x:()=>-(track.scrollWidth-innerWidth+60),ease:'none',scrollTrigger:{trigger:'#events',start:'top top',end:()=>'+='+(track.scrollWidth-innerWidth),pin:true,scrub:1,invalidateOnRefresh:true}}));
    $$('.ev',track).forEach(ev=>{fr($('img',ev),{xPercent:-7},{xPercent:7,ease:'none',scrollTrigger:{trigger:ev,containerAnimation:h,start:'left right',end:'right left',scrub:true}});
      fr(ev,{rotateY:-22,scale:.88,opacity:.35},{rotateY:0,scale:1,opacity:1,ease:'none',scrollTrigger:{trigger:ev,containerAnimation:h,start:'left 105%',end:'left 60%',scrub:true}});});
  } else $$('.ev').forEach(ev=>fr(ev,{opacity:0,y:80},{opacity:1,y:0,duration:1.2,ease:'expo.out',scrollTrigger:once(ev,'top 92%')}));
  // menus flip
  fr('.mn',{opacity:0,rotateX:-65,y:80},{opacity:1,rotateX:0,y:0,duration:1.6,stagger:.12,ease:'expo.out',scrollTrigger:once('#mnGrid','top 85%')});
  $$('.mn').forEach(s=>{s.onpointermove=e=>{const r=s.getBoundingClientRect();s.style.setProperty('--mx',e.clientX-r.left+'px');s.style.setProperty('--my',e.clientY-r.top+'px');gsap.to(s,{y:-10,duration:.6,ease:'power3.out'});};s.onpointerleave=()=>gsap.to(s,{y:0,duration:.8,ease:'power3.out'});});
  // gallery curtains
  $$('.gi').forEach((g,i)=>{fr($('.gim',g),{clipPath:'inset(0% 0% 100% 0%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:1.5,delay:(i%3)*.1,ease:'expo.inOut',scrollTrigger:once(g,'top 94%')});
    fr($('img',g),{scale:1.3},{scale:1,duration:2.2,delay:(i%3)*.1,ease:'expo.out',scrollTrigger:once(g,'top 94%')});
    if(FINE){g.onpointermove=e=>{const r=g.getBoundingClientRect();gsap.to($('img',g),{x:(e.clientX-r.left-r.width/2)*-.05,y:(e.clientY-r.top-r.height/2)*-.05,scale:1.06,duration:.8});};g.onpointerleave=()=>gsap.to($('img',g),{x:0,y:0,scale:1,duration:1});}});
  // services
  $$('.sv svg *').forEach(p=>{try{p.style.setProperty('--len',Math.ceil(p.getTotalLength()+2));}catch(e){}});
  $$('.sv').forEach((s,i)=>{fr(s,{opacity:0,y:60},{opacity:1,y:0,duration:1.2,delay:(i%3)*.1,ease:'expo.out',scrollTrigger:{...once(s,'top 92%'),onEnter:()=>s.classList.add('in')}});
    s.onpointermove=e=>{const r=s.getBoundingClientRect();s.style.setProperty('--mx',e.clientX-r.left+'px');s.style.setProperty('--my',e.clientY-r.top+'px');};});
  // form fields cascade
  fr('#resForm .f, #resForm .fend',{opacity:0,y:30},{opacity:1,y:0,duration:1,stagger:.06,ease:'expo.out',scrollTrigger:once('#resForm','top 85%')});
  // footer signature
  fr('#sign .li',{yPercent:110,opacity:0},{yPercent:0,opacity:1,duration:1.4,stagger:.05,ease:'expo.out',scrollTrigger:once('#sign','top 98%')});
  // magnetic
  if(FINE)$$('.magnetic').forEach(m=>{m.onpointermove=e=>{const r=m.getBoundingClientRect();gsap.to(m,{x:(e.clientX-r.left-r.width/2)*.3,y:(e.clientY-r.top-r.height/2)*.4,duration:.6,ease:'power3.out'});};
    m.onpointerleave=()=>gsap.to(m,{x:0,y:0,duration:1,ease:'elastic.out(1,.45)'});});
  // lightbox
  const lb=$('#lb'),img=$('img',lb),cap=$('.cap',lb);let gi=0;
  const show=n=>{gi=(n+GALLERY.length)%GALLERY.length;gsap.to(img,{opacity:0,scale:.95,duration:.25,onComplete:()=>{img.src='/assets/'+GALLERY[gi][0]+'.webp';cap.textContent=`${gi+1} / ${GALLERY.length} · ${L(GALLERY[gi][1])}`;img.onload=()=>gsap.to(img,{opacity:1,scale:1,duration:.8,ease:'expo.out'});}});};
  $$('.gi').forEach(g=>{const o=()=>{show(+g.dataset.i);lb.classList.add('open');};g.onclick=o;g.onkeydown=e=>{if(e.key==='Enter')o();};});
  $('.p',lb).onclick=()=>show(gi-1);$('.n',lb).onclick=()=>show(gi+1);$('.c',lb).onclick=()=>lb.classList.remove('open');lb.onclick=e=>{if(e.target===lb)lb.classList.remove('open');};
  window.__lb={lb,show,get i(){return gi;}};
  if(isRelang) ScrollTrigger.getAll().forEach(s=>{ if(s.vars.once && s.start<scrollY+innerHeight) s.progress<1&&s.animation&&s.animation.progress(1); });
  ScrollTrigger.refresh();
}
addEventListener('keydown',e=>{const o=window.__lb;if(!o||!o.lb.classList.contains('open'))return;if(e.key==='Escape')o.lb.classList.remove('open');if(e.key==='ArrowRight')o.show(o.i+1);if(e.key==='ArrowLeft')o.show(o.i-1);});

/* marquee — velocity reactive */
{let x1=0,x2=0,vel=0,ly=scrollY;gsap.ticker.add(()=>{const dy=scrollY-ly;ly=scrollY;vel+=(dy-vel)*.1;const sp=1+Math.min(Math.abs(vel)*.15,8);
  const r1=$('#mq1'),r2=$('#mq2');const w1=r1.scrollWidth/2,w2=r2.scrollWidth/2;if(!w1)return;x1-=.6*sp;x2+=.6*sp;if(-x1>w1)x1+=w1;if(x2>0)x2-=w2;
  const sk=Math.max(-10,Math.min(10,-vel*.15));r1.style.transform=`translateX(${x1}px) skewX(${sk}deg)`;r2.style.transform=`translateX(${x2}px) skewX(${sk}deg)`;});}

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

/* ====================================================================
   360° VIEWER
   ==================================================================== */
let viewerFull=false;
const V={yaw:0,pitch:0,tyaw:0,tpitch:0,fov:75,tfov:75,vy:0,vp:0,drag:false,auto:true,busy:false,visible:false};
const vbox=$('#viewer'),vc=$('#vcanvas'),hsLayer=$('#hsLayer'),card=$('#hsCard'),vfade=$('#vFade');
let vr,vs,vcam,sphere; const texCache={};
function initViewer(){
  vr=new THREE.WebGLRenderer({canvas:vc,antialias:true});vr.setPixelRatio(Math.min(devicePixelRatio,2));vr.outputColorSpace=THREE.SRGBColorSpace;
  vs=new THREE.Scene();vcam=new THREE.PerspectiveCamera(75,1,.1,100);
  const geo=new THREE.SphereGeometry(10,96,64);geo.scale(-1,1,1);
  sphere=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({color:0}));sphere.rotation.y=-Math.PI/2;vs.add(sphere);
  const N=200,p=new Float32Array(N*3);for(let i=0;i<N;i++){const r=1.5+Math.random()*5,a=Math.random()*6.28,h=(Math.random()-.5)*5;p[i*3]=Math.cos(a)*r;p[i*3+1]=h;p[i*3+2]=Math.sin(a)*r;}
  const dg=new THREE.BufferGeometry();dg.setAttribute('position',new THREE.BufferAttribute(p,3));
  const dust=new THREE.Points(dg,new THREE.PointsMaterial({color:0xf1d9a2,size:.03,transparent:true,opacity:.5,blending:THREE.AdditiveBlending,depthWrite:false}));vs.add(dust);
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
  (function loop(){requestAnimationFrame(loop);if(!V.visible&&!viewerFull)return;
    if(!V.drag){V.tyaw+=V.vy;V.tpitch+=V.vp;V.vy*=.92;V.vp*=.92;if(V.auto)V.tyaw+=.0009;}
    V.tpitch=THREE.MathUtils.clamp(V.tpitch,-1.35,1.35);V.tfov=THREE.MathUtils.clamp(V.tfov,30,95);
    V.yaw+=(V.tyaw-V.yaw)*.1;V.pitch+=(V.tpitch-V.pitch)*.1;V.fov+=(V.tfov-V.fov)*.1;
    vcam.fov=V.fov;vcam.updateProjectionMatrix();vcam.rotation.order='YXZ';vcam.rotation.y=-V.yaw;vcam.rotation.x=V.pitch;
    dust.rotation.y+=.0006;vr.render(vs,vcam);
    const w=vbox.clientWidth,h=vbox.clientHeight;
    (V.hs||[]).forEach(({el,v})=>{tmp.copy(v).project(vcam);const b=tmp.z>1;el.style.transform=`translate(${(tmp.x*.5+.5)*w}px,${(-tmp.y*.5+.5)*h}px)`;el.style.opacity=b?0:1;el.style.pointerEvents=b?'none':'auto';});
  })();
}
const ypToVec=(yw,pt)=>{const y=THREE.MathUtils.degToRad(yw),p=THREE.MathUtils.degToRad(pt);return new THREE.Vector3(Math.sin(y)*Math.cos(p)*9,Math.sin(p)*9,-Math.cos(y)*Math.cos(p)*9);};
const loadTex=src=>texCache[src]?Promise.resolve(texCache[src]):new Promise((res,rej)=>new THREE.TextureLoader().load(src,tx=>{tx.colorSpace=THREE.SRGBColorSpace;tx.anisotropy=vr.capabilities.getMaxAnisotropy();texCache[src]=tx;res(tx);},undefined,rej));
async function setHall(id,relabel){
  if(!vr)initViewer(); const h=HALLS.find(x=>x.id===id);
  const label=()=>{$('#vAlt').textContent=L(h.alt);$('#vName').innerHTML=[...L(h.name)].map((c,i)=>c===' '?' ':`<span class="char" style="animation-delay:${i*.035}s">${c}</span>`).join('');
    $$('#vTabs button').forEach(b=>b.classList.toggle('on',b.dataset.h===id));$('#vWalk').style.display=h.walk?'grid':'none';
    hsLayer.innerHTML='';V.hs=h.hs.map(s=>{const el=document.createElement('button');el.className='hs';el.innerHTML=`<i></i><span>${L(s.t)}</span>`;el.setAttribute('aria-label',L(s.t));
      el.onclick=ev=>{ev.stopPropagation();$('#hcK').textContent=L(h.name);$('#hcH').textContent=L(s.t);$('#hcP').textContent=L(s.p);card.classList.add('show');V.auto=false;V.tyaw=THREE.MathUtils.degToRad(s.yaw);V.tpitch=THREE.MathUtils.degToRad(s.pitch)*.8;V.tfov=55;};
      hsLayer.appendChild(el);return {el,v:ypToVec(s.yaw,s.pitch)};});};
  if(relabel&&window.__vHall===id){label();return;}
  if(V.busy||window.__vHall===id)return; V.busy=true; card.classList.remove('show');
  vfade.style.opacity=1; V.tfov=45; await new Promise(r=>setTimeout(r,window.__vHall?700:50));
  window.__vHall=id; label();
  try{sphere.material.dispose();sphere.material=new THREE.MeshBasicMaterial({map:await loadTex(h.pano)});}catch(e){console.warn(e);}
  V.yaw=-.3;V.tyaw=0;V.pitch=V.tpitch=0;V.fov=100;V.tfov=75; vfade.style.opacity=0; V.busy=false;
}
$('.x',card).onclick=()=>{card.classList.remove('show');V.tfov=75;};
$('#vAuto').onclick=()=>{V.auto=!V.auto;$('#vAuto').classList.toggle('on',V.auto);};
$('#vFull').onclick=()=>{if(document.fullscreenElement)document.exitFullscreen();else vbox.requestFullscreen?.().catch(()=>{});};
document.addEventListener('fullscreenchange',()=>{viewerFull=!!document.fullscreenElement;vbox.classList.toggle('fs',viewerFull);});
const walk=$('#walk'),wv=$('video',walk);
$('#vWalk').onclick=()=>{const h=HALLS.find(x=>x.id===window.__vHall);wv.src=h.walk;walk.classList.add('show');wv.play().catch(()=>{});};
$('#walkX').onclick=()=>{walk.classList.remove('show');wv.pause();};
new IntersectionObserver(es=>{if(es[0].isIntersecting&&!window.__vHall)setHall('grand');},{rootMargin:'500px'}).observe(vbox);

/* ====================================================================
   LOADER (logo draws itself → curtain opens) & BOOT
   ==================================================================== */
let loadP=0;const pct=$('#pct');function setLoad(v){loadP=Math.max(loadP,v);pct.textContent=Math.round(loadP)+'%';}
fetch('/assets/ija-logo-gold.svg').then(r=>r.text()).then(svg=>{const box=$('#loaderLogo');box.innerHTML=svg;const ps=$$('path',box);
  ps.forEach(p=>{let l=400;try{l=p.getTotalLength();}catch(e){}p.style.strokeDasharray=l;p.style.strokeDashoffset=l;});
  gsap.to(ps,{strokeDashoffset:0,duration:1.6,stagger:.05,ease:'power2.inOut',onComplete:()=>box.classList.add('filled')});}).catch(()=>{});
gsap.to('#loader .ln',{scaleY:1,duration:1.4,ease:'expo.inOut'});
let finished=false;
function finish(){ if(finished)return; finished=true; setLoad(100);
  gsap.timeline({delay:.6})
   .to('#loader .core',{opacity:0,scale:.96,duration:.6,ease:'power2.in'})
   .to('#loader .p1',{yPercent:-100,duration:1.3,ease:'expo.inOut'},'-=.1')
   .to('#loader .p2',{yPercent:100,duration:1.3,ease:'expo.inOut'},'<')
   .add(()=>{started=true;},'-=.7')
   .add(()=>nav.classList.remove('hide'),'-=.6')
   .from('.grid-line',{scaleY:0,transformOrigin:'top',duration:1.6,stagger:.08,ease:'expo.out'},'<')
   .from('.grid-horizontal-line',{scaleX:0,transformOrigin:'left',duration:1.6,ease:'expo.out'},'<')
   .set('#loader',{display:'none'});
}
applyLang(); bindDynamic(); initStage(); requestAnimationFrame(animate); setLoad(8);
loadModel(finish); setTimeout(finish,9000);
