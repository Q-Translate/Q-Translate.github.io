// GET api/report/stats
http_request('/api/report/stats?lng=en')
  .done(function(response) {
    console.log(response);
  });
