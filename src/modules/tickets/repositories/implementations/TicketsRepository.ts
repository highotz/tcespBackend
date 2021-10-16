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
    due_date,
    title,
    user_id,
  }: ICreateTicketDTO): Promise<Ticket> {
    const ticket = this.repository.create({
      city_id,
      description,
      status: "pending",
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

  async updateTicket({
    title,
    description,
    due_date,
    status,
    id,
  }: ICreateTicketDTO): Promise<void> {
    const ticket = await this.findById(id);

    await this.repository.update(ticket.id, {
      title,
      description,
      due_date,
      status,
    });
  }

  async listCityWithMostTicketRate(city_id: string): Promise<Ticket[]> {
    const tickets = await this.repository.find({
      select: ["status", "title"],
      relations: ["cityId"],
      where: [
        {
          status: "pending",
          city_id: city_id,
        },
      ],
    });

    return tickets;
  }

  async listAllTicketsAndAllItems(): Promise<Ticket[]> {
    const tickets = await this.repository.query(`
      select
      t.id as ticket_id,
      i.itens_list,
      u.name as user_name,
      cy.name as city_name
      from tickets t 
      left join users u on t.user_id = u.id_tecesp
      left join citys cy on t.city_id = cy.id
      left join 
      (select ticket_id, 
      array_agg( title|| ',' || description) as itens_list
      from itens
      group by ticket_id) i on t.id = i.ticket_id
    `);

    return tickets;
  }

  async listCitysWithMostSolvedTicketsRates(city_id: string): Promise<Ticket[]> {
    const tickets = await this.repository.find({
      select: ["status", "title"],
      relations: ["cityId"],
      where: [
        {
          status: "done",
          city_id: city_id,
        },
      ],
    });

    return tickets;
  }
}

export { TicketsRepository };
