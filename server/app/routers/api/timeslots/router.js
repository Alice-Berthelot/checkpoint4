const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/timeslotActions");

router.get("/", browse);

module.exports = router;
