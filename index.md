---
layout: page
title: BioFlowHub
subtitle: Evidence-based health insights by a biomedical scientist
cover-img: false
---

<style>
.bio-hero { text-align: center; padding: 1.5rem 0 2rem; }
.bio-hero p { font-size: 1.05rem; color: #555; max-width: 580px; margin: 0 auto 1.8rem; line-height: 1.7; }
.bio-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 0 0 2.5rem; }
.bio-card { display: block; padding: 1.3rem 1.1rem; border: 1px solid #d4ece0; border-radius: 10px; text-decoration: none; background: #f8faf9; transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease; }
.bio-card:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(46,125,94,0.12); border-color: #52b788; text-decoration: none; }
.bio-card-icon { font-size: 1.6rem; margin-bottom: 0.6rem; display: block; }
.bio-card-title { font-size: 0.95rem; font-weight: 600; color: #1a2e2a; margin: 0 0 0.3rem; }
.bio-card-desc { font-size: 0.82rem; color: #666; margin: 0; line-height: 1.5; }
.bio-divider { border: none; border-top: 1px solid #e0ede7; margin: 2rem 0; }
.bio-affiliate-box { background: #f0f9f4; border: 1px solid #b7dbc8; border-radius: 10px; padding: 1.2rem 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 2.5rem; }
.bio-affiliate-box p { margin: 0; font-size: 0.9rem; color: #2e5c42; max-width: 480px; line-height: 1.6; }
.bio-affiliate-box strong { color: #1a3d2b; }
.bio-affiliate-btn { display: inline-block; background: #2e7d5e; color: #fff !important; padding: 0.55rem 1.2rem; border-radius: 6px; font-size: 0.88rem; font-weight: 600; text-decoration: none !important; white-space: nowrap; transition: background 0.2s ease; }
.bio-affiliate-btn:hover { background: #52b788; }
.bio-posts-title { font-size: 1.1rem; font-weight: 600; color: #1a2e2a; margin: 0 0 1.2rem; padding-bottom: 0.5rem; border-bottom: 2px solid #d4ece0; }
</style>

<div class="bio-hero">
  <p>Science-backed tips on nutrition, sleep, stress, fitness and more — written by a biomedical scientist who translates research into real, actionable guidance.</p>

  <div class="bio-grid">
    <a href="/tags#nutrition" class="bio-card">
      <span class="bio-card-icon">🥦</span>
      <p class="bio-card-title">Nutrition & Diet</p>
      <p class="bio-card-desc">What the science actually says about food, beyond fads</p>
    </a>
    <a href="/tags#sleep" class="bio-card">
      <span class="bio-card-icon">😴</span>
      <p class="bio-card-title">Sleep & Recovery</p>
      <p class="bio-card-desc">The most underrated health intervention you can start tonight</p>
    </a>
    <a href="/tags#fitness" class="bio-card">
      <span class="bio-card-icon">🏋️</span>
      <p class="bio-card-title">Fitness & Movement</p>
      <p class="bio-card-desc">Evidence-based exercise — no hype, no gimmicks</p>
    </a>
    <a href="/tags#biomedical" class="bio-card">
      <span class="bio-card-icon">🔬</span>
      <p class="bio-card-title">Biomedical Insights</p>
      <p class="bio-card-desc">Lab tests, body science and how your biology actually works</p>
    </a>
  </div>
</div>

<div class="bio-affiliate-box">
  <p>🦴 <strong>Struggling with joint or muscle pain?</strong> I reviewed Balmorex Pro — a topical cream with real biomedical backing for joint, back and muscle support.</p>
  <a href="https://ef9897nq56z1rh08qksj26zz4n.hop.clickbank.net/?tid=landing1" class="bio-affiliate-btn" target="_blank" rel="noopener">Read my review →</a>
</div>

<hr class="bio-divider">

<p class="bio-posts-title">Latest Articles</p>

{% for post in paginator.posts %}
<div style="margin-bottom:1.5rem; padding-bottom:1.5rem; border-bottom: 1px solid #e8f0ec;">
  <a href="{{ post.url }}" style="font-size:1.05rem; font-weight:600; color:#1a2e2a; text-decoration:none;">{{ post.title }}</a>
  <p style="font-size:0.85rem; color:#888; margin:0.2rem 0 0.4rem;">{{ post.date | date: "%B %-d, %Y" }}</p>
  <p style="font-size:0.92rem; color:#555; margin:0; line-height:1.6;">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
</div>
{% endfor %}

{% if paginator.total_pages > 1 %}
<div style="display:flex; justify-content:space-between; margin-top:2rem;">
  {% if paginator.previous_page %}<a href="{{ paginator.previous_page_path }}" style="color:#2e7d5e;">← Newer</a>{% endif %}
  {% if paginator.next_page %}<a href="{{ paginator.next_page_path }}" style="color:#2e7d5e;">Older →</a>{% endif %}
</div>
{% endif %}
