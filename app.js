const express = require("express");
const app = express();
const port = 3005;
const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    click: Number,
});

const Link = mongoose.model("Link", linkSchema);

let link = new Link({
    title: "Pedro",
    description: "Link para o instagram",
    url: "https://www.instagram.com/",
    click: 0,
});

link.save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));

mongoose.connect("mongodb://localhost:27017/links", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let db = mongoose.connection;
db.on("error", () => console.log("Houve um erro"));
db.once("open", () => console.log("Banco carregado"));

app.get("/", (req, res) => res.send("Hello friend!"));

app.listen(port, () => {
    console.log(`Servidor inicializado na porta ${port}`);
});
