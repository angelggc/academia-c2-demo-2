import { describe, expect, test } from "vitest";
import { getProvision } from "./get-provision";
import { Provision } from "../entities";

const dataProvision: Provision[] = [
  {
    id: "1",
    title: "peluquería",
    description: "buenos cortes",
    price: 10000,
    clientId: "1",
  },
  {
    id: "2",
    title: "poda",
    description: "cortamos arboles",
    price: 50000,
    clientId: "2",
  },
];

describe("getProvision", async () => {
  const provisionService = {
    getById: async (id: string) => {
      return dataProvision.find((provision) => provision.id == id);
    },
  };

  test("con un id va a obtener la información de un provision", async () => {
    const result = await getProvision({
      dependencies: { provisionService },
      payload: { id: "1" },
    });

    expect(result).toStrictEqual({
      id: "1",
      title: "peluquería",
      description: "buenos cortes",
      price: 10000,
    });
  });

  test("con un id no valido, debería devolver un error", async () => {
    const result = await getProvision({
      dependencies: { provisionService },
      payload: { id: "3" },
    });

    expect(result).toBeInstanceOf(Error);
  });
});
