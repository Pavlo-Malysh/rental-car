import css from "./CatalogPage.module.css"
import { getBrandsServer, getCatalogServer } from "@/lib/api/serverApi";
import CatalogPageClient from "./CatalogPage.client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Car Catalog — RentalCar | Browse & Rent Cars in Ukraine",
    description:
        "Browse the full catalog of rental cars available across Ukraine. Choose by brand, price, mileage, or class. Fast online booking and reliable service.",

    openGraph: {
        title: "Car Catalog — RentalCar",
        description:
            "Explore a wide selection of rental cars in Ukraine. Filter by brand, price, or mileage and book your ideal car online.",
        url: "https://rentalcar.com/catalog",
        siteName: "RentalCar",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/background-logo.png",
                width: 1200,
                height: 630,
                alt: "RentalCar — Car Catalog",
            },
        ],
    },
};

export const dynamic = 'force-dynamic';

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
