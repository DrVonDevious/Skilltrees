import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  const tiers = await prisma.tier.findMany();
  res.json(tiers);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const tier = await prisma.tier.findUnique({ where: { id } });
  res.json(tier);
});

router.post("/", async (req, res) => {
  const { name, description, position, treeId } = req.body;
  const tier = await prisma.tier.create({
    data: {
      name,
      description,
      position,
      treeId,
    }
  });
  res.json(tier);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const tier = await prisma.tier.update({
    where: { id },
    data: { name, description },
  });
  res.json(tier);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const tier = await prisma.tier.delete({ where: { id } });
  res.json(tier);
});

export default router;
