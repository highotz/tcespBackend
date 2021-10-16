import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";

import { ensureAuth } from "../middlewares/ensureAuth";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { ListAllUsersController } from "../modules/accounts/useCases/listAllUsers/ListAllUsersController";
import { ListUserByEmailController } from "../modules/accounts/useCases/listUserByEmail/ListUserByEmailController";
import { UpdateUserController } from "../modules/accounts/useCases/updateUser/UpdateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUserByEmailController = new ListUserByEmailController();
const listAllUsersController = new ListAllUsersController();
const updateUserController = new UpdateUserController();

usersRoutes.post("/", ensureAuth, ensureAdmin, createUserController.handle);
usersRoutes.get("/", ensureAuth, listUserByEmailController.handle);
usersRoutes.get("/all-users", ensureAuth, listAllUsersController.handle);
usersRoutes.put("/update/:id", ensureAuth, ensureAdmin, updateUserController.handle);

export { usersRoutes };
