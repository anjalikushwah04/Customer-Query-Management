import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Adsidenav from '../admindata/Adsidenav';
import Topnav from '../components/Topnav';

const ViewAllUser = () => {
  const [penquery, setPenquery] = useState([]);
  var count = 1;
  const getalluser = async () => {
    const response = await fetch(`http://localhost:8000/viewalluser`)
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      if (data.msg === "success") {
        setPenquery(data.userData);
      } else {
        toast.error("No data found")
      }
    }
    else {
      toast.error("Failed to fetch data");
    }
  }

  useEffect(() => {
    getalluser();
  }, [])

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
              <div className="col-md-6 mx-auto my-auto text-white">
                <h2 className='text-center mt-4'> All User Data</h2>
                <table className='table blur1 text-white  mt-5 text-center'>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {penquery?.map((e, i) => (
                      <tr key={i}>
                        <td>{count++}</td>
                        <td>{e.firstname}</td>
                        <td>{e.lastname}</td>
                        <td>{e.email}</td>
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

export default ViewAllUser