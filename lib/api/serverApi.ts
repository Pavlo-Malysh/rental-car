import { Car, SearchForm } from "@/types/car";
import { nextServer } from "./api";
import { CatalogListResponse } from "./clientApi";

export const getBrandsServer = async () => {
    const res = await nextServer.get<string[]>("/brands");
    return res.data
}

export const getCarByIdServer = async (id: string) => {
    const res = await nextServer.get<Car>(`/cars/${id}`);
    return res.data
}

export const getCatalogServer = async (page: number, limit: number, searchQuery: SearchForm) => {
    const filteredQuery = Object.fromEntries(
        Object.entries(searchQuery).filter(([, value]) => value)
    );

    const res = await nextServer.get<CatalogListResponse>("/cars", {
        params: {
            page,
            limit,
            ...filteredQuery
        }
    });

    return res.data;
}
