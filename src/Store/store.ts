import { useLayoutEffect } from 'react';

import { mountStoreDevtool } from 'simple-zustand-devtools';
import { createStore, StoreApi } from 'zustand';
import createContext from 'zustand/context';

import { AppActions, AppState } from './interface';

let store: StoreApi<AppState & AppActions>;
let serverStore: StoreApi<AppState & AppActions>;

const zustandContext = createContext<StoreApi<AppState & AppActions>>();

export const Provider = zustandContext.Provider;
export const useAppStore = zustandContext.useStore;

const getDefaultServerSideState = () => ({
  categoryData: []
});
export const initializeStore = (preloadedState = {}) => {
  serverStore = createStore<AppState & AppActions>((set: any) => ({
    ...getDefaultServerSideState(),
    ...preloadedState,
    setCategoryData: (data) => set(() => ({ categoryData: data }))
  }));

  return serverStore;
};

export const getAppStore = () => {
  return serverStore;
};

export const useCreateStore = (serverInitialState = {}) => {
  // Server side code: For SSR & SSG, always use a new store.
  if (typeof window === 'undefined') {
    return () => initializeStore(serverInitialState);
  }
  // End of server side code

  // Client side code:
  // Next.js always re-uses same store regardless of whether page is a SSR or SSG or CSR type.
  const isReusingStore = Boolean(store);
  store = store ?? initializeStore(serverInitialState);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    if (serverInitialState && isReusingStore) {
      store.setState(
        {
          // re-use functions from existing store
          // but reset all other properties.
          ...serverInitialState,
          ...store.getState()
        },
        true // replace states, rather than shallow merging
      );
    }
  });
  return () => store;
};

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', initializeStore(store!));
}
