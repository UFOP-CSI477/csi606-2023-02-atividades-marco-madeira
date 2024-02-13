import { User } from "@prisma/client";
import { db } from "../../database/server";

export async function createUser(new_user: User): Promise<void> {
    await db.user.create({
        data: new_user
    })
}