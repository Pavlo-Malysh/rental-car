"use client"
import CarsList from "@/components/CarsList.tsx/CarsList"
import SearchBox from "@/components/SearchBox/SearchBox"
import css from "./CatalogPageClient.module.css"
import { SearchForm, CarCatalog } from "@/types/car"
import { useEffect } from "react"
import { useCarsListStore } from "@/store/carsListStore"

interface Props {
    brands: string[];
    initialData: {
        cars: CarCatalog[];
        page: number;
        totalPages: number;
        totalCars: number;
    };
}

const rentalPrice = ['30', '40', '50', '60', '70', '80', '90', '100', '110', '120']

const CatalogPageClient = ({ brands, initialData }: Props) => {

    const { cars, isLoading, hasMore, fetchCars, fetchNextPage, setInitialData } = useCarsListStore();

    useEffect(() => {
        if (cars.length === 0) {
            setInitialData(initialData);
        }
    }, []);

    const handleSubmit = (data: SearchForm) => {
        fetchCars(data);
    }

    return (
        <>
            <SearchBox brands={brands} rentalPrice={rentalPrice} onSubmit={handleSubmit} />
            <CarsList cars={cars.length > 0 ? cars : initialData.cars} />

            {(cars.length > 0 ? hasMore : initialData.page < initialData.totalPages) && (
                <button
                    type="button"
                    className={css.btn}
                    onClick={() => fetchNextPage()}
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading...' : 'Load more'}
                </button>
            )}
        </>
    )
}

export default CatalogPageClient