import { inject, injectable } from "tsyringe";
import { getRepository, Repository } from "typeorm";

import { City } from "../../entities/City";
import { AppError } from "../../../../errors/AppError";
import { ICityRepository } from "../../repositories/ICitysRepository";

interface IRequest {
  id: string;
  site: string;
}

@injectable()
class UpdateCityUrlUseCase {
  constructor(
    @inject("CitysRepository")
    private citysRepository: ICityRepository
  ) {}

  async execute({ id, site }: IRequest): Promise<void> {
    const cityExists = await this.citysRepository.findById(id);

    if (!cityExists) {
      throw new AppError("City not found");
    }

    await this.citysRepository.updateUrl({
      id,
      site,
    });
  }
}

export { UpdateCityUrlUseCase };
