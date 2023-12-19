import express from "express";
import type { Request, Response } from "express";
import * as StateService from "./state.service";
import { State } from "@prisma/client";

export const stateRouter = express.Router();

stateRouter.post("/create", async (req: Request, res: Response) => {
  const state: State = req.body;

  try {
    const newState = await StateService.createState(state);
    return res.status(200).json(newState);
  } catch {
    return res.status(500).json("Erro ao criar estado.");
  }
});

stateRouter.get("/all", async (req: Request, res: Response) => {
  try {
    const result = await StateService.getAll();
    return res.status(200).json(result);
  } catch {
    return res.status(500).json("Erro ao recuperar estados.");
  }
});

stateRouter.delete("/remove/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    await StateService.deleteState(id);
    return res.status(200).json("Estado excluido");
  } catch {
    return res.status(500).json("Erro ao excluir estado.");
  }
});

stateRouter.patch("/update/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const state: State = req.body;

  try {
    await StateService.updateState(id, state);
    return res.status(200).json("Estado atualizado.");
  } catch {
    return res.status(500).json("Não foi possível atualiazar estado.");
  }
});
