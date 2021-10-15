import { injectable, inject } from "tsyringe";
import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

@injectable()
class ListUserByEmailUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ){}
  async execute(email: string): Promise<User>{
    const user = await this.usersRepository.findByEmail(email);

    return user;
  }
}

export { ListUserByEmailUseCase };
