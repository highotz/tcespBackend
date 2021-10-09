import { ICreateTicketDTO } from "../dtos/ICreateTicketDTO";
import { Ticket } from "../entities/Ticket";

interface ITicketsRepository {
  create(data: ICreateTicketDTO): Promise<Ticket>
}

export { ITicketsRepository };
