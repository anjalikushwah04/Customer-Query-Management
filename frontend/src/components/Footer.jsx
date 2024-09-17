import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="row bg-dark d-flex p-2 justify-between">
        <div className="col-md-5 ">
          <p className='text-white '>© 2024, All rights reserved by KARAM Safety Pvt. Ltd.</p>
        </div>
        <div className="col-md-4 ">
          <p className='text-white'>Privacy Policy | Terms & Conditions</p>
        </div>
        <div className="col-md-2 ms-5">
          <div className="col-sm-1 d-flex justify-between">
            <p className='fa-brands fs-4 fa-facebook border p-2 rounded-circle text-danger bg-light me-2'></p>
            <p className='fa-brands fs-4 fa-twitter border p-2 rounded-circle text-danger bg-light me-2'></p>
            <p className='fa-brands fs-4 fa-linkedin border p-2 rounded-circle text-danger bg-light me-2'></p>
            <p className='fa-brands fs-4 fa-youtube border p-2 rounded-circle text-danger bg-light me-2'></p>
            <p className='fa-brands fs-4 fa-instagram border p-2 rounded-circle text-danger bg-light me-2'></p>
          </div>
        </div>

      </div>
    </>

  )
}

export default Footer