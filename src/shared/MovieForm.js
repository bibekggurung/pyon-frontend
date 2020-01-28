import React from 'react'

const MovieForm = ({ movie, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      placeholder="A wonderful film"
      name="title"
      value={movie.title}
      onChange={handleChange}
    />

    <label>Director</label>
    <input
      placeholder="A director of your choice"
      value={movie.director}
      name="director"
      onChange={handleChange}
    />

    <label>Year</label>
    <input
      placeholder="YYYY-MM-DD"
      type="date"
      value={movie.year}
      name="year"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
  </form>
)

export default MovieForm
