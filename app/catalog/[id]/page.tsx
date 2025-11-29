import { getCarById } from "@/lib/api";

type Props = {
    params: Promise<{ id: string }>;
};

const CarDetails = async ({ params }: Props) => {
    const { id } = await params;
    console.log('note id:', id);

    const car = await getCarById(id);
    console.log("THIS Page Id", car);


    return <div>CarDetails</div>;
};

export default CarDetails;
