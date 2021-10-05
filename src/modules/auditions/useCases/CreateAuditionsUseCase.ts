import { inject, injectable } from "tsyringe";
import { ICreateAuditionsDTO } from "../dtos/ICreateAuditionsDTO";
import { Auditions } from "../entities/Auditions";
import { AuditionsRepository } from "../repositories/implementations/AuditionsRepository";

@injectable()
class CreateAuditionsUseCase {
  constructor(
    @inject("AuditionsRepository")
    private auditionsRespository: AuditionsRepository
  ) {}

  async execute({
    description,
    status,
  }: ICreateAuditionsDTO): Promise<Auditions> {
    const audition = await this.auditionsRespository.create({
      description,
      status,
    });

    return audition;
  }
}

export { CreateAuditionsUseCase };
