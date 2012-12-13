/*! Test - v0.1.0 - 2012-12-13
* https://github.com/OnCast Marketing/test
* Copyright (c) 2012 Saulo Venancio; Licensed MIT */

(function($) {

  // Collection method.
  $.fn.awesome = function() {
    return this.each(function() {
      $(this).html('awesome');
    });
  };

  // Static method.
  $.awesome = function() {
    return 'awesome';
  };

  // Custom selector.
  $.expr[':'].awesome = function(elem) {
    return elem.textContent.indexOf('awesome') >= 0;
  };

}(jQuery));
