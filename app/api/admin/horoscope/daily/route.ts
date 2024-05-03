import { horoscopeMessages } from "@/constants/admin/horoscope";
import { DailyFormProps } from "@/interface/horoscope-props";
import prismadb from "@/lib/db/prisma-db";
import { admin } from "@/services/auth/admin";
import { DailyHoroscope } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const isAdmin = await admin();
    if (!isAdmin) return new NextResponse("Unauthorized", { status: 401 });

    const dailyHoroscopes = await prismadb.dailyHoroscope.findMany();

    return NextResponse.json({
      payload:dailyHoroscopes,
      message: horoscopeMessages.dailyFound,
    }, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const isAdmin = await admin();
    if (!isAdmin) return new NextResponse("Unauthorized", { status: 401 });

    const body: DailyHoroscope = await req.json();

    const { authorId, horoscopeId, story, date } = body;

    if (!authorId || !horoscopeId || !story || !date) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const dailyHoroscope = await prismadb.dailyHoroscope.create({
      data: body,
    });

    return NextResponse.json(
      {
        payload: dailyHoroscope,
        message: horoscopeMessages.dailyCreated,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}
