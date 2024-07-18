import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/Fields.css";

function Fields({ iconUrl, fields }) {
  return (
    <section className="fields-section">
      <article className="fields-article">
        <h2 className="subtitle-secondary-color fields-subtitle">
          NOS EXPERTISES
        </h2>
        {fields.map((field) => (
          <figure
            key={field.id}
            className={`fields-icon fields-icon-${field.id}`}
          >
            <img
              src={`${iconUrl}/${field.icon}`}
              alt={`icône illustrant le ${field.name}`}
            />
            <figcaption>{field.name}</figcaption>
          </figure>
        ))}
        <Link to="/lawyers" className="fields-link">
          Voir nos équipes
        </Link>
      </article>
    </section>
  );
}

Fields.propTypes = {
  iconUrl: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Fields;
