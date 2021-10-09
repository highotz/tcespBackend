import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

import { ICreateTicketDTO } from "../../dtos/ICreateTicketDTO";
import { Ticket } from "../../entities/Ticket";
import { ITicketsRepository } from "../../repositories/ITicketsRepository";

@injectable()
class CreateTicketUseCase {
  constructor(
    @inject("TicketsRepository")
    private ticketsRepository: ITicketsRepository
  ) {}

  async execute({
    city_id,
    description,
    status,
    due_date,
    title,
    user_id,
  }: ICreateTicketDTO): Promise<Ticket> {
    const ticket = await this.ticketsRepository.create({
      city_id,
      description,
      status,
      due_date,
      title,
      user_id,
    });

    if (!ticket) {
      throw new AppError("Por favor, preencha todos os campos!");
    }

    return ticket;
  }
}

export { CreateTicketUseCase };
