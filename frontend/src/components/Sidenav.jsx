import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Sidenav = () => {
  const { id } = useParams();
  return (
    <div className="row p-2 ">
      <div className="col-md-12 mt-5">
        <Link className='nav-link my-5 ps-3 pt-2 text-white f-bold' to={`/userDashboard`}><i className='fa fa-book'></i> User Dashboard</Link>
        <Link className='nav-link ps-1 text-white ' to={`/addquery/${id}`}><i className='fa fa-question'></i> Add Query</Link>
        <Link className='nav-link ps-1 text-white ' to={`/viewpendingquery/${id}`}><i className='fa fa-eye'></i> View Pending Query</Link>
        <Link className='nav-link ps-1 text-white' to={`/viewprocessingquery/${id}`}><i className='fa fa-eye'></i> View Processing Query</Link>
        <Link className='nav-link ps-1 text-white' to={`/viewcompletedquery/${id}`}><i className='fa fa-eye'></i> View Completed Query</Link>
      </div>
    </div>
  )
}

export default Sidenav