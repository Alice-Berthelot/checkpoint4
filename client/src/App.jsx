import { Outlet } from "react-router-dom";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <main>
      <NavBar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
