import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Userforget = () => {
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    const reset = async (e) => {
        e.preventDefault();
        const user = { email }
        const response = await fetch("http://localhost:8000/reset", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });
        if (response.ok) {
            const data = await response.json();

            if (data.msg === "success") {
                console.log(data.user._id);
                toast.success(data.msg, { theme: "dark" })
                setEmail("")
                navigate(`/resetpassword/${data.user._id}`);
            }
            else {
                toast.error(data.msg, { theme: "dark" })
            }

        } else {
            toast.error("Data not fetch");
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
                            <div className="glass-container-reset mx-auto mt-1">
                                <div className="login-box">
                                    <h2 className='h2 text-dark f-bold'>Forgot password?</h2>
                                    <p className='para text-dark mt-4' >Remember your password? <a href="/login" className='register text-dark mt-3'>Login here</a></p>
                                    <form action="#" method="POST" onSubmit={reset}>
                                        <input className='form-control email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" required placeholder='Email address' />
                                        <button type='submit' className='buttons bg-primary text-white'>Reset Password</button>
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

export default Userforget