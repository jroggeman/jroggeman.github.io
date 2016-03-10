---
layout: default
---

# Posts
<ul class="card-list">
{% for post in site.posts %}
<li><a href="{{ post.url }}" class="card"><h2>{{ post.title }}</h2></a></li>
{% endfor %}
</ul>
