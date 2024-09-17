import React from 'react'
import { Link } from 'react-router-dom'
const Topnav = () => {
  return (
    <div className="row h-100 a1">
      <div className="col-2 my-auto">
        <h3>Admin Zone</h3>
      </div>
      <div className="col-md-2 ms-auto my-auto">
        <h6><Link to='/adlogin' className='nav-link'><i className='fa-solid fa-right-from-bracket'></i>Logout</Link></h6>
      </div>
    </div>
  )
}

export default Topnav