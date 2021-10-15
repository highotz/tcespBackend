import { Response, Request } from "express";
import { container } from "tsyringe";
import { ListCityByIdUseCase } from "./ListCityByIdUseCase";

class ListCityByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listCityByIdUseCase = container.resolve(ListCityByIdUseCase);

    const city = await listCityByIdUseCase.execute(id);

    return response.json(city);
  }
}

export { ListCityByIdController };
