---
layout: default
---
# Experience
<ul class="card-list">
    {% for job in site.data.experience %}
    <li>
        <div class="card">
            <h2>{{ job.company }}<span class="subheading">: {{ job.summary }}</span></h2>
            <p>{{ job.description }}</p>
        </div>
    </li>
    {% endfor %}
</ul>
