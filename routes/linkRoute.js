const express = require("express");
const router = express.Router();

const { redirect, addLink, allLinks, deleteLink } = require("../controllers/linkController");

router.get("/", allLinks);

router.get("/add", (req, res) => res.render("index", { error: false, body: {} }));

router.get("/:title", redirect);

router.post("/", express.urlencoded({ extended: true }), addLink);

router.delete("/:id", deleteLink);

router.delete("/", express.json(), deleteLink);

module.exports = router;
