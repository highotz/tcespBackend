import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";

import { CitysRepository } from "../../modules/city/repositories/implementations/CitysRepository";
import { ICityRepository } from "../../modules/city/repositories/ICitysRepository";

import { ITicketsRepository } from "../../modules/tickets/repositories/ITicketsRepository";
import { TicketsRepository } from "../../modules/tickets/repositories/implementations/TicketsRepository";

import { ItemsRepository } from "../../modules/tickets/repositories/implementations/ItemsRepository";
import { IItemsRepository } from "../../modules/tickets/repositories/IItemsRepository";

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

container.registerSingleton<IItemsRepository>(
  "ItemsRepository",
  ItemsRepository
);
