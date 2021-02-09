import React from 'react';
import '../styles/accueil.css';
import arrow from '../assets/Arrow.svg';
import { Link } from 'react-router-dom';
const Accueil = () => {
  return (
    <div className="container">
      <div
        className="row"
        style={{
          marginTop: 150,
        }}
      >
        <div className="col-3"></div>
        <div className="col-6">
          <Link to="/interventions">
            <button className="my-button">
              <span class="icon-1"></span>mes interventions
              <span class="badge">3</span>
            </button>
          </Link>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <button className="my-button">
            <span class="icon-2"></span>Historique
          </button>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default Accueil;
