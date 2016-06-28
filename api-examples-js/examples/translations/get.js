// POST api/translations/get
http_request('/api/translations/get', {
  type: 'POST',
  data: {
    chapter: 2,
    verse: 3,
    lng: 'en'
  }
});
