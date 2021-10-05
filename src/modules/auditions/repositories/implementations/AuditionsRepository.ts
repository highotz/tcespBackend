import { getRepository, Repository } from "typeorm";

import { ICreateAuditionsDTO } from "../../dtos/ICreateAuditionsDTO";
import { Auditions } from "../../entities/Auditions";
import { IAuditionsRepository } from "../IAuditionsRepository";

class AuditionsRepository implements IAuditionsRepository {
  private respoitory: Repository<Auditions>;

  constructor() {
    this.respoitory = getRepository(Auditions);
  }

  async create({
    description,
    status,
  }: ICreateAuditionsDTO): Promise<Auditions> {
    const audition = this.respoitory.create({
      description,
      status: "pending",
    });

    await this.respoitory.save(audition);

    return audition;
  }
}

export { AuditionsRepository };
