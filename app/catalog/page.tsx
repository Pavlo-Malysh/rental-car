import css from "./CatalogPage.module.css"
import { getBrands, getCatalog } from "@/lib/api";
import CatalogPageClient from "./CatalogPage.client";

const CatalogPage = async () => {
    const brands = await getBrands();
    const initialData = await getCatalog(1, 12, {});

    return (
        <div className={`container ${css.catalogPage}`}>
            <CatalogPageClient brands={brands} initialData={initialData} />
        </div>
    )
};

export default CatalogPage;
