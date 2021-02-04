import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { addMovieFavorite, getMovies } from '../../actions/index'
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div className="contenedor">
      <div className="image" >
        <h2 className="buscador"> Buscador </h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="label">
            <input className="input"
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          <button className="button" type="submit">BUSCAR</button>
          </div>
        </form>
        <ul className="moviess">
         {
            this.props.movies && this.props.movies.map(el => (
              <div className="movies" key={el.imdbID}>
                <NavLink className="link" to={`/movie/${el.imdbID}`}>{el.Title}</NavLink>
                <NavLink to={`/movie/${el.imdbID}`}><img src={el.Poster} alt = "no esta"  ></img></NavLink> 
                <button className="fav" onClick={() => this.props.addMovie({title: el.Title, id: el.imdbID, poster:el.Poster})}>Agregar a Fav</button>
              </div>
            ))
         }
        </ul>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovie: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);