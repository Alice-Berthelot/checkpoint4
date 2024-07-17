const AbstractRepository = require("./AbstractRepository");

class FieldRepository extends AbstractRepository {
  constructor() {
    super({ table: "field" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = FieldRepository;
