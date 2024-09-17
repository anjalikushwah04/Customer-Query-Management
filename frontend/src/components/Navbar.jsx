import React from 'react'
import logo from '../components/Images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="row dark ">
            <div className="col-md-12 mb-5 ms-3">
                <nav className="navbar navbar-expand-lg dark navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><img src={logo} /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto w-75">
                                <li className="nav-item">
                                    <a className="nav-link active pe-3 f-bold" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active pe-3 f-bold" href="/company">Campany</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active pe-3 f-bold" href="/products">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active pe-3 f-bold" href="/services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active pe-3 f-bold" href="/catalogues">Catalogues</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active pe-3 f-bold" href="/careers">Careers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active pe-3 f-bold" href="/contact-us">Contact Us</a>
                                </li>
                            </ul>
                            <Link to={'/adlogin'} className='btn btn-outline-danger text-light me-2'>Admin</Link>
                            <Link to={'/login'} className='btn btn-outline-danger text-light'>Query ?</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar