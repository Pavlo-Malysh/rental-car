import { getCarById } from "@/lib/api";
import CarDetailsClient from "./CarDetails.client";
import css from "./Page.module.css"

type Props = {
    params: Promise<{ id: string }>;
};

const CarDetails = async ({ params }: Props) => {
    const { id } = await params;
    console.log('note id:', id);

    const car = await getCarById(id);
    console.log("THIS Page Id", car);


    return <section className={css.sectionDetails}>
        <CarDetailsClient car={car} />
    </section>;
};

export default CarDetails;
