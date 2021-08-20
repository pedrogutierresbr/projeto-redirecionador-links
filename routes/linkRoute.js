const express = require("express");
const router = express.Router();

const { redirect, addLink } = require("../controllers/linkController");

router.get("/:title", redirect);

router.get("/", (req, res) => res.render("index", { error: false, body: {} }));

router.post("/", express.urlencoded({ extended: true }), addLink);

module.exports = router;
