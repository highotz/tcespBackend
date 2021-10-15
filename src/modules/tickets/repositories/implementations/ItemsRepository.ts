import { getRepository, Repository } from "typeorm";

import { ICreateItemsDTO } from "../../dtos/ICreateItemsDTO";
import { Item } from "../../entities/Item";
import { IItemsRepository } from "../IItemsRepository";

class ItemsRepository implements IItemsRepository {
  private itemRepository: Repository<Item>;

  constructor() {
    this.itemRepository = getRepository(Item);
  }

  async create({
    description,
    title,
    ticket_id,
  }: ICreateItemsDTO): Promise<Item> {
    const item = this.itemRepository.create({
      description,
      title,
      ticket_id,
    });

    await this.itemRepository.save(item);

    return item;
  }

  async findItemByTicketId(ticket_id: any): Promise<Item[]> {
    const items = await this.itemRepository.find({
      select: ["title", "description"],
      where: { ticket_id: ticket_id },
    });

    return items;
  }
}

export { ItemsRepository };
