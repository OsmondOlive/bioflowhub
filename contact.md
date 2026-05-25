---
layout: page
title: Contact
subtitle: Get in touch , I would love to hear from you
permalink: /contact/
---

<style>
.contact-wrap {
  max-width: 580px;
  margin: 0 auto;
}
.contact-intro {
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 2rem;
}
.contact-form .form-group {
  margin-bottom: 1.2rem;
}
.contact-form label {
  display: block;
  font-size: 0.88rem;
  font-weight: 600;
  color: #1a2e2a;
  margin-bottom: 0.4rem;
}
.contact-form input,
.contact-form textarea,
.contact-form select {
  width: 100%;
  padding: 0.7rem 1rem;
  border: 1.5px solid #d4ece0;
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  color: #1c2b27;
  background: #f8faf9;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
}
.contact-form input:focus,
.contact-form textarea:focus,
.contact-form select:focus {
  outline: none;
  border-color: #52b788;
  box-shadow: 0 0 0 3px rgba(82,183,136,0.15);
}
.contact-form textarea {
  min-height: 140px;
  resize: vertical;
}
.contact-submit {
  display: inline-block;
  background: linear-gradient(135deg, #2e7d5e, #52b788);
  color: #fff;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  margin-top: 0.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 14px rgba(46,125,94,0.3);
}
.contact-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(46,125,94,0.4);
}
.contact-success {
  display: none;
  background: #f0f9f4;
  border: 1px solid #b7dbc8;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  color: #2e7d5e;
  font-weight: 500;
  margin-top: 1rem;
}
.contact-alt {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e0ede7;
  font-size: 0.9rem;
  color: #666;
  text-align: center;
}
.contact-alt a {
  color: #2e7d5e;
  font-weight: 500;
}
</style>

<div class="contact-wrap">

  <p class="contact-intro">
    Have a question about a health topic? Want to suggest something for me to cover? Or just want to say hello? Fill out the form below and I will get back to you as soon as I can.
  </p>

  <div class="contact-success" id="contact-success">
    ✅ Message sent successfully! I will get back to you within 2 business days.
  </div>

  <form class="contact-form" id="contact-form" action="https://formspree.io/f/mgodjdln" method="POST">

    <input type="hidden" name="_subject" value="New message from BioFlowHub">
    <input type="hidden" name="_next" value="https://bioflowhub.com/contact">

    <div class="form-group">
      <label for="name">Your name</label>
      <input type="text" id="name" name="name" placeholder="Your name" required>
    </div>

    <div class="form-group">
      <label for="email">Your email</label>
      <input type="email" id="email" name="email" placeholder="you@example.com" required>
    </div>

    <div class="form-group">
      <label for="subject">Subject</label>
      <select id="subject" name="subject">
        <option value="health-question">Health question</option>
        <option value="topic-suggestion">Topic suggestion</option>
        <option value="collaboration">Collaboration</option>
        <option value="feedback">Feedback</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" placeholder="Write your message here..." required></textarea>
    </div>

    <button type="submit" class="contact-submit">Send message →</button>

  </form>

  <div class="contact-alt">
    <p>Prefer email directly? Reach me at
      <a href="#" onclick="navigator.clipboard.writeText('contact@bioflowhub.com'); this.innerText='Copied!'; setTimeout(()=>this.innerText='contact@bioflowhub.com',2000); return false;">
        contact@bioflowhub.com
      </a>
    </p>
    <p style="margin-top:0.5rem; font-size:0.8rem; color:#aaa;">Click to copy email address</p>
  </div>

</div>

<script>
var form = document.getElementById('contact-form');
var success = document.getElementById('contact-success');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  var data = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(function(response) {
    if (response.ok) {
      form.style.display = 'none';
      success.style.display = 'block';
    } else {
      alert('Something went wrong. Please try again or email contact@bioflowhub.com directly.');
    }
  }).catch(function() {
    alert('Something went wrong. Please try again or email contact@bioflowhub.com directly.');
  });
});
</script>
