import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = ({movie}) => {
  const {id, title, poster_path, vote_average} = movie

  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="movie-poster"
      />

      <h2 className="movie-title">{title}</h2>

      <p className="movie-rating">Rating: {vote_average.toFixed(1)}</p>

      <Link to={`/movie/${id}`} className="details-button">
        View Details
      </Link>
    </div>
  )
}

export default MovieCard