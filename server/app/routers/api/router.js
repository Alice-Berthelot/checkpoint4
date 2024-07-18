const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const fieldsRouter = require("./fields/router");

router.use("/fields", fieldsRouter);

const clientsRouter = require("./clients/router");

router.use("/clients", clientsRouter);

const lawyersRouter = require("./lawyers/router");

router.use("/lawyers", lawyersRouter);

const appointmentsRouter = require("./appointments/router");

router.use("/appointments", appointmentsRouter);

const timeslotsRouter = require("./timeslots/router");

router.use("/timeslots", timeslotsRouter);

/* ************************************************************************* */

module.exports = router;
