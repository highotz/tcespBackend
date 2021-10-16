import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

import { ICreateItemsDTO } from "../../dtos/ICreateItemsDTO";
import { IItemsRepository } from "../../repositories/IItemsRepository";

@injectable()
class UpdateItemUseCase {
  constructor(
    @inject("ItemsRepository")
    private itemsRepository: IItemsRepository
  ) {}
  async execute({
    description,
    title,
    status,
    id,
  }: ICreateItemsDTO): Promise<void> {
    const itemExits = await this.itemsRepository.findById(id);

    if (!itemExits) {
      throw new AppError(`No Item found for ${id}`);
    }

    await this.itemsRepository.updateItem({
      description,
      title,
      status,
      id,
    });
  }
}

export { UpdateItemUseCase };
