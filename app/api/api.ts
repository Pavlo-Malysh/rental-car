import axios, { AxiosError } from "axios";

export type ApiError = AxiosError<{ error: string }>;

const baseURL = process.env.EXTERNAL_API_URL || 'https://car-rental-api.goit.global'

export const api = axios.create({
    baseURL,
    withCredentials: true,
});
