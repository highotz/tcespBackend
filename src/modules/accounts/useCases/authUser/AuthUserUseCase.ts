import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    email: string;
    name: string;
    admin: boolean;
    id_tecesp: string;
  };
  token: string;
}

@injectable()
class AuthUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Usuário ou senha incorretos");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Usuário ou senha incorretos");
    }

    const token = sign({}, "efa15263cc615178c864f8449ab67c51", {
      subject: user.id_tecesp,
      expiresIn: "1d",
    });

    const returnToken: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
        admin: user.admin,
        id_tecesp: user.id_tecesp,
      },
    };

    return returnToken;
  }
}

export { AuthUserUseCase };
