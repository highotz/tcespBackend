import { inject, injectable } from "tsyringe";

import { Ticket } from "../../entities/Ticket";
import { ITicketsRepository } from "../../repositories/ITicketsRepository";

@injectable()
class ListCityWithMostTickRateUseCase {
  constructor(
    @inject("TicketsRepository")
    private ticketsRepository: ITicketsRepository
  ) {}
  async execute(city_id: string): Promise<Ticket[]> {
    const tickets = await this.ticketsRepository.listCityWithMostTicketRate(
      city_id
    );

    return tickets;
  }
}

export { ListCityWithMostTickRateUseCase };
