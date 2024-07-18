const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/lawyerActions");

router.get("/", browse);

module.exports = router;
