import prismadb from "@/lib/db/prisma-db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const horoscopes = await prismadb.horoscope.findMany();
    
    return NextResponse.json(horoscopes, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}
