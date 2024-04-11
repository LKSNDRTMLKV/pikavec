import prismadb from "@/lib/db/prisma-db";

export async function getVerificationTokenByToken (token: string) {
    try {
        const verificationToken = await prismadb.verificationToken.findUnique({
            where: {
                token
            }
        })
        return verificationToken;
    } catch (err) {
        return null;
    }
}

export async function getVerificationTokenByEmail(email: string) {
    try {
        const verificationToken = await prismadb.verificationToken.findFirst({
            where: {
                email
            }
        })
        return verificationToken;
    } catch (err) {
        return null;
    }
}