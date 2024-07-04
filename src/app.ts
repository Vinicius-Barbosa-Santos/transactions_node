import fastify from "fastify";
import cookie from "@fastify/cookie";

import { transactionsRoutes } from "./routes/transactions";

export const app = fastify();

app.register(cookie);

// Se eu quiser que este hook global se aplique para todas as rotas preciso inserir no meu server.
app.addHook("preHandler", async (request, reply) => {
  console.log(`${request.method} ${request.url}`);
});

app.register(transactionsRoutes, {
  prefix: "transactions",
});
