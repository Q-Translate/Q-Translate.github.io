/**
 * Open the given login_url on a new window and then call
 * the given callback function, passing to it the login_url
 * and the opened window as parameters.
 *
 * Sometimes browsers block new windows when the function
 * that is trying to open them does not originate from a
 * user event. This function checks whether the new window
 * was blocked, and if so solves the problem by asking the
 * user to request explicitly the login window.
 */
var open_login_window = function (login_url, callback, skip_checking) {
  var win = window.open(login_url);
  if (skip_checking) {
    callback(login_url, win);
    return;
  }

  try {
    win.focus();   // will throw an error if window.open() is blocked
    callback(login_url, win);
  }
  catch (e) {
    debug('<input type="button" id="open-proxy-login" value="Click here to login" style="color: black;" />');
    $('#open-proxy-login').on('click', function () {
      $('#open-proxy-login').remove();
      open_login_window(login_url, callback, true);
    });
  }
};

$config.oauth2.auth_flow = 'proxy';
$config.oauth2.openLoginWindow = open_login_window;
var $token = new OAuth2.Token($config.oauth2);

// Make sure that there is no token from previous sessions (for testing).
$token.erase();

// This function will just get and display a token.
var display_token = function () {
  var access_token = $token.access_token();
  if (!access_token) {
    $token.get().done(function () {
      display_token();
    });
    return;
  }

  // Display the access_token.
  debug("\n-------------- access_token -------------------\n");
  debug('==> ' + access_token);
  debug("\n-----------------------------------------------\n");

  // Reset.
  $config.oauth2.auth_flow = 'password';
  $token.erase();
};

// Call the function.
display_token();
