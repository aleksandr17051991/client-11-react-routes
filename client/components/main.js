import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Main" />
      <div className="flex items-center justify-center">
        <div className="flex flex-col bg-indigo-600 text-white font-bold rounded-lg border shadow-lg p-20">
          <div id="title" className='text-center'>Main</div>
          <Link to="/dashboard/profile/e5cdc425-31da-4a12-a3b9-f20291b60d0e">➤ Go To Profile</Link>
          <Link to="/dashboard">➤ Go To Root</Link>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
