import { create } from 'zustand';

interface SearchParams {
    location: string;
}

interface StoreState {
    searchParams: SearchParams;
    setSearchParams: (params: SearchParams) => void;
}

export const useStore = create<StoreState>((set) => ({
    searchParams: {
        location: ''
    },
    setSearchParams: (params) => set({ searchParams: params }),
}));