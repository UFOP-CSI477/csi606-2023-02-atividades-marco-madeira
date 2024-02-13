import express from "express";
import type { Request, Response } from "express";
import * as RoomService from "./room.service";
import { Room } from "@prisma/client";

export const RoomRouter = express.Router();

RoomRouter.post("/createRoom", async (req: Request, res: Response) => {
  const new_room: Room = req.body;

  try {
    await RoomService.createRoom(new_room);
    return res.status(200).json("Quarto criado com sucesso!");
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