(function(){
  const header = document.getElementById('siteHeader');
  const kakaoButtons = document.querySelectorAll('.kakao-btn');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxClose = document.querySelector('.lightbox-close');

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 24);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  kakaoButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          method: 'kakao',
          event_category: 'reservation',
          event_label: button.textContent.trim()
        });
        window.gtag('event', 'click_kakao', {
          method: 'kakao',
          event_category: 'button_click',
          event_label: button.textContent.trim()
        });
      }
    });
  });

  document.querySelectorAll('.lightbox-open').forEach((button) => {
    button.addEventListener('click', () => {
      if (!lightbox || !lightboxImage) return;
      const src = button.getAttribute('data-image');
      if (!src) return;
      lightboxImage.src = src;
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    if (!lightbox || !lightboxImage) return;
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
    document.body.style.overflow = '';
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });
})();
