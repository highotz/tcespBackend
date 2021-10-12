import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { citysRoutes } from "./citys.routes";
import { authRoutes } from "./auth.routes";
import { ticketsRoutes } from "./tickets.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/citys", citysRoutes);
router.use("/tickets", ticketsRoutes);
router.use(authRoutes);

export { router };
