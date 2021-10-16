import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";

import { ICreateUserDTO } from "../../dtos/ICreatUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ email, password, admin, id }: ICreateUserDTO): Promise<void> {
    const userExists = await this.usersRepository.findById(id);

    if (!userExists) {
      throw new AppError(`No user found with id: ${userExists.email}`);
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.updateUser({
      email,
      password: passwordHash,
      admin,
      id,
    });
  }
}

export { UpdateUserUseCase };
