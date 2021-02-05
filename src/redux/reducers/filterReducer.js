const initialRecettes = {
  filter: [],
};

const filterReducer = (state = initialRecettes, action) => {
  switch (action.type) {
    case "DO_FILTER": {
      return { ...state, filter: action.payload };
    }
    default:
      return state;
  }
};

export default filterReducer;
