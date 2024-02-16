import { Hotel } from "@prisma/client";
import { db } from "../../database/server";

export async function createHotel(new_hotel: Hotel): Promise<void> {
     await db.hotel.create({
        data: new_hotel
     })    
}

export async function getHotelByCategory(category: string): Promise<Hotel[]> {
    return await db.hotel.findMany({
        where:{
            category:category 
        }
    })    
}

export async function getHotelById(hotel_id: number): Promise<Hotel|null> {
    return await db.hotel.findUnique({
        where:{
            id: hotel_id
        }
    })    
}