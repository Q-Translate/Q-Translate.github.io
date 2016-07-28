var $token = new OAuth2.Token($config.oauth2);

var get_user_profile = function () {
  var access_token = $token.access_token();

  // POST request on /oauth2/user/profile
  http_request('/oauth2/user/profile', {
    type: 'POST',
    headers: {
      'Authorization': 'Bearer ' + access_token,
    },
    dataType: 'json',
  })
    .done(function (response) {
      console.log(response);

      // GET request on /oauth2/user_profile
      http_request('/oauth2/user_profile', {
        headers: {
          'Authorization': 'Bearer ' + access_token,
        },
        dataType: 'json',
      })
        .done(function (response) {
          console.log(response);
        });
    });
};

$token.get().done(get_user_profile);
