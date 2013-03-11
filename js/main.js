var likes = $('#likes'),
    pageId = likes.data('page-id'),
    votes = false,
    database = 'nathanstaines',
    collection = 'likes',
    apiKey = '5023a018e4b07b766e03f324';

if (likes.length) {

  // Check if data is stored locally otherwise talk to the database
  if (localStorage && localStorage.getItem(pageId)) {
    var data = JSON.parse(localStorage.getItem(pageId));

    likes.find('span.count').text(data.count);

    if (data.counted) {
      likes
        .addClass('counted')
        .find('i')
        .toggleClass('icon-heart-empty icon-heart-full');
    }

  } else {

    $.ajax({
      url: 'https://api.mongolab.com/api/1/databases/' + database + '/collections/' + collection + '?apiKey=' + apiKey,
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {

        // If data exists on the database get it
        $.each(data.reverse(), function(index, value) {

          // Save the data in local storage
          localStorage.setItem(value.pageId, JSON.stringify({count: value.count, counted: false}));

          if (value.pageId === pageId) {
            likes.find('span.count').text(value.count);
            votes = true;

            // Exit .each() early
            return false;
          }
        });

        // If data doesn't exist on the database add it
        if (!votes) {
          $.ajax({
            url: 'https://api.mongolab.com/api/1/databases/' + database + '/collections/' + collection + '?apiKey=' + apiKey,
            data: JSON.stringify({
              pageId: pageId,
              count: 0
            }),
            type: 'POST',
            contentType: 'application/json',
            success: function() {

              // Save the data in local storage
              localStorage.setItem(pageId, JSON.stringify({count: value.count, counted: false}));
            }
          });
        }
      }
    });

  }

  // Fire up the click event
  likes.on('click', function(e) {
    var num = likes.find('span.count').text(),
        crement = likes.hasClass('counted') ? num-- : num++,
        counted = likes.hasClass('counted') ? false : true;

    likes
      .toggleClass('counted')
        .find('span.count')
        .text(num)
        .end()
          .find('i')
          .toggleClass('icon-heart-empty icon-heart-full');

    // Update the data in local storage
    localStorage.setItem(pageId, JSON.stringify({count: num, counted: counted}));

    // Update the data in the database
    $.ajax({
      url: 'https://api.mongolab.com/api/1/databases/' + database + '/runCommand?apiKey=' + apiKey,
      data: JSON.stringify({
        findAndModify: collection,
        query: {
          pageId: pageId
        },
        update: {$inc: {count: (likes.hasClass('counted') ? 1 : -1)}},
        upsert: true
      }),
      type: 'POST',
      contentType: 'application/json'
    });

    e.preventDefault();
  });
}
