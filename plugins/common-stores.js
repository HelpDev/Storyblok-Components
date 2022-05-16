import * as donationsStore from '../store/donations';
import * as menuStore from '../store/menu';
import * as socialStore from '../store/social';

export function registerStore(name, store, storeModule) {
  const module = {
    namespaced: true,
    ...storeModule
  };

  store.registerModule(name, module, {
    preserveState: !!store.state[name]
  });
}

export default async (context) => {
  const { store } = context;

  registerStore('menu', store, menuStore);
  registerStore('social', store, socialStore);
  registerStore('donations', store, donationsStore);
};
