import express, { Request, Response } from "express";
import { getProvision } from "../../../domain/dist/index.js";
import { PrismaClient } from "@prisma/client";
import { ProvisionServiceImplementationPrisma } from "./services/provision-service-implementation-prisma.js";
import { createDb } from "./utils/create-db.js";
import { ProvisionServiceImplementationTypeorm } from "./services/provision-service-implementation-typeorm.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const db = await createDb("../data/db.db");

const provisionService = new ProvisionServiceImplementationTypeorm(db);

app.get("/getProvision/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id) return res.status(400).send("Missing data error");

  const result = await getProvision({
    dependencies: {
      provisionService,
    },
    payload: { id },
  });

  console.log(result);

  res.status(200).send("Todo OK!");
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});

export default app;
