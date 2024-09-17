import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidenav from './Sidenav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserTopnav from '../components/UserTopnav';

const Edituserdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const edituser = async (e) => {
    e.preventDefault();

    const query = { firstname, lastname, email, password }
    const response = await fetch(`http://localhost:8000/edituserdetails/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(query),
    })
    if (response.ok) {
      const data = await response.json();
      if (data.msg === "success") {
        setFirstname(data.result.firstname)
        setLastname(data.result.lastname)
        setEmail(data.result.email)
        setPassword(data.result.password)
        navigate(`/userDashboard/${id}`);
      }
      else {
        toast.error("Error updating user details", { theme: "colored" });
      }
    } else {
      toast.error("Error in  updating");
    }

  }
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
            <div className="col-md-6 mx-auto">
              <div className="glass-container3 mx-auto mt-3">
                <div className="login-box">
                  <h2 className='h2 text-danger'>Edit User Details</h2>
                  <form action="#" method="POST" onSubmit={edituser}>
                    <input className='form-control firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)} type="firstname" name="firstname" required placeholder='Firstname' />
                    <input className='form-control lastname' value={lastname} onChange={(e) => setLastname(e.target.value)} type="lastname" name="lastname" required placeholder='Lastname' />
                    <input className='form-control email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" required placeholder='Email' />
                    <input className='form-control password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" required placeholder='Password' />
                    <button className='form-control btn btn-primary mb-3 text-white mt-4' type="submit">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>

    </>
  )
}

export default Edituserdetails