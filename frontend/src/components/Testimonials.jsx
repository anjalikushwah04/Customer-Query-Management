import React from 'react'
import img1 from './Images/img1.jpg'
import img2 from './Images/img2.jpg'
import img3 from './Images/img3.jpg'
import img4 from './Images/img4.jpg'
import img5 from './Images/img5.jpg'
import img6 from './Images/img6.jpg'
import img7 from './Images/img7.jpg'
import img8 from './Images/img8.jpg'
const Testimonials = () => {
    return (
        <div className="row p-5 bg-white">
            <h1 className='text-danger text-center p-2'>Testimonials</h1>
            <div className="col-md-12 d-flex mx-auto">
                <div className="col-md-3 bg-white">
                    <div className="row">
                        <div className="col-md-6"><img src={img1} className="rounded-circle border border-light" alt="" /></div>
                        <div className="col-md-6"><img src={img2} className="rounded-circle border  border-light" alt="" /></div>
                    </div><br />
                    <div className="row">
                        <div className="col-md-6"><img src={img3} className="rounded-circle border  border-light" alt="" /></div>
                        <div className="col-md-6 "><img src={img4} className="rounded-circle border  border-light" alt="" /></div>
                    </div>
                </div>
                <div className="col-md-4  border shadow-lg mx-auto">
                    <div className="row p-4">
                        <div className="col-md-12">
                            {/* <h5 className="card-title">Card title</h5> */}
                            <p class="card-body">KARAM has been a steadfast partner to prioritize safety and ensure the well-being of our employees. Their expertise in manufacturing high-quality safety equipment, coupled with their dedication to imparting safety knowledge and awareness has been instrumental in fostering a culture of safety at BHEL.</p>
                            <div className="row">
                                <div className="col-md-2"><img src={img7} className="rounded-circle border border-light" style={{ width: "60px" }} alt="" /></div>
                                <div className="col-md-10"><p>BHEL</p><p>DGM (Technical Training-CLD Noida)</p></div>
                            </div>


                        </div>
                    </div>

                </div>
                <div className="col-md-3 bg-white">
                    <div className="row">
                        <div className="col-md-6"><img src={img5} className="rounded-circle border  border-light" alt="" /></div>
                        <div className="col-md-6"><img src={img6} className="rounded-circle border  border-light" alt="" /></div>
                    </div><br />
                    <div className="row">
                        <div className="col-md-6"><img src={img7} className="rounded-circle border  border-light" alt="" /></div>
                        <div className="col-md-6"><img src={img8} className="rounded-circle border  border-light" alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials