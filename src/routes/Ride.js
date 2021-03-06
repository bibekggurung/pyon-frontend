import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../apiConfig'
import Layout from '../shared/Layout'

const Ride = (props) => {
  const [ride, setRide] = useState(null)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios({
      url: `${apiUrl}/rides/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(res => setRide(res.data.ride))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/rides/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (!ride) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/', state: { msg: 'Ride succesfully deleted!' } }
    } />
  }

  console.log('Ride.js console.', props)
  return (
    <Layout>
      <h4>{`${ride.origin} to ${ride.destination}`}</h4>
      <p>Origin: {ride.origin}</p>
      <p>Destination: {ride.destination}</p>
      <button onClick={destroy}>Delete Ride</button>
      <Link to={`/rides/${props.match.params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to="/rides">Back to all rides</Link>
    </Layout>
  )
}

export default Ride
