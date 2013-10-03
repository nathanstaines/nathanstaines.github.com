---
layout: post
title: Scrolling against the grain
category: articles
tags: [jquery, tutorial]
date: 2010-02-11 12:00:00
---

Recently I was faced with the challenge of creating a horizontally scrolling website, a challenge in which very few have survived with their sanity still intact. The challenge lies in 'going against the grain' because by default, browsers want to wrap the content to fit vertically within the window.

There are plenty of different options out there for you when it comes to making your site go sideways, firstly [the horizontal way](http://www.thehorizontalway.com/#footer) have a template that you can download and have a play with.

Chris Coyier has also come up with [a solution](http://css-tricks.com/how-to-create-a-horizontally-scrolling-site/) using jQuery to create a table based layout on the fly, while Antonio Lupetti discusses [another option](http://woork.blogspot.com/2009/02/useful-tips-to-design-horizontal.html) of manually setting the width of your containing element.

### How I went horizontal

I think I may have decided to go the road less traveled with the [QCD Boards website](http://qcdboards.com), choosing to dynamically set the width of the containing element using jQuery.

I know it's considered bad practise to handle page layout with JavaScript and it may not degrade as nicely as it should but has anyone really come across a bulletproof technique yet?

Well the idea behind this method is to come up with a **set width** for each post, multiply it by the **number of posts** you have and then include that figure in the CSS file, which in turn forces the browser to grow horizontally.

This is achieved by first setting the width of the post element in the CSS file:

``` css
.post { width: 800px; }
```

Then all you need to do is include this simple jQuery function:

``` javascript
$function() {
  var numElementsSingle = $('.post').size(),
      wrapperWidthSingle = numElementsSingle * 800,
      wrapperWidth = wrapperWidthSingle;

  $('#wrapper').css({ width: wrapperWidth });
});
```

Obviously if you want to employ this technique on your own site then you could change the values to something that better suits your needs. Also, if you require more detailed instructions on how to implement this method just let me know and I'll do my best to help you out.

### In closing

I know that there are plenty of [horizontally scrolling websites](http://naldzgraphics.net/inspirations/40-examples-of-horizontal-scrolling-websites/) out there so if you've come across a different/better solution for scrolling against the grain then please let me know.

**A Helpful Tip:** if you hold shift while using your mouse wheel, most horizontal websites should scroll sideways for you.
