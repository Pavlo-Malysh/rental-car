import { NextRequest, NextResponse } from 'next/server';
import { api } from '../api';


export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        const params: Record<string, string> = {};


        params.page = searchParams.get('page') || '1';
        params.limit = searchParams.get('limit') || '12';


        const brand = searchParams.get('brand');
        const rentalPrice = searchParams.get('rentalPrice');
        const minMileage = searchParams.get('minMileage');
        const maxMileage = searchParams.get('maxMileage');

        if (brand) params.brand = brand;
        if (rentalPrice) params.rentalPrice = rentalPrice;
        if (minMileage) params.minMileage = minMileage;
        if (maxMileage) params.maxMileage = maxMileage;

        const response = await api.get(`/cars`, {
            params
        });

        return NextResponse.json(response.data);

    } catch (error) {
        console.error('Error in /api/cars:', error);

        return NextResponse.json(
            { error: 'Failed to fetch cars' },
            { status: 500 }
        );
    }
}
