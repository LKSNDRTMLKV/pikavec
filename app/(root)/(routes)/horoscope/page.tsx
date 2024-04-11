

import prismadb from "@/lib/db/prisma-db";
import HoroscopeCards from "./horoscrope-cards";


const HoroscopePage = async () => {

  const horoscopes = await prismadb.horoscope.findMany({});

  if (!horoscopes) {
    return <div>loading...</div>
  }

  console.log(horoscopes)

  return (
    <div className='flex max-w-screen-xl'>
        <HoroscopeCards horoscopes={horoscopes} />
    </div>

  )
}

export default HoroscopePage