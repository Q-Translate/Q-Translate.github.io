
var $token = new OAuth2.Token($config.oauth2);

var add_like = function (tguid) {
  // Get an access_token.
  var access_token = $token.access_token();
  if (!access_token) {
    $token.get().done(function () {
      add_like(tguid);
    });
    return;
  }

  // POST api/translations/like
  http_request('/api/translations/like', {
    type: 'POST',
    data: { tguid: tguid },
    headers: { 'Authorization': 'Bearer ' + access_token }
  }).done(function () {
    // Retrive the string and check that the translation has been liked.
    http_request('/api/translations/en:2:3');
  });
};

// Get a verse and add a like to the first translation.
http_request('/api/translations/en:2:3')
  .done(function(result){
    var tguid = result.verse.translations[0].tguid;
    add_like(tguid);
  });
