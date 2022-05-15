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
  // Load the JSON from the API
  return context.app.$storyapi
    .get(route, {
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
