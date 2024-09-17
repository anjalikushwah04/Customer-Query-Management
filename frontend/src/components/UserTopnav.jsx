import React from 'react'
import { Link } from 'react-router-dom'

const UserTopnav = () => {
  return (
    <div className="row h-100 bg">
      <div className="col-2 my-auto">
        <h4>User Zone</h4>
      </div>
      <div className="col-2 my-auto ms-auto">
        <Link className="nav-link" to={'/login'}><i className='fa-solid fa-right-from-bracket'></i>Logout</Link>

      </div>

    </div>
  )
}

export default UserTopnav