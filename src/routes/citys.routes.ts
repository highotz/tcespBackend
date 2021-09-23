import { Router } from "express";

import { ensureAuth } from "../middlewares/ensureAuth";
import { CreateCityController } from "../modules/city/useCases/createCity/CreateCityController";
import { UpdateCityUrlController } from "../modules/city/useCases/updateCityUrl/UpdateCityUrlController";

const citysRoutes = Router();

const createCityController = new CreateCityController();
const updateCityUrlController = new UpdateCityUrlController();

citysRoutes.use(ensureAuth);
citysRoutes.post("/", createCityController.handle);
citysRoutes.patch("/update-url/:id", updateCityUrlController.handle);

export { citysRoutes };
