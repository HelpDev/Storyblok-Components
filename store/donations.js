export const state = () => ({
  locale: null,
  info: {}
});

export const mutations = {
  setLocale(state, locale) {
    state.locale = locale;
  },
  setInfo(state, info) {
    state.info = info;
  }
};
