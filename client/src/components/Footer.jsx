import logoWhite from "../assets/images/logotransparentwhite.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <img src={logoWhite} alt="logo du cabinet" className="logo-footer" />
      <p>2024</p>
    </footer>
  );
}

export default Footer;
