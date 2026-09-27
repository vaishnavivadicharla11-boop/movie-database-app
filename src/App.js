import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import PopularMovies from './pages/PopularMovies'
import TopRatedMovies from './pages/TopRatedMovies'
import UpcomingMovies from './pages/UpcomingMovies'
import './App.css'

const App = () => (
  <>
    <Navbar />

    <Routes>
      <Route path="/" element={<PopularMovies />} />
      <Route path="/top-rated" element={<TopRatedMovies />} />
      <Route path="/upcoming" element={<UpcomingMovies />} />
    </Routes>
  </>
)

export default App
