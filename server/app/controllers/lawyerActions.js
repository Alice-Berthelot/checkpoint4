const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const lawyers = await tables.lawyer.readAll();
    res.json(lawyers);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
};

