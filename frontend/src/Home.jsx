import React from 'react'
// import banner from './components/Images/about-banner.jpg'
import about from './components/Images/about.jpg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Slider from './components/Slider'
import Services from './components/Services'
import Global from './components/Global'
import Info from './components/Info'
import Social from './components/Social'
import Testimonials from './components/Testimonials'
import News from './components/News'
import Upfooter from './components/Upfooter'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
     

     {/* <div className="row mt-5 p-5 bg-primary">
      <div className="col-md-6 ms-auto text-white">
        <h4>About us</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolorum reprehenderit aliquid quaerat iure quidem, consequatur magnam iste possimus, quasi vel veritatis, accusamus fugit debitis culpa consectetur cumque quibusdam mollitia?</p>
      </div>
      <div className="col-sm-4 me-auto" >
      <img src={banner} className='w-100'/>

      </div>
     </div> */}

     <div className="row mt-5 p-5 bg-light">
      <div className="col-md-6">
        <img src={about}/>

      </div>
      <div className="col-md-6 my-auto mx-auto">
        <h1 className='f-bold'>About Us</h1>
        <p className=''>KARAM is a leading global occupational safety brand with a vast portfolio of over 3500 certified products conforming to multiple national and international standards and exporting our safety solutions to over 100 nations.</p>
        <p className=''>Our team of over 4200 professionals have been relentlessly developing, testing, and evaluating products, earning KARAM a reputation as one of the finest global companies that provide world-class personal protective equipment (PPE), fall protection solutions and fixed-line systems.</p>
        <p className=''>We are also a CRISIL A/Stable/CRISIL A1 rated company which reflects the robust market position of the entire KARAM Group.</p>
        <button>View More</button>
      </div>
     </div>
     <Services/>
     <Global/>
     <Info/>
     <Social/>
     <Testimonials/>
     <News/>
     <Upfooter/>
     <Footer/>

    </>
   
  )
}

export default Home