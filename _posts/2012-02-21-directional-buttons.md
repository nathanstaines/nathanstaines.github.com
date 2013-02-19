---
layout: post
title: Directional buttons
category: articles
tags: [buttons, css, tutorial]
date: 2012-02-21 12:00:00
css: directional-buttons
---

I've been waiting for an excuse to fine tune an idea I had about creating some directional buttons using just CSS. So after seeing the [Simple light button playoff on dribbble](http://dribbble.com/shots/433299-Simple-light-button/rebounds), I decided to get my act together and finally finish it off and in the process, write my first blog post for 2012.

These buttons have been made by utilising the CSS `:before` attribute and [Modernizr](http://modernizr.com/) to ensure that browsers that **don't** support CSS transitions but **do** support the `:before` attribute don't break. However, even without Modernizr or JavaScript enabled these buttons will degrade gracefully.

<div class="panel">
  <h3>The demo</h3>
  <nav id="btns">
    <a href="#" class="prev">Prev</a>
    <a href="#" class="next">Next</a>
  </nav>
</div>

<div class="alert">
  <h3>Note:</h3>
  <p>For the sake of simplicity, vendor prefixes have been omitted. However, you can still view them in the page source.</p>
</div>

The HTML markup is about as simple as it gets:

``` html
<nav id="btns">
  <a href="#" class="prev">Prev</a>
  <a href="#" class="next">Next</a>
</nav>
```

Next we have our basic button styles:

``` css
#btns a {
  display: inline-block;
  position: relative;
  width: 5em;
  padding: .25em .5em;
  border: 1px solid #aaa;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-shadow: 0 1px 0 rgba(255, 255, 255, .3);
  color: rgba(0, 0, 0, .6);
  background: #fff;
  background: linear-gradient(top, #fff 0%, #eee 100%);
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

#btns a:hover {
  border-color: #aa305e;
  background: #ec528d;
  background: linear-gradient(top, #f874a4 0%, #ec528d 100%);
  box-shadow: 0 1px 2px rgba(0, 0, 0, .3), 0 1px 0 rgba(255, 255, 255, .3) inset;
}

#btns a:active {
  border-color: #832448;
  background: #f76499;
  background: linear-gradient(top, #ea4383 0%, #f76499 100%);
  box-shadow: 0 1px 2px rgba(0, 0, 0, .2) inset;
}
```

Then for the directional arrows:

``` css
#btns a.prev {
  border-left: none;
}

#btns a.next {
  border-right: none;
}

#btns a:before {
  display: block;
  position: absolute;
  top: .25em;
  left: -.625em;
  z-index: 1;
  width: 1.4375em;
  height: 1.4375em;
  border: 1px solid #aaa;
  border-top: none;
  border-right: none;
  border-radius: 0 4px;
  content: "";
  background: #fff;
  background: linear-gradient(-45deg, #fff 0%, #eee 100%);
  box-shadow: 0 2px 0 rgba(0, 0, 0, .075);
  transform: rotate(45deg);
}

#btns a.next:before {
  left: auto;
  right: -.625em;
  border: 1px solid #aaa;
  border-bottom: none;
  border-left: none;
  box-shadow: 2px 0 0 rgba(0, 0, 0, .075);
}

#btns a:hover:before {
  border-color: #832448;
  background: #ec528d;
  background: linear-gradient(-45deg, #f874a4 0%, #ec528d 100%);
  box-shadow: 0 2px 0 rgba(0, 0, 0, .1);
}

#btns a.next:hover:before {
  box-shadow: 2px 0 0 rgba(0, 0, 0, .1);
}

#btns a:active:before {
  border-color: #832448;
  background: #f76499;
  background: linear-gradient(-45deg, #ea4383 0%, #f76499 100%);
  box-shadow: none;
}

#btns a.next:active:before {
  box-shadow: none;
}
```

If you feel as though this technique could be improved upon or you end up using it on one of your sites then please [let me know via Twitter](http://twitter.com/nathanstaines).
