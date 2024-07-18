const AbstractRepository = require("./AbstractRepository");

class LawyerRepository extends AbstractRepository {
  constructor() {
    super({ table: "lawyer" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select ${this.table}.*, f.name AS field_name FROM ${this.table} JOIN field f ON ${this.table}.field_id = f.id;`);

    return rows;
  }

}

module.exports = LawyerRepository;
