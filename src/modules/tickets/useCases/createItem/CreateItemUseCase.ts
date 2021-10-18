import { inject, injectable } from "tsyringe";
import { ICreateItemsDTO } from "../../dtos/ICreateItemsDTO";
import { Item } from "../../entities/Item";
import { ItemsRepository } from "../../repositories/implementations/ItemsRepository";

@injectable()
class CreateItemUseCase {
  constructor(
    @inject("ItemsRepository")
    private itemsRepository: ItemsRepository
  ) {}
  async execute({
    description,
    title,
    ticket_id,
    status
  }: ICreateItemsDTO): Promise<Item> {
    const item = await this.itemsRepository.create({
      description,
      title,
      ticket_id,
      status
    });

    return item;
  }
}

export { CreateItemUseCase };
