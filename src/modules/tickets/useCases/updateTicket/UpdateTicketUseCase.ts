import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

import { ICreateTicketDTO } from "../../dtos/ICreateTicketDTO";
import { ITicketsRepository } from "../../repositories/ITicketsRepository";

interface IRequest {
  title: string;
  description: string;
}

@injectable()
class UpdateTicketUseCase {
  constructor(
    @inject("TicketsRepository")
    private ticketsRepository: ITicketsRepository
  ) {}
  async execute({
    title,
    description,
    due_date,
    status,
    id,
  }: ICreateTicketDTO): Promise<void> {
    const ticketExists = await this.ticketsRepository.findById(id);

    if (!ticketExists) {
      throw new AppError(`No ticket found for ID: ${id}`);
    }

    await this.ticketsRepository.updateTicket({
      title,
      description,
      due_date,
      status,
    });
  }
}

export { UpdateTicketUseCase };
