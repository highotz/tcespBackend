import { City } from "../entities/City";
// import { ICreateCityDTO } from "../dtos/ICreateCityDTO";

interface ICreateCityDTO {
  id?: string;
  name?: string;
  site: string;
  cod_ibge?: number;
}

interface ICityRepository {
  create({ name, site }: ICreateCityDTO): Promise<void>;

  findByName(name: string): Promise<City>;

  findById(id: string): Promise<City>;

  updateUrl({ id, site }: ICreateCityDTO): Promise<void>;

  listAllCity(): Promise<City[]>;
}

export { ICityRepository, ICreateCityDTO };
