import React, { useState, useEffect } from "react";
import img1 from "../assets/image3svg.svg";
import img2 from "../assets/image5svg.svg";
import aboutUsServices from "../api/aboutUsServices";
import aboutUsServices2 from "../api/aboutUsServices2";
import AOS from 'aos';
import 'aos/dist/aos.css'

const AboutUs = () => {
    const [aboutData, setaboutData] = useState(aboutUsServices);
    const [aboutData2, setaboutData2] = useState(aboutUsServices2);
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <>
            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-leftside-img" data-aos="zoom-out-down">
                            <img src={img1} alt="image " />
                        </div>
                        {/* section right side data */}
                        <div className="col-12 col-lg-7 our-service-list" data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <h3 className="mini-title">
                                Here is the way how we work
                            </h3>
                            <h1 className="main-heading">Innovate. Inspire. Impact</h1>

                            {aboutData.map((curElem) => {

                                const { id, title, description } = curElem;
                                return (
                                    <>
                                        <div className="row our-services-info" key={id}>
                                            <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-10 our-service-data">
                                                <h2>{title}</h2>
                                                <p className="main-hero-para">
                                                    {description}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}

                            <br />
                            <button className="btn-style btn-style-border">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>


            {/* second part of about us section */}
            <section className="common-section our-services our-services-rightside">
                <div className="container mb-5">
                    <div className="row">

                        {/* section right side data */}
                        <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column" data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <h3 className="mini-title">
                                Why you should choose us?
                            </h3>
                            <h1 className="main-heading">Turning Ideas Into Reality.</h1>

                            {aboutData2.map((curElem) => {

                                const { id, title, description } = curElem;
                                return (
                                    <>
                                        <div className="row our-services-info" key={id}>
                                            <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-10 our-service-data">
                                                <h2>{title}</h2>
                                                <p className="main-hero-para">
                                                    {description}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}

                            <br />
                            <button className="btn-style btn-style-border">Learn More</button>
                        </div>
                        {/* images section */}
                        <div className="col-12 col-lg-5 our-service-rightside-img " data-aos="zoom-out-up">
                            <img src={img2} alt="image " />
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
};

export default AboutUs;
