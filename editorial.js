'use strict';
(() => {
 const $=(q,r=document)=>r.querySelector(q), $$=(q,r=document)=>Array.from(r.querySelectorAll(q));
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const saver=Boolean(navigator.connection?.saveData);
 const mobile=window.matchMedia('(max-width:760px)').matches;
 const dict={
 sq:{
 'nav.about':'Rreth nesh','nav.memorial':'Ceremonitë','nav.spaces':'Sallat','nav.events':'Eventet','nav.gallery':'Galeria','nav.contact':'Na kontaktoni',
 'hero.eyebrow':'TIRANË · QË NGA VITI 2000','hero.line1':'Momente','hero.line2':'me kuptim.','hero.copy':'Për njerëzit që duam. Për kujtimet që mbeten. Për çdo moment që meriton një vend të veçantë.','hero.cta':'Zbuloni ambientet','hero.cta2':'Ceremoni me dinjitet','hero.foot':'KU MIKPRITJA TAKON KUJTIMIN','hero.scroll':'ZBRISNI POSHTË',
 'intro.kicker':'NJË HISTORI MIKPRITJEJE','intro.label':'MË SHUMË SE NJË HAPËSIRË','intro.line1':'Ka momente','intro.line2':'që jetojnë','intro.line3':'përtej kohës.','intro.copy':'Që nga viti 2000, IJA Events mirëpret familjet e Tiranës me kujdes, qetësi dhe vëmendje në çdo detaj. Një ambient që i jep vlerë çdo bashkimi, kujtimi dhe ceremonie.',
 'mem.label':'CEREMONITË PËRKUJTIMORE','mem.line1':'Me respekt.','mem.line2':'Me dinjitet.','mem.copy':'Në çastet më të ndjeshme, ne krijojmë një ambient të qetë për të kujtuar dhe për të qëndruar pranë njëri-tjetrit. Çdo detaj trajtohet me diskrecion e përkujdesje.','mem.cta':'Flisni me ne',
 'spaces.section':'AMBIENTET','spaces.label':'ZBULONI HAPËSIRAT','spaces.title1':'Hapësira për','spaces.title2':'çdo histori.','spaces.copy':'Tre ambiente të veçanta, të përgatitura për të pritur familjet dhe të ftuarit me elegancë, qetësi dhe rehati.','spaces.grand.sub':'HAPËSIRA KRYESORE','spaces.grand':'Salla e Madhe','spaces.royal.sub':'KOMFORT & PRIVATËSI','spaces.royal':'Salla Royal','spaces.salon.sub':'INTIMITET & ELEGANCË','spaces.salon':'Salon','spaces.note':'Çdo ambient, i menduar për njerëzit që kanë rëndësi.',
 'film.line1':'Ndjeni','film.line2':'atmosferën.','film.copy':'Hyni për një çast në botën tonë.',
 'events.label':'EVENTET & MIKPRITJA','events.eyebrow':'PËR ÇDO MOMENT TË VEÇANTË','events.title1':'Së bashku,','events.title2':'në çdo rast.','events.copy':'Nga mbledhjet familjare te pritjet dhe eventet, krijojmë atmosferën e duhur për çdo rast — me shërbim të përkushtuar dhe mikpritje të ngrohtë.','events.service1':'Mbledhje familjare','events.service2':'Evente & pritje','events.service3':'Dreka përkujtimore','events.cta':'Planifikoni eventin',
 'gallery.label':'GALERIA','gallery.title1':'Shihni detajet.','gallery.title2':'Ndjeni ndryshimin.','gallery.copy':'Një vështrim më afër hapësirave tona.',
 'contact.label':'JEMI KËTU PËR JU','contact.line1':'Le të krijojmë','contact.line2':'diçka me kuptim.','contact.copy':'Na kontaktoni për vizita, informacione mbi sallat, ceremoni apo evente. Do t\'ju përgjigjemi me kujdes.','contact.location':'Na gjeni në Google Maps ↗',
 'form.name':'Emri dhe mbiemri','form.phone':'Numri i telefonit','form.type':'Lloji i kërkesës','form.mem':'Ceremoni përkujtimore','form.event':'Event / pritje','form.visit':'Vizitë në sallë','form.other':'Informacion tjetër','form.date':'Data e preferuar (opsionale)','form.message':'Mesazhi','form.submit':'Përgatit mesazhin në WhatsApp','form.note':'WhatsApp do të hapet me një mesazh gati; dërgimin e konfirmoni vetë.','pano.kicker':'SHIHNI AMBIENTIN NGA AFËR','pano.title1':'Hyni brenda.','pano.title2':'Shikoni çdo kënd.','pano.copy':'Një përvojë interaktive 360° e bazuar në pamje panoramike të sallave. Lëvizni për të eksploruar.','pano.start':'Zbuloni hapësirën në 360°','pano.open':'Hap përvojën','pano.note':'Pamjet panoramike janë vizualizime të bazuara në fotografi; fotografitë në galeri janë reale.','footer.tag':'Momente me kuptim. Kujtime që mbeten.','wa':'Na shkruani'
 },
 en:{
 'nav.about':'About','nav.memorial':'Memorials','nav.spaces':'Our spaces','nav.events':'Events','nav.gallery':'Gallery','nav.contact':'Get in touch',
 'hero.eyebrow':'TIRANA · ESTABLISHED 2000','hero.line1':'Moments','hero.line2':'with meaning.','hero.copy':'For the people we love. For the memories that remain. For every moment that deserves a special place.','hero.cta':'Explore our spaces','hero.cta2':'Memorials with dignity','hero.foot':'WHERE HOSPITALITY MEETS MEMORY','hero.scroll':'SCROLL TO EXPLORE',
 'intro.kicker':'A LEGACY OF HOSPITALITY','intro.label':'MORE THAN A SPACE','intro.line1':'Some moments','intro.line2':'live on','intro.line3':'beyond time.','intro.copy':'Since 2000, IJA Events has welcomed families in Tirana with care, calm and attention to every detail. A place that gives meaning to every gathering, memory and ceremony.',
 'mem.label':'MEMORIAL CEREMONIES','mem.line1':'With respect.','mem.line2':'With dignity.','mem.copy':'In life\'s most sensitive moments, we offer a peaceful space to remember and be close to one another. Every detail is handled with discretion and care.','mem.cta':'Speak with us',
 'spaces.section':'OUR SPACES','spaces.label':'DISCOVER THE VENUE','spaces.title1':'A setting for','spaces.title2':'every story.','spaces.copy':'Three distinct settings, prepared to welcome families and guests with elegance, calm and comfort.','spaces.grand.sub':'THE MAIN HALL','spaces.grand':'Grand Ballroom','spaces.royal.sub':'COMFORT & PRIVACY','spaces.royal':'Royal Hall','spaces.salon.sub':'INTIMACY & ELEGANCE','spaces.salon':'Salon','spaces.note':'Every space, made for the people who matter.',
 'film.line1':'Feel the','film.line2':'atmosphere.','film.copy':'Step inside our world for a moment.',
 'events.label':'EVENTS & HOSPITALITY','events.eyebrow':'FOR EVERY SPECIAL MOMENT','events.title1':'Together,','events.title2':'for every occasion.','events.copy':'From family gatherings to receptions and events, we create the right atmosphere for every occasion, with attentive service and warm hospitality.','events.service1':'Family gatherings','events.service2':'Events & receptions','events.service3':'Memorial lunches','events.cta':'Plan your event',
 'gallery.label':'GALLERY','gallery.title1':'See the details.','gallery.title2':'Feel the difference.','gallery.copy':'A closer look at our spaces.',
 'contact.label':'HERE FOR YOU','contact.line1':'Let us create','contact.line2':'something meaningful.','contact.copy':'Contact us to arrange a visit or ask about halls, memorial ceremonies or events. We\'ll reply with care.','contact.location':'Find us on Google Maps ↗',
 'form.name':'Full name','form.phone':'Phone number','form.type':'Type of request','form.mem':'Memorial ceremony','form.event':'Event / reception','form.visit':'Venue visit','form.other':'Other enquiry','form.date':'Preferred date (optional)','form.message':'Message','form.submit':'Prepare WhatsApp message','form.note':'WhatsApp opens with a prepared message; you choose when to send.','pano.kicker':'EXPLORE OUR SPACE','pano.title1':'Step inside.','pano.title2':'See every angle.','pano.copy':'An interactive 360° experience based on panorama visualisations of our halls. Drag to explore.','pano.start':'Discover our spaces in 360°','pano.open':'Open experience','pano.note':'Panoramic views are visualisations based on photographs; the images in our gallery are real.','footer.tag':'Meaningful moments. Lasting memories.','wa':'Message us'
 }};
 let language='sq';
 try{const stored=localStorage.getItem('ija-language');if(stored==='en')language='en'}catch(e){}
 function translate(l){
 language=l;document.documentElement.lang=l;
 document.title=l==='sq'?'IJA Events — Momente me kuptim':'IJA Events — Moments with meaning';
 $$('[data-t]').forEach(el=>{const t=dict[l][el.dataset.t];if(t!==undefined)el.textContent=t});
 $$('[data-lang]').forEach(b=>{b.classList.toggle('is-active',b.dataset.lang===l);b.setAttribute('aria-pressed',String(b.dataset.lang===l))});
 $('#fName').placeholder=l==='sq'?'Emri juaj':'Your name';
 $('#fMessage').placeholder=l==='sq'?'Na tregoni çfarë ju nevojitet...':'How can we help?';
 try{localStorage.setItem('ija-language',l)}catch(e){}
 window.dispatchEvent(new Event('ija:language'));
 }
 $$('[data-lang]').forEach(b=>b.addEventListener('click',()=>translate(b.dataset.lang)));
 $('#year').textContent=String(new Date().getFullYear());
 const header=$('#header'),progress=$('#progress'),hero=$('.hero'),heroVisual=$('.hero-visual'),heroContent=$('.hero-content'),menu=$('#menuToggle');
 function scrollUpdate(){
 const y=scrollY;header.classList.toggle('scrolled',y>80);
 const scrollMax=Math.max(1,document.documentElement.scrollHeight-innerHeight);
 progress.style.transform='scaleX('+Math.max(0,Math.min(1,y/scrollMax))+')';
 // Sticky hero scene always has an accessible static fallback.
 if(!window.gsap&&!reduced){
 const h=Math.max(1,hero.offsetHeight-innerHeight),p=Math.max(0,Math.min(1,y/h));
 heroVisual.style.transform='scale('+(1+p*.17)+')';
 heroContent.style.opacity=String(Math.max(.1,1-p*.8));
 }
 }
 addEventListener('scroll',scrollUpdate,{passive:true});scrollUpdate();
 menu.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Mbyll menunë':'Hap menunë')});
 $$('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{document.body.classList.remove('menu-open');menu.setAttribute('aria-expanded','false')}));
 const film=$('#hallVideo'),toggle=$('#filmToggle'),heroVideo=$('#heroVideo');
 const playVideo=v=>{
 if(reduced||saver||document.hidden)return;
 v.play().then(()=>v.classList.add('is-playing')).catch(()=>{v.classList.remove('is-playing')});
 };
 if(!reduced&&!saver){heroVideo.addEventListener('playing',()=>heroVideo.classList.add('is-playing'));heroVideo.addEventListener('error',()=>heroVideo.classList.remove('is-playing'));playVideo(heroVideo)}
 else{heroVideo.pause();heroVideo.removeAttribute('autoplay')}
 const filmObs=new IntersectionObserver(entries=>entries.forEach(entry=>{
 if(entry.isIntersecting){if(film.dataset.paused!=='true')playVideo(film)}
 else{film.pause();film.classList.remove('is-playing')}
 }),{threshold:.22});
 filmObs.observe($('#film'));
 toggle.addEventListener('click',()=>{
 if(!film.paused){film.dataset.paused='true';film.pause();toggle.textContent='▶';toggle.setAttribute('aria-label','Luaj videon')}
 else{film.dataset.paused='false';playVideo(film);toggle.textContent='Ⅱ';toggle.setAttribute('aria-label','Ndalo videon')}
 });
 document.addEventListener('visibilitychange',()=>{if(document.hidden){film.pause();heroVideo.pause()}else{playVideo(heroVideo);if($('#film').getBoundingClientRect().top<innerHeight&&film.dataset.paused!=='true')playVideo(film)}});
 const lightbox=$('#lightbox');
 $$('.gallery-photo').forEach(btn=>btn.addEventListener('click',()=>{
 const im=$('img',lightbox);im.src=btn.dataset.full;im.alt=btn.dataset.caption||'IJA Events';$('span',lightbox).textContent=btn.dataset.caption||'IJA Events';lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');$('#closeLightbox').focus();
 }));
 const close=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');$('img',lightbox).removeAttribute('src')};
 $('#closeLightbox').addEventListener('click',close);
 lightbox.addEventListener('click',e=>{if(e.target===lightbox)close()});
 addEventListener('keydown',e=>{if(e.key==='Escape'){close();document.body.classList.remove('menu-open');menu.setAttribute('aria-expanded','false')}});
 const today=new Date();today.setMinutes(today.getMinutes()-today.getTimezoneOffset());$('#fDate').min=today.toISOString().slice(0,10);
 $$('.space-card').forEach(card=>card.addEventListener('click',()=>{const name=$('h3',card)?.textContent||'';$('#fMessage').value=(language==='sq'?'Dëshiroj informacion për ':'I would like information about ')+name+'.';}));
 $('#contactForm').addEventListener('submit',e=>{
 e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;
 const data=new FormData(form),names={name:language==='sq'?'Emri':'Name',phone:language==='sq'?'Telefoni':'Phone',type:language==='sq'?'Shërbimi':'Service',date:language==='sq'?'Data':'Date',message:language==='sq'?'Mesazhi':'Message'};
 const lines=[language==='sq'?'Përshëndetje IJA Events, dëshiroj të bëj një kërkesë.':'Hello IJA Events, I would like to make an enquiry.','',...Object.keys(names).filter(k=>data.get(k)).map(k=>names[k]+': '+data.get(k))];
 window.open('https://wa.me/355692087803?text='+encodeURIComponent(lines.join('\n')),'_blank','noopener,noreferrer');
 });
 if(!reduced&&!mobile){
 const cursor=$('#cursor');let pointerX=-100,pointerY=-100,raf=false;
 document.addEventListener('pointermove',e=>{
 pointerX=e.clientX;pointerY=e.clientY;
 const active=!!e.target.closest('[data-cursor]');
 cursor.classList.toggle('visible',active);
 if(!raf){raf=true;requestAnimationFrame(()=>{cursor.style.left=pointerX+'px';cursor.style.top=pointerY+'px';document.documentElement.style.setProperty('--mx',pointerX+'px');document.documentElement.style.setProperty('--my',pointerY+'px');raf=false})}
 },{passive:true});
 }
 // All content remains readable when animation libraries or GPU acceleration are unavailable.
 if(window.gsap&&window.ScrollTrigger&&!reduced){
 gsap.registerPlugin(ScrollTrigger);
 gsap.from('.hero-eyebrow',{y:22,opacity:0,duration:1,delay:.25,ease:'power3.out'});
 gsap.from('.hero-line',{y:100,opacity:0,stagger:.12,duration:1.5,delay:.4,ease:'expo.out'});
 gsap.from('.hero-content>p,.hero-actions',{y:35,opacity:0,stagger:.15,duration:1.2,delay:.9,ease:'power3.out'});
 gsap.to(heroVisual,{scale:1.19,ease:'none',scrollTrigger:{trigger:hero,start:'top top',end:'bottom bottom',scrub:true}});
 gsap.to(heroContent,{opacity:0,yPercent:-16,ease:'none',scrollTrigger:{trigger:hero,start:'top top',end:'bottom 70%',scrub:true}});
 gsap.to('.hero-grid',{opacity:.03,ease:'none',scrollTrigger:{trigger:hero,start:'top top',end:'bottom bottom',scrub:true}});
 $$('[data-reveal]').forEach((el,i)=>{
 gsap.fromTo(el,{y:Math.min(58,20+(i%3)*12),opacity:0,filter:'blur(7px)'},{y:0,opacity:1,filter:'blur(0px)',duration:1.15,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 92%',once:true}});
 });
 gsap.to('.story-media',{yPercent:9,ease:'none',scrollTrigger:{trigger:'#memorial',start:'top bottom',end:'bottom top',scrub:true}});
 gsap.to('.film-video-wrap',{scale:1.12,ease:'none',scrollTrigger:{trigger:'#film',start:'top bottom',end:'bottom top',scrub:true}});
 gsap.to('.events-img img',{yPercent:-5,ease:'none',scrollTrigger:{trigger:'#events',start:'top bottom',end:'bottom top',scrub:true}});
 $$('.space-card').forEach((el,i)=>{
 gsap.from(el,{y:110,opacity:0,duration:1.25,ease:'power3.out',delay:i*.08,scrollTrigger:{trigger:el,start:'top 93%',once:true}});
 gsap.to($('img',el),{yPercent:-7,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:true}});
 });
 $$('.gallery-photo').forEach((el,i)=>gsap.from(el,{opacity:0,clipPath:'inset(100% 0 0 0)',duration:1.3,delay:i*.06,ease:'power3.inOut',scrollTrigger:{trigger:el,start:'top 94%',once:true}}));
 $$('[data-reveal]').forEach(el=>el.style.removeProperty('will-change'));
 addEventListener('load',()=>ScrollTrigger.refresh(),{once:true});
 }
 translate(language);
})();