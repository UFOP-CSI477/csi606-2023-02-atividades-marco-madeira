import express from "express";
import type { Request, Response } from "express";
import * as ReservationService from "./reservation.service";
import { Reservation } from "@prisma/client";

export const ReservationRouter = express.Router();

ReservationRouter.post(
  "/createReservation",
  async (req: Request, res: Response) => {
    const new_reservation: Reservation = req.body;

    try {
      const result = await ReservationService.createReservation(new_reservation);
      return res.status(200).json(result);
    } catch (error){
      console.log(error)
      return res.status(500).json("Reserva falhou ao ser criada!");
    }
  }
);

ReservationRouter.get(
  "/getAllReservationByUserId/:id",
  async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
      const result = await ReservationService.getAllReservationByUserId(id);
      return res.status(200).json(result);
    } catch {
      return res.status(500).json("Não foi possível recuperar as reservas!");
    }
  }
);
