const AbstractSeeder = require("./AbstractSeeder");

class FieldSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "field", truncate: true });
  }

  run() {
    const fields = [
        {
          "id": 1,
          "name": "Droit social",
          "icon": "labourlaw.svg"
        },
        {
          "id": 2,
          "name": "Droit des affaires",
          "icon": "businesslaw.svg"
        },
        {
          "id": 3,
          "name": "Droit immobilier",
          "icon": "realestatelaw.svg"
        },
        {
          "id": 4,
          "name": "Droit de la famille",
          "icon": "familylaw.svg"
        }
      ];

    fields.forEach((field, index) => {
      const fieldWithRefName = {
        ...field,
        refName: `field_${index}`,
      };
      this.insert(fieldWithRefName);
    });
  }
}

module.exports = FieldSeeder;