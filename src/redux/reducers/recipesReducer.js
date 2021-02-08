const initialRecettes = {
  recettes: [],
  selectedRecipe: [],
};

const recipesReducer = (state = initialRecettes, action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return { ...state, recettes: action.payload };
    case "SELECTED_RECIPE":
      return { ...state, selectedRecipe: action.payload };

    default:
      return state;
  }
};

export default recipesReducer;
