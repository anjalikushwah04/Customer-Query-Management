import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';;

const Adlogin = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const logcode = async (e) => {
        e.preventDefault();
        const admin = { email, password }
        const response = await fetch("http://localhost:8000/adlogin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(admin)
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            if (data.msg === "success") {
                setEmail("")
                setPassword("")
                navigate(`/adminDashboard/${data.id}`)
            }
            else {
                toast.error(data.msg, { theme: "dark" })
            }
        }
        else {
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
                    <div className="row bg1">
                        <div className="col-md-5 mx-auto my-auto p-5">
                            <div className="glass-container mx-auto mt-3">
                                <div className="login-box">
                                    <h2 className='h2 text-danger'>Admin Login</h2>
                                    <form action="#" method="POST" onSubmit={logcode}>
                                        <input className='form-control email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" required placeholder='Email' />
                                        <input className='form-control password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" required placeholder='Password' />
                                        <div className="options">
                                            <input type="checkbox" id='remember' name='remember' required />
                                            <label for="remember" className='text-dark'>Remember me</label>
                                        </div>
                                        <button type='submit' className='buttons bg-white text-dark'>Login</button>
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


    )
}

export default Adlogin