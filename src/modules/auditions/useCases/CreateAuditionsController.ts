import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAuditionsUseCase } from "./CreateAuditionsUseCase";

class CreateAuditionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;

    const createAuditionUseCase = container.resolve(CreateAuditionsUseCase);

    const audition = await createAuditionUseCase.execute({
      description,
      status: "pending",
    });

    return response.json(audition);
  }
}

export { CreateAuditionsController };
