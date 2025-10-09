import { Provision } from "../entities";

export interface ProvisionService {
  getById: (id: string) => Promise<Provision | undefined>;
}
