import React, { Component } from "react";
 import { connect } from "react-redux";
 import { removeMovieFavorite } from "../../actions/index";
 import { Link } from 'react-router-dom';
 import { NavLink } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2 className="title" >Películas, series o videojuegos favoritos</h2>
        <div className="favoritas">
        <ul>
          {
          this.props.movies && this.props.movies.map((el,i) => (
            <div  key ={i}>
           <NavLink className="nombre" to={`/movie/${el.id}`}>{el.title}</NavLink>
           <img src={el.poster} alt ="no esta"></img>
           <div className="eliminar" >
           <button className="button" onClick= {() => this.props.removeMovieFavorite({title:el.title, id:el.imdbID})}>Eliminar</button>
           </div >
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
    movies: state.movies
  };
  
}

function mapDispatchToProps(dispatch){
return{
  removeMovieFavorite: movie => dispatch (removeMovieFavorite(movie))
}
}


export default connect(mapStateToProps,mapDispatchToProps) (ConnectedList);
