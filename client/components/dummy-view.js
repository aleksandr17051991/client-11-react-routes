import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex  items-center justify-center h-screen">
        <div className="flex flex-col bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          This is dummy component
          <Link to="/dashboard">Click Me</Link>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
