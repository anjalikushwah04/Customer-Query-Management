import React from 'react'
import map from '../components/Images/map.jpg'

const Global = () => {
  return (
    <div className="row bg-light">
      <div className="col-md-12 p-0">
        <h1 className='text-dark text-center f-bold p-3'>Global Presence</h1>
        <p className='text-dark text-center p-3'>Expanding our reach: Providing products and services to customers worldwide</p>
        <img className='' style={{ width: "100%", height: "470px" }} src={map} />

      </div>
    </div>
  )
}

export default Global