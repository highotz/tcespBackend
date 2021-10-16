import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListCitysWithMostSolvedTicketsRatesUseCase } from "./ListCitysWithMostSolvedTicketsRatesUseCase";

class ListCitysWithMostSolvedTicketsRatesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { city_id } = request.params;

    const listCitysWithMostSolvedTicketsRatesUseCase = container.resolve(
      ListCitysWithMostSolvedTicketsRatesUseCase
    );

    const tickets = await listCitysWithMostSolvedTicketsRatesUseCase.execute(
      city_id
    );

    return response.json(tickets);
  }
}

export { ListCitysWithMostSolvedTicketsRatesController };
