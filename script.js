(function(){
  var header = document.getElementById('siteHeader');
  if(header){
    var onScroll = function(){ header.classList.toggle('scrolled', window.scrollY > 10); };
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  var kakaoButtons = document.querySelectorAll('.kakao-track');
  kakaoButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
      if(typeof window.gtag === 'function'){
        window.gtag('event', 'generate_lead', {
          method: 'kakao',
          event_category: 'reservation',
          event_label: btn.textContent.trim()
        });
      }
    });
  });

  var lightbox = document.getElementById('lightbox');
  if(lightbox){
    var lightboxImg = lightbox.querySelector('img');
    var closeBtn = lightbox.querySelector('.lightbox-close');
    document.querySelectorAll('.gallery-item img').forEach(function(img){
      img.parentElement.addEventListener('click', function(){
        lightboxImg.src = img.currentSrc || img.src;
        lightboxImg.alt = img.alt;
        lightbox.hidden = false;
      });
    });
    var close = function(){ lightbox.hidden = true; lightboxImg.src = ''; };
    closeBtn.addEventListener('click', close);
    lightbox.addEventListener('click', function(e){ if(e.target === lightbox) close(); });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && !lightbox.hidden) close(); });
  }
})();
