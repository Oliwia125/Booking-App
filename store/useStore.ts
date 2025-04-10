import { create } from 'zustand';

interface StoreState {
    location: string;
    setLocation: (location: string) => void;
}

export const useStore = create<StoreState>((set) => ({
    location: '',
    setLocation: (location) => set({ location }),
}));