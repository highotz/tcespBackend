import { Router } from "express";

import { ensureAuth } from "../middlewares/ensureAuth";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { ListAllUsersController } from "../modules/accounts/useCases/listAllUsers/ListAllUsersController";
import { ListUserByEmailController } from "../modules/accounts/useCases/listUserByEmail/ListUserByEmailController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUserByEmailController = new ListUserByEmailController();
const listAllUsersController = new ListAllUsersController();

usersRoutes.post("/", ensureAuth, createUserController.handle);
usersRoutes.get("/", ensureAuth, listUserByEmailController.handle);
usersRoutes.get("/all-users", ensureAuth, listAllUsersController.handle);

export { usersRoutes };
