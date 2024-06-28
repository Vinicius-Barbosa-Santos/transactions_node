import fastify from "fastify";
import { knex } from "./database";

const app = fastify();

app.get("/hello", async () => {
  const tables = await knex("sqlite_schema").select("*");

  return tables;
});

const PORT = 8080;
app
  .listen({ port: 8080 })
  .then(() => console.log(`Server listening on ${PORT}`));
