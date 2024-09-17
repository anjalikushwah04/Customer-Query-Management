import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div className="row p-2 bg h-100 s1">
      <div className="col-md-12 mt-5">
        <Link className='nav-link my-5 ps-3 pt-2 text-white f-bold' to={`/user/dashboard`} ><i className='fa fa-book'></i> User Dashboard</Link>
        <Link className='nav-link ps-1 text-white ' to={`/addquery`}><i className='fa fa-question'></i> Add Query</Link>
        <Link className='nav-link ps-1 text-white ' to={`/pendingquery`}><i className='fa fa-eye'></i> Pending Query</Link>
        <Link className='nav-link ps-1 text-white' to={`/processingquery`}><i className='fa fa-eye'></i> Processing Query</Link>
        <Link className='nav-link ps-1 text-white' to={`/completedquery`}><i className='fa fa-eye'></i> Completed Query</Link>
      </div>
    </div>
  )
}

export default Sidenav