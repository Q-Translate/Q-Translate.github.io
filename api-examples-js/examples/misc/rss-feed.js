var link_to = function (url) {
  debug('<li>Click: <a href="' + url + '" target="_blank">' + url + '</a></li>');
};

// Get a RSS feed of the latest translations.
link_to('https://en.qtranslate.net/qtr/rss-feed');
link_to('https://qtranslate.org/rss-feed/en');
