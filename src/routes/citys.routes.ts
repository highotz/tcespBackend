import { Router } from "express";

import { ensureAuth } from "../middlewares/ensureAuth";
import { CreateCityController } from "../modules/city/useCases/createCity/CreateCityController";
import { ListCityController } from "../modules/city/useCases/listCity/ListCityController";
import { UpdateCityUrlController } from "../modules/city/useCases/updateCityUrl/UpdateCityUrlController";

const citysRoutes = Router();

const createCityController = new CreateCityController();
const updateCityUrlController = new UpdateCityUrlController();
const listCityController = new ListCityController();

citysRoutes.post("/", ensureAuth, createCityController.handle);
citysRoutes.patch(
  "/update-url/:id",
  ensureAuth,
  updateCityUrlController.handle
);
citysRoutes.get("/", ensureAuth, listCityController.handle);

export { citysRoutes };
