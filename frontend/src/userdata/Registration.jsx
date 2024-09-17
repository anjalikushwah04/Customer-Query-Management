import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Registration = () => {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registration = async (e) => {
        e.preventDefault();
        const user = { firstname, lastname, email, password }
        const response = await fetch("http://localhost:8000/registration", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        })
        if (response.ok) {
            const result = await response.json();
            if (result.msg === "success") {
                setFirstname("");
                setLastname("")
                setEmail("")
                setPassword("")
                navigate('/login');
            }
            else {
                toast.error("Oops! Invalid Data ", { theme: "dark" })
            }
        } else {
            toast.error("Oops! Invalid Data");
        }
    }
    return (


        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <Navbar />
                        </div>
                    </div>
                    <div className="row bg2">
                        <div className="col-md-5 mx-auto my-auto p-5">
                            <div className="glass-container-registration mx-auto mt-3">
                                <div className="login-box">
                                    <h2 className='h2 text-danger'>Registration Form</h2>
                                    <form action="#" method="POST" onSubmit={registration}>
                                        <input className='form-control firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)} type="firstname" name="firstname" required placeholder='Firstname' />
                                        <input className='form-control lastname' value={lastname} onChange={(e) => setLastname(e.target.value)} type="lastname" name="lastname" required placeholder='Lastname' />
                                        <input className='form-control email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" required placeholder='Email' />
                                        <input className='form-control password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" required placeholder='Password' />
                                        <div className="options">
                                            <input type="checkbox" id='remember' name='remember' required />
                                            <label for="remember" className='text-dark'>Remember me</label>
                                            <a href="/userforgot" className='text-dark'>Forgot Password?</a>
                                        </div>
                                        <button type='submit' className='buttons'>Login</button>
                                        <p className='para text-dark'>Already have an Account ?<a href="/login" className='login text-dark'>Login</a></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <ToastContainer />
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Footer />

                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>

    )
}

export default Registration