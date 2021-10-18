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
    status,
  }: ICreateItemsDTO): Promise<Item> {
    const item = this.itemRepository.create({
      description,
      title,
      ticket_id,
      status,
    });

    await this.itemRepository.save(item);

    return item;
  }

  async findItemByTicketId(ticket_id: any): Promise<Item[]> {
    const items = await this.itemRepository.find({
      select: ["title", "description", "status", "id"],
      where: { ticket_id: ticket_id },
    });

    return items;
  }

  async findById(id: string): Promise<Item> {
    const ticket = await this.itemRepository.findOne(id);

    return ticket;
  }

  async updateItem({
    description,
    title,
    status,
    id,
  }: ICreateItemsDTO): Promise<void> {
    const item = await this.findById(id);

    await this.itemRepository.update(item.id, {
      title,
      status,
      description,
    });
  }
}

export { ItemsRepository };
