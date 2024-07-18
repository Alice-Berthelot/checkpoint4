import "../styles/Welcome.css";
import arrowScrollDown from "../assets/images/arrow-scrolldown.svg";

function Welcome() {
  return (
    <>
      <h1>GIRONDIN AVOCATS</h1>
      <p className="tagline">Expertise juridique, approche humaine</p>
      <img
        src={arrowScrollDown}
        alt="flèche indiquant qu'il y a une suite en dessous"
        className="arrow-scroll-down"
      />
    </>
  );
}

export default Welcome;
