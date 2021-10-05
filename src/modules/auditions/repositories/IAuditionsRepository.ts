import { Auditions } from "../entities/Auditions";
import { ICreateAuditionsDTO } from "../dtos/ICreateAuditionsDTO";

interface IAuditionsRepository {
  create({ description, status }: ICreateAuditionsDTO): Promise<Auditions>;
  
}

export { IAuditionsRepository };
