import { getRepository, Repository } from "typeorm";
import { Query } from "typeorm/driver/Query";

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

  async listAllTickets(query: Query): Promise<Ticket[]> {
    const options = { where: { ...query } };

    const tickets = await this.repository.find(options);

    return tickets;
  }

  async findById(id: string): Promise<Ticket> {
    const ticket = await this.repository.findOne(id);

    return ticket;
  }

  updateTicket({
    title,
    description,
    due_date,
    status,
  }: ICreateTicketDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { TicketsRepository };
