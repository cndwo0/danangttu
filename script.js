(function(){
  'use strict';

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

  const sendLeadEvent = (label) => {
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', 'generate_lead', {
      method: 'kakao',
      event_category: 'reservation',
      event_label: label || 'kakao_button'
    });

    window.gtag('event', 'click_kakao', {
      method: 'kakao',
      event_category: 'button_click',
      event_label: label || 'kakao_button'
    });
  };

  kakaoButtons.forEach((button) => {
    button.addEventListener('click', () => {
      sendLeadEvent(button.dataset.label || button.textContent.trim());
    });
  });

  document.querySelectorAll('.lightbox-open').forEach((button) => {
    button.addEventListener('click', () => {
      if (!lightbox || !lightboxImage) return;
      const src = button.getAttribute('data-image');
      if (!src) return;
      const img = button.querySelector('img');
      lightboxImage.src = src;
      lightboxImage.alt = img ? img.alt : '다낭 참섬 호핑투어 이미지';
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    if (!lightbox || !lightboxImage) return;
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.removeAttribute('src');
    lightboxImage.alt = '';
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
