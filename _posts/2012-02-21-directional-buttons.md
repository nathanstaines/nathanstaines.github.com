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

``` html
<div class="btn-group">
  <a href="#" class="dir-btn dir-prev"><span>Prev</span></a>
  <a href="#" class="dir-btn dir-next"><span>Next</span></a>
</div>
```

First we start with our basic button styles:

``` css
.dir-btn {
  position: relative;
  display: inline-block;
  width: 6rem;
  height: 2.25rem;
  z-index: 1;
}

.dir-btn span {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0.375rem 0.75rem;
  border: 1px solid #ccc;
  border-left: none;
  border-radius: 4px;
  line-height: 1.4;
  font-weight: bold;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  background: #eee;
}

.dir-btn:hover {
  text-decoration: none;
}

.dir-btn:hover span {
  border-color: #aa305e;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.5);
  color: #fff;
  background: #ec528d;
}

.dir-btn:active span {
  border-color: #822548;
  color: #fff;
  background: #c5376d;
}
```

Then we add the directional arrows using the `:before` pseudo-element:

``` css
.dir-btn:before {
  position: absolute;
  top: 0.29207rem;
  left: -0.67854rem;
  display: block;
  width: 1.67938rem;
  height: 1.67938rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #eee;
  transform: rotate(45deg);
  content: "";
  z-index: -1;
}

.dir-btn:hover:before {
  border-color: #aa305e;
  background: #ec528d;
}

.dir-btn:active:before {
  border-color: #822548;
  background: #c5376d;
}
```

And lastly we flip the direction of the arrow for one of the buttons.

``` css
.dir-next span {
  border: 1px solid #ccc;
  border-right: none;
}

.dir-next:hover span {
  border-color: #aa305e;
}

.dir-next:before {
  left: auto;
  right: -0.67854rem;
}
```

If you feel as though this technique could be improved upon or you end up using it on one of your sites then please [let me know via Twitter](http://twitter.com/nathanstaines).
