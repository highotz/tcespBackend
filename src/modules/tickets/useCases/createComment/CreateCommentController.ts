import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCommentUseCase } from "./CreateCommentUseCase";

class CreateCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { teste } = request.params;
    const { comment } = request.body;

    const createCommentUseCase = container.resolve(CreateCommentUseCase);

    console.log(id, teste);

    const newComment = await createCommentUseCase.execute(comment, {
      teste,
      id,
    });

    return response.json(newComment);
  }
}

export { CreateCommentController };
