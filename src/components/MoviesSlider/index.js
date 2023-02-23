import {Component} from 'react'
import Slider from 'react-slick'

import MovieItem from '../MovieItem'

class MoviesSlider extends Component {
  render() {
    const {moviesList} = this.props
    const settings = {
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
    }
    return (
      <Slider {...settings}>
        {moviesList.map(movieDetails => (
          <MovieItem key={movieDetails.id} movieDetails={movieDetails} />
        ))}
      </Slider>
    )
  }
}
export default MoviesSlider
