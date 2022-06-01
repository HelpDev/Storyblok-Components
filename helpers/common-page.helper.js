export function onStoryBridgeInputChangeUpdateContent(context) {
  // Use the input event for instant update of content
  context.$storybridge.on('input', (event) => {
    if (event.story.id === context.story.id) {
      context.story.content = event.story.content;
    }
  });
}

export function onStoryBridgeChangedToPublishedRefreshPage(context) {
  // Use the bridge to listen the events
  context.$storybridge.on(['published', 'change'], (event) => {
    context.$nuxt.$router.go({
      path: context.$nuxt.$router.currentRoute,
      force: true
    });
  });
}

export function loadPageContentFromApi(context, route) {
  const url = route;

  return context.app.$storyapi
    .get(url, {
      version: 'published'
    })
    .then((res) => {
      return res.data;
    })
    .catch((res) => {
      if (!res.response) {
        console.error(res);
        context.error({
          statusCode: 404,
          message: 'Failed to receive content form api'
        });
      } else {
        console.error(res.response.data);
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        });
      }
    });
}

export function loadMenuFromApi(context) {
  if (
    context.store.state.menu.locale === context.i18n.locale &&
    context.store.state.menu.items.length !== 0
  ) {
    return Promise.resolve(context.store.state.menu.items);
  }

  return context.app.$storyapi
    .get(`cdn/stories/menu?language=${context.i18n.locale}`, {
      version: 'published'
    })
    .then((response) => {
      const story = response.data.story;
      const logo = story && story.content.logo;
      const items = story && story.content.items;
      context.store.commit('menu/setLocale', context.i18n.locale);
      context.store.commit('menu/setMenu', items);
      context.store.commit('menu/setLogo', logo.filename);

      return items;
    })
    .catch((res) => {
      if (!res.response) {
        console.error(res);
        context.error({
          statusCode: 404,
          message: 'Failed to receive content form api'
        });
      } else {
        console.error(res.response.data);
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        });
      }
    });
}

export function loadSocialFromApi(context) {
  if (
    context.store.state.social.locale === context.i18n.locale &&
    context.store.state.social.items.length !== 0
  ) {
    return Promise.resolve(context.store.state.social.items);
  }

  return context.app.$storyapi
    .get(`cdn/stories/social?language=${context.i18n.locale}`, {
      version: 'published'
    })
    .then((response) => {
      const story = response.data.story;
      const items = story && story.content.items;

      context.store.commit('social/setSocial', items);

      return items;
    })
    .catch((res) => {
      if (!res.response) {
        console.error(res);
        context.error({
          statusCode: 404,
          message: 'Failed to receive content form api'
        });
      } else {
        console.error(res.response.data);
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        });
      }
    });
}

export function loadDonationsFromApi(context) {
  if (
    context.store.state.donations.locale === context.i18n.locale &&
    context.store.state.donations.info.cta
  ) {
    return Promise.resolve(context.store.state.donations.info);
  }

  return context.app.$storyapi
    .get(`cdn/stories/donations?language=${context.i18n.locale}`, {
      version: 'published'
    })
    .then((response) => {
      const story = response.data.story;
      const content = story && story.content;

      context.store.commit('donations/setLocale', context.i18n.locale);
      context.store.commit('donations/setInfo', content);

      return content;
    })
    .catch((res) => {
      if (!res.response) {
        console.error(res);
        context.error({
          statusCode: 404,
          message: 'Failed to receive content form api'
        });
      } else {
        console.error(res.response.data);
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        });
      }
    });
}

export function processListContent(path, response) {
  debugger;
  const items = response.stories.map((story) => {
    const meta = story.content.meta && story.content.meta[0];

    return {
      icon: 'globe',
      text: meta.description,
      title: meta.title,
      page: `/${story.full_slug}`,
      link: meta.link,
      component: 'feature-item'
    };
  });

  return {
    cv: response.cv,
    story: {
      name: `${path}_list`,
      content: {
        body: [
          {
            body: items,
            component: 'feature-container'
          }
        ],
        component: 'page'
      },
      slug: `${path}/`,
      full_slug: `${path}/`,
      path: `${path}/`
    }
  };
}

export function loadPageContent(context, path) {
  return Promise.all([
    loadMenuFromApi(context),
    loadSocialFromApi(context),
    loadDonationsFromApi(context)
  ]).then(([menu]) => {
    const item = menu.find(
      ({ link }) =>
        link.url === `${path}/` ||
        link.cached_url === `${path}/` ||
        link.url === `/${context.i18n.locale}/${path}/` ||
        link.cached_url === `/${context.i18n.locale}/${path}/`
    );

    // Is index page of directory
    if (item) {
      return loadPageContentFromApi(
        context,
        `cdn/stories/?starts_with=${path}&language=${context.i18n.locale}`
      ).then((response) => processListContent(path, response));
    }

    return loadPageContentFromApi(
      context,
      `cdn/stories/${path}?language=${context.i18n.locale}`
    );
  });
}
