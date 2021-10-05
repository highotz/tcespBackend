import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";

import { CitysRepository } from "../../modules/city/repositories/implementations/CitysRepository";
import { ICityRepository } from "../../modules/city/repositories/ICitysRepository";

import { IAuditionsRepository } from "../../modules/auditions/repositories/IAuditionsRepository";
import { AuditionsRepository } from "../../modules/auditions/repositories/implementations/AuditionsRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICityRepository>(
  "CitysRepository",
  CitysRepository
);

container.registerSingleton<IAuditionsRepository>(
  "AuditionsRepository",
  AuditionsRepository
);
