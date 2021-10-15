import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreatUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ email, name, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      email,
      name,
      password,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      where: { email: email },
      select: ["id_tecesp", "email", "name", "admin"],
    });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }

  async listAllUsers(): Promise<User[]> {
    const user = await this.repository.find({
      select: ["id_tecesp", "email", "name", "admin"],
    });

    return user;
  }
}

export { UsersRepository };
