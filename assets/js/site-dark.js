// remove no-js
if (document.body) document.body.classList.remove('no-js');

// Smooth follow for the MRI cursor + rotating beam
(function(){
  const c = document.querySelector('.mri-cursor');
  const beam = document.querySelector('.mri-beam');
  if (!c || !beam) return;
  let x = window.innerWidth/2, y = window.innerHeight/2; // rendered
  let tx=x, ty=y; // targets
  const speed = 0.25; // smoothing
  let theta = 0; // rotation

  function raf(){
    x += (tx - x) * speed;
    y += (ty - y) * speed;
    c.style.transform = `translate(${x}px, ${y}px)`;

    theta = (theta + 2.2) % 360; // rotate beam
    beam.style.transform = `rotate(${theta}deg) translate(0, -23px)`;
    requestAnimationFrame(raf);
  }
  window.addEventListener('mousemove', e=>{ tx = e.clientX; ty = e.clientY; });
  raf();
})();
