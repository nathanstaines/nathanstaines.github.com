---
layout: post
title: Now powered by Jekyll
category: articles
tags: [jekyll]
date: 2013-04-05 17:35:00
---

Inspired by the [brander newer](http://daverupert.com/2012/11/brander-newer/) version of Dave Rupert's blog I decided to make the switch from WordPress to [Jekyll](http://jekyllrb.com/), a simple, blog aware, static site generator written by [Tom Preston-Werner](http://tom.preston-werner.com/). It basically takes a template directory, runs it through some Markdown and Liquid converters and spits out a completely static website.

At first static websites can be a little tricky to get your head around. It kind of feels like a bit of a throwback to the [early days of web development](http://www.w3.org/History/19921103-hypertext/hypertext/WWW/TheProject.html). Back when you didn't have to worry so much about databases and backend code, just pure front-end development before front-end development was even a thing.

### Now hosted on GitHub

One of the best things about using Jekyll is the ability to use GitHub as a host. If you've ever used [GitHub Pages](http://pages.github.com/) before then you've already experienced Jekyll in action. Every GitHub Page is run through Jekyll when you push content to your repo. This means that you can host your site for free, have every change version controlled and your content deployed instantly.

However, it's not exactly a perfect fit if you want to use any of the [plugins](https://github.com/mojombo/jekyll/wiki/Plugins#available-plugins) that are available for Jekyll. Unfortunately but understandably GitHub runs Jekyll in safe mode, which means the use of plugins is prohibited.

<div class="callout callout-info">
  <h3 class="delta">A solution to the plugin problem</h3>

  <p>After scouring the internet for quite a while, here's the solution I ended up using:</p>

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

  {% gist 9421823 bash-a.sh %}

  <p>Or you can <a href="http://git-scm.com/book/ch2-7.html#Git-Aliases">create a git alias</a> to run them all:</p>

  {% gist 9421823 bash-b.sh %}

  <p>Then all you need to remember is:</p>

  {% gist 9421823 bash-c.sh %}
</div>

The [source code for my site](https://github.com/nathanstaines/nathanstaines.github.com) is available for your viewing pleasure on GitHub if you're interested in taking a look.

If you'd like any more info on how I setup Jekyll then <a href="mailto:&#110;&#097;&#116;&#104;&#097;&#110;&#064;&#110;&#097;&#116;&#104;&#097;&#110;&#115;&#116;&#097;&#105;&#110;&#101;&#115;&#046;&#099;&#111;&#109;">send me an email</a> or contact me via twitter [@nathanstaines](http://twitter.com/nathanstaines), I'd be happy to help out where I can.
