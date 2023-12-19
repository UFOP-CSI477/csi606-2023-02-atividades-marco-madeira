import express from "express";
import type { Request, Response } from "express";
import * as BloodTypeService from "./blood_type.service";
import { BloodType } from "@prisma/client";

export const bloodTypeRouter = express.Router();

bloodTypeRouter.post("/create", async (req: Request, res: Response) => {
  const bloodType: BloodType = req.body;

  try {
    const newBloodType = await BloodTypeService.createBloodType(bloodType);
    return res.status(200).json(newBloodType);
  } catch {
    return res.status(500).json("Erro ao criar tipo de sangue.");
  }
});

bloodTypeRouter.get("/all", async (req: Request, res: Response) => {
  try {
    const result = await BloodTypeService.getAll();
    return res.status(200).json(result);
  } catch {
    return res.status(500).json("Erro ao recuperar tipos de sangue.");
  }
});

bloodTypeRouter.delete("/remove/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    await BloodTypeService.deleteBloodType(id);
    return res.status(200).json("Tipo de sangue excluido");
  } catch {
    return res.status(500).json("Erro ao excluir tipo de sangue.");
  }
});

bloodTypeRouter.patch("/update/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const bloodType: BloodType = req.body;

  try {
    await BloodTypeService.updateBloodType(id, bloodType);
    return res.status(200).json("Tipo de sangue atualizado.");
  } catch {
    return res.status(500).json("Não foi possível atualiazar tipo de sangue.");
  }
});
