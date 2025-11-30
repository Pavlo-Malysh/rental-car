import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CarCatalog, SearchForm } from '@/types/car';
import { getCatalog } from '@/lib/api/clientApi';

interface CarsListState {
    cars: CarCatalog[];
    page: number;
    totalPages: number;
    totalCars: number;
    hasMore: boolean;
    isLoading: boolean;
    searchQuery: SearchForm;
    favorites: CarCatalog[];

    fetchCars: (searchQuery?: SearchForm) => Promise<void>;
    fetchNextPage: () => Promise<void>;
    setSearchQuery: (query: SearchForm) => void;
    setInitialData: (data: { cars: CarCatalog[]; page: number; totalPages: number; totalCars: number }) => void;
    toggleFavorite: (car: CarCatalog) => void;
    isFavorite: (id: string) => boolean;
    reset: () => void;
}

const LIMIT = 12;

export const useCarsListStore = create<CarsListState>()(
    persist(
        (set, get) => ({
            cars: [],
            page: 1,
            totalPages: 1,
            totalCars: 0,
            hasMore: false,
            isLoading: false,
            searchQuery: {},
            favorites: [],

            fetchCars: async (searchQuery = {}) => {
                set({ isLoading: true, searchQuery, page: 1, cars: [] });

                try {
                    const data = await getCatalog(1, LIMIT, searchQuery);
                    set({
                        cars: data.cars,
                        page: 1,
                        totalPages: data.totalPages,
                        totalCars: data.totalCars,
                        hasMore: 1 < data.totalPages,
                        isLoading: false,
                    });
                } catch (error) {
                    console.error('Error fetching cars:', error);
                    set({ isLoading: false });
                }
            },

            fetchNextPage: async () => {
                const { page, totalPages, isLoading, cars, searchQuery } = get();

                if (isLoading || page >= totalPages) return;

                set({ isLoading: true });

                try {
                    const nextPage = page + 1;
                    const data = await getCatalog(nextPage, LIMIT, searchQuery);

                    set({
                        cars: [...cars, ...data.cars],
                        page: nextPage,
                        hasMore: nextPage < data.totalPages,
                        isLoading: false,
                    });
                } catch (error) {
                    console.error('Error fetching next page:', error);
                    set({ isLoading: false });
                }
            },

            setSearchQuery: (query: SearchForm) => {
                set({ searchQuery: query });
            },

            setInitialData: (data) => {
                set({
                    cars: data.cars,
                    page: data.page,
                    totalPages: data.totalPages,
                    totalCars: data.totalCars,
                    hasMore: data.page < data.totalPages,
                    isLoading: false,
                });
            },

            toggleFavorite: (car) => {
                const { favorites } = get();
                const exists = favorites.some(fav => fav.id === car.id);

                if (exists) {
                    set({ favorites: favorites.filter(fav => fav.id !== car.id) });
                } else {
                    set({ favorites: [...favorites, car] });
                }
            },

            isFavorite: (id) => {
                return get().favorites.some(car => car.id === id);
            },

            reset: () => {
                set({
                    cars: [],
                    page: 1,
                    totalPages: 1,
                    totalCars: 0,
                    hasMore: false,
                    isLoading: false,
                    searchQuery: {},
                });
            },
        }),
        {
            name: 'cars-storage',
            partialize: (state) => ({ favorites: state.favorites }),
        }
    )
);
