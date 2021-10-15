import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListItemUseCase } from "./ListItemUseCase";

class ListItemController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { ticket_id } = request.params;

    const listItemUseCase = container.resolve(ListItemUseCase);

    const items = await listItemUseCase.execute(ticket_id);

    return response.json(items);
  }
}

export { ListItemController };
