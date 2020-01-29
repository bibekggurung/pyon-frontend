import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../apiConfig.js'
import Layout from '../shared/Layout'

const Rides = props => {
  const [rides, setRides] = useState([])

  useEffect(() => {
    axios({
      url: `${apiUrl}/rides`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(res => setRides(res.data.rides))
      .catch(console.error)
  }, [])

  const ridesJsx = rides.map(ride => (
    <li key={ride._id}>
      <Link to={`/rides/${ride._id}`}>{ride.origin}</Link>
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
