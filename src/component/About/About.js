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
            <div className="user-profile-container">
                <div className="user-profile-card">
                    <img
                        src="https://avatars.githubusercontent.com/u/50248026?v=4"
                        className="user-profile-image"
                        alt="Preethi Pantangi"
                    />
                    <div className="user-profile-details text-center">
                        <div className="user-profile-name font-bold">Shubham Joshi</div>
                        <div>ReactJs Developer</div>
                        <div>Dwarka, Delhi</div>
                    </div>
                    <div className="user-profile-links">
                        <a
                            href="https://github.com/ShubhamJoshi1998"
                            target="_blank"
                            rel="noreferrer"
                            className="user-profile-link mr-3"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                alt="Github"
                                className="user-profile-link-icon"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/shubham-joshi-827b66165/"
                            target="_blank"
                            rel="noreferrer"
                            className="user-profile-link mr-3"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"
                                alt="LinkedIn"
                                className="user-profile-link-icon"
                            />
                        </a>
                        {/* <a
                            href="https://pantangisaipreethi3.wixsite.com/portfolio"
                            target="_blank"
                            rel="noreferrer"
                            className="user-profile-link"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/686/686165.png"
                                alt="Portfolio"
                                className="user-profile-link-icon"
                            />
                        </a> */}
                    </div>
                </div>
            </div>
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
                    Our mission is to elevate the quality of life for the urban consumer with<br />
                    unparalleled convenience. Convenience is what makes us tick. It's what makes
                    <br /> us get out of bed and say ,    "Let's do this."
                </p>
            </div>
            <div className="about-belong-text">
                <span className="montserrat-text" style={{ color: "black" }}>The Swiggy <span className="pacifico-bold">Journey</span></span>
                <img src="/Images/Swiggy-Journey.jpg" alt="" style={{ paddingTop: "80px", width: "100%" }} />
            </div>




            {/* </div> */}

        </div>
    )
}

export default About
