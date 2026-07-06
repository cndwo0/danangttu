(function(){
  const header = document.getElementById('siteHeader');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 20);
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  document.querySelectorAll('.kakao-track').forEach((el, index) => {
    el.addEventListener('click', () => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', { method:'kakao', button_position:index + 1, page_title:document.title });
        window.gtag('event', 'click_kakao', { event_category:'engagement', event_label:el.textContent.trim() });
      }
    });
  });

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  const closeBtn = lightbox ? lightbox.querySelector('.lightbox-close') : null;
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.parentElement.addEventListener('click', () => {
      if (!lightbox || !lightboxImg) return;
      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt || '';
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });
  const closeLightbox = () => { if(lightbox){ lightbox.hidden = true; document.body.style.overflow = ''; } };
  closeBtn && closeBtn.addEventListener('click', closeLightbox);
  lightbox && lightbox.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeLightbox(); });
})();
