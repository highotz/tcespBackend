import { inject, injectable } from "tsyringe";

import { Ticket } from "../../entities/Ticket";
import { ITicketsRepository } from "../../repositories/ITicketsRepository";

@injectable()
class ListAllTicketsAndAllItemsUseCase {
  constructor(
    @inject("TicketsRepository")
    private ticketsRepository: ITicketsRepository
  ) {}
  async execute(): Promise<Ticket[]> {
    const tickets = await this.ticketsRepository.listAllTicketsAndAllItems();

    return tickets;
  }
}

export { ListAllTicketsAndAllItemsUseCase };
