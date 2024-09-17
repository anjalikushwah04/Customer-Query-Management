import React from 'react'
import s1 from '../components/Images/slider1.jpg'
import s2 from '../components/Images/slider2.jpg'
import s3 from '../components/Images/slider3.jpg'
import s4 from '../components/Images/slider4.jpg'
import s5 from '../components/Images/slider5.jpg'
const Slider = () => {
  return (
    <div className="row dark text-light mt-5">
      <div className="col-sm-5">

        <h1 style={{ fontWeight: "1000", marginLeft: "80px", fontSize: "60px", justifyContent: "center" }}>Saving<br /> millions of <br /><span className='underline'>lives</span> globally</h1>
        <p style={{ fontWeight: "500", marginLeft: "80px", marginTop: "40px" }}>KARAM is a leading global PPE & Fall Protection solutions brand.</p>
        <button style={{ fontWeight: "1400", marginLeft: "80px", backgroundColor: "red", border: "1px solid red", borderRadius: "25px", height: "50px", width: "180px" }}><a href='' className='text-light text-decoration-none' >Learn More</a></button>
        <div className='d-flex' style={{ marginLeft: "80px", marginTop: "20px", height: "70px", width: "400px", justifyContent: "space-between" }}>
          <div style={{ fontSize: "16px", backgroundColor: "red", padding: "15px", width: "45%" }}><i class="fa-solid fa-cart-shopping"></i> | Karam online product</div>
          <div className='bg-dark' style={{ fontSize: "16px", padding: "15px", width: "45%" }}><i class="fa-regular fa-newspaper"></i> | News & Events</div>
        </div>
      </div>
      <div className="col-sm-6">
        <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <img src={s1} className="d-block w-100" alt="..." />
              <div className='s w-40 position-absolute pe-3'>More details on News & Events</div>
            </div>
            <div className="carousel-item ">
              <img src={s2} className="d-block w-100" alt="..." />
              <div className='s w-40 position-absolute pe-3'> More details on News & Events</div>
            </div>
            <div className="carousel-item">
              <img src={s3} className="d-block w-100" alt="..." />
              <div className='s w-73 position-absolute pe-3'> KARAM launches new portable single gas detectors</div>
            </div>
            <div className="carousel-item">
              <img src={s4} className="d-block w-100" alt="..." />
              <div className='s w-73 position-absolute pe-3'> KARAM bags the "Platinum Category" at IMEA again!</div>
            </div>
            <div className="carousel-item">
              <img src={s5} className="d-block w-100" alt="..." />
              <div className='s w-40 position-absolute pe-3'> Intersec 2024, Dubai</div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
      <div className="col-sm-1 my-auto">
        <p className='fa-brands fs-4 fa-facebook border p-3 rounded-circle bg-light text-danger'></p><br />
        <p className='fa-brands fs-4 fa-twitter border p-3 rounded-circle bg-light text-danger'></p><br />
        <p className='fa-brands fs-4 fa-linkedin border p-3 rounded-circle bg-light text-danger'></p><br />
        <p className='fa-brands fs-4 fa-youtube border p-3 rounded-circle bg-light text-danger'></p><br />
        <p className='fa-brands fs-4 fa-instagram border p-3 rounded-circle bg-light text-danger'></p><br />
      </div>
    </div>
  )
}

export default Slider