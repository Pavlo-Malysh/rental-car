"use client"
import CarItem from "../CarItem/CarItem";
import css from "./CarsList.module.css"
import { useInfiniteQuery } from "@tanstack/react-query";
import { getCatalog } from "@/lib/api";
import { SyncLoader } from "react-spinners";

const CarsList = () => {
    const limit = 12;

    const {
        data, isLoading, error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ["cars"],
        queryFn: ({ pageParam = 1 }) => getCatalog(pageParam, limit),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            const currentPage = Number(lastPage.page);
            return currentPage < lastPage.totalPages ? currentPage + 1 : undefined;
        },
    })

    if (isLoading)
        return (
            <SyncLoader
                color="#000000"
                loading={true}
                cssOverride={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "20px auto",
                    opacity: "0.3",
                }}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        );

    if (error || !data) return <p>Something went wrong.</p>;


    const allCars = data?.pages.flatMap(page => page.cars) ?? [];

    return (
        <>
            <ul className={css.carsList}>
                {allCars.map((car, index) => (
                    <CarItem key={car.id} item={car} isPriority={index === 0} />
                ))}
            </ul>

            {hasNextPage && (
                <button
                    type="button"
                    className={css.btn}
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                >
                    {isFetchingNextPage ? 'Loading...' : 'Load more'}
                </button>
            )}
        </>

    );
}

export default CarsList;
