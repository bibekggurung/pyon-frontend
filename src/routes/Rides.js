import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../apiConfig.js'
import Layout from '../shared/Layout'

const Rides = props => {
  const [rides, setRides] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/rides`)
      .then(res => setRides(res.data.rides))
      .catch(console.error)
  }, [])

  const ridesJsx = rides.map(ride => (
    <li key={ride.id}>
      <Link to={`/rides/${ride.id}`}>{ride.title}</Link>
    </li>
  ))

  return (
    <Layout>
      <h4>Rides</h4>
      <ul>
        {ridesJsx}
      </ul>
    </Layout>
  )
}

export default Rides
