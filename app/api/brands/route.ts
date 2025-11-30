import { NextResponse } from 'next/server';
import { api } from '../api';


export async function GET() {
    try {
        const response = await api.get('/brands');

        return NextResponse.json(response.data);
    } catch (error) {
        console.error('Error in /api/brands:', error);

        return NextResponse.json(
            { error: 'Failed to fetch brands' },
            { status: 500 }
        );
    }
}
