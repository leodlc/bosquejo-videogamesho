import React, { useState } from 'react';
import logonav from '../assets/logo2.png';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser, faDesktop, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar-logo">
        <Link to="/"><img src={logonav} alt="logo" /></Link>
        
        <h4>
          <span class="highlight">Discover</span> the 
          <span class="highlight"> essence</span> of fun
          {/* <span class="highlight"> fun</span> */}
        </h4>

      </div>
      <div className="nav-bar-gameCategories">
        <div
          className={`nav-bar-gameCategories_link ${activeLink === 'pc' ? 'active' : ''}`}
          onClick={() => handleClick('pc')}
        >
          <FontAwesomeIcon icon={faDesktop} />
          <Link to="/pc">PC</Link>
        </div>
        <div
          className={`nav-bar-gameCategories_link ${activeLink === 'playstation' ? 'active' : ''}`}
          onClick={() => handleClick('playstation')}
        >
          <FontAwesomeIcon icon={faPlaystation} />
          <Link to="/playstation">PlayStation</Link>
        </div>
        <div
          className={`nav-bar-gameCategories_link ${activeLink === 'xbox' ? 'active' : ''}`}
          onClick={() => handleClick('xbox')}
        >
          <FontAwesomeIcon icon={faXbox} />
          <Link to="/xbox">Xbox</Link>
        </div>
        <div
          className={`nav-bar-gameCategories_link ${activeLink === 'nintendo' ? 'active' : ''}`}
          onClick={() => handleClick('nintendo')}
        >
          <FontAwesomeIcon icon={faGamepad} />
          <Link to="/nintendo">Nintendo</Link>
        </div>
      </div>
      <div className="nav-bar-buttonLoginAndCart">
        <FontAwesomeIcon icon={faBagShopping} style={{ color: 'white' }} size="1x" />
        <FontAwesomeIcon icon={faUser} style={{ color: 'white' }} size="1x" />
      </div>
    </div>
  );
};

export default NavBar;



