import { Outlet } from "react-router-dom";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
