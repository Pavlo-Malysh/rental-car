import { getCatalog } from "@/lib/api";
import css from "./CatalogPage.module.css"
import CarsList from "@/components/CarsList.tsx/CarsList";

const CatalogPage = async () => {
    const catalog = await getCatalog();
    console.log(catalog);

    return <div className={`container ${css.catalogPage}`}>
        <CarsList cars={catalog.cars} />
    </div>;
};

export default CatalogPage;
