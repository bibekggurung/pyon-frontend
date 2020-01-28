import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import MovieForm from '../shared/MovieForm'
import Layout from '../shared/Layout'

const MovieEdit = (props) => {
  const [movie, setMovie] = useState({ title: '', director: '', year: '' })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/movies/${props.match.params.id}`)
      .then(res => setMovie(res.data.movie))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setMovie(movie => ({ ...movie, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/movies/${props.match.params.id}`,
      method: 'PATCH',
      data: { movie }
    })
      .then(() => setUpdated(true))
      .catch(console.error)
  }

  if (updated) {
    return <Redirect to={`/movies/${props.match.params.id}`} />
  }

  return (
    <Layout>
      <MovieForm
        movie={movie}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/movies/${props.match.params.id}`}
      />
    </Layout>
  )
}

export default MovieEdit
