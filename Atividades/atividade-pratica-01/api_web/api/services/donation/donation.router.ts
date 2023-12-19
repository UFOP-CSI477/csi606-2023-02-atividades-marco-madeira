import express from "express";
import type { Request, Response } from "express";
import * as DonationService from "./donation.service";
import { Donation } from "@prisma/client";

export const donationRouter = express.Router();

donationRouter.post("/create", async (req: Request, res: Response) => {
  const donation: Donation = req.body;

  try {
    const newDonation = await DonationService.createDonation(donation);
    return res.status(200).json(newDonation);
  } catch {
    return res.status(500).json("Erro ao criar ponto de doação.");
  }
});

donationRouter.get("/all", async (req: Request, res: Response) => {
  try {
    const result = await DonationService.getAll();
    return res.status(200).json(result);
  } catch {
    return res.status(500).json("Erro ao recuperar ponto de doação.");
  }
});

donationRouter.delete("/remove/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    await DonationService.deleteDonation(id);
    return res.status(200).json("Ponto de doação excluida");
  } catch {
    return res.status(500).json("Erro ao excluir ponto de doação.");
  }
});

donationRouter.patch("/update/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const donation: Donation = req.body;

  try {
    await DonationService.updateDonation(id, donation);
    return res.status(200).json("Ponto de doação atualizada.");
  } catch {
    return res.status(500).json("Não foi possível atualiazar ponto de doação.");
  }
});
