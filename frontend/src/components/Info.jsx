import React from 'react'
import global from '../components/Images/global.png'
import Revenue from '../components/Images/1002B-Million-Dollar-Revenue-karam_1.png'
import certified from '../components/Images/Certified-Products_0.png'
import employee from '../components/Images/Employee-Strength_0.png'
import Harnesses from '../components/Images/Harnesses-Manufactured_0.png'
import Exporting from '../components/Images/Exporting-to-countries.png'

const Info = () => {
    return (
        <div className="row bg-danger">
            <div className="col-md-12">
                <div className="container-fluid p-5">
                    <div className="row">
                        <div className="col-md-4 bg-danger border-end border-bottom p-5">
                            <div className="grid-item valuedev w-75 text-center text-white" data-val="50">
                                <div className="grid-imgs ">
                                    <img className='' src={global} />
                                </div>
                                <div className="key-icons-content">
                                    <h3><span className="render-data">50</span><span className="plushsign">+</span></h3>
                                    <p className=''>Global offices</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 bg-danger border-start border-end border-bottom p-5">
                            <div className="grid-item valuedev w-75 text-center text-white" data-val="3500">
                                <div className="grid-imgs">
                                    <img className='' src={certified} />
                                </div>
                                <div className="key-icons-content">
                                    <h3><span className="render-data ">3500</span><span className="plushsign">+</span></h3>
                                    <p className=''>Certified Products</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 bg-danger border-start border-bottom p-5">
                            <div className="grid-item valuedev w-75 text-center text-white" data-val="7">
                                <div className="grid-imgs">
                                    <img src={Harnesses} />
                                </div>
                                <div className="key-icons-content">
                                    <h3><span className="render-data">7</span><span className="plushsign">+</span></h3>
                                    <p>Manufacturing Units</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-4 bg-danger border-end border-top p-5">
                            <div className="grid-item valuedev w-75 text-center text-white" data-val="50">
                                <div className="grid-imgs ">
                                    <img className='' src={Revenue} />
                                </div>
                                <div className="key-icons-content">
                                    <h3><span className="render-data">100+</span><span className="plushsign">+</span></h3>
                                    <p className=''>Million Dollar Revenue</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 bg-danger border-start border-end border-top p-5">
                            <div className="grid-item valuedev w-75 text-center text-white" data-val="3500">
                                <div className="grid-imgs">
                                    <img className='' src={employee} />
                                </div>
                                <div className="key-icons-content">
                                    <h3><span className="render-data ">4200+</span><span className="plushsign">+</span></h3>
                                    <p className=''>Professionals</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 bg-danger border-start border-top p-5">
                            <div className="grid-item valuedev w-75 text-center text-white" data-val="7">
                                <div className="grid-imgs">
                                    <img src={Exporting} />
                                </div>
                                <div className="key-icons-content">
                                    <h3><span className="render-data">100+</span><span className="plushsign">+</span></h3>
                                    <p>Exporting Countries</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Info