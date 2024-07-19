const AbstractRepository = require("./AbstractRepository");

class AppointmentRepository extends AbstractRepository {
  constructor() {
    super({ table: "appointment" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT 
    ${this.table}.id AS appointment_id,
    ${this.table}.is_first_time,
    ${this.table}.note,
    ${this.table}.status,
    ${this.table}.client_id,
    f.name AS field_name,
    c.id AS client_id,
    c.firstname AS client_firstname,
    c.lastname AS client_lastname,
    c.email AS client_email,
    c.phone_number AS client_tel,
    l.firstname AS lawyer_firstname,
    l.lastname AS lawyer_lastname,
    ts.id AS time_slot_id,
    ts.datetime AS time_slot_datetime
  FROM 
  ${this.table}
  JOIN 
    field f ON ${this.table}.field_id = f.id
  JOIN 
    client c ON ${this.table}.client_id = c.id
  LEFT JOIN 
    lawyer l ON ${this.table}.lawyer_id = l.id
  LEFT JOIN 
    time_slot ts ON ${this.table}.time_slot_id = ts.id;`);

    return rows;
  }

  async create(appointment) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (is_first_time, note, status, field_id, client_id, lawyer_id, time_slot_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        appointment.is_first_time,
        appointment.note,
        appointment.status,
        appointment.field_id,
        appointment.clientId,
        appointment.lawyerId,
        appointment.timeSlotId,
      ]
    );
    return result.insertId;
  }

  async update(appointment) {
    const [result] = await this.database.query(
      `update ${this.table} set status = ? where id = ?`,
      [appointment.status, appointment.id]
    );

    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = AppointmentRepository;
