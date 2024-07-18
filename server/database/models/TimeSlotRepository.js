const AbstractRepository = require("./AbstractRepository");

class TimeSlotRepository extends AbstractRepository {
  constructor() {
    super({ table: "time_slot" });
  }

  async getAvailability() {
    const [rows] = await this.database.query(
      `select ${this.table}.*, tsl.lawyer_id from ${this.table} join time_slot_lawyer tsl on ${this.table}.id = tsl.time_slot_id where tsl.is_available = true;`
    );

    return rows;
  }
}

module.exports = TimeSlotRepository;
