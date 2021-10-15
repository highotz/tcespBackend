import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUserByEmailUseCase } from "./ListUserByEmailUseCase";

class ListUserByEmailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const listUserByEmailUseCase = container.resolve(ListUserByEmailUseCase);

    const user = await listUserByEmailUseCase.execute(email);

    return response.json(user);
  }
}

export { ListUserByEmailController };
