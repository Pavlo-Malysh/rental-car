
import { CarCatalog, Car, SearchForm } from "@/types/car";
import axios from "axios";


export type CatalogListResponse = {
    cars: CarCatalog[];
    totalCars: number;
    page: number;
    totalPages: number;
};

axios.defaults.baseURL = "https://car-rental-api.goit.global/";

export const getCatalog = async (page: number, limit: number, searchQuery: SearchForm) => {
    const filteredQuery = Object.fromEntries(
        Object.entries(searchQuery).filter(([, value]) => value)
    );

    const res = await axios.get<CatalogListResponse>("/cars", {
        params: {
            page,
            limit,
            ...filteredQuery
        }
    });
    console.log(res.data);

    return res.data;
};

export const getCarById = async (id: string) => {
    const res = await axios.get<Car>(`/cars/${id}`);
    return res.data
}

export const getBrands = async () => {
    const res = await axios.get<string[]>("/brands");
    return res.data
}