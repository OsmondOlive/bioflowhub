/* =====================================================
   BioFlowHub Effects — bioflowhub-effects.js
   Efeitos suaves, sem exagero, sem peso
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

  // 1. Navbar: sombra ao rolar a página
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // 2. Cursor personalizado sutíl (ponto verde que segue o mouse)
  const cursor = document.createElement('div');
  cursor.id = 'bio-cursor';
  cursor.style.cssText = `
    position: fixed;
    width: 8px;
    height: 8px;
    background: #52b788;
    border-radius: 50%;
    pointer-events: none;
    z-index: 99999;
    transition: transform 0.15s ease, opacity 0.3s ease;
    opacity: 0;
  `;
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', function (e) {
    cursor.style.left = e.clientX - 4 + 'px';
    cursor.style.top = e.clientY - 4 + 'px';
    cursor.style.opacity = '1';
  });

  document.addEventListener('mouseleave', function () {
    cursor.style.opacity = '0';
  });

  // Cursor cresce ao passar em links e botões
  document.querySelectorAll('a, button, .btn').forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      cursor.style.transform = 'scale(3)';
      cursor.style.opacity = '0.5';
    });
    el.addEventListener('mouseleave', function () {
      cursor.style.transform = 'scale(1)';
      cursor.style.opacity = '1';
    });
  });

  // 3. Reveal suave dos posts ao fazer scroll (Intersection Observer)
  const posts = document.querySelectorAll('.post-preview');
  if (posts.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    posts.forEach(function (post, index) {
      post.style.opacity = '0';
      post.style.transform = 'translateY(20px)';
      post.style.transition = 'opacity 0.5s ease ' + (index * 0.08) + 's, transform 0.5s ease ' + (index * 0.08) + 's';
      observer.observe(post);
    });
  }

  // 4. Progresso de leitura no topo dos posts (barra verde fina)
  if (document.querySelector('article') || document.querySelector('.post-body')) {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(to right, #2e7d5e, #52b788);
      z-index: 99998;
      width: 0%;
      transition: width 0.1s linear;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function () {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    });
  }

  // 5. "Back to top" button — aparece ao rolar 300px
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '↑';
  backToTop.title = 'Back to top';
  backToTop.style.cssText = `
    position: fixed;
    bottom: 28px;
    right: 28px;
    width: 42px;
    height: 42px;
    background: #2e7d5e;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.3s ease, transform 0.3s ease, background 0.2s ease;
    z-index: 9999;
    box-shadow: 0 4px 14px rgba(46,125,94,0.35);
  `;
  document.body.appendChild(backToTop);

  backToTop.addEventListener('mouseenter', function () {
    backToTop.style.background = '#52b788';
  });
  backToTop.addEventListener('mouseleave', function () {
    backToTop.style.background = '#2e7d5e';
  });
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTop.style.opacity = '1';
      backToTop.style.transform = 'translateY(0)';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.transform = 'translateY(10px)';
    }
  });

});

/* =====================================================
   BioFlowHub — Energy Snake Trail
   Rastro de energia verde que segue o toque/mouse
   e desaparece suavemente como uma cobra de luz
   ===================================================== */
(function () {

  var canvas = document.createElement('canvas');
  canvas.style.cssText = [
    'position:fixed',
    'top:0',
    'left:0',
    'width:100%',
    'height:100%',
    'pointer-events:none',
    'z-index:99997',
    'opacity:1'
  ].join(';');
  document.body.appendChild(canvas);

  var ctx    = canvas.getContext('2d');
  var W      = canvas.width  = window.innerWidth;
  var H      = canvas.height = window.innerHeight;
  var active = false;
  var animId = null;

  window.addEventListener('resize', function () {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });

  // Cada ponto do rastro: posição + alpha
  var MAX_POINTS = 42;
  var trail = [];

  function addPoint(x, y) {
    trail.push({ x: x, y: y, a: 1.0 });
    if (trail.length > MAX_POINTS) trail.shift();
  }

  function drawTrail() {
    ctx.clearRect(0, 0, W, H);

    // Fade dos pontos mais antigos
    for (var i = 0; i < trail.length; i++) {
      trail[i].a -= 0.022;
      if (trail[i].a < 0) trail[i].a = 0;
    }

    // Remove pontos totalmente transparentes
    trail = trail.filter(function(p) { return p.a > 0; });

    if (trail.length < 2) return;

    // Desenha segmentos do rastro
    for (var j = 1; j < trail.length; j++) {
      var p0 = trail[j - 1];
      var p1 = trail[j];
      var t  = j / trail.length; // 0 = mais antigo, 1 = mais recente

      // Tamanho e alpha crescem em direção à cabeça
      var size  = 1.5 + t * 5;
      var alpha = p1.a * t;

      // Cor: verde escuro na cauda, verde claro/cyan na cabeça
      var r = Math.round(46  + (82  - 46)  * t);
      var g = Math.round(125 + (220 - 125) * t);
      var b = Math.round(94  + (180 - 94)  * t);

      // Linha entre pontos
      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.lineTo(p1.x, p1.y);
      ctx.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
      ctx.lineWidth   = size;
      ctx.lineCap     = 'round';
      ctx.lineJoin    = 'round';
      ctx.shadowColor = 'rgba(82,210,140,' + alpha * 0.8 + ')';
      ctx.shadowBlur  = 10 * t;
      ctx.stroke();
    }

    // Bola brilhante na cabeça
    if (trail.length > 0) {
      var head = trail[trail.length - 1];
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(head.x, head.y, 4, 0, Math.PI * 2);
      var gr = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 8);
      gr.addColorStop(0, 'rgba(180,255,200,' + head.a + ')');
      gr.addColorStop(1, 'rgba(82,183,136,0)');
      ctx.fillStyle = gr;
      ctx.fill();
    }

    ctx.shadowBlur = 0;

    // Continua animando se ainda há rastro
    if (trail.length > 0) {
      animId = requestAnimationFrame(drawTrail);
    } else {
      animId = null;
      ctx.clearRect(0, 0, W, H);
    }
  }

  function startAnim() {
    if (!animId) animId = requestAnimationFrame(drawTrail);
  }

  // TOUCH — mobile
  document.addEventListener('touchmove', function (e) {
    var t = e.touches[0];
    addPoint(t.clientX, t.clientY);
    startAnim();
  }, { passive: true });

  document.addEventListener('touchstart', function (e) {
    var t = e.touches[0];
    addPoint(t.clientX, t.clientY);
    startAnim();
  }, { passive: true });

  document.addEventListener('touchend', function () {
    active = false;
    // Rastro continua desaparecendo sozinho
  });

  // MOUSE — desktop (opcional, mais sutil)
  var mouseDown = false;
  document.addEventListener('mousedown', function () { mouseDown = true; });
  document.addEventListener('mouseup',   function () { mouseDown = false; });
  document.addEventListener('mousemove', function (e) {
    if (!mouseDown) return; // só aparece ao arrastar (clicar + mover)
    addPoint(e.clientX, e.clientY);
    startAnim();
  });

}());
