(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const loader = $('.preloader');
  const finishLoader = () => loader.classList.add('done');
  requestAnimationFrame(() => requestAnimationFrame(finishLoader));
  setTimeout(finishLoader, 1400);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    }), {threshold: .08});
    $$('.reveal').forEach(el => observer.observe(el));
    document.body.classList.add('js-ready');
  }

  const menu = $('#mobile-nav'), toggle = $('.menu-toggle');
  function closeMenu(restore = false) {
    toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Abrir menu');
    menu.hidden = true; menu.inert = true; document.body.classList.remove('locked');
    if (restore) toggle.focus();
  }
  toggle.addEventListener('click', () => {
    if (toggle.getAttribute('aria-expanded') === 'true') return closeMenu(true);
    menu.hidden = false; menu.inert = false; document.body.classList.add('locked');
    toggle.setAttribute('aria-expanded','true'); toggle.setAttribute('aria-label','Fechar menu');
    menu.querySelector('a').focus();
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {closeMenu(); const section=$(a.hash); section.setAttribute('tabindex','-1'); section.focus({preventScroll:true});}));
  document.addEventListener('keydown', e => {
    if (toggle.getAttribute('aria-expanded') !== 'true') return;
    if (e.key === 'Escape') closeMenu(true);
    if (e.key === 'Tab') {
      const links = [...menu.querySelectorAll('a')];
      if (e.shiftKey && document.activeElement === toggle) { e.preventDefault(); links.at(-1).focus(); }
      else if (!e.shiftKey && document.activeElement === links.at(-1)) {e.preventDefault(); toggle.focus();}
      else if (e.shiftKey && document.activeElement === links[0]) {e.preventDefault(); toggle.focus();}
    }
  });
  matchMedia('(min-width:701px)').addEventListener('change', e => {if(e.matches) closeMenu();});

  const hero = $('#hero-video'), heroToggle = $('#hero-toggle');
  let heroRequested = !reduced.matches;
  function updateHero() {
    heroToggle.setAttribute('aria-label', hero.paused ? 'Reproduzir vídeo do hero' : 'Pausar vídeo do hero');
    heroToggle.firstElementChild.textContent = hero.paused ? '▷' : 'Ⅱ';
  }
  function playHero(){hero.play().catch(updateHero);}
  hero.addEventListener('play', updateHero); hero.addEventListener('pause', updateHero);
  if (reduced.matches) {hero.removeAttribute('autoplay'); hero.pause();updateHero();} else playHero();
  heroToggle.addEventListener('click', () => {heroRequested=hero.paused; hero.paused?playHero():hero.pause();});
  hero.addEventListener('error', () => {heroToggle.hidden=true;$('.hero-video-message').hidden=false;});
  hero.querySelector('source').addEventListener('error', () => {heroToggle.hidden=true;$('.hero-video-message').hidden=false;});
  document.addEventListener('visibilitychange', () => {if(document.hidden)hero.pause(); else if(heroRequested)playHero();});
  reduced.addEventListener('change', e => {if(e.matches){heroRequested=false;hero.pause();}});
  if ('IntersectionObserver' in window) new IntersectionObserver(([e]) => {if(!e.isIntersecting)hero.pause();else if(heroRequested&&!document.hidden)playHero();},{threshold:.1}).observe(hero);

  $$('.filters button').forEach(btn => btn.addEventListener('click', () => {
    $$('.filters button').forEach(b => b.setAttribute('aria-pressed', String(b===btn)));
    const filter=btn.dataset.filter; let count=0;
    $$('.project').forEach(project => {project.hidden=filter!=='all'&&project.dataset.category!==filter;if(!project.hidden){project.classList.add('visible');count++;}});
    $('.project-grid').classList.toggle('is-filtered',filter!=='all');
    $('#filter-status').textContent=`${count} ${count===1?'seleção apresentada':'seleções apresentadas'}.`;
  }));
  $$('.phase-tabs button').forEach(btn => btn.addEventListener('click', () => {
    $$('.phase-tabs button').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));
    $('.phase-grid').dataset.view=btn.dataset.phase;
  }));

  const galleries = {
    residencial: {title:'Moradia contemporânea',images:[['moradia-piscina.jpg','Fachada branca, ripado de madeira e piscina exterior.']]},
    cozinhas: {title:'Cozinhas, matéria e função · seleção por tipologia',images:[['cozinha-madeira.jpg','Madeira, pedra clara e iluminação linear.'],['cozinha-contraste.jpg','Frentes brancas, superfícies escuras e ilha central. Outro espaço da seleção de cozinhas.']]},
    banho: {title:'Espaços de bem-estar',images:[['banheira-luz.jpg','Banheira de hidromassagem e entrada de luz natural.']]},
    obra: {title:'O desenho em obra · registos por tipologia',images:[['piscina-em-obra.jpg','Moradia e piscina durante a construção.'],['estrutura-frontal.jpg','Registo da estrutura e dos vãos de uma moradia.'],['intervencao-interior.jpg','Intervenção interior em curso.'],['interior-em-obra.jpg','Paredes e instalações de um interior em remodelação.'],['remodelacao-em-obra.jpg','Registo de demolição e preparação de instalações. Espaços apresentados sem associação entre obras.']]}
  };
  const dialog=$('.lightbox'), image=$('#lightbox-image'); let current, index=0, opener;
  function showImage(){
    const [file,caption]=current.images[index];image.src=`assets/images/${file}`;image.alt=caption;
    $('#lightbox-caption').textContent=caption;$('#image-count').textContent=`${String(index+1).padStart(2,'0')} / ${String(current.images.length).padStart(2,'0')}`;
    $('#prev-image').hidden=$('#next-image').hidden=current.images.length<2;
  }
  function step(n){index=(index+n+current.images.length)%current.images.length;showImage();}
  $$('.project-open').forEach(b=>b.addEventListener('click',()=>{opener=b;current=galleries[b.dataset.gallery];index=0;$('#gallery-title').textContent=current.title;showImage();dialog.showModal();document.body.classList.add('locked');$('#close-gallery').focus();}));
  $('#close-gallery').addEventListener('click',()=>dialog.close());
  $('#prev-image').addEventListener('click',()=>step(-1));$('#next-image').addEventListener('click',()=>step(1));
  dialog.addEventListener('close',()=>{document.body.classList.remove('locked');opener?.focus({preventScroll:true});});
  dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();step(-1);}if(e.key==='ArrowRight'){e.preventDefault();step(1);}});
  let startX;
  image.addEventListener('touchstart',e=>startX=e.changedTouches[0].clientX,{passive:true});
  image.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-startX;if(Math.abs(dx)>55)step(dx<0?1:-1);},{passive:true});
  const film=$('#project-video'), filmPlay=$('#play-film');
  filmPlay.addEventListener('click',()=>{if(film.paused){film.play().then(()=>{film.focus();hero.pause();}).catch(()=>{$('#film-error').hidden=false;});}else film.pause();});
  film.addEventListener('play',()=>{filmPlay.innerHTML='Pausar filme <span aria-hidden="true">Ⅱ</span>';hero.pause();});
  ['pause','ended'].forEach(ev=>film.addEventListener(ev,()=>filmPlay.innerHTML='Reproduzir filme <span aria-hidden="true">▷</span>'));
  film.addEventListener('error',()=>$('#film-error').hidden=false);
  film.querySelector('source').addEventListener('error',()=>$('#film-error').hidden=false);
})();
