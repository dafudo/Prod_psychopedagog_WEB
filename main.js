(function(){
  'use strict';
  var menuButton=document.querySelector('.menu-toggle');
  var nav=document.getElementById('primary-nav');
  if(menuButton&&nav){
    function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Otwórz menu');nav.classList.remove('is-open');}
    menuButton.addEventListener('click',function(){var opened=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!opened));menuButton.setAttribute('aria-label',opened?'Otwórz menu':'Zamknij menu');nav.classList.toggle('is-open',!opened);});
    nav.querySelectorAll('a').forEach(function(link){link.addEventListener('click',closeMenu);});
    document.addEventListener('keydown',function(event){if(event.key==='Escape')closeMenu();});
    document.addEventListener('click',function(event){if(!nav.contains(event.target)&&!menuButton.contains(event.target))closeMenu();});
  }
  var year=document.getElementById('year');if(year)year.textContent=String(new Date().getFullYear());
  var reveals=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:.1,rootMargin:'0px 0px -25px 0px'});
    reveals.forEach(function(element){observer.observe(element);});
  }else{reveals.forEach(function(element){element.classList.add('is-visible');});}
  var templates={
    emocje:{category:'KARTA EMOCJI',title:'Moje emocje dzisiaj',intro:'Zatrzymaj się na moment i nazwij to, co czujesz. Każda emocja jest ważna.',questions:['Jak czuję się w tej chwili?','Co mogło wpłynąć na moje samopoczucie?','Czego teraz potrzebuję?']},
    obserwacja:{category:'ARKUSZ OBSERWACJI',title:'Arkusz obserwacji',intro:'Zapisz konkretne zachowania i sytuacje. Oddziel obserwację od interpretacji.',questions:['W jakiej sytuacji prowadzono obserwację?','Jakie zachowania i mocne strony zauważono?','Jakie działania warto zaplanować?']},
    zajecia:{category:'PLAN ZAJĘĆ',title:'Plan zajęć',intro:'Zaplanuj spotkanie tak, aby cel, aktywności i refleksja tworzyły spójną całość.',questions:['Jaki jest cel spotkania?','Jakie aktywności pomogą osiągnąć ten cel?','Jak podsumujemy pracę i kolejne kroki?']}
  };
  var select=document.getElementById('demo-template');
  var topic=document.getElementById('demo-topic');
  var title=document.getElementById('demo-sheet-title');
  var category=document.getElementById('demo-category');
  var intro=document.getElementById('demo-intro');
  var questions=document.getElementById('demo-questions');
  function renderDemo(){
    if(!select||!topic||!title||!category||!intro||!questions)return;
    var data=templates[select.value]||templates.emocje;
    title.textContent=topic.value.trim()||data.title;
    category.textContent=data.category;intro.textContent=data.intro;
    questions.replaceChildren();
    data.questions.forEach(function(question,index){
      var wrapper=document.createElement('div');wrapper.className='demo-question';
      var label=document.createElement('strong');label.textContent=String(index+1).padStart(2,'0')+'. '+question;wrapper.appendChild(label);
      for(var i=0;i<2;i++){var line=document.createElement('div');line.className='answer-line';wrapper.appendChild(line);}
      questions.appendChild(wrapper);
    });
  }
  if(select&&topic){select.addEventListener('change',function(){topic.value=(templates[select.value]||templates.emocje).title;renderDemo();});topic.addEventListener('input',renderDemo);renderDemo();}
  var printButton=document.getElementById('print-demo');if(printButton)printButton.addEventListener('click',function(){window.print();});
})();
