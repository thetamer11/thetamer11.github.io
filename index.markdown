---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Gavin Camlin
layout: home
---

<!-- Page header -->

<div id="header_container">
    <div id="item">
        <p>
        Hey, I'm Gavin!<br><br>

        I'm a AAA games engineer. I have experience in gameplay systems, network, porting, and tools engineering. 
        <br><br>
        Presently I work at Toys for Bob as a Software Engineer and  previously at Unity/Vivox as a Network Engineer. I also volunteer my time towards organizing Boston Game Dev. 
        </p>
    </div>
    <div id="item">
      <img id="ProfilePic" src="assets\images\profiles\profile_pic.jpg">
    </div>
</div>

<!-- Games -->

<div class="games_container">
<h1> Games and Software </h1> 
{% for game in site.games %}

{% if game.game %}

  <h1>
    <a href="{{ game.store_link }}">
      {{ game.title }} - {{ game.release-date }}
    </a>
  </h1>
  
  <div id="game_info">
    <div class="info_box">
      
      <div id="inf_item">
        <h2> Project Info </h2>
        <ul>
          <li>
            {% assign comp = site.data.companies[game.company] %}
            Company: <strong>{{ comp.Name }}</strong>
          </li>
          <li>
            Engine: <strong>{{ game.engine }}</strong>
          </li>
          <li>
            Dev Time: <strong>{{ game.development-time }}</strong>
          </li>
          <li>
            Role: <strong>{{ game.role }}</strong>
          </li>
        </ul>
      </div>
      
      <div id="inf_item">
        <h2>Platforms</h2>
        <ul>
        {% for plat in game.platforms %}
          <li> 
            {{ plat }}
          </li>
        {% endfor %}
        </ul>
      </div>  
    </div>
    
    <div id="image">
      <iframe width="560" height="315" src="{{ game.trailer }}" title="{{ game.title }} trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>

  <div>
    <p>
      {{ game.content }}
    </p>
  </div>

{% else %}

  <h1> {{ game.title }} </h1>

{% endif %}

{% endfor %}
</div>



<!-- About Container -->

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

<!-- Volunteer Work -->

<h1> Volunteer Work Section </h1>