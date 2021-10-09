import { Router } from "express";

import { ensureAuth } from "../middlewares/ensureAuth";
import { CreateTicketController } from "../modules/tickets/useCases/createTicket/CreateTicketController";

const ticketsRoutes = Router();

const createTicketController = new CreateTicketController();

ticketsRoutes.post("/new-ticket/:user_id", ensureAuth, createTicketController.handle);

export { ticketsRoutes };
