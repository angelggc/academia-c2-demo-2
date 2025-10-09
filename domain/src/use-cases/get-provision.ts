import { ProvisionService } from "../services/provision-service";

interface GetProvisionData {
  dependencies: { provisionService: ProvisionService };
  payload: { id: string };
}

export async function getProvision({
  dependencies,
  payload,
}: GetProvisionData) {
  const result = await dependencies.provisionService.getById(payload.id);

  if (!result) return new Error();

  return {
    id: payload.id,
    title: result?.title,
    description: result?.description,
    price: result?.price,
  };
}
