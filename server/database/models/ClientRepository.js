const AbstractRepository = require("./AbstractRepository");

class ClientRepository extends AbstractRepository {
  constructor() {
    super({ table: "client" });
  }

  async create(client) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, phone_number, lawyer_id) VALUES (?, ?, ?, ?, ?)`,
      [client.firstname, client.lastname, client.email, client.phone_number, client.lawyer_id]
    );

    return result.insertId;
  }

}

module.exports = ClientRepository;
