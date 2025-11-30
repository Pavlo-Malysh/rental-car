import { getCarByIdServer } from "@/lib/api/serverApi";
import CarDetailsClient from "./CarDetails.client";
import css from "./Page.module.css"

export const dynamic = 'force-dynamic';

type Props = {
    params: Promise<{ id: string }>;
};

const CarDetails = async ({ params }: Props) => {
    const { id } = await params;

    const car = await getCarByIdServer(id);


    return <section className={css.sectionDetails}>
        <CarDetailsClient car={car} />
    </section>;
};

export default CarDetails;
