import {Link} from 'react-router-dom'
import './index.css'

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="logo">
      movieDB
    </Link>

    <div className="nav-links">
      <Link to="/">Popular</Link>
      <Link to="/top-rated">Top Rated</Link>
      <Link to="/upcoming">Upcoming</Link>
    </div>

    <div className="search-container">
      <input
        type="search"
        placeholder="Search movies..."
        className="search-input"
      />

      <button type="button" className="search-button">
        Search
      </button>
    </div>
  </nav>
)

export default Navbar
