const express = require("express");
const app = express();
const port = 3005;
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/links", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", () => console.log("Houve um erro"));
db.once("open", () => console.log("Banco carregado"));

app.get("/", (req, res) => res.send("Hello friend!"));

app.listen(port, () => {
    console.log(`Servidor inicializado na porta ${port}`);
});
