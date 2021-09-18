import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";

import { CitysRepository } from "../../modules/city/repositories/implementations/CitysRepository";
import { ICityRepository } from "../../modules/city/repositories/ICitysRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICityRepository>(
  "CitysRespository",
  CitysRepository
);
