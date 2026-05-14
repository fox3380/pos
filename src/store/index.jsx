import { create } from 'zustand';

export const domain = 'https://pos.skyready.online';

export const useCart = create((set) => ({
  cart: [],
  setCart: (newValue) => set(() => ({ cart: newValue })),
}));

