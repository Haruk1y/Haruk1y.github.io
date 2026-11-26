---
permalink: /
redirect_from:
  - /about/
  - /about.html
---

<span class="anchor" id="about-me"></span>

I am **Haruki Yajima**, a first-year master's student at The University of Tokyo.
I am enrolled in the Department of Information and Communication Engineering at the Graduate School of Information Science and Technology.

My research interests lie in **AI safety** and **trustworthy AI**. I currently work as a research assistant with Prof. [Isao Echizen](https://research.nii.ac.jp/~iechizen/official/index-e.html) on AI safety. As an undergraduate, I worked with Prof. [Yusuke Matsui](https://yusukematsui.me/index.html) on reliable pruning methods for machine learning models. This work was accepted to ICML 2026 (CORE: A\*).

# 🔥 News
{: #news}

- *2026.05.01* My first-author paper has been accepted to ICML 2026!
- *2026.03.23* I have joined the Supercell AI Innovation Lab!

# 📝 Publications
{: #publications}

<div class="paper-box">
  <div class="paper-box-image">
    <div>
      <div class="badge">ICML 2026</div>
      <img src="/assets/img/publication_preview/pine_thumbnail.png" alt="Overview of the PINE pruning method" width="100%">
    </div>
  </div>
  <div class="paper-box-text" markdown="1">

[PINE: Pruning Boosted Tree Ensembles with Conformal In-Distribution Prediction Equivalence](https://arxiv.org/abs/2605.28068)

**Haruki Yajima**, Yusuke Matsui

[International Conference on Machine Learning](https://icml.cc/), 2026. Poster Presentation (26.6% acceptance rate).

[**Project Page**](https://haruk1y.github.io/pine-icml/) · [**Paper**](https://arxiv.org/abs/2605.28068) · [**Code**](https://github.com/Haruk1y/pine)

  </div>
</div>

- **PINE: 分布内領域での予測一致を保証する決定木アンサンブルプルーニング**<br>
  **矢島陽樹**, 松井勇佑<br>
  画像の認識・理解シンポジウム / Meeting on Image Recognition and Understanding (MIRU), 2026. Oral Presentation (33.5% oral presentation rate). [Awards](#honors-and-awards)

# 🎖 Honors and Awards
{: #honors-and-awards}

{% for award in site.data.resume.awards %}
- *{{ award.date | date: "%Y.%m.%d" }}* [{{ award.title | replace: "|", "&#124;" }}]({{ award.url }}).{% if award.awarder %} {{ award.awarder }}.{% endif %}{% if award.summary %} {{ award.summary }}{% endif %}
{%- endfor %}

# 📖 Educations
{: #educations}

{% for school in site.data.resume.education %}
- *{% include date-range.html entry=school %}*, **{{ school.studyType }}**, [{{ school.institution }}]({{ school.url }}), {{ school.location }}.
  {%- if school.area != school.studyType %} {{ school.area }}.{% endif %}
{%- endfor %}

# 💻 Experience
{: #experience}

{% for job in site.data.resume.work %}
- *{% include date-range.html entry=job %}*, **{% if job.url %}[{{ job.name }}]({{ job.url }}){% else %}{{ job.name }}{% endif %}**, {{ job.position }}.
  {%- for detail in job.highlights %}
  - {{ detail }}
  {%- endfor %}
  {%- if job.summary or job.links %}
  - {{ job.summary }}{% for link in job.links %} ([{{ link.name }}]({{ link.url }})){% endfor %}
  {%- endif %}
{%- endfor %}

# Projects
{: #projects}

{% for project in site.data.resume.projects %}
- *{% include date-range.html entry=project %}*, **[{{ project.name | replace: "|", "&#124;" }}]({{ project.url }})**.
  {%- for detail in project.highlights %}
  - {{ detail }}
  {%- endfor %}
  - {{ project.summary }}
  - {% for link in project.links %}[{{ link.name }}]({{ link.url }}){% unless forloop.last %} · {% endunless %}{% endfor %}
{%- endfor %}

# Skills
{: #skills}

{% for skill in site.data.resume.skills %}
- **{{ skill.name }}** · {{ skill.keywords | join: ", " }}
{%- endfor %}
