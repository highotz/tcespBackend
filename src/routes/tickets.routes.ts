import { Router } from "express";

import { ensureAuth } from "../middlewares/ensureAuth";
import { CreateCommentController } from "../modules/tickets/useCases/createComment/CreateCommentController";
import { CreateTicketController } from "../modules/tickets/useCases/createTicket/CreateTicketController";
import { ListAllTicketsController } from "../modules/tickets/useCases/listAllTickets/ListAllTicketsController";
import { UpdateTicketController } from "../modules/tickets/useCases/updateTicket/UpdateTicketController";

const ticketsRoutes = Router();

const createTicketController = new CreateTicketController();
const listAllTicketsController = new ListAllTicketsController();
const updateTicketController = new UpdateTicketController();
const createCommentController = new CreateCommentController();

ticketsRoutes.post(
  "/new-ticket/:user_id",
  ensureAuth,
  createTicketController.handle
);
ticketsRoutes.get("/", ensureAuth, listAllTicketsController.handle);
ticketsRoutes.put("/update-ticket", ensureAuth, updateTicketController.handle);

ticketsRoutes.post(
  "/create-comments/:id",
  ensureAuth,
  createCommentController.handle
);
export { ticketsRoutes };
