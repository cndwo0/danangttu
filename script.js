document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.kakao-link').forEach(function(link){
    link.addEventListener('click', function(){
      if(window.gtag){
        window.gtag('event','generate_lead',{method:'kakao',event_category:'reservation',event_label:'kakao_button'});
      }
    });
  });
});
