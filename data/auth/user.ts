import prismadb from "@/lib/db/prisma-db";

export async function getUserByEmail(email: string) {
    try {
        const user = await prismadb.user.findUnique({
          where: {
            email
          }
        })
        return user;
    } catch (err) {
        return null;
    }
}

export async function getUserById(id: string) {
    try {
        const user = await prismadb.user.findUnique({
          where: {
            id
          }
        })
        return user;
    } catch (err) {
        return null;
    }
}