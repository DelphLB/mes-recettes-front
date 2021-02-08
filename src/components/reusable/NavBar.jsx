import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { connect } from "react-redux";
const NavBar = (user) => {
  const [activeId, setActiveId] = useState("home");

  return (
    <div className='navbar'>
      <nav>
        <div className='list'>
          <div>
            <button
              type='button'
              onClick={() => setActiveId("home")}
              className={activeId === "home" ? "items active" : "items"}>
              <Link className='linkPages' to='/'>
                <p>Accueil</p>
              </Link>
            </button>
          </div>
          <button
            type='button'
            onClick={() => setActiveId("recette")}
            className={activeId === "recette" ? "items active" : "items"}>
            {user.user.connected == true ? (
              <Link className='linkPages' to='/ajouter-recette'>
                <p>Ajouter une recette</p>
              </Link>
            ) : (
              <Link className='linkPages' to='/connexion'>
                <p>Ajouter une recette</p>
              </Link>
            )}
          </button>
        </div>
        <div className='title-site'>
          <h1 className='bonne-recette'>La Bonne Recette</h1>
        </div>

        <div className='list'>
          <button
            type='button'
            onClick={() => setActiveId("connexion")}
            className={activeId === "connexion" ? "items active" : "items"}>
            <Link className='linkPages' to='/connexion'>
              <p>Me Connecter</p>
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(NavBar);
