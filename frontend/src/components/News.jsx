import React from 'react'
import Kavita from './Images/kavita.jpg'
import E from './Images/E.jpg'
import Hement from './Images/hement.jpg'


const News = () => {
  return (
    <div className="row h-100 bg-light p-4">

      <div className="row">
        <div className="col-md-12 m-4">
          <h1 className='m-4'>News & Events</h1>
          <p className='m-4 text'>Stay up to date with the latest news and events</p>
        </div>
      </div>
      <div className="col-md-7 my-auto mx-auto"><img src={Hement} alt="" /></div>
      <div className="col-md-4  h-100 ">
        <div className="row">
          <div className="col-md-12"> <div className="row p-2 "><img src={E} alt="" /></div></div>
          <div className="col-md-12"> <div className="row p-3 "><img src={Kavita} alt="" /></div></div>
        </div>
      </div>
    </div>
  )
}

export default News