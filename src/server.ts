import fastify from "fastify";
import { knex } from "./database";

const app = fastify();

app.get("/hello", async () => {
  const transactions = await knex("transactions")
    .where("amount", 1000)
    .select("*");

  return transactions;
});

const PORT = 8080;
app
  .listen({ port: 8080 })
  .then(() => console.log(`Server listening on ${PORT}`));
