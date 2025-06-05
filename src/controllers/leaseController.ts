import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getLeases(req: Request, res: Response): Promise<void> {
  try {
    const leases = await prisma.lease.findMany({
      include: { tenant: true, property: true },
    });
    res.status(200).json(leases);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving leases: ${error.message}` });
  }
}

export async function getLeasePayments(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;
    const payments = await prisma.payment.findMany({
      where: { leaseId: Number(id) },
    });
    res.status(200).json(payments);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving payments: ${error.message}` });
  }
}
