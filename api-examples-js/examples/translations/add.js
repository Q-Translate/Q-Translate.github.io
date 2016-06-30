
var $token = new OAuth2.Token($config.oauth2);

// Function for adding a new translation.
var add_translation = function (chapter, verse, lng, new_translation) {
  // Get an access_token.
  var access_token = $token.access_token();
  if (!access_token) {
    $token.get().done(function () {
      add_translation(chapter, verse, lng, new_translation);
    });
    return;
  }

  // POST api/translations/add
  var request = http_request('/api/translations/add', {
    type: 'POST',
    data: {
      chapter: chapter,
      verse: verse,
      lng: lng,
      translation: new_translation
    },
    headers: {
      'Authorization': 'Bearer ' + access_token
    }
  });

  // After adding the translation retrieve the verse to check it.
  request.done(function (response) {
    // Get the id of the added translation.
    tguid = response.tguid;

    var url = '/api/translations/' + chapter + ',' + verse + ',' + lng;
    var request = http_request(url);

    // Now delete the translation.
    request.done(function () {
      http_request('/api/translations/del', {
        type: 'POST',
        data: { tguid: tguid },
        headers: { 'Authorization': 'Bearer ' + access_token }
      });
    });
  });
};

/******************************************************/

// Add a new translation for a string.
var new_translation = 'test-translation-' + Math.floor(Math.random() * 10);
add_translation(2, 3, 'en', new_translation);
