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
                {/* Content Section */}
                <Maincontainer />
                {/* Footer Section */}
                <Footer />
            </div>
           
        </>
        </div>
    )
}

export default AppLayout