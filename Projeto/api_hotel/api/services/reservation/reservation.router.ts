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
      await ReservationService.createReservation(new_reservation);
      return res.status(200).json("Reserva criada com sucesso!");
    } catch {
      return res.status(500).json("Reserva falhou ao ser criada!");
    }
  }
);
