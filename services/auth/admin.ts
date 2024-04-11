"use server";

import { currentRole } from "@/lib/auth/auth";
import { UserRole } from "@prisma/client";

export const admin = async () => {
    const role = await currentRole();
    if (role === UserRole.ADMIN) return true;
    return false;
};
