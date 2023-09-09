// import { useState } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HowWeWork from "./components/HowWeWork";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from './components/Footer'


function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <HowWeWork />
            <AboutUs />
            <Services />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;
