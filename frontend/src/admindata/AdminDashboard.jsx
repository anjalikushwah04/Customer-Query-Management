import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AdSidenav from './Adsidenav';
import Topnav from '../components/Topnav';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Addashboard = () => {
  const { id } = useParams();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const getUser = async () => {
    const response = await fetch(`http://localhost:8000/admindashboard/${id}`)
    if (response.ok) {
      const data = await response.json();
      if (data) {
        setEmail(data.email)
        setPassword(data.password)
      } else {
        toast.error("No data found");
      }
    } else {
      toast.error("Failed to fetch data");
    }
  }
  useEffect(() => {
    getUser();
  }, [])

  return (
    <>
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
          <div className="row mt-5 h-100">
            <div className="col-md-6 my-auto mx-auto blur1  p-5 rounded shadow-lg text-black">
              <h5 className="text-center p-2 text-white bg-warning "> User Details</h5>

              <div className="row p-2">
                <div className="col-md-6">Email</div>
                <div className="col-md-6">{email}</div>
              </div>
              <div className="row p-2">
                <div className="col-md-6">Password</div>
                <div className="col-md-6">{password}</div>
              </div>
              <div className="row p-2">
                <Link to={`/editadminprofile/${id}`} className='btn btn-info rounded-5'>Edit</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Addashboard