import { Router } from "express";

import { ensureAuth } from "../middlewares/ensureAuth";

import { CreateItemController } from "../modules/tickets/useCases/createItem/CreateItemController";
import { CreateTicketController } from "../modules/tickets/useCases/createTicket/CreateTicketController";
import { ListAllTicketsController } from "../modules/tickets/useCases/listAllTickets/ListAllTicketsController";
import { ListItemController } from "../modules/tickets/useCases/listItem/ListItemController";
import { UpdateTicketController } from "../modules/tickets/useCases/updateTicket/UpdateTicketController";

const ticketsRoutes = Router();

const createTicketController = new CreateTicketController();
const listAllTicketsController = new ListAllTicketsController();
const updateTicketController = new UpdateTicketController();
const createItemController = new CreateItemController();
const listItemController = new ListItemController();

ticketsRoutes.post("/new-ticket", ensureAuth, createTicketController.handle);
ticketsRoutes.get("/", ensureAuth, listAllTicketsController.handle);
ticketsRoutes.put("/update-ticket", ensureAuth, updateTicketController.handle);
ticketsRoutes.post(
  "/new-item/:ticket_id",
  ensureAuth,
  createItemController.handle
);
ticketsRoutes.get("/items/:ticket_id", ensureAuth, listItemController.handle);

export { ticketsRoutes };
