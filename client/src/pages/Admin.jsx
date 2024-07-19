import { useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import "../styles/Admin.css";

function Admin() {
  const appointments = useLoaderData();

  const sortedAppointments = appointments.sort(
    (a, b) => (a.status === "confirmed") - (b.status === "confirmed")
  );

  const [selectedField, setSelectedField] = useState("");
  const [activeButton, setActiveButton] = useState(null);

  const allFields = appointments.map((appointment) => appointment.field_name);
  const fields = [...new Set(allFields)];

  const handleFilter = (field) => {
    setSelectedField(field);
    setActiveButton(field);
  };

  const handleResetFilters = () => {
    setSelectedField("");
    setActiveButton(null);
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
        {sortedAppointments
          .filter(
            (appointment) =>
              selectedField === "" || appointment.field_name === selectedField
          )
          .map((appointment) => (
            <article
              key={appointment.appointment_id}
              className={
                appointment.status === "confirmed"
                  ? "admin-cards-confirmed"
                  : "admin-cards"
              }
            >
              {appointment.status === "confirmed" && (
                <p className="admin-confirmed-sentence">Confirmé</p>
              )}
              <p>Date : {appointment.time_slot_datetime}</p>
              <p>
                Avocat : {appointment.lawyer_firstname}{" "}
                {appointment.lawyer_lastname}
              </p>
              <p>
                Client : {appointment.client_firstname}{" "}
                {appointment.client_lastname}
              </p>
              <a
                href={`mailto:${appointment.client_email}?subject=Cabinet Girondin Avocats&body=Bonjour ${appointment.client_firstname}  ${appointment.client_lastname}, Nous avons bien reçu votre demande de consultation et aurions besoin de quelques précisions pour pouvoir la valider. Cordialement, L'équipe du Cabinet Girondin Avocats`}
              >
                Envoyer un email
              </a>
              <p>
                {appointment.client_tel &&
                  `Téléphone : ${appointment.client_tel}`}
              </p>
              <p>{appointment.note && `Note : ${appointment.note}`}</p>
              <section className="admin-section-forms">
                {appointment.status !== "confirmed" && (
                  <Form method="put">
                    <input type="hidden" name="status" value="confirmed" />
                    <input
                      type="hidden"
                      name="appointmentId"
                      value={appointment.appointment_id}
                    />
                    <button type="submit">Confirmer</button>
                  </Form>
                )}
                <Form method="delete">
                  <input
                    type="hidden"
                    name="appointmentId"
                    value={appointment.appointment_id}
                  />
                  <button type="submit">Supprimer</button>
                </Form>
              </section>
            </article>
          ))}
      </section>
    </>
  );
}

export default Admin;
