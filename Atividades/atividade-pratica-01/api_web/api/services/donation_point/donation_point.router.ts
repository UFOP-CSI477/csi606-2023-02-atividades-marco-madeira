import express from "express";
import type { Request, Response } from "express";
import * as DonationPointService from "./donation_point.service";
import { DonationPoint } from "@prisma/client";

export const donationPointRouter = express.Router();

donationPointRouter.post("/create", async (req: Request, res: Response) => {
  const donationPoint: DonationPoint = req.body;

  try {
    const newDonationPoint = await DonationPointService.createDonationPoint(donationPoint);
    return res.status(200).json(newDonationPoint);
  } catch {
    return res.status(500).json("Erro ao criar ponto de doação.");
  }
});

donationPointRouter.get("/all", async (req: Request, res: Response) => {
  try {
    const result = await DonationPointService.getAll();
    return res.status(200).json(result);
  } catch {
    return res.status(500).json("Erro ao recuperar ponto de doação.");
  }
});

donationPointRouter.delete("/remove/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    await DonationPointService.deleteDonationPoint(id);
    return res.status(200).json("Ponto de doação excluida");
  } catch {
    return res.status(500).json("Erro ao excluir ponto de doação.");
  }
});

donationPointRouter.patch("/update/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const donationPoint: DonationPoint = req.body;

  try {
    await DonationPointService.updateDonationPoint(id, donationPoint);
    return res.status(200).json("Ponto de doação atualizada.");
  } catch {
    return res.status(500).json("Não foi possível atualiazar ponto de doação.");
  }
});
