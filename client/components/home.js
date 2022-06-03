import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import Header from './header'
import Dashboard from './dashboard'
import Main from './main'
import Profile from './profile'

const Home = () => {
  return (
    <div>
      <Header />
          <div className='text-center text-black font-bold rounded-lg border shadow-lg p-20'>
            <Link to='/'>HOMEPAGE</Link>
          </div>
          {/* add new routes for new components */}
          <Switch>
            <Route exact path='/dashboard' component={() => <Dashboard />} />
            <Route exact path='/dashboard/main' component={() => <Main />} />
            <Route exact path='/dashboard/profile/:user' component={() => <Profile />} />
          </Switch>
    </div>
      
  )
}

Home.propTypes = {}

export default React.memo(Home)
