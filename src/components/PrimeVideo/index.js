import {Component} from 'react'

import MoviesSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  getActionMovies = () => {
    const {moviesList} = this.props

    const actionMoviesList = moviesList.filter(
      movie => movie.categoryId === 'ACTION',
    )

    return actionMoviesList
  }

  getComedyMovies = () => {
    const {moviesList} = this.props

    const comedyMoviesList = moviesList.filter(
      movie => movie.categoryId === 'COMEDY',
    )

    return comedyMoviesList
  }

  render() {
    const actionMoviesList = this.getActionMovies()
    const comedyMoviesList = this.getComedyMovies()

    return (
      <>
        <div className="bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime video"
            className="banner"
          />
          <div className="movie-container">
            <div className="container">
              <h1 className="heading">Action Movies</h1>
              <div className="slider-container">
                <MoviesSlider moviesList={actionMoviesList} />
              </div>
            </div>
            <div className="container">
              <h1 className="heading">Comedy Movies</h1>
              <div className="slider-container">
                <MoviesSlider moviesList={comedyMoviesList} />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default PrimeVideo
