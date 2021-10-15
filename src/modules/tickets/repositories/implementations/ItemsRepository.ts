import { getRepository, Repository } from "typeorm";
import { ICreateItemsDTO } from "../../dtos/ICreateItemsDTO";
import { Item } from "../../entities/Item";
import { IItemsRepository } from "../IItemsRepository";

class ItemsRepository implements IItemsRepository {
  private repository: Repository<Item>;

  constructor() {
    this.repository = getRepository(Item);
  }

  async create({
    description,
    title,
    ticket_id,
  }: ICreateItemsDTO): Promise<Item> {
    const item = this.repository.create({
      description,
      title,
      ticket_id,
    });

    await this.repository.save(item);

    return item;
  }
}

export { ItemsRepository };
