import { Router } from "express";

import { ensureAuth } from "../middlewares/ensureAuth";
import { CreateAuditionsController } from "../modules/auditions/useCases/CreateAuditionsController";

const auditionsRoutes = Router();

const createAuditionsController = new CreateAuditionsController();

auditionsRoutes.post(
  "/",
  ensureAuth,
  createAuditionsController.handle
);

export { auditionsRoutes };
