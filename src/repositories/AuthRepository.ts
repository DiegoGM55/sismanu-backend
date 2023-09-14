import { User } from "@prisma/client";
import { IUserAuthenticate } from "../interfaces/IUserAuthenticate";
import prisma from "../database";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";


class AuthRepository implements IUserAuthenticate {
    public async auth(email: string, password: string): Promise<User> {
        const user = await prisma.user.findFirst({
            where: { email }
        });

        if (!user) {
            throw new Error("Email or password incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email or password incorrects");
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });

        delete user?.password;

        const data = {...user, token};

        return data;
    }
}

export { AuthRepository };