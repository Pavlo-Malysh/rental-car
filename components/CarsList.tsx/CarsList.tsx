"use client"
import CarItem from "../CarItem/CarItem";
import css from "./CarsList.module.css"
import { useInfiniteQuery } from "@tanstack/react-query";
import { getCatalog } from "@/lib/api";
import { SyncLoader } from "react-spinners";
import { CarCatalog } from "@/types/car";

interface Props {
    cars: CarCatalog[]
}

const CarsList = ({ cars }: Props) => {


    return (
        <>
            <ul className={css.carsList}>
                {cars.map((car, index) => (
                    <CarItem key={car.id} item={car} isPriority={index === 0} />
                ))}
            </ul>

        </>

    );
}

export default CarsList;
