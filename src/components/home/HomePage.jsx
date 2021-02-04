import React, { useEffect, useState } from "react";
import "./home-page.css";
import axios from "axios";

const HomePage = () => {
  const [recettes, setRecettes] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/recettes/`)
      .then((response) => setRecettes(response.data));
  }, []);

  console.log(recettes);

  return (
    <div className='home-page'>
      coucou
      <h1 className='title-home'> Bienvenue,</h1>
      <h2 className='subtitle-home'>
        {" "}
        Choisis ta recette et file en cuisine !
      </h2>
      <div className='blocks-recettes'>
        {recettes.map((recette) => (
          <div className='block-recette-solo'>
            <h4>{recette.title}</h4>
            <img
              src={recette.image}
              alt={recette.title}
              className='ImageLive'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
