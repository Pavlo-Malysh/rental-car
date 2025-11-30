import css from "./CatalogPage.module.css"
import { getBrandsServer, getCatalogServer } from "@/lib/api/serverApi";
import CatalogPageClient from "./CatalogPage.client";

const CatalogPage = async () => {
    const brands = await getBrandsServer();
    const initialData = await getCatalogServer(1, 12, {});

    return (
        <div className={`container ${css.catalogPage}`}>
            <CatalogPageClient brands={brands} initialData={initialData} />
        </div>
    )
};

export default CatalogPage;
