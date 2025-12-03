import { getCarByIdServer } from "@/lib/api/serverApi";
import CarDetailsClient from "./CarDetails.client";
import css from "./Page.module.css"
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

type Props = {
    params: Promise<{ id: string }>;
};


export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { id } = await params;
    const car = await getCarByIdServer(id);

    return {
        title: car.brand,
        description: car.description,
        openGraph: {
            title: `${car.brand} ${car.model}, ${car.year}`,
            description: car.description,
            url: `https://rental-car-eta-three.vercel.app/catalog/${id}`,
            siteName: "RentalCar",
            images: [
                {
                    url: "/background-logo.png",
                    width: 1200,
                    height: 630,
                    alt: "RentalCar — Car Catalog",
                },
            ],
            type: 'website',
        }
    }
}

const CarDetails = async ({ params }: Props) => {
    const { id } = await params;

    const car = await getCarByIdServer(id);


    return <section className={css.sectionDetails}>
        <CarDetailsClient car={car} />
    </section>;
};

export default CarDetails;
