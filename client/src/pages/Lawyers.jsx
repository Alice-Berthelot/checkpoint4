import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import "../styles/Lawyers.css";

function Lawyers() {
  const lawyers = useLoaderData();
  const [selectedField, setSelectedField] = useState("");
  const [activeButton, setActiveButton] = useState(null); // État pour suivre le bouton actif
  const [activeAllButton, setActiveAllButton] = useState(true); // État pour suivre le bouton "Tout" actif

  const imgUrl = import.meta.env.VITE_API_URL;

  const allFields = lawyers.map((lawyer) => lawyer.field_name);
  const fields = [...new Set(allFields)];

  const handleFilter = (field) => {
    setSelectedField(field);
    setActiveButton(field);
    setActiveAllButton(false); // Désactiver le bouton "Tout"
  };

  const handleResetFilters = () => {
    setSelectedField("");
    setActiveButton(null); // Réinitialise le bouton actif à null
    setActiveAllButton(true); // Activer à nouveau le bouton "Tout"
  };

  return (
    <>
      <h2 className="lawyers-main-title">NOS EQUIPES</h2>
      <section className="lawyers-filter-section">
        <button
          type="button"
          onClick={handleResetFilters}
          className={`button-normal ${activeAllButton ? "button-active" : ""}`}
        >
          Tout
        </button>
        {fields.map((field) => (
          <button
            key={field}
            type="button"
            onClick={() => handleFilter(field)}
            className={`button-normal ${activeButton === field ? "button-active" : ""}`}
          >
            {field}
          </button>
        ))}
      </section>
      <section className="lawyers-cards-section">
        {lawyers
          .filter(
            (lawyer) =>
              selectedField === "" || lawyer.field_name === selectedField
          )
          .map((lawyer) => (
            <article key={lawyer.id} className="lawyers-cards">
              <img
                src={`${imgUrl}/${lawyer.picture}`}
                alt={`photographie de Maître ${lawyer.lastname}`}
              />
              <h3>
                {lawyer.firstname} {lawyer.lastname}
              </h3>
              <p>{lawyer.role}</p>
              <p>{lawyer.field_name}</p>
            </article>
          ))}
      </section>
    </>
  );
}

export default Lawyers;
