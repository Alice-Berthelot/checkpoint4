const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const fieldsRouter = require("./fields/router");

router.use("/fields", fieldsRouter);

/* ************************************************************************* */

module.exports = router;
