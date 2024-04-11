
import prismadb from "@/lib/db/prisma-db";
import HoroscopeInfoPage from "./horoscope-info";
import NotFoundPage from "@/app/not-found";

const HoroscopeSignPage = async ({ params }: { params: { id: string } }) => {
    console.log(params.id)

    const horoscope = await prismadb.horoscope.findUnique({
        where: {
            id: params.id
        }
    })

    if (!horoscope) {
        return (
            <NotFoundPage />
        )
    }

    return (
        <>
            <HoroscopeInfoPage {...horoscope} />
        </>
    )
}

export default HoroscopeSignPage;