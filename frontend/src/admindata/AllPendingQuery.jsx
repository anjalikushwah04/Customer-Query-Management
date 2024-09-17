import React, { useEffect, useState } from 'react'
import Adsidenav from '../admindata/Adsidenav'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Topnav from '../components/Topnav';

const AllPendingQuery = () => {
  const [penquery, setPenquery] = useState([]);
  var count = 1;
  const getpendingquery = async () => {
    const response = await fetch(`http://localhost:8000/allpendingquery`)
    if (response.ok) {
      const data = await response.json();
      if (data.msg === "success") {
        setPenquery(data.result)
      } else {
        toast.error("No pending Query");
      }
    } else {
      toast("Failed to load data");

    }
  }

  useEffect(() => {
    getpendingquery();
  }, [])

  const process = async (id) => {
    const status = { status: "pro" }
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
        alert("Query on processing");
        getpendingquery();
      }
      else {
        toast.error("User not found")
      }
    } else {
      toast.error("Failed to fetch data");
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
          <div className="col-10 scroll h-100  bg4">
            <div className="row ms-5 h-100 ">
              <div className="col-md-6 mx-auto my-auto text-white">
                <h2 className='text-center mt-4'> Pending Query</h2>
                <table className='table blur3 text-white text-center'>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Department</th>
                      <th colSpan={2}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {penquery?.map((e, i) => (
                      <tr key={i}>
                        <td>{count++}</td>
                        <td>{e.department}</td>
                        <td><Link to={`/viewallpendingquery/${e._id}`} className='btn btn-primary'>View</Link></td>
                        <td><button onClick={() => { process(e._id) }} className='btn btn-danger'>Pending</button></td>
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

export default AllPendingQuery