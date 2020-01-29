import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../apiConfig'
import RideForm from '../shared/RideForm'
import Layout from '../shared/Layout'

const RideEdit = (props) => {
  const [ride, setRide] = useState({ origin: '', destination: '', time: '' })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    console.log(props)
    axios(`${apiUrl}/rides/${props.match.params.id}`)
      .then(res => setRide(res.data.ride))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setRide(ride => ({ ...ride, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/rides/:id/edit`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { ride }
    })
      .then(() => setUpdated(true))
      .catch(console.error)
  }

  if (updated) {
    return <Redirect to={`/rides/${props.match.params._id}`} />
  }

  return (
    <Layout>
      <RideForm
        ride={ride}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/rides/${props.match.params._id}`}
      />
    </Layout>
  )
}

export default RideEdit
