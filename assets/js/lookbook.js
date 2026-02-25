// Progressive enhancement
if (document.body) document.body.classList.remove('no-js');

// Mobile nav toggle
const toggle = document.querySelector('.lb-toggle');
const menu = document.querySelector('.lb-menu');
if (toggle){
  toggle.addEventListener('click', ()=>{
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('show');
  });
}

// Year in footer
const y = document.querySelector('#year');
if (y) y.textContent = new Date().getFullYear();

// Custom cursor (soft dot + ring)
(function(){
  const c = document.querySelector('.custom-cursor');
  if (!c) return;
  let x = window.innerWidth/2, y = window.innerHeight/2;
  let tx=x, ty=y;
  const speed = 0.18; // smoothing

  function raf(){
    x += (tx - x) * speed;
    y += (ty - y) * speed;
    c.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(raf);
  }
  window.addEventListener('mousemove', (e)=>{ tx = e.clientX; ty = e.clientY; });
  window.addEventListener('mouseenter', (e)=>{ c.style.opacity = '1'; });
  window.addEventListener('mouseleave', (e)=>{ c.style.opacity = '0'; });
  raf();
})();
