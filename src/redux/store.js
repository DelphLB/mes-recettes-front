import { createStore, combineReducers, compose } from "redux";
import filterReducer from "./reducers/filterReducer";
import recipesReducer from "./reducers/recipesReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  recettes: recipesReducer,
  filter: filterReducer,
  selectedRecipe: recipesReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
