import React from "react";
import { GiCookingPot } from "react-icons/gi";
import { IconContext } from "react-icons";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import { connect } from "react-redux";
import "./page-recette.css";
const PageRecette = ({ recette }) => {
  return (
    <div
      className='page-recette'
      style={{
        backgroundImage: `linear-gradient(
          rgba(252, 190, 156, 0.5),
          rgba(182, 163, 199, 0.5)
        ),url("${recette.image}")`,

        backgroundSize: "90%",
        zIndex: -1,
      }}>
      <div className='box-title-recette'>
        <h1 className='title-page-recette'>{recette.title}</h1>
      </div>

      <div className='description-page-recette'>
        <IconContext.Provider value={{ color: "#f6bd60", size: "30px" }}>
          <div className='description-details'>
            <h4>Ingérdients : </h4> <p>{recette.ingredients}</p>
            <h4>Ustensils :</h4> <p>{recette.material}</p>
            <h4>Spécilité :</h4>
            <p>
              {recette.sweet === 1 && "Plat sucré"}{" "}
              {recette.savory === 1 && "Plat salé"}{" "}
              {recette.lactose === 1 && "•  Contient du lactose"}{" "}
              {recette.veggie === 1 && "•  Végétarien"}
              <h4>Difficulté :</h4>{" "}
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
            <h4>Portions :</h4>
            <p>{recette.portions} personnes</p>
          </div>
        </IconContext.Provider>
        <div className='description-long'>
          <IconContext.Provider value={{ color: "#73253c", size: "60px" }}>
            <ImQuotesLeft />

            <h5>{recette.instructions}</h5>
            <ImQuotesRight />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recettes: state.recettes,
  recette: state.selectedRecipe.selectedRecipe[0],
});

export default connect(mapStateToProps)(PageRecette);
