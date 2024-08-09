const express = require("express");
const { v4 } = request("uuid");

app.use(express.json());

const app = express();

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;
});

app.listen(3333);
