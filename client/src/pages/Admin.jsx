import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "../styles/Admin.css";

function Admin() {
  const appointments = useLoaderData();

  const [selectedField, setSelectedField] = useState("");
  const [activeButton, setActiveButton] = useState(null); // État pour suivre le bouton actif

  const allFields = appointments.map((appointment) => appointment.field_name);
  const fields = [...new Set(allFields)];

  const handleFilter = (field) => {
    setSelectedField(field);
    setActiveButton(field); // Met à jour le bouton actif
  };

  const handleResetFilters = () => {
    setSelectedField("");
    setActiveButton(null); // Réinitialise le bouton actif à null
  };

  return (
    <>
      <h2 className="admin-main-title">CONSULTATIONS A VENIR</h2>
      <section className="admin-filter-section">
        <button
          type="button"
          onClick={handleResetFilters}
          className={`button-normal ${activeButton === null ? "button-active" : ""}`}
        >
          Tout
        </button>
        {fields.map((field) => (
          <button
            type="button"
            key={field}
            onClick={() => handleFilter(field)}
            className={`button-normal ${activeButton === field ? "button-active" : ""}`}
          >
            {field}
          </button>
        ))}
      </section>
      <section className="admin-cards-section">
        {appointments
          .filter(
            (appointment) =>
              selectedField === "" || appointment.field_name === selectedField
          )
          .map((appointment) => (
            <article key={appointment.appointment_id} className="admin-cards">
              <p>{appointment.time_slot_datetime}</p>
              <p>
                Avocat : {appointment.lawyer_firstname}{" "}
                {appointment.lawyer_lastname}
              </p>
              <p>
                Client : {appointment.client_firstname}{" "}
                {appointment.client_lastname}
              </p>
            </article>
          ))}
      </section>
    </>
  );
}

export default Admin;
