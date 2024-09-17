import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sidenav from './Sidenav';
import UserTopnav from '../components/UserTopnav';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Dashboard = () => {
  const { id } = useParams();
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")

  const getUser = async () => {
    const response = await fetch(`http://localhost:8000/${id}`)
    if (response.ok) {
      const data = await response.json();
      if (data) {
        setFirstname(data.firstname)
        setLastname(data.lastname)
        setEmail(data.email)
      }
      else {
        toast.error("Error found")
      }
    } else {
      toast.error("Data  not found");
    }
  }

  useEffect(() => {
    getUser();
  }, [])
  return (
    <>
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
          <div className="row mt-5 h-100 ">
            <div className="col-md-6 my-auto mx-auto  blur1 p-5 rounded shadow-lg text-white">
              <h5 className="text-center p-2 text-white bg-warning "> User Details</h5>
              <div className="row p-2">
                <div className="col-md-6">Firstname</div>
                <div className="col-md-6">{firstname}</div>
              </div>
              <div className="row p-2">
                <div className="col-md-6">Lastname</div>
                <div className="col-md-6">{lastname}</div>
              </div>
              <div className="row p-2">
                <div className="col-md-6">Email</div>
                <div className="col-md-6">{email}</div>
              </div>
              <div className="row p-2">
                <Link to={`/edituserdetails/${id}`} className='btn btn-info rounded-5'>Edit</Link>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default Dashboard