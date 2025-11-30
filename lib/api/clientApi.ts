import { CarCatalog, SearchForm } from "@/types/car";
import { nextServer } from "./api";

export type CatalogListResponse = {
    cars: CarCatalog[];
    totalCars: number;
    page: number;
    totalPages: number;
};

export const getCatalog = async (page: number, limit: number, searchQuery: SearchForm) => {
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
};
