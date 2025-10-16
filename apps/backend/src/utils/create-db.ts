import { DataSource } from "typeorm";
import ProvisionEntity from "../entities/provision.entity.js";
import path from "path";

export async function createDb(dbFile = "./data/typeorm.db") {
  const dbPath = path.resolve(process.cwd(), dbFile);
  console.log(dbPath);
  const dataSource = new DataSource({
    type: "sqlite",
    database: dbPath,
    entities: [ProvisionEntity],
    synchronize: true,
    logging: false,
  });

  await dataSource.synchronize();

  await dataSource.initialize();

  return dataSource;
}
