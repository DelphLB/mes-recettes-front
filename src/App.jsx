import HomePage from "./components/home/HomePage";
import { Route, Switch } from "react-router";

import "./App.css";

import NavBar from "./components/reusable/NavBar";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
