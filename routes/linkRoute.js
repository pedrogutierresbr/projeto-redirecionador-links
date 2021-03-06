const express = require("express");
const router = express.Router();
var methodOverride = require("method-override");

const {
    redirect,
    addLink,
    allLinks,
    deleteLink,
    loadLink,
    editLink,
} = require("../controllers/linkController");

router.use(methodOverride("_method"));

router.get("/", allLinks);

router.get("/add", (req, res) => res.render("add", { error: false, body: {} }));

router.get("/:title", redirect);

router.get("/edit/:id", loadLink);

router.post("/", express.urlencoded({ extended: true }), addLink);

router.post("/edit/:id", express.urlencoded({ extended: true }), editLink);

router.delete("/:id", deleteLink);

router.delete("/", express.urlencoded({ extended: true }), deleteLink);

module.exports = router;
