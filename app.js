const express = require("express");
const app = express();
const port = 3005;
const path = require("path");
const mongoose = require("mongoose");
const linkRoute = require("./routes/linkRoute");

mongoose.connect("mongodb://localhost:27017/links", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let db = mongoose.connection;

db.on("error", () => console.log("Houve um erro"));
db.once("open", () => console.log("Banco carregado"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));

app.use("/", linkRoute);

app.listen(port, () => {
    console.log(`Servidor inicializado na porta ${port}`);
});
