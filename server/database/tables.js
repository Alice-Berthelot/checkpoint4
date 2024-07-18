// Import the repository modules responsible for handling data operations on the tables
const AppointmentRepository = require("./models/AppointmentRepository");
const ClientRepository = require("./models/ClientRepository");
const FieldRepository = require("./models/FieldRepository");
const LawyerRepository = require("./models/LawyerRepository");
const TimeSlotRepository = require("./models/TimeSlotRepository");

// Create an empty object to hold data repositories for different tables
const tables = {};

/* ************************************************************************* */
// Register data repositories for tables
/* ************************************************************************* */

// Register each repository as data access point for its table
tables.field = new FieldRepository();
tables.client = new ClientRepository();
tables.lawyer = new LawyerRepository();
tables.appointment = new AppointmentRepository();
tables.time_slot = new TimeSlotRepository();

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
