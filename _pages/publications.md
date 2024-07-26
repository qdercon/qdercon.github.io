---
layout: page
permalink: /publications/
title: publications
description: >
years: [2024, 2023, 2022, 2021]
nav: true
nav_order: 2
---
<!-- _pages/publications.md -->
<div class="publications" style="margin-top:-2rem">
  <!-- Rounded switch -->
  <div class="preview container d-flex align-middle justify-content-end">
    <img style="width:1.5rem;margin-right:1.5rem;" title="Altmetric" src="/assets/img/altmetric_badge.svg">
    <label class="switch" style="margin:0 -1rem 0" title="Show/hide Altmetric badges">
      <input id="altmetric_toggle" type="checkbox">
      <span class="slider round"></span>
    </label>
  </div>
{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
