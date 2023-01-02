import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeError() });
  }

  res.status(400).send({
    message: [{ message: err.message }],
  });
};