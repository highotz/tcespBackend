import { Router } from "express";

import { ensureAuth } from "../middlewares/ensureAuth";

import { CreateItemController } from "../modules/tickets/useCases/createItem/CreateItemController";
import { CreateTicketController } from "../modules/tickets/useCases/createTicket/CreateTicketController";
import { ListAllTicketsController } from "../modules/tickets/useCases/listAllTickets/ListAllTicketsController";
import { ListAllTicketsAndAllItemsController } from "../modules/tickets/useCases/listAllTicketsAndAllItems/ListAllTicketsAndAllItemsController";
import { ListCityWithMostTickRateController } from "../modules/tickets/useCases/listCityWithMostTicketRate/ListCityWithMostTickRateController";
import { ListItemController } from "../modules/tickets/useCases/listItemByTicketId/ListItemController";
import { UpdateItemController } from "../modules/tickets/useCases/updateItem/UpdateItemController";
import { UpdateTicketController } from "../modules/tickets/useCases/updateTicket/UpdateTicketController";

const ticketsRoutes = Router();

const createTicketController = new CreateTicketController();
const listAllTicketsController = new ListAllTicketsController();
const updateTicketController = new UpdateTicketController();
const createItemController = new CreateItemController();
const listItemController = new ListItemController();
const listCityWithMostTickRateController =
  new ListCityWithMostTickRateController();
const updateItemController = new UpdateItemController();
const listAllTicketAndAllItems = new ListAllTicketsAndAllItemsController();

ticketsRoutes.post("/new-ticket", ensureAuth, createTicketController.handle);

ticketsRoutes.get("/", ensureAuth, listAllTicketsController.handle);

ticketsRoutes.put(
  "/update-ticket/:id",
  ensureAuth,
  updateTicketController.handle
);

ticketsRoutes.post(
  "/new-item/:ticket_id",
  ensureAuth,
  createItemController.handle
);

ticketsRoutes.get("/items/:ticket_id", ensureAuth, listItemController.handle);

ticketsRoutes.get(
  "/report-ticekts/:city_id",
  ensureAuth,
  listCityWithMostTickRateController.handle
);

ticketsRoutes.put("/update-item/:id", ensureAuth, updateItemController.handle);

ticketsRoutes.get(
  "/all-tickets-all-items",
  ensureAuth,
  listAllTicketAndAllItems.handle
);

export { ticketsRoutes };
