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
  }: ICreateTicketDTO): Promise<void>;

  findById(id: string): Promise<Ticket>;
}

export { ITicketsRepository };
