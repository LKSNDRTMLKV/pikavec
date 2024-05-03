import axios from "axios";

const getHoroscopes = async () => {
    try {
        const response = await axios.get("/api/horoscope");
        return response.data;

    } catch (error) {
        console.log(error)
    }
}

const HoroscopeService = {
    getHoroscopes,
}

export default HoroscopeService;