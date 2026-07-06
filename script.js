document.addEventListener('DOMContentLoaded',function(){
  const kakaoLinks=document.querySelectorAll('.kakao-link');
  kakaoLinks.forEach((link)=>{link.addEventListener('click',function(){
    if(typeof window.gtag==='function'){
      window.gtag('event','generate_lead',{method:'kakao',event_category:'reservation',event_label:this.textContent.trim()});
      window.gtag('event','click_kakao',{event_category:'cta',event_label:this.textContent.trim()});
    }
  });});
  const lightbox=document.getElementById('lightbox');
  const lightboxImg=lightbox?lightbox.querySelector('img'):null;
  const closeBtn=document.getElementById('lightboxClose');
  document.querySelectorAll('.gallery button').forEach(btn=>btn.addEventListener('click',()=>{
    if(!lightbox||!lightboxImg) return; lightboxImg.src=btn.dataset.img; lightbox.classList.add('active'); lightbox.setAttribute('aria-hidden','false');
  }));
  function closeLightbox(){ if(!lightbox||!lightboxImg) return; lightbox.classList.remove('active'); lightbox.setAttribute('aria-hidden','true'); lightboxImg.src=''; }
  if(closeBtn) closeBtn.addEventListener('click',closeLightbox);
  if(lightbox) lightbox.addEventListener('click',e=>{if(e.target===lightbox) closeLightbox();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape') closeLightbox();});
});
