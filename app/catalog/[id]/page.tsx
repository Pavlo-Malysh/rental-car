
type Props = {
    params: Promise<{ id: string }>;
};

const CarDetails = async ({ params }: Props) => {
    const { id } = await params;
    console.log('note id:', id);

    return <div>CarDetails</div>;
};

export default CarDetails;
