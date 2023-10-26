import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Contact = () => {
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
            <div className="container">
                <img src="/Images/emailus.webp" alt="" style={{ paddingTop: "80px", width: "100%", height:"500px" }} className='img-container' />
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
                <Footer />
            </div>
        </div>
    )
}

export default Contact