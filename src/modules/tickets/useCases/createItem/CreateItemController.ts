import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateItemUseCase } from "./CreateItemUseCase";

class CreateItemController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { ticket_id } = request.params;
    const { title, description, status } = request.body;

    const createItemUseCase = container.resolve(CreateItemUseCase);

    const item = await createItemUseCase.execute({
      ticket_id,
      title,
      description,
      status,
    });

    return response.status(201).json(item);
  }
}

export { CreateItemController };
