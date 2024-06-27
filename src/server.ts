import fastify from "fastify";

const app = fastify();

app.get("/", (req, res) => {
  return "Hello world";
});

const PORT = 8080;
app
  .listen({ port: 8080 })
  .then(() => console.log(`Server listening on ${PORT}`));
