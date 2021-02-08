import HomePage from "./components/home/HomePage";
import PageRecette from "./components/pageRecette/PageRecette";
import PostRecette from "./components/postRecette/PostRecette";
import signIn from "./components/signIn/signIn";
import { Route, Switch } from "react-router";

import "./App.css";

import NavBar from "./components/reusable/NavBar";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/recette/:id' component={PageRecette} />
        <Route path='/ajouter-recette/' component={PostRecette} />
        <Route exact path='/connexion' component={signIn} />
      </Switch>
    </div>
  );
}

export default App;
