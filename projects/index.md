---
layout: default
---

<h1>Projects</h1>
<ul id="card-list">
    {% for project in site.data.projects %}
    <li>
        <a href="{{ project.url }}" class="card-wrapper" target="_blank">
            <h2>{{ project.name }}<span class="subheading">: {{ project.summary }}</span></h2>
            <p>{{ project.description }}</p>
        </a>
    </li>
    {% endfor %}
</ul>
