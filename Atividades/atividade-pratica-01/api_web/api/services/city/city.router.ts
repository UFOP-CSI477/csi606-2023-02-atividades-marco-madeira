import express from "express";
import type { Request, Response } from "express";
import * as CityService from "./city.service";
import { City } from "@prisma/client";

export const cityRouter = express.Router();

cityRouter.post("/create", async (req: Request, res: Response) => {
  const city: City = req.body;

  try {
    const newCity = await CityService.createCity(city);
    return res.status(200).json(newCity);
  } catch {
    return res.status(500).json("Erro ao criar cidade.");
  }
});

cityRouter.get("/all", async (req: Request, res: Response) => {
  try {
    const result = await CityService.getAll();
    return res.status(200).json(result);
  } catch {
    return res.status(500).json("Erro ao recuperar cidade.");
  }
});

cityRouter.delete("/remove/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    await CityService.deleteCity(id);
    return res.status(200).json("Cidade excluida");
  } catch {
    return res.status(500).json("Erro ao excluir cidade.");
  }
});

cityRouter.patch("/update/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const city: City = req.body;

  try {
    await CityService.updateCity(id, city);
    return res.status(200).json("Ciadade atualizada.");
  } catch {
    return res.status(500).json("Não foi possível atualiazar cidade.");
  }
});
