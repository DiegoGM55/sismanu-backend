import { IUserCreate } from "../interfaces/IUserCreate";
import { UserRepository } from "../repositories/UserRepository";

class CreateUserService {
    constructor(private userRepository: IUserCreate) {}

  public async execute(name: string, email: string, password: string){
    const user = await this.userRepository.create(name, email, password);

    // Retorna o usuário
    return user;
  }
}

export { CreateUserService };