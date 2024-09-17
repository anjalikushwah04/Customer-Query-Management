import React from 'react'
import { Link } from 'react-router-dom'

const AdSidenav = () => {
  return (
    <div className="row p-2 s1">
      <div className="col-md-12 p-2 mt-5">
        <Link className='nav-link my-5 ps-3 pt-2 text-white f-bold' to={`/admin/dashboard`}><i className='fa fa-book'></i> Dashboard</Link>
        <Link className='nav-link ps-1 text-white' to={`/viewalluser`}><i className='fa fa-user'></i> All Users</Link>
        <Link className='nav-link ps-1 text-white ' to={`/allpendingquery`}><i className='fa fa-eye'></i> All Pending Query</Link>
        <Link className='nav-link ps-1 text-white ' to={`/allprocessingquery`}><i className='fa fa-eye'></i> All Processing Query</Link>
        <Link className='nav-link ps-1 text-white ' to={`/allcompletedquery`}><i className='fa fa-eye'></i>  All Completed Query</Link>
      </div>
    </div>
  )
}

export default AdSidenav