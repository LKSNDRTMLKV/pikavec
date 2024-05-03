import { auth } from "@/auth/auth";
import DailyForm from "@/components/admin/horoscope/daily-form";
import prismadb from "@/lib/db/prisma-db";
import HoroscopeService from "@/services/horoscope/horoscope-service";
import axios from "axios";

const DailyPage = async () => {
  const session = await auth()

  // const horoscopes = await HoroscopeService.getHoroscopes();
  // const horoscopes = await axios.get("/api/horoscope");


  const horoscopes = await prismadb.horoscope.findMany();

  return (
    <>
      <DailyForm
        userId={session?.user.id!}
        horoscopes={horoscopes}
      />
    </>
  );
}
export default DailyPage;