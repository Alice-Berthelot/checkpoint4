import "../styles/Values.css";
import balance from "../assets/images/balanced_justice.png";
import listStyle from "../assets/images/list-style.svg";

function Values() {
  return (
    <section className="values-section">
      <h2 className="subtitle-secondary-color values-title">NOS VALEURS</h2>
      <article className="values-article">
        <ul>
          <li>
            <img src={listStyle} alt="point de la liste" />
            <p>Déontologie et confidentialité</p>
          </li>
          <li>
            <img src={listStyle} alt="point de la liste" />
            <p>Rigueur et qualité technique</p>
          </li>
          <li>
            <img src={listStyle} alt="point de la liste" />
            <p>Ecoute et réactivité</p>
          </li>
        </ul>
        <ul>
          <li>
            <img src={listStyle} alt="point de la liste" />
            <p>Transparence</p>
          </li>
          <li>
            <img src={listStyle} alt="point de la liste" />
            <p>Relation de confiance</p>
          </li>
          <li>
            <img src={listStyle} alt="point de la liste" />
            <p>Diversité</p>
          </li>
        </ul>
      </article>
      <img src={balance} alt="icone de la balance de la justice" />
    </section>
  );
}

export default Values;
