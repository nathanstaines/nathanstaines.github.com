---
layout: post
title: WordPress word count
category: articles
tags: [php, tutorial, wordpress]
date: 2012-06-25 12:00:00
---

When I redesigned my site last time around I decided it would be a good idea to display a word count for each of the articles; you know, for all those people just dying to know how many words were waiting to be read.

I assumed this would be an easy thing to achieve using WordPress, which to a certain extent it was. However, I also wanted to be able to exclude any code blocks from the final count.

Below you'll find a couple of solutions I came up with to help solve the predicament I found myself in, they may not be bulletproof solutions but they did work for me.

###The simple solution

If you're not interested in removing any HTML elements from your final count then you can simply place the following function in your theme's `functions.php` file:

``` php
<?php
  function wcount() {
    $content = get_post_field( 'post_content', $post->ID );
    $count = str_word_count( strip_tags( $content ) );
    return $count;
  }
?>
```

Then add this to your theme wherever you'd like the word count to appear:

``` php
<?php
  if (function_exists('wcount')) {
    echo wcount();
  }
?>
```

###The not so simple solution

This solution requires a little extra work. First you have to to create a new instance of the `DOMDocument` class and then disable the error reporting as it doesn't seem to want to play nice with HTML5.

From there you need to collect and remove any of the HTML elements that you no longer want to be included in your final count and then you can continue as per normal.

Simply place the following function in your theme's `functions.php` file:

<!-- http://stackoverflow.com/questions/1516085/strip-html-tags-and-its-contents -->
<!-- http://stackoverflow.com/questions/6090667/php-domdocument-errors-warnings-on-html5-tags -->

``` php
<?php
  function wcount() {
    $content = get_post_field( 'post_content', $post->ID );

    $dom = new DOMDocument();
    libxml_use_internal_errors( true );
    $dom->loadHTML( $content );
    libxml_clear_errors();
    $excluded_elements = $dom->getElementsByTagName( 'pre' );
    $elements = array();

    foreach( $excluded_elements as $element ) {
      $elements[] = $element;
    }

    foreach( $elements as $element ) {
      $element->parentNode->removeChild( $element );
    }

    $count = str_word_count( strip_tags( $dom->saveHTML() ) );
    return $count;
  }
?>
```

Then add this to your theme wherever you'd like the word count to appear:

``` php
<?php
  if (function_exists('wcount')) {
    echo wcount();
  }
?>
```

If you run into any problems or have any questions regarding these solutions feel free to <a href="mailto:&#110;&#097;&#116;&#104;&#097;&#110;&#064;&#110;&#097;&#116;&#104;&#097;&#110;&#115;&#116;&#097;&#105;&#110;&#101;&#115;&#046;&#099;&#111;&#109;">send me an email</a> or contact me via twitter [@nathanstaines](http://twitter.com/nathanstaines).
