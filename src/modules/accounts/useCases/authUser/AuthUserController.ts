import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthUserUseCase } from "./AuthUserUseCase";

class AuthUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authUserUsecase = container.resolve(AuthUserUseCase);

    const token = await authUserUsecase.execute({ email, password });

    return response.json(token);
  }
}

export { AuthUserController };
