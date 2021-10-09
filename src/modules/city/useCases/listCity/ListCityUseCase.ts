import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { City } from "../../entities/City";
import { ICityRepository } from "../../repositories/ICitysRepository";

@injectable()
class ListCityUseCase {
  constructor(
    @inject("CitysRepository")
    private cityRepository: ICityRepository
  ) {}

  async execute(): Promise<City[]> {
    const allCitys = await this.cityRepository.listAllCity();

    if (allCitys.length === 0) {
      throw new AppError("No data found");
    }

    return allCitys;
  }
}

export { ListCityUseCase };
