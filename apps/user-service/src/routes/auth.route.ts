import { Router } from "express";
import { register } from "../controller/auth.controller";
import { validateResource } from "@repo/middlewares/validate";
import { registerSchema } from "../schema/auth.schema";

const authRouter: Router = Router();

authRouter.post("/login", (req, res) => {
  // Implement login logic here
  res.json({ message: "Login successful" });
});

authRouter.post("/register", validateResource(registerSchema), register);

export { authRouter };
