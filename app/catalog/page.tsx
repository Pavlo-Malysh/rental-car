import css from "./CatalogPage.module.css"
import CarsList from "@/components/CarsList.tsx/CarsList";
import { getCatalog, CatalogListResponse } from "@/lib/api";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

const CatalogPage = async () => {
    const queryClient = new QueryClient();
    const limit = 12;

    await queryClient.prefetchInfiniteQuery({
        queryKey: ["cars"],
        queryFn: ({ pageParam = 1 }) => getCatalog(pageParam, limit),
        initialPageParam: 1,
        getNextPageParam: (lastPage: CatalogListResponse) => {
            const currentPage = Number(lastPage.page);
            return currentPage < lastPage.totalPages ? currentPage + 1 : undefined;
        },
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <div className={`container ${css.catalogPage}`}>
                <CarsList />
            </div>
        </HydrationBoundary>
    )
};

export default CatalogPage;
