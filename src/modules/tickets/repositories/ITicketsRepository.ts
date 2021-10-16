import { Query } from "typeorm/driver/Query";
import { ICreateTicketDTO } from "../dtos/ICreateTicketDTO";
import { Ticket } from "../entities/Ticket";

interface ITicketsRepository {
  create(data: ICreateTicketDTO): Promise<Ticket>;

  listAllTickets(query: Query): Promise<Ticket[]>;

  updateTicket(data: ICreateTicketDTO): Promise<void>;

  findById(id: string): Promise<Ticket>;

  listCityWithMostTicketRate(city_id: string): Promise<Ticket[]>;

  listAllTicketsAndAllItems(): Promise<Ticket[]>;

  listCitysWithMostSolvedTicketsRates(city_id: string): Promise<Ticket[]>;
}

export { ITicketsRepository };
