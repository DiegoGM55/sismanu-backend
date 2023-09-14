import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";
import { AuthRepository } from "../repositories/AuthRepository";

export default {
    async authUser(req: Request, res: Response){
        const { email, password } = req.body;
        const authUser = new AuthService(new AuthRepository());
        const user = await authUser.execute(email, password);
        return res.json({ user });
    }
}