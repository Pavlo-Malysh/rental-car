
import { CarCatalog, CarId } from "@/types/car";
import axios from "axios";


export type CatalogListResponse = {
    cars: CarCatalog[];
    totalCars: number;
    page: number;
    totalPages: number;
};

axios.defaults.baseURL = "https://car-rental-api.goit.global/";

export const getCatalog = async (page: number, limit: number) => {
    const res = await axios.get<CatalogListResponse>("/cars", {
        params: {
            page,
            limit
        }
    });
    console.log(res.data);

    return res.data;
};

export const getCarById = async (id: string) => {
    const res = await axios.get<CarId>(`/cars/${id}`);
    return res.data
}
