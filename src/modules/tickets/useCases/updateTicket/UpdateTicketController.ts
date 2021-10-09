import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateTicketUseCase } from "./UpdateTicketUseCase";

class UpdateTicketController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, due_date, status } = request.body;

    const updateTicketUseCase = container.resolve(UpdateTicketUseCase);

    const newInfo = await updateTicketUseCase.execute({
      title,
      description,
      due_date,
      status,
    });

    return response.status(200).json(newInfo);
  }
}

export { UpdateTicketController };
