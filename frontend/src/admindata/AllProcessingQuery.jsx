import React, { useEffect, useState } from 'react'
import Adsidenav from '../admindata/Adsidenav'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Topnav from '../components/Topnav';

const AllProcessingQuery = () => {
  const [proquery, setProquery] = useState([]);
  var count = 1;
  const getprocessingquery = async () => {
    const response = await fetch(`http://localhost:8000/allprocessingquery`)
    if (response.ok) {
      const data = await response.json();
      if (data.msg === "success") {
        setProquery(data.result)
      }
      else {
        toast.error("User not found")
      }
    } else {
      toast.error("Failed to fetch data");
    }
  }

  useEffect(() => {
    getprocessingquery();
  }, [])

  const complete = async (id) => {
    const status = { status: "com" }
    const response = await fetch(`http://localhost:8000/status/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(status)
    })
    if (response.ok) {
      const data = await response.json();
      if (data.msg === "success") {
        getprocessingquery();
      }
      else {
        toast.error("Failed to update status");
      }
    } else {
      toast.error("Failed to update status");
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
            <Adsidenav />
          </div>
          <div className="col-10 scroll h-100 bg-success bg4">
            <div className="row ms-5 h-100 ">
              <div className="col-md-6 mx-auto my-auto text-light ">
                <h2 className='text-center text-white'> Processing Query</h2>
                <table className='table blur4 mt-5 text-white text-center'>
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>Department</th>
                      <th colSpan={2}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {proquery?.map((e, i) => (
                      <tr key={i}>
                        <td>{count++}</td>
                        <td>{e.department}</td>
                        <td><Link to={`/viewallprocessingquery/${e._id}`} className='btn btn-primary'>View</Link></td>
                        <td><button onClick={() => { complete(e._id) }} className='btn btn-warning'>Processing</button></td>
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

export default AllProcessingQuery