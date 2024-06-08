import { auth } from "@/auth/auth";
import DailyForm from "@/components/admin/horoscope/daily-form";
import { Separator } from "@/components/ui/separator";
import HoroscopeService from "@/services/horoscope/horoscope-service";
import { DailyClient } from "./client";
import prismadb from "@/lib/db/prisma-db";
import { DailyColumnProps } from "@/interface/horoscope-props";
import { DailyHoroscope } from "@prisma/client";
import { PageTabs } from "./page-tabs";
import { DailyTabs } from "./tabs";
import { DailyHoroscopeSkeleton } from "@/components/custom/skeletons";

const DailyPage = async () => {
  const session = await auth()

  const horoscopes = await HoroscopeService.getHoroscopes();

  const dailyHoroscopes = await prismadb.dailyHoroscope.findMany({
    include: {
      author: true,
      horoscope: true
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 50
  });

  const formattedProducts: DailyColumnProps[] = dailyHoroscopes.map((dailyHoroscope) => ({
    id: dailyHoroscope.id,
    author: dailyHoroscope.author.name!,
    horoscope: dailyHoroscope.horoscope.sign,
    story: dailyHoroscope.story,
    date: dailyHoroscope.date,
    createdAt: dailyHoroscope.createdAt,
    isArchived: dailyHoroscope.isArchived,
    isFeatured: dailyHoroscope.isFeatured
  })
  );

  return (
    <div className="flex flex-col w-full p-4">
      {/* <PageTabs tabs={[
        {
          label: 'Records',
          value: 'records',
          content:
            <DailyClient
              data={formattedProducts}
              horoscopes={horoscopes}
              userId={session?.user.id!}
            />
        },
        {
          label: 'Form',
          value: 'form',
          content: <DailyForm
            userId={session?.user.id!}
            horoscopes={horoscopes}
          />
        },
        {
          label: 'API',
          value: 'api',
          content: "Horoscope API"
        },
      ]} /> */}
      <DailyClient
        data={formattedProducts}
        horoscopes={horoscopes}
        userId={session?.user.id!}
      />
      {/* <Separator />
      <DailyClient data={formattedProducts} />
      <Separator />
      <DailyForm
        userId={session?.user.id!}
        horoscopes={horoscopes}
      /> */}
    </div>
  );
}
export default DailyPage;