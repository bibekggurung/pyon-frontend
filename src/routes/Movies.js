import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

const Movies = props => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/movies`)
      .then(res => setMovies(res.data.movies))
      .catch(console.error)
  }, [])

  const moviesJsx = movies.map(movie => (
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  ))

  return (
    <Layout>
      <h4>Movies</h4>
      <ul>
        {moviesJsx}
      </ul>
    </Layout>
  )
}

export default Movies
