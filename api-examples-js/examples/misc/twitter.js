var link_to = function (url) {
    debug('<li>Click: <a href="' + url + '" target="_blank">' + url + "</a></li>");
};

// Get a random translation.
link_to('https://qtranslate.org/tweet/en');
link_to('https://qtranslate.net/qtr/tweet/en');

http_request('https://qtranslate.org/tweet/en',
             { headers: { 'Accept': 'application/json'}});
