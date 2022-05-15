const axios = require('axios');

// From: https://www.storyblok.com/faq/how-to-generate-routes-for-nuxt-js-using-storyblok
module.exports = function generateStoryblokUrls(token) {
  return {
    routes: function(callback) {
      const per_page = 10;
      const version = 'published';
      let cache_version = 0;

      let page = 1;

      // other routes that are not in Storyblok with their slug.
      let routes = ['/']; // adds home directly but with / instead of /home

      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then(space_res => {
          // timestamp of latest publish
          cache_version = space_res.data.space.version;

          // Call first Page of the Stories
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/stories?token=${token}&version=${version}&per_page=${per_page}&page=${page}&cv=${cache_version}`
            )
            .then(res => {
              res.data.stories.forEach(story => {
                if (story.full_slug != 'home') {
                  routes.push('/' + story.full_slug);
                }
              });

              // Check if there are more pages available otherwise execute callback with current routes.
              const total = res.headers.total;
              const maxPage = Math.ceil(total / per_page);
              if (maxPage <= 1) {
                callback(null, routes);
                return;
              }

              // Since we know the total we now can pregenerate all requests we need to get all stories
              let contentRequests = [];
              for (let page = 2; page <= maxPage; page++) {
                contentRequests.push(
                  axios.get(
                    `https://api.storyblok.com/v1/cdn/stories?token=${token}&version=${version}&per_page=${per_page}&page=${page}`
                  )
                );
              }

              // Axios allows us to exectue all requests using axios.spread we will than generate our routes and execute the callback
              axios
                .all(contentRequests)
                .then(
                  axios.spread((...responses) => {
                    responses.forEach(response => {
                      response.data.stories.forEach(story => {
                        if (story.full_slug != 'home') {
                          routes.push('/' + story.full_slug);
                        }
                      });
                    });

                    callback(null, routes);
                  })
                )
                .catch(callback);
            });
        });
    }
  };
};
