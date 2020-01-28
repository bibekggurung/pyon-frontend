import React from 'react'

const RideForm = ({ ride, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      placeholder="A wonderful film"
      name="title"
      value={ride.title}
      onChange={handleChange}
    />

    <label>Director</label>
    <input
      placeholder="A director of your choice"
      value={ride.director}
      name="director"
      onChange={handleChange}
    />

    <label>Year</label>
    <input
      placeholder="YYYY-MM-DD"
      type="date"
      value={ride.year}
      name="year"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
  </form>
)

export default RideForm
