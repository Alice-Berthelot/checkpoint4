const express = require("express");

const router = express.Router();

const {
  browse,
  edit,
  add,
  destroy,
} = require("../../../controllers/appointmentActions");


router.get("/", browse);
router.post("/", add);
router.put("/:id", edit);
router.delete("/:id", destroy);

module.exports = router;
