import { PrismaClient } from "@prisma/client";
const prismadb = new PrismaClient();

async function main() {
  await prismadb.horoscope.createMany({
    data: [
      {
        sign: 'Aries',
        description: '',
        enum: 'ARIES',
        dateStart: new Date('2022-03-21'),
        dateEnd: new Date('2022-04-19'),
      },
      {
        sign: 'Taurus',
        description: '',
        enum: 'TAURUS',
        dateStart: new Date('2022-04-20'),
        dateEnd: new Date('2022-05-20'),
      },
      {
        sign: 'Gemini',
        description: '',
        enum: 'GEMINI',
        dateStart: new Date('2022-05-21'),
        dateEnd: new Date('2022-06-20'),
      },
      {
        sign: 'Cancer',
        description: '',
        enum: 'CANCER',
        dateStart: new Date('2022-06-21'),
        dateEnd: new Date('2022-07-22'),
      },
      {
        sign: 'Leo',
        description: '',
        enum: 'LEO',
        dateStart: new Date('2022-07-23'),
        dateEnd: new Date('2022-08-22'),
      },
      {
        sign: 'Virgo',
        description: '',
        enum: 'VIRGO',
        dateStart: new Date('2022-08-23'),
        dateEnd: new Date('2022-09-22'),
      },
      {
        sign: 'Libra',
        description: '',
        enum: 'LIBRA',
        dateStart: new Date('2022-09-23'),
        dateEnd: new Date('2022-10-22'),
      },
      {
        sign: 'Scorpio',
        description: '',
        enum: 'SCORPIO',
        dateStart: new Date('2022-10-23'),
        dateEnd: new Date('2022-11-21'),
      },
      {
        sign: 'Sagittarius',
        description: '',
        enum: 'SAGITTARIUS',
        dateStart: new Date('2022-11-22'),
        dateEnd: new Date('2022-12-21'),
      },
      {
        sign: 'Capricorn',
        description: '',
        enum: 'CAPRICORN',
        dateStart: new Date('2022-12-22'),
        dateEnd: new Date('2023-01-19'),
      },
      {
        sign: 'Aquarius',
        description: '',
        enum: 'AQUARIUS',
        dateStart: new Date('2023-01-20'),
        dateEnd: new Date('2023-02-18'),
      },
      {
        sign: 'Pisces',
        description: '',
        enum: 'PISCES',
        dateStart: new Date('2023-02-19'),
        dateEnd: new Date('2023-03-20'),
      },
    ],
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    console.log('Horoscope data seeded successfully');
    await prismadb.$disconnect();
  });