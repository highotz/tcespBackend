import { Router } from "express";

import { ensureAuth } from "../middlewares/ensureAuth";
import { CreateCityController } from "../modules/city/useCases/createCity/CreateCityController";

const citysRoutes = Router();

const createCityController = new CreateCityController();

citysRoutes.use(ensureAuth);
citysRoutes.post("/", createCityController.handle);

export { citysRoutes };
