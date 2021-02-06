import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { IconContext } from "react-icons";
import { BiSearchAlt } from "react-icons/bi";
import { handleFilter } from "../../redux/actions/filterActions";

const SearchBar = ({ recettes, handleFilter, handleOptions }) => {
  const [search, setSearch] = useState("");
  const [filterVeg, setFilterVeg] = useState(false);
  const [filterLactose, setFilterLactose] = useState(false);
  const [filterSweet, setFilterSweet] = useState(false);
  const [filterSavory, setFilterSavory] = useState(false);

  useEffect(() => {
    handleFilter(
      recettes.recettes.filter((recette) =>
        recette.title.toLowerCase().includes(search.toLowerCase())
      )
    );
    filterVeg === true &&
      handleOptions(
        recettes.recettes.filter((recette) => recette.veggie === 1)
      );

    filterLactose === true &&
      handleOptions(
        recettes.recettes.filter((recette) => recette.lactose === 0)
      );

    filterSavory === true &&
      handleOptions(
        recettes.recettes.filter((recette) => recette.savory === 1)
      );

    filterSweet === true &&
      handleOptions(recettes.recettes.filter((recette) => recette.sweet === 1));
  }, [search, recettes, filterVeg, filterLactose, filterSweet, filterSavory]);

  const handleOptionVeggie = () => {
    setFilterVeg(!filterVeg);
  };

  const handleOptionLactose = () => {
    setFilterLactose(!filterLactose);
  };

  const handleOptionSweet = () => {
    setFilterSweet(!filterSweet);
  };

  const handleOptionSavory = () => {
    setFilterSavory(!filterSavory);
  };

  console.log(filterVeg);

  return (
    <div className='filtrerecette'>
      Veggie ?
      <input
        type='checkbox'
        value='1'
        id='veggie'
        name='check'
        onChange={handleOptionVeggie}
      />
      Sans Lactose ?{" "}
      <input
        type='checkbox'
        value='1'
        id='lactose'
        name='check'
        onChange={handleOptionLactose}
      />
      Salé ?{" "}
      <input
        type='checkbox'
        value='1'
        id='lactose'
        name='check'
        onChange={handleOptionSavory}
      />
      Sucré ?{" "}
      <input
        type='checkbox'
        value='1'
        id='lactose'
        name='check'
        onChange={handleOptionSweet}
      />
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
  handleOptions: (payload) => dispatch(handleFilter(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
