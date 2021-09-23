import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICreateCityDTO } from "../../dtos/ICreateCityDTO";

import { ICityRepository } from "../../repositories/ICitysRepository";

@injectable()
class CreateCityUseCase {
  constructor(
    @inject("CitysRepository")
    private citysRepository: ICityRepository
  ) {}

  async execute({ name, site }: ICreateCityDTO): Promise<void> {
    const cityExists = await this.citysRepository.findByName(name);

    if (cityExists) {
      throw new AppError(`Cidade ${name} já existe!`);
    }

    await this.citysRepository.create({
      name,
      site,
    });
  }
}

export { CreateCityUseCase };
