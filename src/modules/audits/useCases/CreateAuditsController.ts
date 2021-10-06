import { Response, Request } from "express";
import { container } from "tsyringe";
import { CreateAuditsUseCase } from "./CreateAuditsUseCase";

class CreateAuditsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { observation } = request.body;

    const createAuditsUseCase = container.resolve(CreateAuditsUseCase);

    const audit = await createAuditsUseCase.execute(observation);

    return response.json(audit);
  }
}

export { CreateAuditsController };
