import { Car } from "@/types/car";
import { nextServer } from "./api";

export const getBrandsServer = async () => {
    const res = await nextServer.get<string[]>("/brands");
    return res.data
}

export const getCarByIdServer = async (id: string) => {
    const res = await nextServer.get<Car>(`/cars/${id}`);
    return res.data
}
