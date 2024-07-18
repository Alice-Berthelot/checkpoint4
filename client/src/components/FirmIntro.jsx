import PropTypes from "prop-types";
import teamPicture from "../assets/images/lawyersteam.png";
import Statistics from "./Statistics";
import "../styles/FirmIntro.css";

function FirmIntro({ fields, lawyers }) {
  return (
    <section className="firm-intro-section">
      <article className="firm-intro-article">
        <h2 className="subtitle-secondary-color">QUI SOMMES-NOUS ?</h2>
        <p>
          Créé en 2007 par Maître Jean Lefèvre-Dupont, notre cabinet d'avocats
          bordelais met un point d'honneur à privilégier l'humain dans chacune
          de nos interventions.
        </p>
        <p>
          Forts de notre expérience et de notre expertise, nous intervenons dans
          quatre domaines principaux : le droit des affaires, le droit de la
          famille, le droit pénal et le droit du travail. Aujourd'hui, notre
          équipe est composée de 18 avocats spécialisés, tous animés par la même
          volonté d'apporter des solutions juridiques adaptées et efficaces à
          nos clients. Que vous soyez un particulier ou une entreprise, nous
          nous engageons à vous offrir un accompagnement personnalisé et
          rigoureux, en mettant à votre disposition notre savoir-faire et notre
          dévouement. Au Cabinet Girondin Avocats, nous croyons en une approche
          humaine et empathique pour défendre vos droits et vos intérêts.
        </p>
      </article>

      <img
        src={teamPicture}
        alt="équipe du cabinet"
        className="firm-intro-picture"
      />
      <Statistics fields={fields} lawyers={lawyers} />
    </section>
  );
}

FirmIntro.propTypes = {
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

export default FirmIntro;
