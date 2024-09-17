import React, { useEffect, useState } from 'react'
import Sidenav from './Sidenav';
import UserTopnav from '../components/UserTopnav';


const UserDash = () => {

  return (
    <>
      <div className="row vh-10">
        <div className="col-sm-12 bg-dark text-light">
          <UserTopnav/>
        </div>
      </div>
      <div className="row vh-90">
        <div className="col-2 scroll h-100 bg-danger">
          <Sidenav/>
        </div>
        <div className="col-10 scroll h-100 bg-success bg3">
        </div>
      </div>
    </>
  )
}

export default UserDash