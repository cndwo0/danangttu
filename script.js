document.addEventListener('DOMContentLoaded', function () {
  var kakaoButtons = document.querySelectorAll('.kakao-btn');

  kakaoButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          event_category: 'reservation',
          event_label: 'kakao_button',
          transport_type: 'beacon'
        });

        window.gtag('event', 'click_kakao', {
          event_category: 'click',
          event_label: button.textContent.trim() || 'floating_kakao',
          transport_type: 'beacon'
        });
      }
    });
  });
});
