---
layout: post
title: Working with media queries
category: articles
tags: [css, responsive, tutorial]
date: 2010-12-02 12:00:00
css: working-with-media-queries
alias: [/archive/working-with-media-queries, /demo/media-queries.html]
---

The use of media queries simply allows us to apply different CSS styles based on resolution and/or device orientation. It uses the same old media declaration that we've used for serving up print stylesheets but now it just has a few more features under its belt.

**Everyone's doing it**... ok, so maybe not everyone but it's definitely starting to gain some traction amongst the designers who are prepared to push the boundaries - or at the very least experiment with them from time to time.

<figure class="figure-img">
  <a href="http://hicksdesign.co.uk"><img class="img-polaroid" src="/img/query-hicks.png" alt=""></a>
  <figcaption>Hicks Design</figcaption>
</figure>

###How do we use them?

First we need to set the viewport to device-width

``` html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

We can either link to external stylesheets

``` html
<link rel="stylesheet" media="only screen and (max-device-width: 480px)" href="small.css">

<link rel="stylesheet" media="only screen and (min-device-width: 768px) and (max-device-width: 1024px)" href="medium.css">
```

Or add them to an existing stylesheet

``` css
/* Minimum width */
@media screen and (min-width: 900px) {
  body {
    background: #ffe11a;
  }
}

/* Maximum width */
@media screen and (max-width: 600px) {
  body {
    background: #ffe11a;
  }
}

/* Minimum and maximum width */
@media screen and (min-width: 600px) and (max-width: 900px) {
  body {
    background: #ffe11a;
  }
}

/* Maximum device width */
@media only screen and (max-device-width: 480px) {
  body {
    background: #ffe11a;
  }
}

/* Maximum device width and orientation */
@media only screen and (max-device-width: 480px) and (orientation:portrait) {
  body {
    background: #ffe11a;
  }
}

/* High resolution devices */
@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (min-resolution: 192dpi) {
  body {
    background: #ffe11a;
  }
}
```

###Is it supported?

The browser support for media queries is actually pretty good. The latest versions of Firefox, Safari, Chrome, and Opera are all using it. Internet Explorer 9 will be, but IE8 and below do not :( however there is a [jQuery media queries plugin](http://plugins.jquery.com/project/MediaQueries) - for those not-so-capable browsers.

###Final thoughts

One thing to keep in mind - Although we can now tailor our designs to suit different devices we'll still be dealing with the exact same content. ([CSS3 flexbox](http://dev.w3.org/csswg/css3-flexbox/) can help rearrange some content if necessary) So even if we decide to use CSS to hide images on the iPhone, they'll still be downloaded by the user.

###Notable Mentions

+ [Mediaqueri.es](http://mediaqueri.es) - A collection of responsive web design.
+ [Less Framework](http://lessframework.com) - A CSS grid system for designing adaptive web­sites.
+ [CSSgrid](http://cssgrid.net/) - A 1140px wide, 12 column grid. Fluid all the way down to mobile.
+ [A Jason Grigsby article](http://www.cloudfour.com/css-media-query-for-mobile-is-fools-gold/) - On media queries for mobile being fools gold.

<figure class="figure-img">
  <a href="http://edmerritt.com/"><img class="img-polaroid" src="/img/query-merritt.png" alt=""></a>
  <figcaption>Ed Merritt</figcaption>
</figure>

<figure class="figure-img">
  <a href="http://colly.com/"><img class="img-polaroid" src="/img/query-colly.png" alt=""></a>
  <figcaption>Simon Collison</figcaption>
</figure>
