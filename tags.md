---
layout: page
title: Topics
---

<style>
.tag-section {
  margin-bottom: 2.5rem;
}
.tag-section h2 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a2e2a;
  padding: 0.5rem 1rem;
  background: #f0f9f4;
  border-left: 4px solid #2e7d5e;
  border-radius: 0 8px 8px 0;
  margin-bottom: 1rem;
}
.tag-post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.tag-post-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e8f0ec;
}
.tag-post-list li:last-child {
  border-bottom: none;
}
.tag-post-list a {
  color: #2e7d5e;
  font-weight: 500;
  text-decoration: none;
  font-size: 0.95rem;
}
.tag-post-list a:hover {
  text-decoration: underline;
}
.tag-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
}
.tag-nav a {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  background: rgba(46,125,94,0.1);
  color: #2e7d5e;
  font-size: 0.82rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
}
.tag-nav a:hover {
  background: #2e7d5e;
  color: #fff;
}
</style>

{% assign rawtags = "" %}
{% for post in site.posts %}
  {% assign ttags = post.tags | join:'|' | append:'|' %}
  {% assign rawtags = rawtags | append:ttags %}
{% endfor %}
{% assign rawtags = rawtags | split:'|' | sort | uniq %}
{% assign rawtags = rawtags | where_exp: "t", "t != ''" %}

<div class="tag-nav">
{% for tag in rawtags %}
  <a href="#{{ tag | slugify }}">{{ tag | replace: '-', ' ' | capitalize }}</a>
{% endfor %}
</div>

{% for tag in rawtags %}
<div class="tag-section" id="{{ tag | slugify }}">
  <h2>{{ tag | replace: '-', ' ' | capitalize }}</h2>
  <ul class="tag-post-list">
  {% for post in site.posts %}
    {% if post.tags contains tag %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
    {% endif %}
  {% endfor %}
  </ul>
</div>
{% endfor %}
