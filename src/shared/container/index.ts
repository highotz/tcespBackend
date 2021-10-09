import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";

import { CitysRepository } from "../../modules/city/repositories/implementations/CitysRepository";
import { ICityRepository } from "../../modules/city/repositories/ICitysRepository";
import { ITicketsRepository } from "../../modules/tickets/repositories/ITicketsRepository";
import { TicketsRepository } from "../../modules/tickets/repositories/implementations/TicketsRepository";



container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICityRepository>(
  "CitysRepository",
  CitysRepository
);

container.registerSingleton<ITicketsRepository>(
  "TicketsRepository",
  TicketsRepository
);