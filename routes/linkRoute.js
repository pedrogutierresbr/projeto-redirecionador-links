const express = require("express");
const router = express.Router();

const { redirect } = require("../controllers/linkController");

router.get("/:title", redirect);

router.get("/", (req, res) => res.send("Hello friend!"));

module.exports = router;
