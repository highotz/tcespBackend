import { Response, Request } from "express";
import { container } from "tsyringe";
import { ListCityUseCase } from "./ListCityUseCase";

class ListCityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCityUseCase = container.resolve(ListCityUseCase);

    const allCitys = await listCityUseCase.execute();

    return response.json(allCitys);
  }
}

export { ListCityController };
