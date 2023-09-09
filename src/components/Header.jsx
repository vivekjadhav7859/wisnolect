import React, { useEffect } from "react";
import img1 from '../assets/image1svg.svg';
import Typewriter from "typewriter-effect";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
              <h1 className="display-2" data-aos="fade-up">
                Wisnolect
              </h1>
              <div className="typewriter"><h3>A perfect place for</h3>

                <Typewriter
                  options={{
                    strings: ['Web Services', 'App Services', 'AI/ML Services', 'Social Media Services'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>

              <p className="main-hero-para" data-aos="zoom-in">
                "Wisnolect is a dynamic company offering comprehensive services in app and web development, adeptly managing social media, and delivering advanced AI, ML, and Deep Learning solutions, empowering businesses for success."
              </p>
              {/* <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-75 me-3 p-2 form-control-text" placeholder="Please Search our services here"
                />
                <div className="input-group-button">Get it Now</div>
              </div> */}


            </div>
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center  align-items-center main-herosection-images order-md-first order-sm-first" data-aos="flip-left">
              <img src={img1} alt="heroimg" className="img-fluid" />
              {/* <img src={img2} alt="heroimg" className="img-fluid main-hero-img2" /> */}
            </div>

          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
