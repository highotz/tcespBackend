import { getRepository, Repository } from "typeorm";
import { Audits } from "../../entities/Audits";
import { IAuditsRepository } from "../IAuditsRespository";

class AuditsRepository implements IAuditsRepository {
  private repository: Repository<Audits>;

  constructor() {
    this.repository = getRepository(Audits);
  }

  async create(observation: string): Promise<Audits> {
    const audits = this.repository.create({ observation });

    await this.repository.save(audits);

    return audits;
  }

  async findById(id: string): Promise<Audits> {
    const audit = this.repository.findOne(id);

    return audit;
  }
}

export { AuditsRepository };
