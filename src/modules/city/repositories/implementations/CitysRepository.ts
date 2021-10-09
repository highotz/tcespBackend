import { getRepository, Repository, createQueryBuilder } from "typeorm";

import {
  ICityRepository,
  ICreateCityDTO,
} from "../../repositories/ICitysRepository";
import { City } from "../../entities/City";

class CitysRepository implements ICityRepository {
  private repository: Repository<City>;

  constructor() {
    this.repository = getRepository(City);
  }

  async create({ name, site }: ICreateCityDTO): Promise<void> {
    const city = this.repository.create({
      name,
      site,
    });

    await this.repository.save(city);
  }

  async findByName(name: string): Promise<City> {
    const city = await this.repository.findOne({ name });

    return city;
  }

  async findById(id: string): Promise<City> {
    const city = await this.repository.findOne(id);

    return city;
  }

  async updateUrl({ site, id }: ICreateCityDTO): Promise<void> {
    const city = await this.findById(id);

    await this.repository.update(city.id, {
      site,
    });
  }

  async listAllCity(): Promise<City[]>{ 
    const citys = await this.repository.find();

    return citys;
  }
}

export { CitysRepository };
