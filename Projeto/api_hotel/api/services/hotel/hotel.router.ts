import express from "express";
import type { Request, Response } from "express";
import * as HotelService from "./hotel.service";

export const HotelRouter = express.Router();

HotelRouter.post("/createHotel", async(req: Request, res: Response)=>{
  
  const new_hotel = req.body
  
  try{
      const result = await HotelService.createHotel(new_hotel);
      return res.status(200).json("Hotel criado com sucesso!");
     }catch{
      return res.status(500).json("Erro ao criar hotel!");
     }  
})

HotelRouter.get("/getHotelById/:id", async (req: Request, res: Response) => {
  try {
    const result = await HotelService.getHotelById(parseInt(req.params.id));
    return res.status(200).json(result);
  } catch {
    return res.status(500).json("Erro ao recuperar hotel!");
  }
});

HotelRouter.get("/getHotelByCategory/:category", async (req: Request, res: Response) => {
    try {
      const result = await HotelService.getHotelByCategory(req.params.category);
      return res.status(200).json(result);
    } catch {
      return res.status(500).json("Erro ao recuperar hotel!");
    }
  });
