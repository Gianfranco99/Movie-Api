import React from "react";
import "./App.css"
import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";

function App() {
  return (
    <div className="App-header">
      <React.Fragment >
          <NavBar  />
          <Route exact path="/Movie-Api/" component={Buscador} />
          <Route path="/Movie-Api/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} />
      </React.Fragment>
      </div>
  );
}

export default App;
