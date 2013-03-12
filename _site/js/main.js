var $likes = $('#likes'),
    $count = $likes.find('span.count'),
    $pageId = $likes.data('page-id'),
    hasLikes = false,
    database = 'nathanstaines',
    collection = 'likes',
    apiKey = '5023a018e4b07b766e03f324';

if ($likes.length) {

  if (localStorage && localStorage.getItem($pageId)) {
    var data = JSON.parse(localStorage.getItem($pageId));

    if (data.counted) {
      $likes.addClass('counted')
        .find('i')
        .toggleClass('icon-heart-empty icon-heart-full');
    }
  }

  if (sessionStorage && sessionStorage.getItem($pageId)) {
    var data = JSON.parse(sessionStorage.getItem($pageId));

    $count.text(data.count);
  } else {
    $.ajax({
      url: 'https://api.mongolab.com/api/1/databases/' + database + '/collections/' + collection + '?apiKey=' + apiKey,
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        $.each(data, function(index, value) {
          if (value.pageId === $pageId) {
            $count.text(value.count);
            hasLikes = true;
          }

          sessionStorage.setItem(value.pageId, JSON.stringify({count: value.count}));
        });

        if (!hasLikes) {
          $.ajax({
            url: 'https://api.mongolab.com/api/1/databases/' + database + '/collections/' + collection + '?apiKey=' + apiKey,
            data: JSON.stringify({
              pageId: $pageId,
              count: 0
            }),
            type: 'POST',
            contentType: 'application/json',
            success: function() {
              sessionStorage.setItem($pageId, JSON.stringify({count: 0}));
            }
          });
        }
      }
    });
  }

  $likes.on('click', function(e) {
    var num = $count.text(),
        counted = $likes.hasClass('counted') ? false : true;

    num = $likes.hasClass('counted') ? num-- : num++;

    $likes.toggleClass('counted')
      .find('i')
      .toggleClass('icon-heart-empty icon-heart-full');

    $count.text(num);

    sessionStorage.setItem($pageId, JSON.stringify({count: num}));
    localStorage.setItem($pageId, JSON.stringify({counted: counted}));

    $.ajax({
      url: 'https://api.mongolab.com/api/1/databases/' + database + '/runCommand?apiKey=' + apiKey,
      data: JSON.stringify({
        findAndModify: collection,
        query: {
          pageId: $pageId
        },
        update: {$inc: {count: ($likes.hasClass('counted') ? 1 : -1)}},
        upsert: true
      }),
      type: 'POST',
      contentType: 'application/json'
    });

    e.preventDefault();
  });

}
