import express from "express";
import type { Request, Response } from "express";
import * as RoomService from "./room.service";
import { Room } from "@prisma/client";

export const RoomRouter = express.Router();

RoomRouter.get("/getRoomById/:id", async(req: Request, res: Response)=>{
     const id =  parseInt(req.params.id);
     
     try{
      const result = await RoomService.getRoomById(id);
      return res.status(200).json(result)
     }catch{
      return res.status(500).json("Erro ao recuperar quarto por id!")
     }
})

RoomRouter.post("/createRoom", async (req: Request, res: Response) => {
  const new_room: Room = req.body;

  try {
    const result = await RoomService.createRoom(new_room);
    return res.status(200).json(result);
  } catch {
    return res.status(500).json("Não foi possível criar o quarto!");
  }
});

RoomRouter.patch("/updateRoom/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updated_room: Room = req.body;

  try {
    await RoomService.updateRoom(id, updated_room);
    return res.status(200).json("Quarto atualizado com sucesso!");
  } catch {
    return res.status(500).json("Não foi possível atualizar o quarto!");
  }
});

RoomRouter.delete("/deleteRoom/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    await RoomService.deleteRoom(id);
    return res.status(200).json("Quarto deletado com sucesso!");
  } catch {
    return res.status(500).json("Não foi possível deletar o quarto!");
  }
});
