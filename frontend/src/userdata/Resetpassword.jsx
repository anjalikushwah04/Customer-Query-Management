import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Resetpassword = () => {
    const [password, setPassword] = useState("")
    const { id } = useParams();
    const navigate = useNavigate();
    const resetpassword = async (e) => {
        e.preventDefault();
        const user = { password }
        const response = await fetch(`http://localhost:8000/resetpassword/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });
        if (response.ok) {
            const result = await response.json();
            if (result.msg === "success") {
                setPassword("")
                navigate('/login');
            }
            else {
                toast.error("Oops! Invalid Data ", { theme: "dark" })
            }

        }
        else {
            toast.error("Oops! Invalid Data ", { theme: "dark" })
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
                            <div className="glass-container-resetpassword mx-auto mt-1">
                                <div className="login-box">
                                    <h2 className='h2 text-dark f-bold'>Forgot password?</h2>
                                    <p className='para text-dark mt-4' >Remember your password? <a href="/login" className='register text-dark mt-3'>Login here</a></p>
                                    <form action="#" method="POST" onSubmit={resetpassword}>
                                        <input className='form-control password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" required placeholder='New Password' />
                                        <button type='submit' className='buttons bg-primary text-white'>Update Password</button>
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

export default Resetpassword