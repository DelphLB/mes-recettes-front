import React, { useEffect, useState } from "react";
import "./home-page.css";
import axios from "axios";
import { GiCookingPot } from "react-icons/gi";
import { IconContext } from "react-icons";
import { BiSearchAlt } from "react-icons/bi";
import { connect } from "react-redux";
import { fetchRecipes } from "../../redux/actions/recipesAction";
import SearchBar from "./SearchBar";

const HomePage = ({ recettes, handleRecipes, filter }) => {
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/recettes/`)
      .then((response) => handleRecipes(response.data));
  }, []);

  console.log(recettes);

  console.log(filter);

  console.log(recettes);

  return (
    <div className='home-page'>
      coucou
      <h1 className='title-home'> Bienvenue,</h1>
      <h2 className='subtitle-home'>
        {" "}
        Choisis ta recette et file en cuisine !
      </h2>
      <div className='section-recette'>
        <SearchBar />

        <div className='blocks-recettes'>
          {filter.filter.map((recette) => (
            <div className='block-recette-solo'>
              <img
                className='image-recette'
                src={recette.image}
                alt={recette.title}
              />
              <h4>{recette.title}</h4>
              <IconContext.Provider value={{ color: "#f6bd60", size: "30px" }}>
                <p>
                  {recette.sweet === 1 && "Sucré"}{" "}
                  {recette.savory === 1 && "Salé"}{" "}
                  {recette.lactose === 1 && "•  Contient du lactose"}{" "}
                  {recette.veggie === 1 && "•  Végétarien"}
                  {recette.level === 1 && (
                    <p>
                      {" "}
                      <GiCookingPot />
                    </p>
                  )}
                  {recette.level === 2 && (
                    <p>
                      {" "}
                      <GiCookingPot /> <GiCookingPot />
                    </p>
                  )}
                  {recette.level === 3 && (
                    <p>
                      {" "}
                      <GiCookingPot /> <GiCookingPot /> <GiCookingPot />
                    </p>
                  )}
                </p>
              </IconContext.Provider>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recettes: state.recettes,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  handleRecipes: (payload) => dispatch(fetchRecipes(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
