import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateCityUrlUseCase } from "./UpdateCityUrlUseCase";

class UpdateCityUrlController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { site } = request.body;

    const updateCityUrlUseCase = container.resolve(UpdateCityUrlUseCase);

    const newUrl = await updateCityUrlUseCase.execute({
      id,
      site,
    });

    return response.status(201).json(newUrl);
  }
}

export { UpdateCityUrlController };
