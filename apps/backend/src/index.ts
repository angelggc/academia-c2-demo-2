import express, { Request, Response } from "express";
import { getProvision } from "../../../domain/dist/index.js";
import { PrismaClient } from "@prisma/client";
import { ProvisionServiceImplementationPrisma } from "./services/provision-service-implementation-prisma.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const db = new PrismaClient();

const provisionService = new ProvisionServiceImplementationPrisma(db);

app.get("/getProvision/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id) return res.status(400).send("Missing data error");

  const result = await getProvision({
    dependencies: { provisionService },
    payload: { id },
  });
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});

export default app;
