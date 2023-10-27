import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';

const About = () => {
    const [avtar, setAvtar] = useState();

    const data = "https://api.github.com/users/ShubhamJoshi1998";
    const fetchData = async () => {
        try {
            const response = await fetch(data);
            const json = await response.json();
            setAvtar(json)
        } catch (error) {
            console.log("error", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [])
    // console.log("avtar", avtar)
    return (

        <div className="main-container">
            <Header />

            <img src="/Images/banner3.jpg" alt="" style={{ paddingTop: "80px", width: "100%" }} className='img-container' />
            <div className="user-profile-container">
                <div className="user-profile-card">
                    <img
                        src={avtar ? avtar.avatar_url : ""}
                        className="user-profile-image"
                        alt="Shubham Joshi"
                    />
                    <div className="user-profile-details text-center">
                        <div className="user-profile-name font-bold">{avtar ? avtar.name : avtar}</div><br />
                        <div>{avtar ? avtar.bio : ""}</div><br />
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
            <div className="mission-container">
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
            <Footer />

        </div>
    )
}

export default About
