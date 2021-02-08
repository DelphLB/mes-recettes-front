import React, { useEffect } from "react";
import "./home-page.css";
import axios from "axios";
import { GiCookingPot } from "react-icons/gi";
import { IconContext } from "react-icons";
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import {
  fetchRecipes,
  selectedRecipe,
} from "../../redux/actions/recipesAction";
import SearchBar from "./SearchBar";

const HomePage = ({
  user,
  recettes,
  handleRecipes,
  handleSelectedRecipe,
  filter,
  recette,
}) => {
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/recettes/`)
      .then((response) => handleRecipes(response.data));
  }, []);

  const handlePageRecette = async (id) => {
    await handleSelectedRecipe(
      recettes.recettes.filter((recette) => recette.id == id)
    );

    history.push(`/recette/${id}`);
  };

  console.log(recettes);
  console.log(recette);

  console.log(filter);

  console.log(recettes);

  return (
    <div className='home-page'>
      <h2 className='subtitle-home'>
        {" "}
        {user.connected === true && user.data.datauser.name + ","} Choisis ta
        recette et file en cuisine !
      </h2>
      <div className='section-recette'>
        <SearchBar />

        <div className='blocks-recettes'>
          {filter.filter.map((recette) => (
            <div
              className='block-recette-solo'
              onClick={(id) => handlePageRecette(recette.id)}>
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
  recette: state.selectedRecipe.selectedRecipe[0],
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  handleRecipes: (payload) => dispatch(fetchRecipes(payload)),
  handleSelectedRecipe: (payload) => dispatch(selectedRecipe(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
