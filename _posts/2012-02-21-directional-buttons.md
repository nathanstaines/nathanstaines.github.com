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
  <nav id="dir-btns">
    <a href="#" class="dir-btn dir-prev"><span>Prev</span></a>
    <a href="#" class="dir-btn dir-next"><span>Next</span></a>
  </nav>
</div>

<div class="alert">
  <h3>Note:</h3>
  <p>For the sake of simplicity, vendor prefixes have been omitted. However, you can view the <a href="http://github.com/nathanstaines/nathanstaines.github.com/blob/source/css/directional-buttons.css">css</a> and <a href="http://github.com/nathanstaines/nathanstaines.github.com/blob/source/sass/directional-buttons.scss">sass</a> file on GitHub.</p>
</div>

The HTML markup is pretty simple. Although, there is an extra `span` tag required in order for `z-index` to work on the `:before` pseudo-element.

``` html
<a href="#" class="dir-btn dir-prev"><span>Prev</span></a>
<a href="#" class="dir-btn dir-next"><span>Next</span></a>
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
  border-left: none;
  line-height: 1.4;
  font-weight: bold;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  background-color: white;
  background-image: linear-gradient(top, white, #f7f7f7);
}

.dir-btn:hover {
  text-decoration: none;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
}

.dir-btn:hover span {
  border-color: #aa305e;
  color: rgba(0, 0, 0, 0.75);
  background-color: #f874a4;
  background-image: linear-gradient(top, #f874a4, #ec528d);
}
```

Then we add the directional arrows using the `:before` pseudo-element:

``` css
.dir-btn:before {
  position: absolute;
  top: 0.29377rem;
  left: -0.6825rem;
  display: block;
  width: 1.6892rem;
  height: 1.6892rem;
  background-color: white;
  background-image: linear-gradient(-45deg, white, #f7f7f7);
  transform: rotate(45deg);
  content: "";
  z-index: -1;
}

.dir-btn:hover:before {
  border-color: #aa305e;
  background-color: #f874a4;
  background-image: linear-gradient(-45deg, #f874a4, #ec528d);
}
```

And lastly we flip the direction of the arrow for one of the buttons.

``` css
.dir-next span {
  border: 1px solid #cccccc;
  border-right: none;
}

.dir-next:hover span {
  border-color: #aa305e;
}

.dir-next:before {
  left: auto;
  right: -0.6825rem;
}
```

If you feel as though this technique could be improved upon or you end up using it on one of your sites then please [let me know via Twitter](http://twitter.com/nathanstaines).
