var link_to = function (url) {
    debug('<li>Click: <a href="' + url + '" target="_blank">' + url + "</a></li>");
};

// Get a random tweet.
link_to('https://l10n.org.al/qtr/tweet');
link_to('https://l10n.org.al/qtr/tweet/vocabulary/ICT_sq');

link_to('https://qtranslate.net/qtr/tweet/vocabulary/ICT_sq/sq');

link_to('https://qtranslate.org/tweet/sq');
link_to('https://qtranslate.org/tweet/sq/vocabulary/ICT_sq');

http_request('https://qtranslate.org/tweet/sq',
             { headers: { 'Accept': 'application/json'}});
