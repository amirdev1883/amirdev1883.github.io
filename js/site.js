// Preserve template behaviour. Bootstrap handles the mobile menu when online.
// If Bootstrap's bundle is unavailable, use a tiny, accessible fallback.
document.addEventListener('DOMContentLoaded',()=>{const btn=document.querySelector('.navbar-toggler');const menu=document.getElementById('navbarSupportedContent');if(!btn||!menu)return;btn.addEventListener('click',()=>{if(window.bootstrap&&window.bootstrap.Collapse)return;const show=menu.classList.toggle('show');btn.setAttribute('aria-expanded',String(show));});});
