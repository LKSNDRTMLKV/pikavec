import prismadb from "@/lib/db/prisma-db";
import { admin } from "@/services/auth/admin";
import { NextResponse } from "next/server";

export async function GET({ id }: { id: string }) {
  try {
    const horoscope = await prismadb.horoscope.findUnique({
      where: {
        id: id,
      },
    });
    return NextResponse.json(horoscope, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function PATCH(req: Request, { id }: { id: string }) {
  try {
    const isAdmin = await admin();
    if (!isAdmin) return new NextResponse("Unauthorized", { status: 401 });

    const body = await req.json();
    const horoscope = await prismadb.horoscope.update({
      where: {
        id: id,
      },
      data: body,
    });
    return NextResponse.json(horoscope, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}