import express from "express";
import type { Request, Response } from "express";
import * as PersonService from "./person.service";
import { Person } from "@prisma/client";

export const personRouter = express.Router();

personRouter.post("/create", async (req: Request, res: Response) => {
  const person: Person = req.body;

  try {
    const newPerson = await PersonService.createPerson(person);
    return res.status(200).json(newPerson);
  } catch {
    return res.status(500).json("Erro ao criar pessoa.");
  }
});

personRouter.get("/all", async (req: Request, res: Response) => {
  try {
    const result = await PersonService.getAll();
    return res.status(200).json(result);
  } catch {
    return res.status(500).json("Erro ao recuperar pessoas.");
  }
});

personRouter.delete("/remove/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    await PersonService.deletePerson(id);
    return res.status(200).json("Pessoa excluida");
  } catch {
    return res.status(500).json("Erro ao excluir pessoa.");
  }
});

personRouter.patch("/update/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const person: Person = req.body;

  try {
    await PersonService.updatePerson(id, person);
    return res.status(200).json("Pessoa atualizada.");
  } catch {
    return res.status(500).json("Não foi possível atualiazar pessoa.");
  }
});
