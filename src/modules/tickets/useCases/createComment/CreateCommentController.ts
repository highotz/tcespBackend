import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCommentUseCase } from "./CreateCommentUseCase";

class CreateCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createCommentUseCase = container.resolve(CreateCommentUseCase);
    const { ticketComment } = request.body;

    const comment = await createCommentUseCase.execute(ticketComment);

    return response.json(comment);
  }
}

export { CreateCommentController };
