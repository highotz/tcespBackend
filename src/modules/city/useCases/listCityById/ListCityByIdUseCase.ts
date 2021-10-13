import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { City } from "../../entities/City";
import { ICityRepository } from "../../repositories/ICitysRepository";

@injectable()
class ListCityByIdUseCase {
  constructor(
    @inject("CitysRepository")
    private cityRepository: ICityRepository
  ) {}

  async execute(id: string): Promise<City> {
    const city = await this.cityRepository.findById(id);

    if (!city) {
      throw new AppError(`No City found`);
    }

    return city;
  }
}

export { ListCityByIdUseCase };
