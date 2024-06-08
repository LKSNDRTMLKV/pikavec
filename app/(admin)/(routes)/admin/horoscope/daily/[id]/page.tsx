import NotFoundPage from "@/app/not-found";
import { auth } from "@/auth/auth";
import DailyForm from "@/components/admin/horoscope/daily-form";
import prismadb from "@/lib/db/prisma-db";
import DailyService from "@/services/horoscope/daily-service";
import HoroscopeService from "@/services/horoscope/horoscope-service";

const DailyIdPage = async ({ params }: { params: { id: string } }) => {
    const { id } = params
    const session = await auth()

    // const horoscopes = await HoroscopeService.getHoroscopes();
    const horoscopes = await prismadb.horoscope.findMany();

    console.log(id)

    if (!id) return

    // const dailyHoroscope = await DailyService.getDailyHoroscope({ id: id })
    const dailyHoroscope = await prismadb.dailyHoroscope.findUnique({
        where: {
            id: id
        }
    })

    console.log(dailyHoroscope)


    if (!dailyHoroscope) return null

    return (
        <>
            <DailyForm
                userId={session?.user.id!}
                horoscopes={horoscopes}
                initialData={dailyHoroscope}
            />

        </>
    );
}
export default DailyIdPage;