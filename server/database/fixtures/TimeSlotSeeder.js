const AbstractSeeder = require("./AbstractSeeder");

class TimeSlotSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "time_slot", truncate: true });
  }

  run() {
    const startDate = new Date("2024-08-01");
    const endDate = new Date("2024-09-30");
    const timeSlots = [];
    const maxSlots = 60;

    // Helper function to check if a date is a weekday
    const isWeekday = (date) => {
      const day = date.getDay();
      return day !== 0 && day !== 6; // 0 = Sunday, 6 = Saturday
    };

    // Helper function to get a random date between start and end dates
    const getRandomDate = (start, end) => {
      const date = new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
      return isWeekday(date) ? date : getRandomDate(start, end);
    };

    // Possible times excluding 12:30 to 14:00
    const possibleTimes = [
      "09:30:00",
      "10:00:00",
      "10:30:00",
      "11:00:00",
      "11:30:00",
      "12:00:00",
      "14:00:00",
      "14:30:00",
      "15:00:00",
      "15:30:00",
      "16:00:00",
      "16:30:00",
    ];

    // Generate unique random time slots
    while (timeSlots.length < maxSlots) {
      const randomDate = getRandomDate(startDate, endDate);
      const randomTime =
        possibleTimes[Math.floor(Math.random() * possibleTimes.length)];

      // Format the date in French locale
      const formattedDate = randomDate.toLocaleDateString("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });

      // Format the time in "HH:mm"
      const formattedTime = randomTime.substring(0, 5); // Extracts "HH:mm"

      // Create the datetime string
      const datetimeString = `${formattedDate} à ${formattedTime}`;

      const timeSlot = {
        datetime: datetimeString,
      };
      const exists = timeSlots.some(
        (slot) => slot.datetime === timeSlot.datetime
      );

      if (!exists) {
        timeSlots.push(timeSlot);
      }
    }

    // Sort time slots chronologically
    timeSlots.sort((a, b) => {
      const dateTimeA = new Date(a.datetime);
      const dateTimeB = new Date(b.datetime);
      return dateTimeA - dateTimeB;
    });

    timeSlots.forEach((timeSlot, index) => {
      const timeSlotWithRefName = {
        datetime: timeSlot.datetime,
        refName: `time_slot_${index}`
      };
      this.insert(timeSlotWithRefName);
    });
  }
}

module.exports = TimeSlotSeeder;
