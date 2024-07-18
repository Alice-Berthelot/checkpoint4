const AbstractSeeder = require("./AbstractSeeder");
const FieldSeeder = require("./FieldSeeder");

class LawyerSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "lawyer",
      truncate: true,
      dependencies: [FieldSeeder],
    });
  }

  run() {
    const lawyers = [
        {
          "id": 1,
          "firstname": "Jean",
          "lastname": "Lefèvre-Dupont",
          "role": "Avocat associé",
          "picture": "avocat8.png",
          "field_id": 1
        },
        {
          "id": 2,
          "firstname": "Elodie",
          "lastname": "Sarkissian",
          "role": "Avocate collaboratrice",
          "picture": "avocat17.png",
          "field_id": 3
        },
        {
          "id": 3,
          "firstname": "Paul",
          "lastname": "Bernard-Fauchon",
          "role": "Avocat collaborateur",
          "picture": "avocat10.png",
          "field_id": 4
        },
        {
          "id": 4,
          "firstname": "Claire",
          "lastname": "Girard",
          "role": "Avocate collaboratrice",
          "picture": "avocat1.png",
          "field_id": 2
        },
        {
          "id": 5,
          "firstname": "Cyril",
          "lastname": "Dumont",
          "role": "Avocat collaborateur",
          "picture": "avocat4.png",
          "field_id": 1
        },
        {
          "id": 6,
          "firstname": "Isabelle",
          "lastname": "Privière",
          "role": "Avocate collaboratrice",
          "picture": "avocat12.png",
          "field_id": 3
        },
        {
          "id": 7,
          "firstname": "Julien",
          "lastname": "Rousseau",
          "role": "Avocat collaborateur",
          "picture": "avocat13.png",
          "field_id": 4
        },
        {
          "id": 8,
          "firstname": "Sophie",
          "lastname": "Morel",
          "role": "Avocate collaboratrice",
          "picture": "avocat6.png",
          "field_id": 2
        },
        {
          "id": 9,
          "firstname": "Maxime",
          "lastname": "Bienjean",
          "role": "Avocat collaborateur",
          "picture": "avocat18.png",
          "field_id": 1
        },
        {
          "id": 10,
          "firstname": "Amélie",
          "lastname": "Ngo",
          "role": "Avocate collaboratrice",
          "picture": "avocat16.png",
          "field_id": 3
        },
        {
          "id": 11,
          "firstname": "Etienne",
          "lastname": "Renaud",
          "role": "Avocat collaborateur",
          "picture": "avocat14.png",
          "field_id": 4
        },
        {
          "id": 12,
          "firstname": "Laurence",
          "lastname": "Jean-Baptiste",
          "role": "Avocate collaboratrice",
          "picture": "avocat7.png",
          "field_id": 2
        },
        {
          "id": 13,
          "firstname": "Alahji",
          "lastname": "Traoré",
          "role": "Avocat collaborateur",
          "picture": "avocat3.png",
          "field_id": 1
        },
        {
          "id": 14,
          "firstname": "Lamia",
          "lastname": "Haddad",
          "role": "Avocate collaboratrice",
          "picture": "avocat5.png",
          "field_id": 3
        },
        {
          "id": 15,
          "firstname": "Thomas",
          "lastname": "Nguyen",
          "role": "Avocat collaborateur",
          "picture": "avocat15.png",
          "field_id": 4
        },
        {
          "id": 16,
          "firstname": "Fatoumata",
          "lastname": "Diawara",
          "role": "Avocate associée",
          "picture": "avocat2.png",
          "field_id": 2
        },
        {
          "id": 17,
          "firstname": "Pierre",
          "lastname": "Lemoine-Leroy",
          "role": "Avocat collaborateur",
          "picture": "avocat9.png",
          "field_id": 1
        },
        {
          "id": 18,
          "firstname": "Camille",
          "lastname": "Girardin",
          "role": "Avocate collaboratrice",
          "picture": "avocat11.png",
          "field_id": 3
        }
      ];
           

      lawyers.forEach((lawyer, index) => {
        const lawyerWithRefName = {
          ...lawyer,
          refName: `lawyer_${index}`
        };
        this.insert(lawyerWithRefName);
      });
  }
}

module.exports = LawyerSeeder;