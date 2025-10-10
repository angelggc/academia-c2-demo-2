/* import { beforeEach, describe, expect, test } from "vitest";
import { ProvisionServiceImplementationPrisma } from "./provision-service-implementation-prisma";
import { PrismaClient } from "@prisma/client";

describe("ProvisionServiceImplementationPrisma", async () => {
  let db: PrismaClient;

  beforeEach(async () => {
    db = new PrismaClient({
      datasources: {
        db: { url: "file:../../data/test-db.db" },
      },
    });

    await db.$connect();

    await db.$executeRaw`CREATE TABLE IF NOT EXISTS Provision (
            id TEXT PRIMARY KEY,
            title TEXT,
            description TEXT,
            price INT,
            clientId TEXT,
        );`;

    await db.provision.create({
      data: {
        id: "1",
        title: "Peluquería",
        description: "Buenos cortes",
        price: 20000,
        clientId: "10",
      },
    });
  });

  const provisionService = new ProvisionServiceImplementationPrisma(db);

  test("getById - Con un id valido debería devolver un Provision", async () => {
    const result = await provisionService.getById("1");

    expect(result).toStrictEqual({
      id: "1",
      title: "Peluquería",
      description: "Buenos cortes",
      price: 20000,
      clientId: "10",
    });
  });

  test("getById - Con un id que no existe debería devolver un undefined", async () => {});
});
 */
