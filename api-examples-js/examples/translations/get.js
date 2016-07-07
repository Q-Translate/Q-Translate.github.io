// POST api/translations/get
http_request('/api/translations/get', {
  type: 'POST',
  data: {
    lng: 'en',
    chapter: 2,
    verse: 3
  }
});
