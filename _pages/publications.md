---
layout: page
permalink: /research/
title: research
description: Research outputs.
nav: true
nav_order: 5
---

<div class="publications">
<section class="publication-group">
<h2>International Conference</h2>
{% bibliography --group_by none --query @*[category=international]* %}
</section>

<section class="publication-group">
<h2>Domestic Conference</h2>
{% bibliography --group_by none --query @*[category=domestic]* %}
</section>
</div>
