import css from "./CatalogPage.module.css"
import { getCatalog, CatalogListResponse, getBrands } from "@/lib/api";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import CatalogPageClient from "./CatalogPage.client";

const CatalogPage = async () => {
    const queryClient = new QueryClient();
    const limit = 12;
    const searchQuery = {};

    await queryClient.prefetchInfiniteQuery({
        queryKey: ["cars", searchQuery],
        queryFn: ({ pageParam = 1 }) => getCatalog(pageParam, limit, searchQuery),
        initialPageParam: 1,
        getNextPageParam: (lastPage: CatalogListResponse) => {
            const currentPage = Number(lastPage.page);
            return currentPage < lastPage.totalPages ? currentPage + 1 : undefined;
        },
    })

    const brands = await getBrands();

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <div className={`container ${css.catalogPage}`}>
                <CatalogPageClient brands={brands} />
            </div>
        </HydrationBoundary>
    )
};

export default CatalogPage;
