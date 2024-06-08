import { DailyFormValues } from "@/schemas/horoscope";
import axios from "axios";

const getDailyHoroscopes = async () => {
  const response = await axios.get("/api/admin/horoscope/daily");
  return response.data;
};

const getDailyHoroscope = async ({ id }: { id: string }) => {
  const response = await axios.get(`/api/admin/horoscope/daily/${id}`);
  return response.data;
};

const createDailyHoroscope = async ({ data }: { data: DailyFormValues }) => {
  const response = await axios.post("/api/admin/horoscope/daily", data);
  return response.data;
};

const updateDailyHoroscope = async ({
  id,
  data,
}: {
  id: string;
  data: DailyFormValues;
}) => {
  const response = await axios.patch(`/api/admin/horoscope/daily/${id}`, data);
  return response.data;
};

const deleteDailyHoroscope = async ({ id }: { id: string }) => {
  const response = await axios.delete(`/api/admin/horoscope/daily/${id}`);
  return response.data;
};


const DailyService = {
  getDailyHoroscopes,
  getDailyHoroscope,
  createDailyHoroscope,
  updateDailyHoroscope,
  deleteDailyHoroscope,

};

export default DailyService;