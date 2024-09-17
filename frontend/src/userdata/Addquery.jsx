import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidenav from '../userdata/Sidenav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserTopnav from '../components/UserTopnav';

const Addquery = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [department, setDepartment] = useState('')
  const [subject, setSubject] = useState('')
  const [desc, setDesc] = useState('')

  const addquery = async (e) => {
    e.preventDefault();

    const status = "pen"
    const query = { "uid": id, "department": department, "subject": subject, "desc": desc, "status": status }
    const response = await fetch(`http://localhost:8000/addquery`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(query)
    })
    if (response.ok) {
      const result = await response.json();

      if (result.msg === "success") {
        setDepartment('')
        setSubject('')
        setDesc('')
        navigate(`/pendingquery`);

      }
      else {
        toast.error("Oops! Failed to Add Query ", { theme: "colored" })
      }

    } else {
      toast.error("Failed to Add Query");
    }


  }
  return (
    <>
      <div className="row bg3">
        <div className="col-md-12 ">
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
            <div className="glass-container3 mx-auto my-auto blur2  ">
              <div className="login-box my-auto">
                <h2 className='h2 mb-3'>Add Query</h2>
                <form action="#" method="POST" onSubmit={addquery}>
                  <select className='form-control' value={department} onChange={(e) => setDepartment(e.target.value)}>
                    <option value='1'>Select Department</option>
                    <option value={'IT'}>IT</option>
                    <option value={'Account'}>Account</option>
                    <option value={'Management'}>Management</option>
                    <option value={'Sales'}>Sales</option>
                  </select>
                  <input className='form-control subject' value={subject} onChange={(e) => setSubject(e.target.value)} type="subject" name="subject" required placeholder='Subject' /><br />
                  <textarea className='form-control' value={desc} rows='5' placeholder='Describe Your Query' onChange={(e) => setDesc(e.target.value)} required ></textarea>
                  <div className="options">
                  </div>
                  <button type='submit' value={"Add Query"} className='form-control btn btn-primary'>Send</button>
                   </form>
              </div>
            </div>
            </div>
          </div>
            <ToastContainer />
          </div>

        </div>
      </div>

    </>
  )
}

export default Addquery