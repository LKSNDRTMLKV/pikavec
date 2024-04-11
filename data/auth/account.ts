import prismadb from "@/lib/db/prisma-db";

export async function getAccountByUserId(userId: string) {
    try {
        const account = await prismadb.account.findFirst({
          where: {
            userId
          }
        })
        return account;
    } catch (err) {
        return null;
    }
}