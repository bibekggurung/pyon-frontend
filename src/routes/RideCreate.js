import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../apiConfig'
import RideForm from '../shared/RideForm'
import Layout from '../shared/Layout'

const RideCreate = (props) => {
  const [ride, setRide] = useState({ title: '', director: '', year: '' })
  const [createdRideId, setCreatedRideId] = useState(null)

  const handleChange = event => {
    event.persist()
    setRide(ride => ({ ...ride, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/rides`,
      method: 'POST',
      data: { ride }
    })
      .then(res => setCreatedRideId(res.data.ride.id))
      .catch(console.error)
  }

  if (createdRideId) {
    return <Redirect to={`/rides/${createdRideId}`} />
  }

  return (
    <Layout>
      <RideForm
        ride={ride}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
    </Layout>
  )
}

export default RideCreate
