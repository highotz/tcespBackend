import { Router } from "express";

import { ensureAuth } from "../middlewares/ensureAuth";
import { CreateTicketController } from "../modules/tickets/useCases/createTicket/CreateTicketController";
import { ListAllTicketsController } from "../modules/tickets/useCases/listAllTickets/ListAllTicketsController";
import { UpdateTicketController } from "../modules/tickets/useCases/updateTicket/UpdateTicketController";

const ticketsRoutes = Router();

const createTicketController = new CreateTicketController();
const listAllTicketsController = new ListAllTicketsController();
const updateTicketController = new UpdateTicketController();

ticketsRoutes.post(
  "/new-ticket/:user_id",
  ensureAuth,
  createTicketController.handle
);
ticketsRoutes.get("/", ensureAuth, listAllTicketsController.handle);
ticketsRoutes.put("/update-ticket", ensureAuth, updateTicketController.handle);

export { ticketsRoutes };
