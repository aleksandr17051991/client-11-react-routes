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
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div className='text-center text-black'>
            <Link to='/'>Go to HOMEPAGE</Link>
          </div>
          {/* add new routes for new components */}
          <Switch>
            <Route exact path='/dashboard' component={() => <Dashboard />} />
            <Route exact path='/dashboard/main' component={() => <Main />} />
            <Route exact path='/dashboard/profile/:user' component={() => <Profile />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
