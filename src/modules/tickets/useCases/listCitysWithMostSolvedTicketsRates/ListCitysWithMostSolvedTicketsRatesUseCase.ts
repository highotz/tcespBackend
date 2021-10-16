import { inject, injectable } from "tsyringe";

import { Ticket } from "../../entities/Ticket";
import { ITicketsRepository } from "../../repositories/ITicketsRepository";

@injectable()
class ListCitysWithMostSolvedTicketsRatesUseCase {
  constructor(
    @inject("TicketsRepository")
    private ticketsRepository: ITicketsRepository
  ) {}
  async execute(city_id: string): Promise<Ticket[]> {
    const tickets =
      await this.ticketsRepository.listCitysWithMostSolvedTicketsRates(city_id);

    return tickets;
  }
}

export { ListCitysWithMostSolvedTicketsRatesUseCase };
