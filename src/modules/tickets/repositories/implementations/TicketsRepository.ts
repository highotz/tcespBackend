import { getRepository, Repository } from "typeorm";

import { ICreateTicketDTO } from "../../dtos/ICreateTicketDTO";
import { Ticket } from "../../entities/Ticket";
import { ITicketsRepository } from "../ITicketsRepository";

class TicketsRepository implements ITicketsRepository {
  private repository: Repository<Ticket>;

  constructor() {
    this.repository = getRepository(Ticket);
  }
  async create({
    city_id,
    description,
    status,
    due_date,
    title,
    user_id,
  }: ICreateTicketDTO): Promise<Ticket> {
    const ticket = this.repository.create({
      city_id,
      description,
      status,
      due_date,
      title,
      user_id,
    });

    await this.repository.save(ticket);

    return ticket;
  }
}

export { TicketsRepository };
