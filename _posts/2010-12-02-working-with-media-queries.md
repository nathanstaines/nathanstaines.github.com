---
layout: post
title: Working with media queries
category: articles
tags: [css, responsive, tutorial]
date: 2010-12-02 12:00:00
alias: [/archive/working-with-media-queries, /demo/media-queries.html]
---

The use of media queries simply allows us to apply different CSS styles based on resolution and/or device orientation. It uses the same old media declaration that we've used for serving up print stylesheets but now it just has a few more features under its belt.

**Everyone's doing it**... ok, so maybe not everyone but it's definitely starting to gain some traction amongst the designers who are prepared to push the boundaries - or at the very least experiment with them from time to time.

<figure class="figure-img">
  <a href="http://hicksdesign.co.uk">
    {% picture query-hicks.png class="img-polaroid" alt="" %}
  </a>
  <figcaption>Hicks Design</figcaption>
</figure>

### How do we use them?

First we need to set the viewport to device-width

{% gist 9421235 index-a.html %}

We can either link to external stylesheets

{% gist 9421235 index-b.html %}

Or add them to an existing stylesheet

{% gist 9421235 main.css %}

### Is it supported?

The browser support for media queries is actually pretty good. The latest versions of Firefox, Safari, Chrome, and Opera are all using it. Internet Explorer 9 will be, but IE8 and below do not :( however there is a [jQuery media queries plugin](http://plugins.jquery.com/project/MediaQueries) - for those not-so-capable browsers.

### Final thoughts

One thing to keep in mind - Although we can now tailor our designs to suit different devices we'll still be dealing with the exact same content. ([CSS3 flexbox](http://dev.w3.org/csswg/css3-flexbox/) can help rearrange some content if necessary) So even if we decide to use CSS to hide images on the iPhone, they'll still be downloaded by the user.

### Notable Mentions

+ [Mediaqueri.es](http://mediaqueri.es) - A collection of responsive web design.
+ [Less Framework](http://lessframework.com) - A CSS grid system for designing adaptive web­sites.
+ [CSSgrid](http://cssgrid.net/) - A 1140px wide, 12 column grid. Fluid all the way down to mobile.
+ [A Jason Grigsby article](http://www.cloudfour.com/css-media-query-for-mobile-is-fools-gold/) - On media queries for mobile being fools gold.

<figure class="figure-img">
  <a href="http://edmerritt.com/">
    {% picture query-merritt.png class="img-polaroid" alt="" %}
  </a>
  <figcaption>Ed Merritt</figcaption>
</figure>

<figure class="figure-img">
  <a href="http://colly.com/">
    {% picture query-colly.png class="img-polaroid" alt="" %}
  </a>
  <figcaption>Simon Collison</figcaption>
</figure>
