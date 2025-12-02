import { NextResponse } from 'next/server';
import { api } from '../../api';
import { AxiosError } from 'axios';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const response = await api.get(`/cars/${id}`);
        return NextResponse.json(response.data);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch car id' },
            { status: (error as AxiosError).status }
        );
    }
}
