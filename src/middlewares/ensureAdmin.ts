import { NextFunction, Response, Request } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;

  const usersRepository = getCustomRepository(UsersRepository);

  const { admin } = await usersRepository.findById(id);

  if (admin === true) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized",
  });
}
