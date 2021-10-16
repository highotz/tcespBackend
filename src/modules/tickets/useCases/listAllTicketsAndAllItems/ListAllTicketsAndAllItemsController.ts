import { container } from "tsyringe";
import { Response, Request } from "express";

import { ListAllTicketsAndAllItemsUseCase } from "./ListAllTicketsAndAllItemsUseCase";

class ListAllTicketsAndAllItemsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllTicketsAndAllItemsUseCase = container.resolve(
      ListAllTicketsAndAllItemsUseCase
    );

    const tickets = await listAllTicketsAndAllItemsUseCase.execute();

    return response.json(tickets);
  }
}

export { ListAllTicketsAndAllItemsController };
