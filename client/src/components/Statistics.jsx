import PropTypes from "prop-types";
import AnimatedNumber from "./AnimatedNumber";

function Statistics({ fields, lawyers }) {
  return (
    <article className="statistics-article">
      <figure>
        <AnimatedNumber target={lawyers.length} />
        <figcaption>avocats</figcaption>
      </figure>
      <figure>
        <AnimatedNumber target={fields.length} />
        <figcaption>domaines d'expertise</figcaption>
      </figure>
      <figure>
        <AnimatedNumber target={422} />
        <figcaption>clients satisfaits</figcaption>
      </figure>
      <figure>
        <AnimatedNumber target={96} />
        <figcaption>% de réussite</figcaption>
      </figure>
    </article>
  );
}

Statistics.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ).isRequired,
  lawyers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      lastname: PropTypes.string.isRequired,
      field_id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
