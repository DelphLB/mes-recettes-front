import React, { useEffect, useState } from "react";
import "./home-page.css";
import axios from "axios";
import { GiCookingPot } from "react-icons/gi";

const HomePage = () => {
  const [recettes, setRecettes] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      axios
        .get(`http://localhost:3000/api/recettes/`)
        .then((response) => setRecettes(response.data));

      await setFilter(
        recettes.filter((recette) =>
          recette.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
    return fetchData;
  }, [search, recettes]);

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
        <div className='filtrerecette'>
          <input
            className='filter'
            type='text'
            onChange={(e) => setSearch(e.target.value)}
            placeholder=' Rechercher par nom (Ginto, Wok...)'
          />
        </div>
        <div className='blocks-recettes'>
          {filter.map((recette) => (
            <div className='block-recette-solo'>
              <img
                src={recette.image}
                alt={recette.title}
                className='ImageLive'
              />
              <h4>{recette.title}</h4>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
