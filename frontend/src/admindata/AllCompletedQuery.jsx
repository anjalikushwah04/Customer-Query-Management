import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdSidenav from './Adsidenav';
import Topnav from '../components/Topnav';

const AllCompletedQuery = () => {
  const [comquery, setComquery] = useState([]);
  var count = 1;
  const getcompletedquery = async () => {
    const response = await fetch(`http://localhost:8000/allcompletedquery`)
    const data = await response.json();
    if (data.msg === "success") {
      setComquery(data.result)
    } else {
      toast.error("No pending Query");
    }
  }

  useEffect(() => {
    getcompletedquery();
  }, [])

  const deleted = async (id) => {
    const response = await fetch(`http://localhost:8000/querydeleted/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: id })
    })
    if (response.ok) {
      const data = await response.json();
      if (data.msg === "success") {
        alert("Query on Completing");
        getcompletedquery();
      }
      else {
        toast.error("No data found")
      }
    } else {
      toast.error("Failed to load data")
    }
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row vh-10">
          <div className="col-sm-12 bg-dark text-light">
            <Topnav />
          </div>
        </div>
        <div className="row vh-90">
          <div className="col-2 scroll h-100 bg-danger">
            <AdSidenav />
          </div>
          <div className="col-10 scroll h-100 bg-success bg4">
            <div className="row ms-5 h-100 ">
              <div className="col-md-6 mx-auto my-auto">
                <h2 className='text-center text-light'> Completed Query</h2>
                <table className='table blur5 mt-5 text-light text-center'>
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>Department</th>
                      <th colSpan={2}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comquery?.map((e, i) => (
                      <tr key={i}>
                        <td>{count++}</td>
                        <td>{e.department}</td>
                        <td><Link to={`/viewallcompletedquery/${e._id}`} className='btn btn-primary'>View</Link></td>
                        <td><Link to={`/viewallcompletedquery/${e._id}`} className='btn btn-success' onClick={() => deleted}>Completed</Link></td>
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

export default AllCompletedQuery