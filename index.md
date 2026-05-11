---
layout: page
title: BioFlowHub
subtitle: Evidence-based health insights by a biomedical scientist
cover-img: false
---

<style>
.bio-hero-wrap {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0.5rem 0 2.5rem;
  min-height: 210px;
}
#bio-energy-canvas {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
}
.bio-logo-wrap {
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  width: 90px;
  height: 90px;
}
.bio-hero-logo {
  width: 90px;
  height: 90px;
  object-fit: contain;
  transition: filter 0.5s ease;
  display: block;
}
.bio-hero-logo.energized {
  filter: drop-shadow(0 0 8px rgba(82,183,136,0.8)) drop-shadow(0 0 20px rgba(46,125,94,0.4));
}
.bio-btn-list {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  flex: 1;
  position: relative;
  z-index: 1;
}
.bio-btn {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.75rem 1.1rem;
  border: 1.5px solid #d4ece0;
  border-radius: 10px;
  background: #f8faf9;
  text-decoration: none;
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}
.bio-btn:hover {
  background: #2e7d5e;
  border-color: #52b788;
  transform: scale(1.02);
  box-shadow: 0 5px 18px rgba(46,125,94,0.28), 0 0 0 2px rgba(82,183,136,0.2);
  text-decoration: none;
}
.bio-btn-icon { font-size: 1.2rem; line-height: 1; flex-shrink: 0; }
.bio-btn-title { font-size: 0.92rem; font-weight: 600; color: #1a2e2a; margin: 0 0 1px; transition: color 0.3s ease; }
.bio-btn:hover .bio-btn-title { color: #fff; }
.bio-btn-desc { font-size: 0.76rem; color: #777; margin: 0; line-height: 1.4; transition: color 0.3s ease; }
.bio-btn:hover .bio-btn-desc { color: #c8edd9; }

.bio-ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(82, 183, 136, 0.35);
  transform: scale(0);
  animation: bioRipple 0.7s ease-out forwards;
  pointer-events: none;
}
@keyframes bioRipple {
  0%   { transform: scale(0); opacity: 1; }
  60%  { opacity: 0.6; }
  100% { transform: scale(4.5); opacity: 0; }
}

@media (max-width: 580px) {
  .bio-hero-wrap { flex-direction: column; align-items: center; gap: 1rem; min-height: unset; }
  .bio-logo-wrap, .bio-hero-logo { width: 64px; height: 64px; }
  #bio-energy-canvas { display: none; }
  .bio-btn-list { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; width: 100%; }
  .bio-btn { flex-direction: column; align-items: flex-start; padding: 0.85rem 0.9rem; gap: 0.35rem; }
  .bio-btn:hover { transform: none; }
  .bio-btn-desc { display: none; }
  .bio-btn-title { font-size: 0.85rem; }
  .bio-btn:active { background: #2e7d5e; border-color: #52b788; }
  .bio-btn:active .bio-btn-title { color: #fff; }
}

.bio-affiliate-box {
  background: #f0f9f4; border: 1px solid #b7dbc8; border-radius: 10px;
  padding: 1.1rem 1.4rem; display: flex; align-items: center;
  justify-content: space-between; flex-wrap: wrap; gap: 0.8rem; margin-bottom: 2.5rem;
}
.bio-affiliate-box p { margin: 0; font-size: 0.88rem; color: #2e5c42; max-width: 460px; line-height: 1.6; }
.bio-affiliate-box strong { color: #1a3d2b; }
.bio-affiliate-btn {
  display: inline-block; background: #2e7d5e; color: #fff !important;
  padding: 0.5rem 1.1rem; border-radius: 6px; font-size: 0.86rem; font-weight: 600;
  text-decoration: none !important; white-space: nowrap;
  transition: background 0.2s ease, transform 0.2s ease;
}
.bio-affiliate-btn:hover { background: #52b788; transform: scale(1.04); }
.bio-divider { border: none; border-top: 1px solid #e0ede7; margin: 2rem 0; }
.bio-posts-title { font-size: 1.05rem; font-weight: 600; color: #1a2e2a; margin: 0 0 1.2rem; padding-bottom: 0.5rem; border-bottom: 2px solid #d4ece0; }
</style>

<div class="bio-hero-wrap" id="bio-hero">
  <canvas id="bio-energy-canvas"></canvas>
  <div class="bio-logo-wrap" id="bio-logo-wrap">
    <img src="/assets/img/bioflowhub-logo.png" alt="BioFlowHub" class="bio-hero-logo" id="bio-logo">
  </div>
  <div class="bio-btn-list" id="bio-btn-list">
    <a href="/tags#nutrition" class="bio-btn" data-dot="0">
      <span class="bio-btn-icon">🥦</span>
      <span><p class="bio-btn-title">Nutrition & Diet</p><p class="bio-btn-desc">What the science actually says about food, beyond fads</p></span>
    </a>
    <a href="/tags#sleep" class="bio-btn" data-dot="1">
      <span class="bio-btn-icon">😴</span>
      <span><p class="bio-btn-title">Sleep & Recovery</p><p class="bio-btn-desc">The most underrated health intervention you can start tonight</p></span>
    </a>
    <a href="/tags#fitness" class="bio-btn" data-dot="2">
      <span class="bio-btn-icon">🏋️</span>
      <span><p class="bio-btn-title">Fitness & Movement</p><p class="bio-btn-desc">Evidence-based exercise — no hype, no gimmicks</p></span>
    </a>
    <a href="/tags#biomedical" class="bio-btn" data-dot="1">
      <span class="bio-btn-icon">🔬</span>
      <span><p class="bio-btn-title">Biomedical Insights</p><p class="bio-btn-desc">Lab tests, body science and how your biology actually works</p></span>
    </a>
  </div>
</div>

<div class="bio-affiliate-box">
  <p>🦴 <strong>Struggling with joint or muscle pain?</strong> I reviewed Balmorex Pro — a topical cream with real biomedical backing for joint, back and muscle support.</p>
  <a href="/2025-05-10-balmorex-pro-review/" class="bio-affiliate-btn">Read my review →</a>
</div>

<hr class="bio-divider">
<p class="bio-posts-title">Latest Articles</p>

<style>
.bio-post-card {
  margin-bottom: 0.8rem;
  padding: 1rem 1.2rem;
  border-radius: 10px;
  border: 1.5px solid #e8f0ec;
  background: #f8faf9;
  text-decoration: none;
  display: block;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  overflow: hidden;
}
.bio-post-card::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 3px;
  background: #52b788;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.25s ease;
  border-radius: 3px 0 0 3px;
}
.bio-post-card:hover {
  background: #2e7d5e;
  border-color: #2e7d5e;
  transform: translateX(4px);
  box-shadow: 0 4px 16px rgba(46,125,94,0.2);
  text-decoration: none;
}
.bio-post-card:hover::before { transform: scaleY(1); }
.bio-post-card:active { transform: translateX(2px) scale(0.99); }

.bio-post-title {
  font-size: 1.02rem;
  font-weight: 600;
  color: #1a2e2a;
  margin: 0 0 3px;
  transition: color 0.25s ease;
}
.bio-post-card:hover .bio-post-title { color: #ffffff; }

.bio-post-date {
  font-size: 0.8rem;
  color: #aaa;
  margin: 0 0 5px;
  transition: color 0.25s ease;
}
.bio-post-card:hover .bio-post-date { color: #c8edd9; }

.bio-post-excerpt {
  font-size: 0.88rem;
  color: #666;
  margin: 0;
  line-height: 1.55;
  transition: color 0.25s ease;
}
.bio-post-card:hover .bio-post-excerpt { color: #d8f3e6; }

/* Ripple no clique */
.bio-post-ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  transform: scale(0);
  animation: postRipple 0.6s ease-out forwards;
  pointer-events: none;
}
@keyframes postRipple {
  to { transform: scale(4); opacity: 0; }
}
</style>

{% for post in site.posts %}
<a href="{{ post.url }}" class="bio-post-card">
  <p class="bio-post-title">{{ post.title }}</p>
  <p class="bio-post-date">{{ post.date | date: "%B %-d, %Y" }}</p>
  <p class="bio-post-excerpt">{{ post.excerpt | strip_html | truncatewords: 28 }}</p>
</a>
{% endfor %}

<script>
document.querySelectorAll('.bio-post-card').forEach(function(card) {
  card.addEventListener('click', function(e) {
    var rect = card.getBoundingClientRect();
    var size = Math.max(rect.width, rect.height);
    var x = e.clientX - rect.left - size/2;
    var y = e.clientY - rect.top - size/2;
    var ripple = document.createElement('span');
    ripple.className = 'bio-post-ripple';
    ripple.style.cssText = 'width:'+size+'px;height:'+size+'px;left:'+x+'px;top:'+y+'px;';
    card.appendChild(ripple);
    ripple.addEventListener('animationend', function(){ ripple.remove(); });
  });
});
</script>

<script>
(function() {
  document.querySelectorAll('#bio-btn-list .bio-btn').forEach(function(btn) {
    btn.addEventListener('touchstart', function(e) {
      var touch  = e.touches[0];
      var rect   = btn.getBoundingClientRect();
      var size   = Math.max(rect.width, rect.height);
      var x      = touch.clientX - rect.left - size/2;
      var y      = touch.clientY - rect.top  - size/2;
      var ripple = document.createElement('span');
      ripple.className = 'bio-ripple';
      ripple.style.cssText = 'width:'+size+'px;height:'+size+'px;left:'+x+'px;top:'+y+'px;';
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', function() { ripple.remove(); });
    }, { passive: true });
  });

  var isMobile = window.matchMedia('(max-width: 580px)').matches;
  if (isMobile) return;

  var canvas   = document.getElementById('bio-energy-canvas');
  var hero     = document.getElementById('bio-hero');
  var logoWrap = document.getElementById('bio-logo-wrap');
  var logo     = document.getElementById('bio-logo');
  var btns     = document.querySelectorAll('#bio-btn-list .bio-btn');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var animId = null, activeBtn = null, time = 0;

  var dots = [
    { rx: 0.81, ry: 0.22 },
    { rx: 0.87, ry: 0.48 },
    { rx: 0.80, ry: 0.76 }
  ];

  var particles = [];
  for (var i = 0; i < 28; i++) {
    particles.push({ t: Math.random(), speed: 0.004+Math.random()*0.005, w: (Math.random()-0.5)*18, size: 1.2+Math.random()*2.2, alpha: 0.3+Math.random()*0.5, phase: Math.random()*Math.PI*2 });
  }

  var burst = null;

  function resize() { canvas.width = hero.offsetWidth; canvas.height = hero.offsetHeight; }
  resize(); window.addEventListener('resize', resize);

  function getDot(idx) {
    var wr = logoWrap.getBoundingClientRect(), hr = hero.getBoundingClientRect();
    return { x: (wr.left-hr.left)+wr.width*dots[idx].rx, y: (wr.top-hr.top)+wr.height*dots[idx].ry };
  }
  function getBtnEntry(btn) {
    var br = btn.getBoundingClientRect(), hr = hero.getBoundingClientRect();
    return { x: br.left-hr.left+12, y: br.top-hr.top+br.height*0.5 };
  }
  function bezier(t,x1,y1,cx1,cy1,cx2,cy2,x2,y2) {
    var u=1-t; return { x:u*u*u*x1+3*u*u*t*cx1+3*u*t*t*cx2+t*t*t*x2, y:u*u*u*y1+3*u*u*t*cy1+3*u*t*t*cy2+t*t*t*y2 };
  }
  function bezierNormal(t,x1,y1,cx1,cy1,cx2,cy2,x2,y2) {
    var u=1-t, tx=3*(u*u*(cx1-x1)+2*u*t*(cx2-cx1)+t*t*(x2-cx2)), ty=3*(u*u*(cy1-y1)+2*u*t*(cy2-cy1)+t*t*(y2-cy2)), len=Math.sqrt(tx*tx+ty*ty)||1;
    return { nx:-ty/len, ny:tx/len };
  }
  function getCP(src,dst) { var dx=dst.x-src.x; return { cx1:src.x+dx*0.5, cy1:src.y, cx2:src.x+dx*0.5, cy2:dst.y }; }

  function drawRiver(src,dst,alpha) {
    var cp=getCP(src,dst);
    ctx.beginPath(); ctx.moveTo(src.x,src.y); ctx.bezierCurveTo(cp.cx1,cp.cy1,cp.cx2,cp.cy2,dst.x,dst.y);
    ctx.strokeStyle='rgba(82,183,136,'+alpha*0.12+')'; ctx.lineWidth=12; ctx.lineCap='round'; ctx.shadowColor='rgba(82,183,136,0.3)'; ctx.shadowBlur=10; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(src.x,src.y); ctx.bezierCurveTo(cp.cx1,cp.cy1,cp.cx2,cp.cy2,dst.x,dst.y);
    ctx.strokeStyle='rgba(130,210,170,'+alpha*0.18+')'; ctx.lineWidth=3; ctx.shadowBlur=6; ctx.stroke(); ctx.shadowBlur=0;
    particles.forEach(function(p) {
      p.t+=p.speed; if(p.t>1) p.t=0;
      var pt=bezier(p.t,src.x,src.y,cp.cx1,cp.cy1,cp.cx2,cp.cy2,dst.x,dst.y);
      var nor=bezierNormal(p.t,src.x,src.y,cp.cx1,cp.cy1,cp.cx2,cp.cy2,dst.x,dst.y);
      var sway=Math.sin(time*1.2+p.phase+p.t*Math.PI*3)*p.w*0.5;
      var px=pt.x+nor.nx*sway, py=pt.y+nor.ny*sway;
      var fade=Math.min(p.t*6,1)*Math.min((1-p.t)*6,1), a=p.alpha*alpha*fade;
      var sz=p.size*(0.7+0.3*Math.sin(time*2+p.phase));
      var r=Math.round(82+(46-82)*p.t), g=Math.round(183+(125-183)*p.t), b=Math.round(136+(94-136)*p.t);
      ctx.beginPath(); ctx.arc(px,py,sz,0,Math.PI*2); ctx.fillStyle='rgba('+r+','+g+','+b+','+a+')'; ctx.fill();
    });
    var glow=Math.sin(time*2)*0.3+0.7;
    ctx.beginPath(); ctx.arc(src.x,src.y,5*glow,0,Math.PI*2);
    var gr=ctx.createRadialGradient(src.x,src.y,0,src.x,src.y,5*glow);
    gr.addColorStop(0,'rgba(200,237,210,'+alpha*glow+')'); gr.addColorStop(1,'rgba(82,183,136,0)');
    ctx.fillStyle=gr; ctx.fill();
  }

  function drawBurst(src,dst,progress) {
    var cp=getCP(src,dst);
    for(var w=0;w<3;w++) {
      var wp=Math.max(0,progress-w*0.15); if(wp<=0) continue;
      var pt=bezier(Math.min(wp,1),src.x,src.y,cp.cx1,cp.cy1,cp.cx2,cp.cy2,dst.x,dst.y);
      var a=Math.max(0,1-wp)*0.8, r=wp*22;
      ctx.beginPath(); ctx.arc(pt.x,pt.y,r,0,Math.PI*2);
      ctx.strokeStyle='rgba(130,210,170,'+a+')'; ctx.lineWidth=2; ctx.shadowColor='rgba(82,183,136,0.6)'; ctx.shadowBlur=12; ctx.stroke(); ctx.shadowBlur=0;
    }
  }

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height); time+=0.03;
    if(activeBtn) { var di=parseInt(activeBtn.getAttribute('data-dot'))||0; drawRiver(getDot(di),getBtnEntry(activeBtn),1.0); }
    if(burst) { burst.progress+=0.022; drawBurst(getDot(burst.dotIdx),getBtnEntry(burst.btn),burst.progress); if(burst.progress>1.4) burst=null; }
    animId=requestAnimationFrame(draw);
  }

  btns.forEach(function(btn) {
    btn.addEventListener('mouseenter', function() {
      activeBtn=btn; logo.classList.add('energized');
      particles.forEach(function(p){ p.t=Math.random(); });
      if(!animId) animId=requestAnimationFrame(draw);
    });
    btn.addEventListener('mouseleave', function() {
      activeBtn=null; logo.classList.remove('energized');
      if(!burst) { cancelAnimationFrame(animId); animId=null; ctx.clearRect(0,0,canvas.width,canvas.height); }
    });
    btn.addEventListener('click', function() {
      var di=parseInt(btn.getAttribute('data-dot'))||0;
      burst={btn:btn,dotIdx:di,progress:0};
      if(!animId) animId=requestAnimationFrame(draw);
    });
  });
})();
</script>
