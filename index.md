---
layout: page
title: BioFlowHub
subtitle: Evidence-based health insights by a biomedical scientist
cover-img: false
---

<style>
/* Desktop: logo esquerda + botões direita */
.bio-hero-wrap {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0.5rem 0 2.5rem;
}
.bio-hero-logo {
  flex-shrink: 0;
  width: 90px;
  height: 90px;
  object-fit: contain;
  filter: drop-shadow(0 3px 10px rgba(46,125,94,0.2));
  transition: transform 0.3s ease;
}
.bio-hero-logo:hover {
  transform: scale(1.08) rotate(-3deg);
}
.bio-btn-list {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  flex: 1;
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
  transition: background 0.22s ease, border-color 0.22s ease, transform 0.2s ease, box-shadow 0.2s ease;
}
.bio-btn:hover {
  background: #2e7d5e;
  border-color: #2e7d5e;
  transform: scale(1.02);
  box-shadow: 0 5px 18px rgba(46,125,94,0.22);
  text-decoration: none;
}
.bio-btn-icon {
  font-size: 1.2rem;
  line-height: 1;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}
.bio-btn:hover .bio-btn-icon { transform: scale(1.15); }
.bio-btn-title {
  font-size: 0.92rem;
  font-weight: 600;
  color: #1a2e2a;
  margin: 0 0 1px;
  transition: color 0.22s ease;
}
.bio-btn:hover .bio-btn-title { color: #ffffff; }
.bio-btn-desc {
  font-size: 0.76rem;
  color: #777;
  margin: 0;
  line-height: 1.4;
  transition: color 0.22s ease;
}
.bio-btn:hover .bio-btn-desc { color: #c8edd9; }

/* Mobile: logo centralizada em cima, grid 2x2 embaixo */
@media (max-width: 580px) {
  .bio-hero-wrap {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
  .bio-hero-logo {
    width: 70px;
    height: 70px;
  }
  .bio-btn-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;
    width: 100%;
  }
  .bio-btn {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.85rem 0.9rem;
  }
  .bio-btn:hover { transform: none; }
  .bio-btn-desc { display: none; }
}

/* Affiliate */
.bio-affiliate-box {
  background: #f0f9f4;
  border: 1px solid #b7dbc8;
  border-radius: 10px;
  padding: 1.1rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2.5rem;
}
.bio-affiliate-box p { margin: 0; font-size: 0.88rem; color: #2e5c42; max-width: 460px; line-height: 1.6; }
.bio-affiliate-box strong { color: #1a3d2b; }
.bio-affiliate-btn {
  display: inline-block;
  background: #2e7d5e;
  color: #fff !important;
  padding: 0.5rem 1.1rem;
  border-radius: 6px;
  font-size: 0.86rem;
  font-weight: 600;
  text-decoration: none !important;
  white-space: nowrap;
  transition: background 0.2s ease, transform 0.2s ease;
}
.bio-affiliate-btn:hover { background: #52b788; transform: scale(1.04); }

.bio-divider { border: none; border-top: 1px solid #e0ede7; margin: 2rem 0; }
.bio-posts-title { font-size: 1.05rem; font-weight: 600; color: #1a2e2a; margin: 0 0 1.2rem; padding-bottom: 0.5rem; border-bottom: 2px solid #d4ece0; }
</style>

<div class="bio-hero-wrap">
  <img src="/assets/img/bioflowhub-logo.png" alt="BioFlowHub" class="bio-hero-logo">
  <div class="bio-btn-list">
    <a href="/tags#nutrition" class="bio-btn">
      <span class="bio-btn-icon">🥦</span>
      <span>
        <p class="bio-btn-title">Nutrition & Diet</p>
        <p class="bio-btn-desc">What the science actually says about food, beyond fads</p>
      </span>
    </a>
    <a href="/tags#sleep" class="bio-btn">
      <span class="bio-btn-icon">😴</span>
      <span>
        <p class="bio-btn-title">Sleep & Recovery</p>
        <p class="bio-btn-desc">The most underrated health intervention you can start tonight</p>
      </span>
    </a>
    <a href="/tags#fitness" class="bio-btn">
      <span class="bio-btn-icon">🏋️</span>
      <span>
        <p class="bio-btn-title">Fitness & Movement</p>
        <p class="bio-btn-desc">Evidence-based exercise — no hype, no gimmicks</p>
      </span>
    </a>
    <a href="/tags#biomedical" class="bio-btn">
      <span class="bio-btn-icon">🔬</span>
      <span>
        <p class="bio-btn-title">Biomedical Insights</p>
        <p class="bio-btn-desc">Lab tests, body science and how your biology actually works</p>
      </span>
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
