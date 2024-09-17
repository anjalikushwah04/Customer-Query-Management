import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const login = async (e) => {
        e.preventDefault();
        const user = { email, password }
        const response = await fetch("http://localhost:8000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });
        if (response.ok) {
            const data = await response.json();
            if (data.msg === "success") {
                setEmail("")
                setPassword("")
                navigate(`/userDashboard/${data.id}`)
            }
            else {
                toast.error(data.msg, { theme: "dark" })
            }
        } else {
            toast.error("Invalid credentials");
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


                            <div className="glass-container mx-auto mt-3">
                                <div className="login-box">
                                    <h2 className='h2 text-danger'>User Login</h2>
                                    <form action="#" method="POST" onSubmit={login}>
                                        <input className='form-control email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" required placeholder='Email' />
                                        <input className='form-control password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" required placeholder='Password' />
                                        <div className="options">
                                            <input type="checkbox" id='remember' name='remember' required />
                                            <label for="remember" className='text-dark'>Remember me</label>
                                            <a href="/userforgot" className='text-dark'>Forgot Password?</a>
                                        </div>
                                        <button type='submit' className='buttons bg-white text-dark'>Login</button>
                                        <p className='para text-dark' >Don't have an account? <a href="/registration" className='register text-dark'>Register</a></p>

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


            </div>
        </>




        // <>
        // <Navbar/>
        // <div className="row">
        //     <div className="col-md-5 mx-auto ">
        //         <form onSubmit={login} className='my-5 p-5 shadow-lg bg-white rounded-5'>
        //             <h4 className='mb-3 text-center text-danger'>Login Form</h4>

        //             Enter Your Email :
        //             <input className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
        //             <br />
        //             Enter Your Password :
        //             <input className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
        //             <br />
        //             <button className='form-control btn btn-primary mb-3 ' type="submit">Submit</button>
        //             <Link to={'/registration'} >Create New Account ?</Link>
        //         </form>

        //     </div>
        //     <ToastContainer />
        // </div>

        // <Footer/>
        // </>


    )
}

export default Login