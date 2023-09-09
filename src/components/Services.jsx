import React, { useState, useEffect } from 'react';
import serviceApi from '../api/serviceApi';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Services = () => {
    const [serviceData, setServiceData] = useState(serviceApi);
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div className="services-main-container">
                <div className="container service-container">
                    <h1 className="main-heading text-center fw-bold">Our Featured Services..!</h1>
                    <div className="row" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        {serviceData.map((curElem) => {
                            const { id, logo, title, description } = curElem;
                            return (
                                <>
                                    <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv" key={id}>
                                        <div className="fontawesome-div">
                                            <i className={`fontawesome-style ${logo}`}></i>
                                        </div>
                                        <h2 className="sub-heading">{title}</h2>
                                        <p className='main-hero-para'>{description}</p>
                                    </div >
                                </>
                            )
                        })}

                    </div>
                </div>
            </div >
        </>
    )
}

export default Services
