import { inject, injectable } from "tsyringe";
import { getRepository, Repository } from "typeorm";

import { City } from "../../entities/City";
import { AppError } from "../../../../errors/AppError";
import {
  ICityRepository,
} from "../../repositories/ICitysRepository";

interface IRequest {
  id: string;
  site: string;
}

@injectable()
class UpdateCityUrlUseCase {
  private teste: Repository<City>;
  constructor(
    @inject("CitysRepository")
    private citysRepository: ICityRepository
  ) {
    this.teste = getRepository(City);
  }

  async execute({ id, site }: IRequest): Promise<void> {
    const city = await this.citysRepository.findById(id);

    site = city.site = site;

    await this.teste.update(city.id, { site });
  }
}

export { UpdateCityUrlUseCase };
