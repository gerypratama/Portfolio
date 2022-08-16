import React from 'react';
import './style.css';
import leadImg from '../assets/img/Saly-10.png'

const Hero = () => {
    return (
        <section className="hero text-center bg-light pt-5 mt-5">
            <h1 className="display-4 text-primary mx-5 fw-normal">Nice to meet you!</h1>
            <img className='mb-3' src={leadImg} alt='placeholder' style={{"width": "60vw"}} />
            <h1 className="display-3 text-secondary fw-semibold mx-5 mb-7">I'm Gery Pratama</h1>
            <h1 className="display-4 text-secondary mx-5 mb-7">a self-taught <span className='text-primary fw-normal'>web developer</span></h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0d6efd" fillOpacity="1" d="M0,96L120,128C240,160,480,224,720,224C960,224,1200,160,1320,128L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </section>
    )
}

export default Hero