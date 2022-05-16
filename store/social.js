export const state = () => ({
  locale: null,
  items: []
});

export const mutations = {
  setLocale(state, locale) {
    state.locale = locale;
  },
  setSocial(state, items) {
    state.items = items;
  }
};
