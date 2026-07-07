(function(){
  const kakaoButtons=document.querySelectorAll('.kakao-btn');
  kakaoButtons.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
      if(typeof window.gtag==='function'){
        window.gtag('event','generate_lead',{method:'kakao',button_position:index+1});
        window.gtag('event','click_kakao',{event_category:'reservation',event_label:btn.textContent.trim()});
      }
    });
  });

  const lightbox=document.querySelector('.lightbox');
  const lightboxImg=lightbox?lightbox.querySelector('img'):null;
  const closeBtn=lightbox?lightbox.querySelector('button'):null;
  document.querySelectorAll('.gallery button').forEach(button=>{
    button.addEventListener('click',()=>{
      if(!lightbox||!lightboxImg)return;
      lightboxImg.src=button.dataset.img;
      lightbox.classList.add('show');
      lightbox.setAttribute('aria-hidden','false');
    });
  });
  function closeLightbox(){
    if(!lightbox||!lightboxImg)return;
    lightbox.classList.remove('show');
    lightbox.setAttribute('aria-hidden','true');
    lightboxImg.src='';
  }
  if(closeBtn)closeBtn.addEventListener('click',closeLightbox);
  if(lightbox)lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});
})();
