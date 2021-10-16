import { Response, Request } from "express";
import { container } from "tsyringe";

import { UpdateItemUseCase } from "./UpdateItemUseCase";

class UpdateItemController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateItemUseCase = container.resolve(UpdateItemUseCase);
    const { id } = request.params;
    const { description, title, status } = request.body;

    const newInfo = await updateItemUseCase.execute({
      id,
      description,
      title,
      status,
    });

    return response.status(200).json(newInfo);
  }
}

export { UpdateItemController };
