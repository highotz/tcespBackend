import { ICreateItemsDTO } from "../dtos/ICreateItemsDTO";
import { Item } from "../entities/Item";

interface IItemsRepository {
  create(data: ICreateItemsDTO): Promise<Item>;
}

export { IItemsRepository };
