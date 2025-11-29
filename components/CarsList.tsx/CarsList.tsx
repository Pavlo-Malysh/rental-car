"use client"
import { CarCatalog } from "@/types/car";
import CarItem from "../CarItem/CarItem";
import css from "./CarsList.module.css"
import { useState } from "react";


type Props = {
    cars: CarCatalog[];
};

const CarsList = ({ cars }: Props) => {
    const [page, setPage] = useState(1);

    return (
        <>
            <ul className={css.carsList}>
                {cars.map((car) => (
                    <CarItem key={car.id} item={car} />
                ))}
            </ul>
            <button type="button" className={css.btn}>Load more</button>
        </>

    );
}

export default CarsList;
