import { UserRepository } from "../repositories/UserRepository";
import { CreateUserService } from "../services/CreateUserService";
import { Request, Response } from "express";

export default{
    async createUser(req: Request, res: Response){
        const { name, email, password } = req.body; // pegando os dados do body
        const createUser = new CreateUserService(new UserRepository()); // instanciando o service
        const user = await createUser.execute(name, email, password); // executando o service
        return res.json({ user }); // retornando o usuário
    }
}