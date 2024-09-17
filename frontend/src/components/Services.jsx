import React from 'react'
import authorised from '../components/Images/authorised.png'
import demo from '../components/Images/training.jpg'
import training from '../components/Images/demo.jpg'
const Services = () => {
    return (
        <div className="row bg-light p-5">
            <h1 className='text-dark text-center p-2 f-bold'>Our Services</h1>
            <p className='text-dark text-center p-3'>From equipment maintenance to workforce training, we're your one-stop safety solution</p>
            <div className="col-md-4 mx-auto p-3">
                <div className="card">
                    <img src={authorised} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Authorised Service Centres</h5>
                        <p className="card-text">KARAM's Authorised Service Centre inspects, repairs and revalidates PPE, harnesses, lanyards, blocks, tripods and FLS. They...</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mx-auto p-3">
                <div className="card">
                    <img src={training} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Training & Consultancy</h5>
                        <p className="card-text">KARAM's Training & Consultancy (KTC) institute promotes safety by training a workforce that values lives. KTC is focused on Industrial, Application specific and Telecom training, based on national and international standards.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mx-auto p-3">
                <div className="card">
                    <img src={demo} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Mobile Demo Van</h5>
                        <p className="card-text">KARAM re-introduces its latest state-of-the-art Mobile Demo Van (MDV). The MDV exhibits KARAM's range of PPE and fall protection solutions, bridging the safety knowledge and practical implementation gap, by delivering safety products and…</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services