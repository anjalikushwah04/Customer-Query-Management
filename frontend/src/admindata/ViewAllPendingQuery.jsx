import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdSidenav from './Adsidenav';
import Topnav from '../components/Topnav';

const Viewpendingquery = () => {
    const { id } = useParams();
    const [depart, setDepart] = useState("")
    const [subject, setSubject] = useState("")
    const [query, setQuery] = useState("")

    const getUser = async () => {
        const response = await fetch(`http://localhost:8000/viewallpendingquery/${id}`)
        if (response.ok) {
            const data = await response.json();
            console.log(data.result)
            if (data.result) {
                setDepart(data.result.department)
                setSubject(data.result.subject)
                setQuery(data.result.desc)
            } else {
                toast.error("No pending query found");
            }
        } else {
            toast.error("error");
        }
    }
    useEffect(() => {
        getUser();
    }, [])

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
                <div className="col-10 scroll h-100 bg-success bg4">
                    <div className="row mt-5 h-100 ">
                        <div className="col-md-6 my-auto mx-auto  p-3 rounded shadow-lg blur3 text-white">
                            <h5 className="text-center p-2 text-dark  bg-warning">View All Pending Query</h5>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Viewpendingquery