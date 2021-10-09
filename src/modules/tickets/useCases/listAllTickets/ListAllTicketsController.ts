import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListAllTicketsUseCase } from "./ListAllTicketsUseCase";

class ListAllTicketsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllTicketsUseCase = container.resolve(ListAllTicketsUseCase);

    const tickets = await listAllTicketsUseCase.execute();

    return response.json(tickets);
  }
}

export { ListAllTicketsController };
