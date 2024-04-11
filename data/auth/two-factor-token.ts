import prismadb from "@/lib/db/prisma-db";

export async function getTwoFactorTokenByToken(token: string) {
    try {
        const twoFactorToken = await prismadb.twoFactorToken.findUnique({
            where: {
                token
            }
        })
        return twoFactorToken;
    } catch (err) {
        return null;
    }
}

export async function getTwoFactorTokenByEmail (email: string) {
    try {
        const twoFactorToken = await prismadb.twoFactorToken.findFirst({
            where: {
                email
            }
        })
        return twoFactorToken;
    } catch (err) {
        return null;
    }
}