const initialRecettes = {
  recettes: [],
};

const recipesReducer = (state = initialRecettes, action) => {
  switch (action.type) {
    case "FETCH_RECIPES": {
      return { ...state, recettes: action.payload };
    }
    default:
      return state;
  }
};

export default recipesReducer;
