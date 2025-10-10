import { PrismaClient } from "@prisma/client";
import { Provision, ProvisionService } from "../../../../domain/dist/index.js";

export class ProvisionServiceImplementationPrisma implements ProvisionService {
  private db: PrismaClient;

  constructor(db: PrismaClient) {
    this.db = db;
  }

  async getById(id: string): Promise<Provision | undefined> {
    const result = await this.db.provision.findById(id);

    if (!result) return;

    return result;
  }
}
