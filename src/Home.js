import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1 className="text-center">HOME PAGE</h1>
      <div className="center-button">
        <Link to="/missions">
          <button className="btn btn-primary mb-4">Jump To Mission Listing</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
