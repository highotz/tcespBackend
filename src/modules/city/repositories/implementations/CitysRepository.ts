import { getRepository, Repository } from "typeorm";

import { ICityRepository } from "../../repositories/ICitysRepository";
import { ICreateCityDTO } from "../../dtos/ICreateCityDTO";
import { City } from "../../entities/City";

class CitysRepository implements ICityRepository {
  private respository: Repository<City>;

  constructor() {
    this.respository = getRepository(City);
  }

  async create({ name, site }: ICreateCityDTO): Promise<void> {
    const city = this.respository.create({
      name,
      site,
    });

    await this.respository.save(city);
  }

  async findByName(name: string): Promise<City> {
    const city = await this.respository.findOne({ name });

    return city;
  }

  async findById(id: string): Promise<City> {
    const city = await this.respository.findOne(id);

    return city;
  }
}

export { CitysRepository };
