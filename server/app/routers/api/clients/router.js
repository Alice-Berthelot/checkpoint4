const express = require("express");

const router = express.Router();

const { add } = require("../../../controllers/clientActions");

router.post("/", add);

module.exports = router;
