var link_to = function (url) {
  debug('<li>Click: <a href="' + url + '" target="_blank">' + url + '</a></li>');
};

// Get a RSS feed of the latest translations.
link_to('https://qtranslate.net/qtr/rss-feed/en');
link_to('https://qtranslate.org/rss-feed/en');
