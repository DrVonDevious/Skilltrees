import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient;
const router = express.Router();

router.get("/", async (req, res) => {
  const trees = await prisma.tree.findMany();
  res.json(trees);
});

export default router;
