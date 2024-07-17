const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/fieldActions");

router.get("/", browse);

module.exports = router;
