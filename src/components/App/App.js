import React, { Component, Fragment } from 'react'
import { Route, withRouter } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Rides from '../../routes/Rides'
import Ride from '../../routes/Ride.js'
import RideEdit from '../../routes/RideEdit'
import RideCreate from '../../routes/RideCreate'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/rides' render={() => (
            <Rides alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/rides/:id' render={({ match }) => (
            <Ride alert={this.alert} user={user} match={match}/>
          )} />
          <AuthenticatedRoute user={user} exact path='/rides/:id/edit' render={({ match }) => (
            <RideEdit alert={this.alert} user={user} match={match}/>
          )} />
          <AuthenticatedRoute user={user} path='/create-ride' render={() => (
            <RideCreate alert={this.alert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default withRouter(App)
