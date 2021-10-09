import { Query } from "typeorm/driver/Query";
import { ICreateTicketDTO } from "../dtos/ICreateTicketDTO";
import { Ticket } from "../entities/Ticket";

interface ITicketsRepository {
  create(data: ICreateTicketDTO): Promise<Ticket>;

  listAllTickets(query: Query): Promise<Ticket[]>;

  // filterTickets(): Promise<Ticket[]>;
}

export { ITicketsRepository };
