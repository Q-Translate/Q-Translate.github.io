
// Actions that will be submitted.
var actions = [
  { 
    action: 'add',
    params: { 
      lng: 'en',
      chapter: 2,
      verse: 3,
      translation: 'Test translation.',
    },
  },
  { 
    action: 'like',
    params: { tguid: '40af5f58a7d1211c0cb5950d0b36b21c06cf50e6' },
  },
  { 
    action: 'del',
    params: { tguid: 'test-f58a7d1211c0cb5950d0b36b21c06cf50e6' },
  },
  { 
    action: 'add',
    params: { 
      lng: 'en',
      chapter: 2,
      verse: 3,
      translation: '',
    },
  },
];

var $token = new OAuth2.Token($config.oauth2);

var submit_actions = function () {
  // Get an access_token.
  var access_token = $token.access_token();
  if (!access_token) {
    $token.get().done(submit_actions);
    return;
  }

  // POST api/translations/submit
  http_request('/api/translations/submit', {
    type: 'POST',
    data: actions,
    headers: { 'Authorization': 'Bearer ' + access_token }
  });
}

// Call the function.
submit_actions();
