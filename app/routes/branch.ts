import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  const branches = await prisma.branch.findMany();
  res.json(branches);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const branch = await prisma.branch.findUnique({ where: { id } });
  res.json(branch);
});

router.post("/", async (req, res) => {
  const { name, description, position, tierId } = req.body;
  const branch = await prisma.branch.create({
    data: {
      name,
      description,
      position,
      tierId,
    }
  });
  res.json(branch);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const branch = await prisma.branch.update({
    where: { id },
    data: { name, description },
  });
  res.json(branch);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const branch = await prisma.branch.delete({ where: { id } });
  res.json(branch);
});

export default router;
