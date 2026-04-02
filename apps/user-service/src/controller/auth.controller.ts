import { type RequestHandler } from "express";
import { type RegisterInput } from "../schema/auth.schema";
import { Prisma } from "../generated/prisma/client";
import { prisma } from "../lib/prisma.js";

export const register: RequestHandler<
  Record<string, string>,
  unknown,
  RegisterInput
> = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await prisma.user.create({
      data: {
        email,
        firstName: "test",
        lastName: "test",
        passwordHash: password,
      },
    });

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return res.status(400).json({ message: "Email already exists" });
      }
    }
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
