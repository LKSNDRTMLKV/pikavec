import prismadb from "@/lib/db/prisma-db";
import { admin } from "@/services/auth/admin";
import { DailyHoroscope } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET({ id }: { id: string }) {
  try {
    const isAdmin = await admin();
    if (!isAdmin) return new NextResponse("Unauthorized", { status: 401 });

    if (!id) return new NextResponse(null, { status: 400 });
    const dailyHoroscope = await prismadb.dailyHoroscope.findUnique({
      where: {
        id: id,
      },
    });

    return NextResponse.json(dailyHoroscope, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function PATCH(req: Request, { id }: { id: string }) {
  try {
    const isAdmin = await admin();
    if (!isAdmin) return new NextResponse("Unauthorized", { status: 401 });

    if (!id) return new NextResponse(null, { status: 400 });

    const body: DailyHoroscope = await req.json();

    const { authorId, horoscopeId, story, date } = body;

    if (!authorId || !horoscopeId || !story || !date) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const dailyHoroscope = await prismadb.dailyHoroscope.update({
      where: {
        id: id,
      },
      data: body,
    });

    return NextResponse.json(dailyHoroscope,{ status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function DELETE(req: Request, { id }: { id: string }) {
  try {
    const isAdmin = await admin();
    if (!isAdmin) return new NextResponse("Unauthorized", { status: 401 });

    if (!id) return new NextResponse(null, { status: 400 });

    const dailyHoroscope = await prismadb.dailyHoroscope.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(dailyHoroscope,{ status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}
