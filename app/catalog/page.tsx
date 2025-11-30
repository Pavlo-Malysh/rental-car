import css from "./CatalogPage.module.css"
import { getCatalog } from "@/lib/api/clientApi";
import { getBrandsServer } from "@/lib/api/serverApi";
import CatalogPageClient from "./CatalogPage.client";

const CatalogPage = async () => {
    const brands = await getBrandsServer();
    const initialData = await getCatalog(1, 12, {});

    return (
        <div className={`container ${css.catalogPage}`}>
            <CatalogPageClient brands={brands} initialData={initialData} />
        </div>
    )
};

export default CatalogPage;
