import prismadb from "@/lib/db/prisma-db";

export async function getPasswordResetTokenByToken(token: string) {
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

export async function getPasswordResetTokenByEmail (email: string) {
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