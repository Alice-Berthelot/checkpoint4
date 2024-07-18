const express = require("express");

const router = express.Router();

const { browse, add } = require("../../../controllers/appointmentActions");

router.get("/", browse);
router.post("/", add);

module.exports = router;
