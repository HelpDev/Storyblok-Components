export const state = () => ({
  locale: null,
  items: [],
  logo: null
});

export const mutations = {
  setLocale(state, locale) {
    state.locale = locale;
  },
  setMenu(state, items) {
    state.items = items;
  },
  setLogo(state, logo) {
    state.logo = logo;
  }
};
