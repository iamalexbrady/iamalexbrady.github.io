---
layout: default
title: Home page
permalink: /
---

# this is the top of the page

<hr>

<h2>ACIM Questions and Answers</h2>

{% for question in site.acim_qnas %}
### [{{ question.label }}]({{ question.url }})
{% endfor %}