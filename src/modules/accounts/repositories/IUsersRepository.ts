import { User } from "../entities/User";
import { ICreateUserDTO } from "../dtos/ICreatUserDTO";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;

  findByEmail(email: string): Promise<User>;

  findById(id: string): Promise<User>;
}

export { IUsersRepository };
