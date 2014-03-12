(function() {
  'use strict';

  $.ajax({
    url: 'https://api.github.com/repos/nathanstaines/starkers-html5',
    type: 'GET',
    contentType: 'application/json',
    success: function(data) {
      /* jshint camelcase: false */
      $('#starkers-stars').text(data.stargazers_count);
      $('#starkers-forks').text(data.forks_count);
    }
  });

})();
