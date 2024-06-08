import { update } from "@/auth/auth";
import { Horoscope } from "@prisma/client";
import axios from "axios";

const getHoroscopes = async () => {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/horoscope`);
        return response.data;
}

const getHoroscope = async ({ id }: { id: string }) => {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/horoscope/${id}`);
        return response.data;
}

const updateHoroscope = async ({ id, data }: { id: string; data: Horoscope }) => {
        const response = await axios.patch(`${process.env.NEXT_PUBLIC_APP_URL}/api/horoscope/${id}`, data);
        return response.data;
}

const HoroscopeService = {
    getHoroscopes,
    updateHoroscope,
}

export default HoroscopeService;