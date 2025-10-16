import { DataSource } from "typeorm";
import { Provision, ProvisionService } from "../../../../domain/dist/index.js";
import ProvisionEntity from "../entities/provision.entity.js";

export class ProvisionServiceImplementationTypeorm {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  async getById(id: string): Promise<Provision | undefined> {
    const repo = this.dataSource.getRepository<any>(ProvisionEntity as any);

    const found = await repo.findOne({ where: { id } });
    if (!found) return;

    return {
      id: found.id,
      title: found.title,
      description: found.description,
      price: found.price,
      clientId: found.clientId,
    };
  }
}
