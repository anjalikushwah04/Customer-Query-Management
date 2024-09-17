import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import Sidenav from './Sidenav';
import { useParams } from 'react-router-dom';
import UserTopnav from '../components/UserTopnav';

const Viewpendingquery = () => {
    const { id } = useParams();
    const [depart, setDepart] = useState("")
    const [subject, setSubject] = useState("")
    const [query, setQuery] = useState("")

    const getUser = async () => {
        const response = await fetch(`http://localhost:8000/viewpendingquery/${id}`)
        if (response.ok) {
            const data = await response.json();
            if (data.result) {
                setDepart(data.result.department)
                setSubject(data.result.subject)
                setQuery(data.result.desc)

            } else {
                toast.error("No data found");
            }
        } else {
            toast.error("Failed to fetch data");
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
                        <div className="col-md-6 my-auto mx-auto  p-3 rounded shadow-lg text-white blur3">
                            <h5 className="text-center p-2 text-dark  bg-warning">View Pending Query</h5>
                            <div className="row p-2">
                                <div className="col-md-6">Department</div>
                                <div className="col-md-6">{depart}</div>
                            </div>
                            <div className="row p-2">
                                <div className="col-md-6">Subject</div>
                                <div className="col-md-6">{subject}</div>
                            </div>
                            <div className="row p-2">
                                <div className="col-md-6">Query</div>
                                <div className="col-md-6">{query}</div>
                            </div>
                            <div className="row p-2">
                                <Link to={`/editpendingquery/${id}`} className='btn btn-info'>Edit</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>


    )


}

export default Viewpendingquery