---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Gavin Camlin
layout: home
---


<div id="header_container">
    <div id="item">
        <p>
        Hey, I'm Gavin!<br><br>

        I'm a professional gameplay systems and network engineer for games. I'm also a frequent contributor to Boston Game Development.
        </p>
    </div>
    <div id="item">
      <img id="ProfilePic" src="assets\images\profiles\profile_pic.jpg">
    </div>
</div>

<div id="about_container">
<div>
  <h1>About</h1>
  <p>
  This is my about me. Lots of words here! Wow
  </p>
</div>

<div>
  <h1>Skills</h1>
  <div class="skills_container">
  
    <div id="skill_list">
      <h2>Engines</h2>
      <div>
        {% for engine in site.data.engines %}
          <img class="skill_logo" src= "{{ engine.image }}">
        {% endfor %}
      </div>
    </div>
    
    <div id="skill_list">
      <h2>Languages</h2>
      <div>
        {% for lang in site.data.langs %}
          <div>
          {{ lang.name }}
          </div>
        {% endfor %}
      </div>
    </div>
    
    <div id="skill_list">
      <h2> Tools </h2>
      <div>
        {% for tool in site.data.tools %}
          <div>
          {{ tool.name }}
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
</div>
</div>
