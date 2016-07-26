
/**
 * Examples and their details.
 */
var example_data = {
  groups: [
    {
      group: 'Misc',
      sections: [
        {
          section: 'latest',
          examples: [
            {
              title: 'GET latest/$lng[/$origin[/$project]]',
              jsfile: 'misc/latest.js',
              apiref: '#sec-5-1',
            },
          ],
        },
        {
          section: 'rss-feed',
          examples: [
            {
              title: 'GET rss-feed[/$origin[/$project]]',
              jsfile: 'misc/rss-feed.js',
              apiref: '#sec-5-2',
            },
          ],
        },
        {
          section: 'tweet',
          examples: [
            {
              title: 'GET tweet/$lng',
              jsfile: 'misc/twitter.js',
              apiref: '#sec-5-3',
            },
          ],
        },
        {
          section: 'autouser',
          examples: [
            {
              title: 'Autouser',
              jsfile: 'misc/autouser.js',
              apiref: '#sec-5-4',
            },
          ],
        },
      ],
    },
    {
      group: 'Report',
      sections: [
        {
          section: 'stats',
          examples: [
            {
              title: 'GET api/report/stats',
              jsfile: 'report/stats_get.js',
              apiref: '#sec-1-1',
            },
            {
              title: 'POST api/report/stats',
              jsfile: 'report/stats_post.js',
              apiref: '#sec-1-1',
            },
          ],
        },
        {
          section: 'topusers',
          examples: [
            {
              title: 'GET api/report/topusers',
              jsfile: 'report/topusers_get.js',
              apiref: '#sec-1-3',
            },
            {
              title: 'POST api/report/topusers',
              jsfile: 'report/topusers_post.js',
              apiref: '#sec-1-3',
            },
          ],
        },
      ],
    },
    {
      group: 'OAuth2',
      sections: [
        {
          section: 'token',
          examples: [
            {
              title: 'Get a Token',
              jsfile: 'oauth2/get_token.js',
              apiref: '#sec-6',
            },
            {
              title: 'Refresh a Token',
              jsfile: 'oauth2/refresh_token.js',
              apiref: '#sec-6',
            },
            {
              title: 'Verify a Token',
              jsfile: 'oauth2/verify_token.js',
              apiref: '#sec-6',
            },
            {
              title: 'Get Token From Proxy',
              jsfile: 'oauth2/get_token_from_proxy.js',
              apiref: '#sec-6',
            },
          ],
        },
        {
          section: 'user/profile',
          examples: [
            {
              title: 'Get the User Profile',
              jsfile: 'oauth2/get_user_profile.js',
              apiref: '#sec-6',
            },
          ],
        },
      ],
    },
    {
      group: 'Translations',
      sections: [
        {
          section: 'get',
          examples: [
            {
              title: 'GET api/translations/selector',
              jsfile: 'translations/retrieve.js',
              apiref: '#sec-2-2',
            },
            {
              title: 'POST api/translations/get',
              jsfile: 'translations/get.js',
              apiref: '#sec-2-2',
            },
          ],
        },
        {
          section: 'search',
          examples: [
            {
              title: 'GET api/translations',
              jsfile: 'translations/list.js',
              apiref: '#sec-2-7',
            },
            {
              title: 'POST api/translations/search',
              jsfile: 'translations/search.js',
              apiref: '#sec-2-7',
            },
          ],
        },
        {
          section: 'add',
          examples: [
            {
              title: 'POST api/translations/add',
              jsfile: 'translations/add.js',
              apiref: '#sec-2-3',
            },
          ],
        },
        {
          section: 'like',
          examples: [
            {
              title: 'POST api/translations/like',
              jsfile: 'translations/like.js',
              apiref: '#sec-2-4',
            },
          ],
        },
        {
          section: 'submit',
          examples: [
            {
              title: 'POST api/translations/submit',
              jsfile: 'translations/submit.js',
              apiref: '#sec-2-8',
            },
          ],
        },
        {
          section: 'import',
          examples: [
            {
              title: 'POST api/translations/import',
              jsfile: 'translations/import.js',
              apiref: '#sec-2-9',
            },
          ],
        },
      ],
    },
  ],
};
