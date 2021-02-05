import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { IconContext } from "react-icons";
import { BiSearchAlt } from "react-icons/bi";
import { handleFilter } from "../../redux/actions/filterActions";

const SearchBar = ({ recettes, handleFilter }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleFilter(
      recettes.recettes.filter((recette) =>
        recette.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, recettes]);

  return (
    <div className='filtrerecette'>
      <IconContext.Provider value={{ color: "#73253c", size: "40px" }}>
        <BiSearchAlt className='loupe' />
      </IconContext.Provider>
      <input
        // className='filter'
        type='text'
        onChange={(e) => setSearch(e.target.value)}
        placeholder=' Rechercher une recette'
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  recettes: state.recettes,
});
const mapDispatchToProps = (dispatch) => ({
  handleFilter: (payload) => dispatch(handleFilter(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
