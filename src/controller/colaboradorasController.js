const colaboradoras = require("../model/colaboradoras.json");
const fs = require("fs");

const getAll = (req, res) => {
  res.status(200).send(colaboradoras);
};

const getById = (req, res) => {
  const id = req.params.id;

  res.status(200).send(colaboradoras.find((colaboradora) => colaboradora.id == id));
};

const getIdadeById = (req, res) => {
  const id = req.params.id;
  const dataNas = colaboradoras.find((colaboradora) => colaboradora.id == id).dataNascimento.split("/");
  const novaData = new Date(dataNas[2], dataNas[1]- 1, dataNas[0]);
  
  res.status(200).send("Idade ".concat(new Date().getFullYear() - Number(dataNas[2])));
};

const postColaboradora = (req, res) => {
  console.log(req.body);
  const { id, dataNascimento, nomeColaboradora, cargo, concluido } = req.body;
  colaboradoras.push({ id, dataNascimento, nomeColaboradora, cargo, concluido });

  fs.writeFile("./src/model/colaboradoras.json", JSON.stringify(colaboradoras), 'utf8', function (err) {
    if (err) {
      return res.status(424).send({ message: err });
    }
    console.log("Arquivo atualizado com sucesso!");

  });

  res.status(201).send(colaboradoras);
};
const deleteColaboradora = (req, res) => {
  const id = req.params.id;
  const colaboradoraFiltrada = colaboradoras.find((colaboradora) => colaboradora.id == id);
  const index = colaboradoras.indexOf(colaboradoraFiltrada);

  colaboradoras.splice(index, 1);

  res.status(200).send(colaboradoras);

  fs.writeFile("./src/model/colaboradoras.json", JSON.stringify(colaboradoras), 'utf8', function (err) {
    if (err) {
      return res.status(424).send({ message: err });
    }
    console.log("Arquivo atualizado com sucesso!");
  });
  res.status(200).send(colaboradoras);
};

module.exports = {
  getAll,
  getById,
  getIdadeById,
  postColaboradora,
  deleteColaboradora,
};