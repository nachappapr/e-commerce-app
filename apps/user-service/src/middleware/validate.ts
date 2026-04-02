import { NextFunction, Request, Response } from "express";
import { ZodError, ZodObject, core } from "zod";

export const validateResource =
  (Schema: ZodObject<core.$ZodShape>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      Schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res
          .status(400)
          .json({ message: "Validation failed", errors: error?.issues });
        return;
      }
      next(error);
    }
  };
