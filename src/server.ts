import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import createConnection from "./database";

import "./shared/container";

import { router } from "./routes";
import { AppError } from "./errors/AppError";

const app = express();
const port = 3200;

createConnection();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(port, () => console.log(`Server listening on port ${port}`));
