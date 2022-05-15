import menuStore from '../store/menu';

export function registerStore(name, store, storeModule) {
  const storeModule = {
    namespaced: true,
    ...storeModule
  };

  store.registerModule(name, storeModule, {
    preserveState: !!store.state[name]
  });
}

export default async (context) => {
  const { store } = context;

  registerStore('menu', store, menuStore);
};
