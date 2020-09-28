import express, { json } from "express";
import cors from 'cors'
const port = 9000;
const app = express();
app.use(json());
app.use(cors());

const contatos = [
  { id: 0, nome: "Pedro", telefone: "9999-8888", data: new Date(), operadora: { nome: "Oi", codigo: 14, categoria: "Celular", preco: 2 } },
  { id: 1, nome: "Ana", telefone: "9999-8877", data: new Date(), operadora: { nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1 }, },
  { id: 2, nome: "Maria", telefone: "9999-8866", data: new Date(), operadora: { nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2 } }
];
const operadoras = [
  { nome: "Oi", codigo: 14, categoria: "Celular", preco: 2 },
  { nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1 },
  { nome: "Tim", codigo: 41, categoria: "Celular", preco: 3 },
  { nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1 },
  { nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2 }
];

app.get("/", (_, response) => {
  return response.send({ msg: "hello" });
});

app.get("/operadoras", (_, response) => {
  return response.send(operadoras);
});
app.get("/contatos", (_, response) => {
  return response.send(contatos);
});
app.get("/contato/:id", (req, response) => {
  const { id } = req.params
  const contact = contatos.filter((contato) => {
    return contato.id === parseInt(id)
  })[0];
  if (contact) {
    return response.send(contact);
  } else {
    return response.status(404).send({ msg: "User not found" });
  }
});
app.post("/contatos", (request, response) => {
  const data = request.body;
  contatos.push({ ...data, id: contatos.length });
  return response.send(data);
});

app.listen(port, () => {
  console.log(` Server started on http://localhost:${port}`);
});