import React from "react";
import logoImg from "../images/Logo.svg";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <div className="location">
          <span>Alcantara</span>
          <strong>São Gonçalo</strong>
        </div>

        <Link to="/map" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"></FiArrowRight>
        </Link>
      </div>
    </div>
  );
}

export default App;
