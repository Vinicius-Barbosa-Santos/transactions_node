import { FastifyInstance } from "fastify";
import { z } from "zod";
import { randomUUID } from "node:crypto";
import { knex } from "../database";

export async function transactionsRoutes(app: FastifyInstance) {
  app.post("/", async (request, reply) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(["credit", "debit"]),
    });

    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body
    );

    await knex("transactions").insert({
      id: randomUUID(),
      title,
      // Se for crédito ele usa do mesmo valor, caso contrário ele cadastra o valor do amount como negativo, assim trazendo o valor total
      amount: type === "credit" ? amount : amount * -1,
    });

    return reply.status(201).send();
  });
}
