import React from 'react';
import '../../styles/navbar.css';
import logo from '../../assets/logo.png';
import logout from '../../assets/logout.svg';
import add from '../../assets/add_circle_24px.svg';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <div class="nav-container">
      <div class="nav-wrapper">
        <nav>
          <div class="logo">
            {/* <Link
              style={{
                textDecoration: 'none',
              }}
              to="/"
            > */}
            <p class="logo">
              {' '}
              {location.pathname === '/' ? 'Accueil' : 'Mes Interventions'}{' '}
            </p>
            {/* </Link> */}
          </div>

          <button id="fixedbutton">
            <img src={add} alt="" />
          </button>

          <ul class="nav-items">
            <li>
              <img src={logo} />
            </li>

            <li>
              <p>Bonjour, John</p>
            </li>

            <li>
              <div className="date">07/09/2020</div>
            </li>

            <li>
              <a>
                <img id="logout-btn" src={logout} alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
