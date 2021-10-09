import { inject, injectable } from "tsyringe";
import { Query } from "typeorm/driver/Query";

import { ICreateTicketDTO } from "../../dtos/ICreateTicketDTO";
import { Ticket } from "../../entities/Ticket";
import { ITicketsRepository } from "../../repositories/ITicketsRepository";

@injectable()
class ListAllTicketsUseCase {
  constructor(
    @inject("TicketsRepository")
    private ticketsRepository: ITicketsRepository
  ) {}

  async execute(query: Query): Promise<Ticket[]> {
    const tickets = await this.ticketsRepository.listAllTickets(query);

    return tickets;
  }
}

export { ListAllTicketsUseCase };
