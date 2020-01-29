import React from 'react'

const RideForm = ({ ride, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Origin</label>
    <input
      placeholder="Original location"
      name="origin"
      value={ride.origin}
      onChange={handleChange}
    />

    <label>Destination</label>
    <input
      placeholder="Destination location"
      type="text"
      value={ride.destination}
      name="destination"
      onChange={handleChange}
    />

    <label>Time</label>
    <input
      placeholder="YYYY-MM-DD"
      type="date"
      value={ride.time}
      name="time"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
  </form>
)

export default RideForm
