import { Query } from "typeorm/driver/Query";
import { ICreateTicketDTO } from "../dtos/ICreateTicketDTO";
import { Ticket } from "../entities/Ticket";

interface ITicketsRepository {
  create(data: ICreateTicketDTO): Promise<Ticket>;

  listAllTickets(query: Query): Promise<Ticket[]>;

  updateTicket({
    title,
    description,
    due_date,
    status,
    id,
  }: ICreateTicketDTO): Promise<void>;

  findById(id: number): Promise<Ticket>;

  listCityWithMostTicketRate(city_id: string): Promise<Ticket[]>;
}

export { ITicketsRepository };
