import { City } from "../entities/City";
import { ICreateCityDTO } from "../dtos/ICreateCityDTO";

interface ICityRepository {
  create(data: ICreateCityDTO): Promise<void>;

  findByName(name: string): Promise<City>;

  findById(id: string): Promise<City>;
}

export { ICityRepository };
