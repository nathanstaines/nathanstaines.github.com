---
layout: post
title: Directional buttons
category: articles
tags: [buttons, css, tutorial]
date: 2012-02-21 12:00:00
css: directional-buttons
---

I've been waiting for an excuse to fine tune an idea I had about creating some directional buttons using just CSS. So after seeing the [Simple light button playoff on dribbble](http://dribbble.com/shots/433299-Simple-light-button/rebounds), I decided to get my act together and finally finish it off and in the process, write my first blog post for 2012.

<div class="panel panel-demo">
  <div id="dir-btns" class="btn-group">
    <a href="#" class="dir-btn dir-prev"><span>Prev</span></a>
    <a href="#" class="dir-btn dir-next"><span>Next</span></a>
  </div>
</div>

<div class="alert">
  <h3>Note:</h3>
  <p>For the sake of simplicity, vendor prefixes have been omitted. However, you can view the <a href="http://github.com/nathanstaines/nathanstaines.github.com/blob/source/css/directional-buttons.css">css</a> and <a href="http://github.com/nathanstaines/nathanstaines.github.com/blob/source/sass/directional-buttons.scss">sass</a> file on GitHub.</p>
</div>

The HTML markup is pretty simple. Although, an extra `span` tag is required in order for the `z-index` styles to work on the `:before` pseudo-element.

{% gist 9421484 index.html %}

First we start with our basic button styles:

{% gist 9421484 main-a.css %}

Then we add the directional arrows using the `:before` pseudo-element:

{% gist 9421484 main-b.css %}

And lastly we flip the direction of the arrow for one of the buttons.

{% gist 9421484 main-c.css %}

If you feel as though this technique could be improved upon or you end up using it on one of your sites then please [let me know via Twitter](http://twitter.com/nathanstaines).
