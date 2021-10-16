import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListCityWithMostTickRateUseCase } from "./ListCityWithMostTickRateUseCase";

class ListCityWithMostTickRateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { city_id } = request.params;

    const listCityWithMostTickRateUseCase = container.resolve(
      ListCityWithMostTickRateUseCase
    );

    const tickets = await listCityWithMostTickRateUseCase.execute(city_id);

    return response.json(tickets);
  }
}

export { ListCityWithMostTickRateController };
