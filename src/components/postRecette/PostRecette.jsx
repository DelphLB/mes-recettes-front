import React, { useState } from "react";

import axios from "axios";
import "./ajout-recette.css";

import { useHistory } from "react-router-dom";
const PostRecette = () => {
  const [newRecette, setNewRecette] = useState({});
  const history = useHistory();
  const handleClick = async () => {
    await axios.post(`http://localhost:3000/api/recettes/`, {
      ...newRecette,
    });
    history.push("/");
  };

  const handleChange = (e) => {
    setNewRecette({ ...newRecette, [e.target.id]: e.target.value });
  };

  return (
    <div className='page-ajout'>
      <div className='mini-banner2'></div>
      <div className='post-recette'>
        <input
          className='input-simple'
          type='text'
          name='title'
          id='title'
          placeholder='Nom de la recette'
          onChange={(e) => handleChange(e)}
        />
        <textarea
          className='input-large'
          type='text'
          name='material'
          id='material'
          placeholder='Ustensils nécessaires'
          onChange={(e) => handleChange(e)}
        />
        <textarea
          className='input-large'
          type='text'
          name='material'
          id='ingredients'
          placeholder='Ingredients nécessaires'
          onChange={(e) => handleChange(e)}
        />
        <textarea
          className='input-large-instruction'
          type='text'
          name='instructions'
          id='instructions'
          placeholder='Indique la marche à suivre'
          onChange={(e) => handleChange(e)}
        />
        <select
          id='level'
          name='level'
          className='level'
          placeholder='Niveau de difficulté'
          onChange={(e) => handleChange(e)}>
          <option>Difficulté ?</option>
          <option value='1'>Facile</option>
          <option value='2'>Moyen</option>
          <option value='3'>Master Chef</option>
        </select>

        <select
          id='portions'
          name='level'
          className='level'
          placeholder='personnes'
          onChange={(e) => handleChange(e)}>
          <option>Nombre de portions ?</option>
          <option value='1'>1 personne</option>
          <option value='2'>2 personnes</option>
          <option value='3'>3 personnes</option>
          <option value='4'>4 personnes</option>
          <option value='5'>5 personnes</option>
          <option value='6'>6 personnes</option>
          <option value='7'>7 personnes</option>
          <option value='8'>8 personnes</option>
        </select>
        <input
          className='input-simple'
          type='text'
          name='image'
          id='image'
          placeholder='Poster la photo de votre recette'
          onChange={(e) => handleChange(e)}
        />
        <select
          id='lactose'
          name='lactose'
          className='level'
          placeholder='Niveau de difficulté'
          onChange={(e) => handleChange(e)}>
          <option> Contient du lactose ?</option>
          <option value='0'>Sans lactose</option>
          <option value='1'>Contient du lactose</option>
        </select>
        <select
          id='veggie'
          name='veggie'
          className='level'
          onChange={(e) => handleChange(e)}>
          <option> Convient aux végétariens ?</option>
          <option value='0'>Omnivore</option>
          <option value='1'>Végétarien</option>
        </select>
        <div>
          sucré
          <input
            type='checkbox'
            value='1'
            id='sweet'
            name='check'
            onChange={(e) => handleChange(e)}
          />
          salé{" "}
          <input
            type='checkbox'
            value='1'
            id='savory'
            name='check'
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      <button onClick={handleClick} className='envoyer'>
        Envoyer ma recette !
      </button>
    </div>
  );
};

export default PostRecette;
