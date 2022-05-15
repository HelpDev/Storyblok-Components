export const state = () => ({
  items: [],
  logo: null
});

export const mutations = {
  setMenu(state, items) {
    state.items = items;
  },
  setLogo(state, logo) {
    state.logo = logo;
  }
};
