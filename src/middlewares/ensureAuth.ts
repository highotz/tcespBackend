import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuth(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token Invalido");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: id_tecesp } = verify(
      token,
      "efa15263cc615178c864f8449ab67c51"
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const userExists = await usersRepository.findById(id_tecesp);

    if (!userExists) {
      throw new Error("Usuario não localizado");
    }

    request.user = {
      id: id_tecesp,
    };

    next();
  } catch (error) {
    console.log(error);
    throw new Error("Token Invalido");
  }
}
