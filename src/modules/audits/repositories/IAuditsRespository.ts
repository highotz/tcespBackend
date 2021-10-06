import { Audits } from "../entities/Audits";

interface IAuditsRepository {
  create(observation: string): Promise<Audits>;

  findById(id: string): Promise<Audits>;
}

export { IAuditsRepository };
