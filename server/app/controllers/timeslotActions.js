const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const timeSlots = await tables.time_slot.getAvailability();
    res.json(timeSlots);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
};
