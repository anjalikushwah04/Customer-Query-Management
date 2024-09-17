import React, { useEffect, useState } from 'react'
import Sidenav from './Sidenav'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserTopnav from '../components/UserTopnav';

const Completedquery = () => {
  const [comquery, setComquery] = useState([]);
  var count = 1;
  const getpendingquery = async () => {
    const response = await fetch(`http://localhost:8000/completedquery`)
    if (response.ok) {
      const data = await response.json();
      console.log(data.result);
      if (data.msg === "success") {
        setComquery(data.result)
      }
      else {
        toast.error("Failed to fetch data");
      }
    } else {
      toast.error("Failed to fetch data");
    }
  }

  useEffect(() => {
    getpendingquery();
  }, [])

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row vh-10">
          <div className="col-sm-12 bg-dark text-light">
            <UserTopnav />
          </div>
        </div>
        <div className="row vh-90">
          <div className="col-2 scroll h-100 bg-danger">
            <Sidenav />
          </div>
          <div className="col-10 scroll h-100 bg-success  bg3">
            <div className="row ms-5 h-100 ">
              <div className="col-md-6 mx-auto my-auto text-white">
                <h2 className='text-center mt-4'> Completed Query</h2>
                <table className='table blur5 mt-5 text-center text-dark'>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Department</th>
                      <th>Subject</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comquery?.map((e, i) => (
                      <tr key={i}>
                        <td>{count++}</td>
                        <td>{e.department}</td>
                        <td>{e.subject}</td>
                        <td><Link to={`/viewcompletedquery/${e._id}`} className='btn btn-primary'>View</Link></td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default Completedquery