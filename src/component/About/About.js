import React from 'react'
import Header from '../Header/Header'
// import './About.css'
// import banner from "../../../public/Images/banner3.jpg"

const About = () => {
    return (

        <div className="main-container">
            <Header />

            {/* <div className="container"> */}
                <img src="/Images/banner3.jpg" alt="" style={{ paddingTop: "80px", width: "100%" }} className='img-container' />
                <div className="about-text-container">
                    <div className="about-text-line">We build innovative products & solutions that deliver unparalleled convenience to urban consumers.</div>
                    <div className="about-text-line">The best part? Every bit of your work at Swiggy will help elevate the lives of our users across India.</div>
                </div>
                <div className="about-belong-text">
                    <span className="montserrat-text">Where Do You</span> <span className="pacifico-bold">Belong ?</span>
                </div>
                <div className="about-swiggy-container">
                    <div className="about-item">
                        <img src="/Images/about-tech.png" alt="TECHNOLOGY" />
                        <h2>TECHNOLOGY</h2>
                    </div>
                    <div className="about-item">
                        <img src="/Images/about-buisness.png" alt="BUSINESS" />
                        <h2>BUSINESS</h2>
                    </div>
                    <div className="about-item">
                        <img src="/Images/about-kitchen.png" alt="CLOUD KITCHEN" />
                        <h2>CLOUD KITCHEN</h2>
                    </div>
                    <div className="about-item">
                        <img src="/Images/about-customercare.png" alt="CUSTOMER CARE" />
                        <h2>CUSTOMER CARE</h2>
                    </div>
                    <div className="about-item">
                        <img src="/Images/about-campus.png" alt="CAMPUS" />
                        <h2>CAMPUS</h2>
                    </div>
                    <div className="about-item">
                        <img src="/Images/about-corporate.png" alt="CORPORATE SUPPORT FUNCTIONS" />
                        <h2>CORPORATE SUPPORT FUNCTIONS</h2>
                    </div>
                </div>
                <div class="mission-container">
                    <p>
                        Our mission is to elevate the quality of life for the urban consumer with<br/>
                         unparalleled convenience. Convenience is what makes us tick. It's what makes 
                         <br/> us get out of bed and say ,    "Let's do this."
                    </p>
                </div>
                <div className="about-belong-text">
                    <span className="montserrat-text" style={{color:"black"}}>The Swiggy <span className="pacifico-bold">Journey</span></span>
                    <img src="/Images/Swiggy-Journey.jpg" alt="" style={{ paddingTop: "80px", width: "100%" }} />
                </div>


            {/* </div> */}

        </div>
    )
}

export default About
