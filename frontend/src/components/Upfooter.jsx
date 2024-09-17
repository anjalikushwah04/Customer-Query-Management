import React from 'react'
import logo from './Images/logo.png'
import year from './Images/year.png'

const Upfooter = () => {
  return (
    <>
      <div className="container-fluid p-3 h-100">
        <div className="row mx-auto p-5">
          <div className="col-sm-2 text-white mx-auto p-4 border-end">
            <img src={logo} alt="" />
            <div className="row">D-95, Sector 2, Noida, Uttar Pradesh - 201301</div>
            <div className="row">karam@karam.in</div>
            <div className="row">1800-103-7085</div>
            <div className="row">+91 120 4734400</div>
          </div>
          <div className="col-sm-2 text-white mx-auto p-4 border-end">
            <div className="row">Press Coverage</div>
            <div className="row">FAQs</div>
            <div className="row">Blogs</div>
            <div className="row">Newsletter</div>
            <div className="row">News & Events</div>
          </div>
          <div className="col-sm-2 text-white mx-auto p-4">
            <div className="row">Corporate Affairs</div>
            <div className="row">Product Warranty & Disclaimer</div>
            <div className="row">EU Declaration Form</div>
            <div className="row">EU Declaration Form</div>
            <div className="row">Loyality Rewards Program</div>
            <div className="row">IMS Policy</div>
            <div className="row">Quality Policy</div>
          </div>
          <div className="col-sm-2  text-white p-4 mx-auto">
            <img src={year} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Upfooter