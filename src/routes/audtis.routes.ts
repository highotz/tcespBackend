import { Router } from "express";
import { ensureAuth } from "../middlewares/ensureAuth";
import { CreateAuditsController } from "../modules/audits/useCases/CreateAuditsController";

const auditsRoutes = Router();

const createAuditsController = new CreateAuditsController();

auditsRoutes.post(
  "/:id_user/:id_citys",
  ensureAuth,
  createAuditsController.handle
);

export { auditsRoutes };
