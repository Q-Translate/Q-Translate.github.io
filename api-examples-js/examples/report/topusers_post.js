// POST api/report/topusers
http_request('/api/report/topusers', {
  type: 'POST',
  data: {
    lng: 'en',
    period: 'week',
  },
});
