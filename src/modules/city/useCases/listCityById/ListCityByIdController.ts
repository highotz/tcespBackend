import { Response, Request } from "express";
import { container } from "tsyringe";
import { ListCityByIdUseCase } from "./ListCityByIdUseCase";

class ListCityByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { city_id } = request.params;

    const listCityByIdUseCase = container.resolve(ListCityByIdUseCase);

    const city = await listCityByIdUseCase.execute(city_id);

    return response.json(city);
  }
}

export { ListCityByIdController };
