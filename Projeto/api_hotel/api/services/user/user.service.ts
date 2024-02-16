import { User } from "@prisma/client";
import { db } from "../../database/server";

export async function createUser(new_user: User): Promise<void> {
    await db.user.create({
        data: new_user
    })
}

export async function logUser(email: string, password: string): Promise<User|null> {
    return await db.user.findFirst({
        where:{
            email: email,
            password: password
        }
    })
}