import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-6 col-lg-3">
                                    <h2>
                                        Wisnolect
                                    </h2>
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/service">Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact</Link>
                                        </li>

                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <h2>
                                        Small talk about us
                                    </h2>
                                    <div className='main-hero-para'>
                                        "Welcome to Wisnolect, your comprehensive solution for cutting-edge AI, ML, DL, App, Web, and social media services. Elevate your corporation with us."
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <h2>
                                        Our Services
                                    </h2>
                                    <ul>
                                        <li>
                                            <Link to="/service">AI Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/service">ML services</Link>
                                        </li>
                                        <li>
                                            <Link to="/service">Web Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/service">App services</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3 contacts">
                                    <h2>
                                        Connect with us
                                    </h2>
                                    <div className="row">
                                        <div className="col-2 mx-auto ">
                                            <a href="https://instagram.com/wisnolect?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target='_blank'>
                                                <i className='fab fa-instagram fontawesome-style'></i>
                                            </a>
                                        </div>
                                        <div className="col-2 mx-auto ">
                                            <a href="https://wa.me/919730512658" target='_blank'>
                                                <i className='fab fa-whatsapp fontawesome-style'></i>
                                            </a>

                                        </div>
                                        <div className="col-2 mx-auto ">
                                            <a href="mailto:wisnolect@gmail.com" target='_blank'>
                                                <i class="fa-regular fa-envelope fontawesome-style"></i>
                                            </a>
                                        </div>
                                        {/* <div className="col-2 mx-auto ">
                                            <a href="www.linkedin.com" target='_blank'>
                                                <i className='fab fa-linkedin fontawesome-style'></i>
                                            </a>
                                        </div> */}

                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-5">
                                <p className='main-hero-para text-center w-100'>Copyright @ 2023 Wisnolect. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
