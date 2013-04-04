---
layout: post
title: Now powered by Jekyll
category: articles
date: 2013-03-15 14:41:44
---

Inspired by the [brander newer](http://daverupert.com/2012/11/brander-newer/) version of Dave Rupert's blog I decided to make the switch from WordPress to [Jekyll](http://jekyllrb.com/), a simple, blog aware, static site generator written by [Tom Preston-Werner](http://tom.preston-werner.com/). It basically takes a template directory, runs it through some Markdown and Liquid converters and spits out a completely static website.

At first static websites can be a little tricky to get your head around. It kind of feels like a bit of a throwback to the [early days of web development](http://www.w3.org/History/19921103-hypertext/hypertext/WWW/TheProject.html). Back when you didn't have to worry so much about databases and backend code, just pure front-end development before front-end development was even a thing.

### Now hosted on GitHub

One of the best things about using Jekyll has to be the ability to use GitHub as a host. If you've ever used [GitHub Pages](http://pages.github.com/) before then you've already experienced Jekyll in action. Every GitHub Page is run through Jekyll when you push content to your repo. Which means that you can host your site for free, have every change version controlled and your content instantly deployed.

However, it's not exactly a perfect fit if you want to use one of the many [Jekyll plugins](https://github.com/mojombo/jekyll/wiki/Plugins#available-plugins) that are available. Unfortunately but understandably GitHub runs Jekyll in safe mode, which doesn't allow the use of plugins.

<div class="panel panel-info">

  <h4>A solution to the plugin problem</h4>

  <ul>
    <li>Setup two branches (source &amp; master)</li>
    <li>Work directly on the source branch</li>
    <li>Build the pages locally</li>
    <li>Stage all the changes</li>
    <li>Delete the contents of master</li>
    <li>Copy the _site folder across from source to master</li>
    <li>Push both branches to GitHub</li>
  </ul>

  <p>The git commands you'll need:</p>

<div class="highlight"><pre><code class="bash">git branch -D master
git checkout -b master
git filter-branch --subdirectory-filter _site/ -f
git checkout <span class="nb">source</span>
git push --all origin
</code></pre></div>

  <p>Or you can <a href="http://git-scm.com/book/ch2-7.html#Git-Aliases">create a git alias</a> to run them all:</p>

<div class="highlight"><pre><code class="bash">git config --global alias.deploy <span class="s1">'! git branch -D master &amp;&amp; git checkout -b master &amp;&amp; git filter-branch --subdirectory-filter _site/ -f &amp;&amp; git checkout source &amp;&amp; git push --all origin'</span>
</code></pre></div>

  <p>Then all you need to remember is:</p>

<div class="highlight"><pre><code>git deploy</code></pre></div>

</div>

### Now styled with Sass

### Now even faster
