---
layout: page
title: BioFlowHub
subtitle: Evidence-based health insights by a biomedical scientist
cover-img: false
---

<style>
.bio-hero-wrap {
  position: relative; display: flex; align-items: center;
  gap: 2rem; margin: 0.5rem 0 2.5rem; min-height: 210px;
}
#bio-energy-canvas {
  position: absolute; top: 0; left: 0;
  width: 100%; height: 100%; pointer-events: none; z-index: 0;
}
.bio-logo-wrap { flex-shrink: 0; position: relative; z-index: 1; width: 90px; height: 90px; }
.bio-hero-logo { width: 90px; height: 90px; object-fit: contain; transition: filter 0.5s ease; display: block; }
.bio-hero-logo.energized {
  filter: drop-shadow(0 0 8px rgba(82,183,136,0.8)) drop-shadow(0 0 20px rgba(46,125,94,0.4));
}
.bio-btn-list { display: flex; flex-direction: column; gap: 0.55rem; flex: 1; position: relative; z-index: 1; }
.bio-btn {
  display: flex; align-items: center; gap: 0.7rem; padding: 0.75rem 1.1rem;
  border: 1.5px solid #d4ece0; border-radius: 10px; background: #f8faf9;
  text-decoration: none; position: relative; overflow: hidden;
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
}
.bio-btn:hover {
  background: #2e7d5e; border-color: #52b788; transform: scale(1.02);
  box-shadow: 0 5px 18px rgba(46,125,94,0.28); text-decoration: none;
}
.bio-btn-icon { font-size: 1.2rem; line-height: 1; flex-shrink: 0; }
.bio-btn-title { font-size: 0.92rem; font-weight: 600; color: #1a2e2a; margin: 0 0 1px; transition: color 0.3s ease; }
.bio-btn:hover .bio-btn-title { color: #fff; }
.bio-btn-desc { font-size: 0.76rem; color: #777; margin: 0; line-height: 1.4; transition: color 0.3s ease; }
.bio-btn:hover .bio-btn-desc { color: #c8edd9; }
.bio-ripple {
  position: absolute; border-radius: 50%; background: rgba(82,183,136,0.35);
  transform: scale(0); animation: bioRipple 0.7s ease-out forwards; pointer-events: none;
}
@keyframes bioRipple { 0%{transform:scale(0);opacity:1} 60%{opacity:0.6} 100%{transform:scale(4.5);opacity:0} }

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
  <a href="/2026-05-09-balmorex-pro-review/" class="bio-affiliate-btn">Read my review →</a>
</div>

<div style="background:linear-gradient(135deg,#1a2e2a,#2e7d5e);border-radius:12px;padding:1.4rem 1.6rem;margin-bottom:2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
  <div>
    <p style="margin:0 0 0.3rem;font-size:0.75rem;font-weight:700;letter-spacing:0.08em;color:#74c69d;text-transform:uppercase;">⭐ Featured Article</p>
    <p style="margin:0 0 0.4rem;font-size:1rem;font-weight:700;color:#ffffff;line-height:1.4;">The 5 Most Impactful Health Habits Backed by Science</p>
    <p style="margin:0;font-size:0.82rem;color:#b7dbc8;line-height:1.5;">Sleep, nutrition, movement, stress and prevention — the five habits with the strongest evidence for long-term health.</p>
  </div>
  <a href="/2026-05-09-5-most-impactful-health-habits/" style="display:inline-block;background:#52b788;color:#fff !important;padding:0.55rem 1.2rem;border-radius:8px;font-size:0.88rem;font-weight:600;text-decoration:none !important;white-space:nowrap;transition:background 0.2s ease;" onmouseover="this.style.background='#74c69d'" onmouseout="this.style.background='#52b788'">Read now →</a>
</div>

<hr class="bio-divider">
<p class="bio-posts-title">Latest Articles</p>

{% assign counter = 1 %}
{% for post in site.posts %}
<div style="display:flex;gap:1rem;align-items:flex-start;margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid #e8f0ec;">
  {% if post.thumbnail-img %}
  <a href="{{ post.url }}" style="flex-shrink:0;">
    <img src="{{ post.thumbnail-img }}" alt="{{ post.title }}" style="width:90px;height:65px;object-fit:cover;border-radius:8px;display:block;transition:transform 0.2s ease;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'">
  </a>
  {% endif %}
  <div style="flex:1;">
    <a href="{{ post.url }}" style="font-size:1.05rem;font-weight:600;color:#1a2e2a;text-decoration:none;">{{ post.title }}</a>
    <p style="font-size:0.85rem;color:#888;margin:0.2rem 0 0.4rem;">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p style="font-size:0.92rem;color:#555;margin:0;line-height:1.6;">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
  </div>
</div>
{% assign counter = counter | plus: 1 %}
{% endfor %}

<script>
(function() {
  // Ripple nos botões de categoria (mobile touch)
  document.querySelectorAll('#bio-btn-list .bio-btn').forEach(function(btn) {
    btn.addEventListener('touchstart', function(e) {
      var touch = e.touches[0];
      var rect  = btn.getBoundingClientRect();
      var size  = Math.max(rect.width, rect.height);
      var ripple = document.createElement('span');
      ripple.className = 'bio-ripple';
      ripple.style.cssText = 'width:'+size+'px;height:'+size+'px;left:'+(touch.clientX-rect.left-size/2)+'px;top:'+(touch.clientY-rect.top-size/2)+'px;';
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', function(){ ripple.remove(); });
    }, { passive: true });
  });

  // Rio de energia nos botões (desktop)
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
  var dots = [{rx:0.81,ry:0.22},{rx:0.87,ry:0.48},{rx:0.80,ry:0.76}];
  var particles = [];
  for (var i=0;i<28;i++) particles.push({t:Math.random(),speed:0.004+Math.random()*0.005,w:(Math.random()-0.5)*18,size:1.2+Math.random()*2.2,alpha:0.3+Math.random()*0.5,phase:Math.random()*Math.PI*2});
  var burst = null;

  function resize(){ canvas.width=hero.offsetWidth; canvas.height=hero.offsetHeight; }
  resize(); window.addEventListener('resize', resize);

  function getDot(i){ var wr=logoWrap.getBoundingClientRect(),hr=hero.getBoundingClientRect(); return {x:(wr.left-hr.left)+wr.width*dots[i].rx,y:(wr.top-hr.top)+wr.height*dots[i].ry}; }
  function getBtnEntry(b){ var br=b.getBoundingClientRect(),hr=hero.getBoundingClientRect(); return {x:br.left-hr.left+12,y:br.top-hr.top+br.height*0.5}; }
  function bezier(t,x1,y1,cx1,cy1,cx2,cy2,x2,y2){ var u=1-t; return {x:u*u*u*x1+3*u*u*t*cx1+3*u*t*t*cx2+t*t*t*x2,y:u*u*u*y1+3*u*u*t*cy1+3*u*t*t*cy2+t*t*t*y2}; }
  function bezierN(t,x1,y1,cx1,cy1,cx2,cy2,x2,y2){ var u=1-t,tx=3*(u*u*(cx1-x1)+2*u*t*(cx2-cx1)+t*t*(x2-cx2)),ty=3*(u*u*(cy1-y1)+2*u*t*(cy2-cy1)+t*t*(y2-cy2)),l=Math.sqrt(tx*tx+ty*ty)||1; return {nx:-ty/l,ny:tx/l}; }
  function getCP(s,d){ var dx=d.x-s.x; return {cx1:s.x+dx*0.5,cy1:s.y,cx2:s.x+dx*0.5,cy2:d.y}; }

  function drawRiver(src,dst,alpha){
    var cp=getCP(src,dst);
    ctx.beginPath(); ctx.moveTo(src.x,src.y); ctx.bezierCurveTo(cp.cx1,cp.cy1,cp.cx2,cp.cy2,dst.x,dst.y);
    ctx.strokeStyle='rgba(82,183,136,'+alpha*0.12+')'; ctx.lineWidth=12; ctx.lineCap='round'; ctx.shadowColor='rgba(82,183,136,0.3)'; ctx.shadowBlur=10; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(src.x,src.y); ctx.bezierCurveTo(cp.cx1,cp.cy1,cp.cx2,cp.cy2,dst.x,dst.y);
    ctx.strokeStyle='rgba(130,210,170,'+alpha*0.18+')'; ctx.lineWidth=3; ctx.shadowBlur=6; ctx.stroke(); ctx.shadowBlur=0;
    particles.forEach(function(p){
      p.t+=p.speed; if(p.t>1)p.t=0;
      var pt=bezier(p.t,src.x,src.y,cp.cx1,cp.cy1,cp.cx2,cp.cy2,dst.x,dst.y);
      var nor=bezierN(p.t,src.x,src.y,cp.cx1,cp.cy1,cp.cx2,cp.cy2,dst.x,dst.y);
      var sway=Math.sin(time*1.2+p.phase+p.t*Math.PI*3)*p.w*0.5;
      var fade=Math.min(p.t*6,1)*Math.min((1-p.t)*6,1),a=p.alpha*alpha*fade;
      var sz=p.size*(0.7+0.3*Math.sin(time*2+p.phase));
      var r=Math.round(82+(46-82)*p.t),g=Math.round(183+(125-183)*p.t),b=Math.round(136+(94-136)*p.t);
      ctx.beginPath(); ctx.arc(pt.x+nor.nx*sway,pt.y+nor.ny*sway,sz,0,Math.PI*2);
      ctx.fillStyle='rgba('+r+','+g+','+b+','+a+')'; ctx.fill();
    });
    var glow=Math.sin(time*2)*0.3+0.7;
    ctx.beginPath(); ctx.arc(src.x,src.y,5*glow,0,Math.PI*2);
    var gr=ctx.createRadialGradient(src.x,src.y,0,src.x,src.y,5*glow);
    gr.addColorStop(0,'rgba(200,237,210,'+alpha*glow+')'); gr.addColorStop(1,'rgba(82,183,136,0)');
    ctx.fillStyle=gr; ctx.fill();
  }

  function drawBurst(src,dst,progress){
    var cp=getCP(src,dst);
    for(var w=0;w<3;w++){
      var wp=Math.max(0,progress-w*0.15); if(wp<=0) continue;
      var pt=bezier(Math.min(wp,1),src.x,src.y,cp.cx1,cp.cy1,cp.cx2,cp.cy2,dst.x,dst.y);
      ctx.beginPath(); ctx.arc(pt.x,pt.y,wp*22,0,Math.PI*2);
      ctx.strokeStyle='rgba(130,210,170,'+Math.max(0,1-wp)*0.8+')';
      ctx.lineWidth=2; ctx.shadowColor='rgba(82,183,136,0.6)'; ctx.shadowBlur=12; ctx.stroke(); ctx.shadowBlur=0;
    }
  }

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height); time+=0.03;
    if(activeBtn){ var di=parseInt(activeBtn.getAttribute('data-dot'))||0; drawRiver(getDot(di),getBtnEntry(activeBtn),1.0); }
    if(burst){ burst.progress+=0.022; drawBurst(getDot(burst.dotIdx),getBtnEntry(burst.btn),burst.progress); if(burst.progress>1.4) burst=null; }
    animId=requestAnimationFrame(draw);
  }

  btns.forEach(function(btn){
    btn.addEventListener('mouseenter',function(){ activeBtn=btn; logo.classList.add('energized'); particles.forEach(function(p){p.t=Math.random();}); if(!animId) animId=requestAnimationFrame(draw); });
    btn.addEventListener('mouseleave',function(){ activeBtn=null; logo.classList.remove('energized'); if(!burst){cancelAnimationFrame(animId);animId=null;ctx.clearRect(0,0,canvas.width,canvas.height);} });
    btn.addEventListener('click',function(){ var di=parseInt(btn.getAttribute('data-dot'))||0; burst={btn:btn,dotIdx:di,progress:0}; if(!animId) animId=requestAnimationFrame(draw); });
  });
})();
</script>
