import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { citysRoutes } from "./citys.routes";
import { authRoutes } from "./auth.routes";
import { auditionsRoutes } from "./auditions.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/citys", citysRoutes);
router.use("/auditions", auditionsRoutes);
router.use(authRoutes);

export { router };
