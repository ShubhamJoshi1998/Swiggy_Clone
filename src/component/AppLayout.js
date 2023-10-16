import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Maincontainer from './Maincontainer/Maincontainer'
import FoodCarousel from './FoodCarousel/FoodCarousel'

const AppLayout = () => {
    return (
        <div><>
            <meta charSet="UTF-8" />
            <title>Swiggy Clone</title>
            <link
                rel="icon"
                sizes="192x192"
                href="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_192,h_192/portal/c/logo_2022.png"
            />
            <link rel="stylesheet" href="style.css" type="text/css" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700;900&display=swap"
                rel="stylesheet"
            />
            <div className="main-container">
                {/* Navbar Section */}
                <Header />
                {/* <div className='mx-8 sm:mx-14 md:mx-24 lg:mx-44 pb-4'>
                <FoodCarousel />
                </div> */}
                {/* Content Section */}
                <Maincontainer />
                {/* Footer Section */}
                <Footer />
            </div>
            {/* <div class="box">
    <div class="left">
        <div class="top">
        <div class="logo">
            <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
            />
        </div>
        <div class="buttons">
            <a href="#" id="btn1">Login</a>
            <a href="#" id="btn2">Sign up</a>
        </div>
        </div>
        <div class="text">
        <h1 id="text-head">Hungry?</h1>
        <p>Order food from favourite restaurants near you.</p>
        </div>
        <div class="location-box">
        <div class="location-search">
            <input type="text" placeholder="Enter your delivery location" />
        </div>
        <div class="location-button">
            <a href="#">FIND FOOD</a>
        </div>
        </div>
        <div class="bottom">
        <h4>POPULAR CITIES IN INDIA</h4>
        <ul>
            <li><a href="#">Ahmedabad</a></li>
            <li><a href="#">Bangalore</a></li>
            <li><a href="#">Chennai</a></li>
            <li><a href="#">Delhi</a></li>
            <li><a href="#">Gurgaon</a></li>
            <li><a href="#">Hyderabad</a></li>
            <li><a href="#">Kolkata</a></li>
            <li><a href="#">Mumbai</a></li>
            <li><a href="#">Pune</a></li>
            <li><a href="#">& more.</a></li>
        </ul>
        </div>
    </div>
    <div class="right"></div>
    </div>
    <div class="function">
    <div class="fun-box">
        <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
        width="105"
        height="199"
        />
        <h4>No Minimum Order</h4>
        <p>
        Order in for yourself or for the group, with no restrictions on order
        value
        </p>
    </div>
    <div class="fun-box">
        <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
        width="112"
        height="206"
        />
        <h4>Live Order Tracking</h4>
        <p>
        Know where your order is at all times, from the restaurant to your
        doorstep
        </p>
    </div>
    <div class="fun-box">
        <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
        width="124"
        height="188"
        />
        <h4>Lightning-Fast Delivery</h4>
        <p>
        Experience Swiggy's superfast delivery for food delivered fresh & on
        time
        </p>
    </div>
    </div>
    <div class="app">
    <div class="app-text">
        <h1>Restaurants in your pocket</h1>
        <p>
        Order from your favorite restaurants & track on the go, with the
        all-new Swiggy app.
        </p>
        <div class="app-button">
        <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
            height="54"
        />
        <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
            height="54"
        />
        </div>
    </div>
    <div class="app-image">
        <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"
        height="489"
        width="384"
        />
        <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"
        height="489"
        width="384"
        />
    </div>
      </div> */}
        </>
        </div>
    )
}

export default AppLayout