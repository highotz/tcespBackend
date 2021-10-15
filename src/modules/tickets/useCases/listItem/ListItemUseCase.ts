import { inject, injectable } from "tsyringe";

import { Item } from "../../entities/Item";
import { IItemsRepository } from "../../repositories/IItemsRepository";

@injectable()
class ListItemUseCase {
  constructor(
    @inject('ItemsRepository')
    private itemsRepository: IItemsRepository
  ){}
  async execute(ticket_id: any): Promise<Item[]>{
    const items = await this.itemsRepository.findItemByTicketId(ticket_id);

    return items;
  }
}

export { ListItemUseCase };
