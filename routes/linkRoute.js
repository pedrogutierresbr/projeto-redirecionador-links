const express = require("express");
const router = express.Router();

const { redirect, addLink, allLinks, deleteLink } = require("../controllers/linkController");

router.get("/all", allLinks);

router.get("/:title", redirect);

router.get("/", (req, res) => res.render("index", { error: false, body: {} }));

router.post("/", express.urlencoded({ extended: true }), addLink);

router.delete("/:id", deleteLink);

router.delete("/", express.urlencoded({ extended: true }), deleteLink);

module.exports = router;
