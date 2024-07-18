const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const appointments = await tables.appointment.readAll();
    res.json(appointments);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  
  const appointment = req.body;
  try {
    const insertId = await tables.appointment.create(appointment);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  add,
};
