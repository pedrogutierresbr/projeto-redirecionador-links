const express = require("express");
const app = express();
const port = 3005;
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/links", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const linkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    url: { type: String, required: true },
    click: { type: Number, default: 0 },
});

const Link = mongoose.model("Link", linkSchema);

let db = mongoose.connection;
db.on("error", () => console.log("Houve um erro"));
db.once("open", () => {
    console.log("Banco carregado");

    app.get("/:title", async (req, res) => {
        let title = req.params.title;

        try {
            let doc = await Link.findOne({ title });
            console.log(doc);
            res.redirect(doc.url);
        } catch (err) {
            console.log(err);
        }
    });
});

app.get("/", (req, res) => res.send("Hello friend!"));

app.listen(port, () => {
    console.log(`Servidor inicializado na porta ${port}`);
});
