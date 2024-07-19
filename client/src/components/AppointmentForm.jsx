import { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/AppointmentForm.css";

function AppointmentForm({ fields, lawyers, timeSlots }) {
  const [selectedLawyer, setSelectedLawyer] = useState("");
  const [automaticField, setAutomaticField] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    let filteredTimeSlots = [];
    if (selectedLawyer && selectedLawyer !== "650") {
      filteredTimeSlots = timeSlots.filter(
        (timeSlot) => timeSlot.lawyer_id === parseInt(selectedLawyer, 10)
      );
    } else if (selectedLawyer === "650" && selectedField) {
      filteredTimeSlots = timeSlots.filter((timeSlot) =>
        lawyers.includes(timeSlot.lawyer_id)
      );
    } else {
      filteredTimeSlots = timeSlots.filter(
        (timeSlot) => timeSlot.field_id === parseInt(selectedField, 10)
      );
    }
    setAvailableTimeSlots(filteredTimeSlots);
  }, [selectedField, selectedLawyer, timeSlots]);

  const handleLawyerChange = (event) => {
    const lawyerId = event.target.value;
    setSelectedLawyer(lawyerId);

    if (lawyerId === "650") {
      setAutomaticField("");
      setSelectedField("");
    } else {
      const existingLawyer = lawyers.find(
        (lawyer) => lawyer.id === parseInt(lawyerId, 10)
      );
      if (existingLawyer) {
        setAutomaticField(existingLawyer.field_id);
        setSelectedField(existingLawyer.field_id);
      } else {
        setAutomaticField("");
        setSelectedField("");
      }
    }
  };

  const handleFieldChange = (e) => {
    const fieldId = e.target.value;
    setSelectedField(fieldId);
  };

  const handleClick = () => {
    setShowConfirmation(true);
  };

  return (
    <section className="appointment-section">
      <article className="appointment-article">
        <h2 className="subtitle-secondary-color appointment-subtitle">
          NOUS RENCONTRER
        </h2>
        <p>
          Vous pouvez demander un rendez-vous pour une consultation en
          remplissant le formulaire ci-dessous. Vous recevrez un e-mail de
          confirmation après validation par nos équipes.
        </p>
        <Form method="POST" className="appointment-form" onSubmit={handleClick}>
          <article>
            <fieldset>
              <label htmlFor="firstname">Prénom *</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Votre prénom"
                required
              />
              <label htmlFor="lastname">Nom de famille *</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Votre nom de famille"
                required
              />

              <label htmlFor="email">Adresse e-mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Votre adresse e-mail"
                required
              />
              <label htmlFor="phone_number">Numéro de téléphone</label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                placeholder="Votre numéro de téléphone"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="lawyer">
                Etes-vous déjà assisté par l’un de nos avocats ? *
              </label>
              <select
                id="lawyer"
                name="lawyer"
                required
                onChange={handleLawyerChange}
              >
                <option value="">-- Sélectionner une réponse --</option>
                <option value="650">Non</option>
                {lawyers.map((lawyer) => (
                  <option key={lawyer.id} value={lawyer.id}>
                    Maître {lawyer.firstname} {lawyer.lastname}
                  </option>
                ))}
              </select>

              <label htmlFor="field">Domaine d'expertise *</label>
              <select
                id="field"
                name="field"
                value={selectedField}
                onChange={handleFieldChange}
                disabled={
                  selectedLawyer !== "650" && selectedField !== automaticField
                }
                required={selectedLawyer === "650"}
              >
                <option value="">-- Sélectionner une réponse --</option>
                {fields.map((field) => (
                  <option key={field.id} value={field.id}>
                    {field.name}
                  </option>
                ))}
              </select>
              <label htmlFor="date">Créneau souhaité *</label>
              <select id="date" name="date" required>
                <option value="">-- Sélectionner un créneau --</option>
                {availableTimeSlots.map((timeSlot) => (
                  <option key={timeSlot.id} value={timeSlot.id}>
                    {timeSlot.datetime}
                  </option>
                ))}
              </select>
              <label htmlFor="note">Préciser le motif de votre demande</label>
              <textarea id="note" name="note" />
            </fieldset>
          </article>
          <button type="submit">Envoyer</button>
        </Form>
        {showConfirmation === true && (
          <p className="confirmation-sending">
            Votre demande de consultation a bien été envoyée
          </p>
        )}
      </article>
    </section>
  );
}

AppointmentForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  lawyers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      field_id: PropTypes.number.isRequired,
    })
  ).isRequired,
  timeSlots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      datetime: PropTypes.string.isRequired,
      lawyer_id: PropTypes.number.isRequired,
      field_id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default AppointmentForm;
