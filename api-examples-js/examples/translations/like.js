
var $token = new OAuth2.Token($config.oauth2);

var add_like = function (sguid, tguid) {
  // Get an access_token.
  var access_token = $token.access_token();
  if (!access_token) {
    $token.get().done(function () {
      add_like(sguid, tguid);
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
    var url = '/api/translations/' + sguid + '?lng=en';
    http_request(url).done(function () {
      // POST api/translations/del_like
      http_request('/api/translations/del_like', {
        type: 'POST',
        data: { tguid: tguid },
        headers: { 'Authorization': 'Bearer ' + access_token }
      });
    });
  });
};

// Get a random translated string an add a like to the first translation.
var url = '/api/translations/translated?lng=en';
http_request(url).done(function(result){
  var sguid = result.string.sguid;
  var tguid = result.string.translations[0].tguid;
  add_like(sguid, tguid);
});
