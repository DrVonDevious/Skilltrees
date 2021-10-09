import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  const trees = await prisma.tree.findMany();
  res.json(trees);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const tree = await prisma.tree.findUnique({ where: { id } });
  res.json(tree);
});

router.post("/", async (req, res) => {
  const { name, description } = req.body;
  const tree = await prisma.tree.create({
    data: {
      name,
      description,
    }
  });
  res.json(tree);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const tree = await prisma.tree.update({
    where: { id },
    data: { name, description },
  });
  res.json(tree);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const tree = await prisma.tree.delete({ where: { id } });
  res.json(tree);
});

export default router;
