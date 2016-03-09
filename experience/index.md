---
layout: default
---
# Experience
<ul id="card-list">
    {% for job in site.data.experience %}
    <li>
        <div class="card-wrapper">
            <h2>{{ job.company }}<span class="subheading">: {{ job.summary }}</span></h2>
            <p>{{ job.description }}</p>
        </div>
    </li>
    {% endfor %}
</ul>
