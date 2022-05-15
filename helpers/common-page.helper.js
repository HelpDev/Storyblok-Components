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

export function loadPageContentFromApi(context, route, starts_with) {
  const url = route;

  return context.app.$storyapi
    .get(url, {
      version: 'published',
      starts_with: starts_with
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
    .get(`cdn/stories/`, {
      starts_with: context.localePath('menu'),
      version: 'published'
    })
    .then((response) => {
      const stories = response.data.stories;
      const logo = stories && stories[0].content.logo;
      const items = stories && stories[0].content.items;

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

export function loadDonationsFromApi(context) {
  if (
    context.store.state.donations.locale === context.i18n.locale &&
    context.store.state.donations.info.cta
  ) {
    return Promise.resolve(context.store.state.donations.info);
  }

  return context.app.$storyapi
    .get(`cdn/stories/`, {
      starts_with: context.localePath('donations'),
      version: 'published'
    })
    .then((response) => {
      const stories = response.data.stories;
      const content = stories && stories[0].content;

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

export function loadPageContent(context, path) {
  return Promise.all([
    loadMenuFromApi(context),
    loadDonationsFromApi(context)
  ]).then(([menu]) => {
    const item = menu.find(
      ({ link }) => link.url === `${path}/` || link.cached_url === `${path}/`
    );
    const url = item ? `${path}/` : path;

    return loadPageContentFromApi(
      context,
      `cdn/stories/${context.localePath(url)}`
    );
  });
}
