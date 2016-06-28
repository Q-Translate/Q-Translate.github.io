// POST api/translations/search
http_request('/api/translations/search', {
  type: 'POST',
  data: {
    lng: 'en',
    words: 'unseen',
    chapter: 2,
  },
});
