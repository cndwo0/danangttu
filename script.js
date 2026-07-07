(function () {
  const kakaoButtons = document.querySelectorAll('.kakao-btn');
  kakaoButtons.forEach((button) => {
    button.addEventListener('click', function () {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          method: 'kakao',
          event_category: 'reservation',
          event_label: this.textContent.trim()
        });
      }
    });
  });

  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = lightbox ? lightbox.querySelector('img') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('button') : null;
  const galleryButtons = document.querySelectorAll('.gallery-grid button');

  galleryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const src = button.getAttribute('data-img');
      if (!lightbox || !lightboxImage || !src) return;
      lightboxImage.src = src;
      lightbox.classList.add('show');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  function closeLightbox() {
    if (!lightbox || !lightboxImage) return;
    lightbox.classList.remove('show');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
  }

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
