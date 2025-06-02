import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getManager(req: Request, res: Response): Promise<void> {
  try {
    const { cognitoId } = req.params;
    const manager = await prisma.manager.findUnique({
      where: { cognitoId },
    });

    if (manager) {
      res.json(manager);
    } else {
      res.status(404).json({ message: "Manager not found" });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving manager: ${error.message}` });
  }
}

export async function createManager(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { cognitoId, name, email, phoneNumber } = req.body;
    const manager = await prisma.manager.create({
      data: {
        cognitoId,
        name,
        email,
        phoneNumber,
      },
    });

    res.status(201).json(manager);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error creating manager: ${error.message}` });
  }
}
export async function updateManager(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { cognitoId } = req.params;
    const { name, email, phoneNumber } = req.body;
    const updatedManager = await prisma.manager.update({
      where: { cognitoId },
      data: {
        name,
        email,
        phoneNumber,
      },
    });

    res.status(200).json(updatedManager);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error updating manager: ${error.message}` });
  }
}
