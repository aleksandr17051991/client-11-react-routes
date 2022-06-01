import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Head from './head'

const Profile = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Profile" />
      <div className="flex items-center justify-center">
        <div className="flex flex-col bg-indigo-400 text-black font-bold rounded-lg border shadow-lg p-20">
          <div id="title" className='text-center'>Profile</div>
          <Link to="/dashboard">➤ Go To Root</Link>
          <Link to="/dashboard/main">➤ Go To Main</Link>
          <div id="username">{user}</div>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
