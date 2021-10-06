import { inject, injectable } from "tsyringe";
import { Audits } from "../entities/Audits";
import { AuditsRepository } from "../repositories/implementations/AuditsRepository";

interface IRequest{
  observation: string;
  user_id?: string;
  city_id?: string;
  auditions_id?: string;
}

@injectable()
class CreateAuditsUseCase {
  constructor(
    @inject("AuditsRepository")
    private auditsRepository: AuditsRepository
  ) {}

  async execute(observation: string): Promise<Audits> {
    const audits = this.auditsRepository.create(observation);

    return audits;
  }
}

export { CreateAuditsUseCase };
