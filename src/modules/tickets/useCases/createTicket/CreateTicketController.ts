import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTicketUseCase } from "./CreateTicketUseCase";

class CreateTicketController {
  async handle(request: Request, response: Response): Promise<Response> {
    const user_id = request.headers.userid;
    const { city_id, description, status, due_date, title } = request.body;

    const createTicketUseCase = container.resolve(CreateTicketUseCase);

    const ticket = await createTicketUseCase.execute({
      city_id,
      description,
      status,
      due_date,
      title,
      user_id,
    });

    return response.status(201).json(ticket);
  }
}

export { CreateTicketController };
