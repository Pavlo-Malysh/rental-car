"use client"
import CarsList from "@/components/CarsList.tsx/CarsList"
import SearchBox from "@/components/SearchBox/SearchBox"
import { getCatalog } from "@/lib/api"
import { useInfiniteQuery } from "@tanstack/react-query"
import { SyncLoader } from "react-spinners"
import css from "./CatalogPageClient.module.css"
import { SearchForm } from "@/types/car"
import { useState } from "react"

interface Props {
    brands: string[]
}

const rentalPrice = ['30', '40', '50', '60', '70', '80', '90', '100', '110', '120']

const CatalogPageClient = ({ brands }: Props) => {

    const [searchQuery, setSearchQuery] = useState({});
    const limit = 12;

    const {
        data, isLoading, error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ["cars", searchQuery],
        queryFn: ({ pageParam = 1 }) => getCatalog(pageParam, limit, searchQuery),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            const currentPage = Number(lastPage.page);
            return currentPage < lastPage.totalPages ? currentPage + 1 : undefined;
        },
        refetchOnMount: false,
    })

    const handleSubmit = (data: SearchForm) => {

        if (data) {
            setSearchQuery(data)
        }
        console.log(searchQuery);

    }




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
            <SearchBox brands={brands} rentalPrice={rentalPrice} onSubmit={handleSubmit} />
            <CarsList cars={allCars} />


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

    )
}

export default CatalogPageClient