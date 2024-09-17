import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdRegistration = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const adcode = async (e) => {
        e.preventDefault();
        const admin = { email, password }
        const response = await fetch("http://localhost:8000/", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(admin)
        })
        if (response.ok) {
            const result = await response.json();
            if (result.msg === "success") {
                toast.success("Admin successfully Registered", { theme: "colored" })
                setEmail("")
                setPassword("")
                navigate('/adlogin');
            }
            else {
                toast.error("Oops! Invalid Data ", { theme: "colored" })
            }

        } else {
            toast.error("Oops! Invalid Data");
        }

    }
    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col-md-6 mx-auto ">
                    <form onSubmit={adcode} className='my-5 p-5 shadow-lg bg-white rounded-5'>
                        <h4 className='mb-3'><u className='text-danger'>Registration</u> Form</h4>
                        Enter Your Email :
                        <input className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
                        <br />
                        Enter Your Password :
                        <input className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
                        <br />
                        <button className='form-control btn btn-primary mb-3 ' type="submit">Submit</button>
                        <Link to={'/adlogin'} >Already have Account ?</Link>
                    </form>

                </div>
            </div>

            <ToastContainer />
            <Footer />
        </>
    )
}

export default AdRegistration