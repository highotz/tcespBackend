import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";

import { ensureAuth } from "../middlewares/ensureAuth";
import { CreateCityController } from "../modules/city/useCases/createCity/CreateCityController";
import { ListCityController } from "../modules/city/useCases/listCity/ListCityController";
import { ListCityByIdController } from "../modules/city/useCases/listCityById/ListCityByIdController";
import { UpdateCityUrlController } from "../modules/city/useCases/updateCityUrl/UpdateCityUrlController";

const citysRoutes = Router();

const createCityController = new CreateCityController();
const updateCityUrlController = new UpdateCityUrlController();
const listCityController = new ListCityController();
const listCityByIdController = new ListCityByIdController();

citysRoutes.get("/:id", ensureAuth, listCityByIdController.handle);
citysRoutes.post("/", ensureAuth, ensureAdmin, createCityController.handle);
citysRoutes.patch(
  "/update-url/:id",
  ensureAuth,
  ensureAdmin,
  updateCityUrlController.handle
);
citysRoutes.get("/", ensureAuth, listCityController.handle);

export { citysRoutes };
