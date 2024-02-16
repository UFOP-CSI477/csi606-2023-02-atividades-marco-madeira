import express from 'express';
import type { Request, Response } from 'express';
import * as UserService from "./user.service"

export const UserRouter = express.Router();

UserRouter.post("/createUser", async(req: Request, res: Response)=>{
    const new_user = req.body;
    
    try{
        await UserService.createUser(new_user);
        return res.status(200).json("Usuário criado com sucesso!");
    }catch{
        return res.status(500).json("Não foi possível criar o usuário!");
    }
})

UserRouter.get("/logUser/:email/:password", async(req: Request, res: Response)=>{
    const email = req.params.email;
    const password = req.params.password;

    try{
        const result = await UserService.logUser(email, password);
        return res.status(200).json(result);
    }catch{
        return res.status(500).json("Não existe esse usuário no sistema!")
    }
})