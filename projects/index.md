---
layout: default
---

<h1>Projects</h1>
<ul id="projects">
    {% for project in site.data.projects %}
    <li>
        <a href="{{ project.url }}" target="_blank">
            <h2>{{ project.name }}</h2>
            <p>{{ project.description }}</p>
        </a>
    </li>
    {% endfor %}
</ul>
