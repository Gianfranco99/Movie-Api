import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.getMovie(movieId);
  }

  render() {
      return (
        <div className="contenedor2">
          <div className="estruc">
            <div>
          <div className="movie-card">
              
              <h1 className="title">{this.props.movie.Title}</h1>
              <h4 className="title">Year {this.props.movie.Year}</h4>
              <h4>Description</h4>
              <p >{this.props.movie.Plot}</p>
              <h4>Actors</h4> 
              <p>{this.props.movie.Actors}</p>  
              <h4 className="title" >Awards</h4>
            <p className="title">{this.props.movie.Awards}</p>
            <h4 className="title">Raiting {this.props.movie.imdbRating}</h4>
            </div>

              <img src={this.props.movie.Poster} alt = "no esta" className="img"></img>
          </div>
          </div>
          </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movieDetail
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getMovie: id => dispatch(getMovieDetail(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);