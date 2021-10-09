import { Router } from "express";

import { ensureAuth } from "../middlewares/ensureAuth";
import { CreateTicketController } from "../modules/tickets/useCases/createTicket/CreateTicketController";
import { ListAllTicketsController } from "../modules/tickets/useCases/listAllTickets/ListAllTicketsController";

const ticketsRoutes = Router();

const createTicketController = new CreateTicketController();
const listAllTicketsController = new ListAllTicketsController();

ticketsRoutes.post(
  "/new-ticket/:user_id",
  ensureAuth,
  createTicketController.handle
);
ticketsRoutes.get("/", ensureAuth, listAllTicketsController.handle);

export { ticketsRoutes };
