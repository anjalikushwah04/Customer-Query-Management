import React, { useEffect, useState } from 'react'
import Sidenav from './Sidenav';
// import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserTopnav from '../components/UserTopnav';

const Pendingquery = () => {
  const [penquery, setPenquery] = useState([]);
  var count = 1;
  const pendingquery = async () => {
    const response = await fetch(`http://localhost:8000/pendingquery`)
    if (response.ok) {
      const data = await response.json();
      if (data.msg === "success") {
        setPenquery(data.result)
      } else {
        toast.error(data.msg);
      }
    } else {
      toast.error("Data not found");
    }

  }

  useEffect(() => {
    pendingquery();
  }, [])

  const deletependingquery = async (id) => {
    const response = await fetch(`http://localhost:8000/deletependingquery/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: id })
    })
    if (response.ok) {
      const data = await response.json();
      if (data.msg === "success") {
        pendingquery();
      } else {
        toast.error("Failed to fetch data");
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
            <UserTopnav />
          </div>
        </div>
        <div className="row vh-90">
          <div className="col-2 scroll h-100 bg-danger">
            <Sidenav />
          </div>
          <div className="col-10 scroll h-100 bg-success bg3">
            <div className="row h-100 mt-4 ">
              <div className="col-md-8 mx-auto my-auto text-white ">
                <h2 className='text-center mt-4'> Pending Query</h2>
                <table className='table blur3 mt-5 text-center text-dark'>

                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Department</th>
                      <th>Subject</th>
                      <th colSpan={2}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {penquery?.map((e, i) => (
                      <tr key={i}>
                        <td>{count++}</td>
                        <td>{e.department}</td>
                        <td>{e.subject}</td>
                        <td><Link to={`/viewpendingquery/${e._id}`} className='btn btn-primary'>View</Link></td>
                        <td><button onClick={() => deletependingquery(e._id)} className='btn btn-danger'>Delete</button></td>
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

export default Pendingquery