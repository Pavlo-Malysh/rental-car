import { Car } from "@/types/car";
import { create } from "zustand";

interface CarsListStore {
    cars: Car[];
}

export const useCarsListStore = create<CarsListStore>()((set) => {
    return {
        cars: [],

    }
})