
import { CarCatalog, CarId } from "@/types/car";
import axios from "axios";


export type CatalogListResponse = {
    cars: CarCatalog[];
    totalCars: number;
    page: number;
    totalPage: number;
};

axios.defaults.baseURL = "https://car-rental-api.goit.global/";

export const getCatalog = async () => {
    const res = await axios.get<CatalogListResponse>("/cars");
    return res.data;
};

export const getCarById = async (id: string) => {
    const res = await axios.get<CarId>(`/cars/${id}`);
    return res.data
}
