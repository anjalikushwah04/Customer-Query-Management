import React from 'react'
import Volunteers from './Images/Volunteers.jpg'
import Foundation from './Images/Foundation.jpg'
import AC from './Images/AC.jpg'

const Social = () => {
    return (
        <div className="row bg-light p-5">
            <div className="col-md-12">
                <h1 className='text-dark text-center f-bold p-3'>Environmental Social & Governance</h1>
                <p className='text-dark text-center p-3'>Committed to fostering a safer, sustainable future for everyone</p>
                <div className="row">
                    <div className="col-md-4 ">
                        <div className="card" style={{ width: "22rem" }}>
                            <img src={Volunteers} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">KARAM Volunteers Supporting Education and Development at Udyat Kheda Primary School</h5>
                                <p className="card-text">At KARAM, we believe in giving back to the community. As part of our CSR initiatives our…</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: "22rem" }}>
                            <img src={Foundation} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">KARAM Volunteers Make a Difference for Children with Retinoblastoma</h5>
                                <p className="card-text">KARAM volunteers, in association with Koshika Foundation, recently facilitated a visit to Dr.…</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: "22rem" }}>
                            <img src={AC} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">KARAM Saves Water with Innovation</h5>
                                <p className="card-text"> At KARAM, we believe in responsible resource management. That is why we are excited to share our...</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12"><a>View More</a></div>
                </div>
            </div>
        </div>
    )
}

export default Social