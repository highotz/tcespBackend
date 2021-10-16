import { Response, Request } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCae";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    const { email, password, admin } = request.body;
    const { id } = request.user;

    const newInfo = await updateUserUseCase.execute({
      id,
      email,
      password,
      admin,
    });

    return response.send();
  }
}

export { UpdateUserController };
