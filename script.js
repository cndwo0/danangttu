document.addEventListener('DOMContentLoaded', function () {
  var kakaoButtons = document.querySelectorAll('.kakao-btn');
  kakaoButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          method: 'kakao',
          event_category: 'reservation',
          event_label: button.textContent.trim()
        });
      }
    });
  });

  var lightbox = document.querySelector('.lightbox');
  var lightboxImage = document.querySelector('.lightbox img');
  var closeButton = document.querySelector('.lightbox-close');
  document.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {
      var src = item.getAttribute('data-image');
      if (!src || !lightbox || !lightboxImage) return;
      lightboxImage.src = src;
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });
  function closeLightbox() {
    if (!lightbox || !lightboxImage) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
  }
  if (closeButton) closeButton.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeLightbox();
  });
});
