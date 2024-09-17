import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdSidenav from './Adsidenav';
import Topnav from '../components/Topnav';

const EditAddetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const edituser = async (e) => {
    e.preventDefault();
    const query = { email, password }
    const response = await fetch(`http://localhost:8000/editadmindetails/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(query),
    })
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      if (data.msg === "success") {
        setEmail(data.result.email)
        setPassword(data.result.password)
        navigate(`/adminDashboard/${data.result._id}`);
      }
      else {
        toast.error("No data found");
      }
    } else {
      toast.error("Failed to load data");
    }

  }
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
        <div className="col-10 scroll h-100 bg-success bg3">
          <div className="row mt-5 h-100 ">
            <div className="col-md-6 mx-auto">
              <div className="glass-container mx-auto mt-3">
                <div className="login-box">
                  <h2 className='h2 text-danger p-3'>Edit Admin Details</h2>
                  <form action="#" method="POST" onSubmit={edituser}>
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

export default EditAddetails