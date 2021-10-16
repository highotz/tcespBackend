import { ICreateItemsDTO } from "../dtos/ICreateItemsDTO";
import { Item } from "../entities/Item";

interface IItemsRepository {
  create(data: ICreateItemsDTO): Promise<Item>;

  findItemByTicketId(ticket_id: any): Promise<Item[]>;

  updateItem(data: ICreateItemsDTO): Promise<void>;

  findById(id: string): Promise<Item>;
}

export { IItemsRepository };
