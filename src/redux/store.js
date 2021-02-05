import { createStore, combineReducers, compose } from "redux";
import filterReducer from "./reducers/filterReducer";
import recipesReducer from "./reducers/recipesReducer";

const rootReducer = combineReducers({
  recettes: recipesReducer,
  filter: filterReducer,
});

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
