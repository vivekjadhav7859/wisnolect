import React, { useState, useEffect } from "react";
// import { Chrome } from "lucide-react";
import workApi from "../api/workApi";
import AOS from 'aos';
import 'aos/dist/aos.css'

const HowWeWork = () => {
    const [workData, setworkData] = useState(workApi);
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <>
            <section>
                <div className="work-container container">
                    <h1 className="main-heading text-center">What we Provide</h1>
                    <div className="row" data-aos="zoom-in-down">
                        {workData.map((curElem) => {
                            const { id, logo, title, description } = curElem;
                            return (
                                <>
                                    <div className="col-12 col-lg-4 text-center work-container-subdiv">
                                        <div className="fontawesome-div">
                                            <i class={`fontawesome-style ${logo}`}></i>
                                        </div>
                                        <h2 className="sub-heading">{title}</h2>
                                        <p className="main-hero-para w-100">{description}</p>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HowWeWork;
