const AbstractSeeder = require("./AbstractSeeder");
const TimeSlotSeeder = require("./TimeSlotSeeder");
const LawyerSeeder = require("./LawyerSeeder");

class TimeSlotLawyerSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "time_slot_lawyer",
      truncate: true,
      dependencies: [TimeSlotSeeder, LawyerSeeder],
    });
  }

  run() {
    const timeSlots = Array.from({ length: 60 }, (_, index) => this.getRef(`time_slot_${index}`));
    const lawyers = Array.from({ length: 18 }, (_, index) => this.getRef(`lawyer_${index}`));

    if (!timeSlots || !lawyers) {
      throw new Error("timeSlots or lawyers is undefined");
    }

    // Ensure we have arrays
    const timeSlotIds = Array.isArray(timeSlots) ? timeSlots : [];
    const lawyerIds = Array.isArray(lawyers) ? lawyers : [];

    // Shuffle function
    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

    // Assign up to 8 time slots per lawyer
    lawyerIds.forEach((lawyer) => {
      const shuffledTimeSlots = shuffleArray([...timeSlotIds]);
      const assignedSlots = shuffledTimeSlots.slice(0, 8);

      assignedSlots.forEach((timeSlot) => {
        const timeSlotLawyer = {
          is_available: true,
          time_slot_id: timeSlot.insertId,
          lawyer_id: lawyer.insertId,
        };
        this.insert(timeSlotLawyer);
      });
    });
  }
}

module.exports = TimeSlotLawyerSeeder;
