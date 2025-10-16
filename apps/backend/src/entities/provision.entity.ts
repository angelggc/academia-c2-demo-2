import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Provision",
  columns: {
    id: {
      type: String,
      primary: true,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    clientId: {
      type: String,
    },
  },
});
