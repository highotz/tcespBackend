import { inject, injectable } from "tsyringe";

import { Ticket } from "../../entities/Ticket";
import { ITicketsRepository } from "../../repositories/ITicketsRepository";

@injectable()
class ListAllTicketsUseCase {
  constructor(
    @inject("TicketsRepository")
    private ticketsRepository: ITicketsRepository
  ) {}

  async execute(): Promise<Ticket[]> {
    const tickets = await this.ticketsRepository.listAllTickets();

    return tickets;
  }
}

export { ListAllTicketsUseCase };
