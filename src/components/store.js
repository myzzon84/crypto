import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

const appStore = create((set) => ({
    burger: false,
    showBurger: (bool) => set({ burger: bool }),
}));

export default appStore;

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', appStore);
}