import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { CDN_RESTRAU_IMG_URL } from '../../utils/cdn_urls';
import Shimmer from '../Shimmer/Shimmer';
import OfferSection from './OfferSection';
import { getLocationData } from '../../redux/actions/cusinesActions';

const Maincontainer = (props) => {
    const { getLocationData, areaData } = props;
    const [advice, setAdvice] = useState("");
    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(() => {
        var lat = "28.6101645";
        var lng = "77.20674269999999";
        // console.log("inital", lat, lng)
        if (areaData) {
            lat = areaData.lat;
            lng = areaData.lng

        }
        // console.log("change", lat, lng)
        const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
        // console.log("url", url)
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                // console.log("restau", json.data.cards.length);
                for (let i = 0; i < json.data.cards.length; i++) {
                    if (json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants != null && json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants != "") {
                        let finalData = json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants;
                     
                        setRestaurantList(finalData)
                    }
                }
            } catch (error) {
                // console.log("error", error);
            }
        };

        fetchData();
    }, [areaData]);

    // console.log(restaurantList.map((item) => console.log(item.info.id)))

    const DilveryTime = () => {

        setRestaurantList(restaurantList
            .filter(item => !isNaN(parseFloat(item?.info?.sla?.deliveryTime)))
            .sort((a, b) => {
                const slaA = parseFloat(a?.info?.sla?.deliveryTime);
                const slaB = parseFloat(b?.info?.sla?.deliveryTime);
                return slaA - slaB;
            }));
    }

    const lowPrice = () => {
        // console.log("lowPrice")
        setRestaurantList(restaurantList.filter(item => !isNaN(parseFloat(item?.info?.costForTwo.slice(1), 10))).sort((a, b) => {
            const costA = parseFloat(a?.info?.costForTwo.slice(1), 10);
            const costB = parseFloat(b?.info?.costForTwo.slice(1), 10);
            return costA - costB;
        }));
    }

    const highPrice = () => {
        // console.log("highPrice")
        setRestaurantList(restaurantList.filter(item => !isNaN(parseFloat(item?.info?.costForTwo.slice(1), 10))).sort((a, b) => {
            const costA = parseFloat(a?.info?.costForTwo.slice(1), 10);
            const costB = parseFloat(b?.info?.costForTwo.slice(1), 10);
            return costB - costA;
        }));
    }

    const Rating = () => {
        // console.log("Rating")
        setRestaurantList(restaurantList.filter(item => !isNaN(parseFloat(item?.info?.avgRating))).sort((a, b) => {
            const costA = parseFloat(a?.info?.avgRating);
            const costB = parseFloat(b?.info?.avgRating);
            return costB - costA;
        }));
    }
    return (
        <div>
            <main className="main-container">
                <section className="restaurants">
                    <div className="container">
                        <div className="res-header bestOfferSection">Best offers for you</div>
                        <OfferSection />
                        <div className="item-bar res-header">
                            <div className="number">{restaurantList.length} restaurants</div>
                            <div className="filters">
                                <div className="delivery" onClick={DilveryTime}>Delivery Time</div>
                                <div className="rating" onClick={Rating}>Rating</div>
                                <div className="cost-lh" onClick={lowPrice}>Cost: Low to High</div>
                                <div className="cost-hl" onClick={highPrice}>Cost: High to Low</div>
                            </div>
                        </div>
                        <div className="restaurant-list">
                            {restaurantList.length === 0 ? (
                                <Shimmer /> 
                            ) : (
                                restaurantList.map((item, index) => {
                                    return (
                                        <div key={index} className="place">
                                            <a
                                                href={`/restaurant/${item.info.id}`}
                                                className="place-link"
                                            >
                                                <div className="list-item">
                                                    <div className="item-content">
                                                        <div className="top-img">
                                                            <img
                                                                className="_2tuBw _12_oN"
                                                                alt="La Pino'z Pizza"
                                                                src={CDN_RESTRAU_IMG_URL + item?.info?.cloudinaryImageId}
                                                                width={254}
                                                                height={160}
                                                            />
                                                        </div>
                                                        {
                                                            item?.info?.aggregatedDiscountInfoV3 != null && item?.info?.aggregatedDiscountInfoV3 != "" && item?.info?.aggregatedDiscountInfoV3 != undefined ?
                                                                <div
                                                                    className="status"
                                                                    style={{
                                                                        background: "rgb(58, 60, 65)",
                                                                        color: "rgb(255, 255, 255)",
                                                                        borderColor: "rgb(30, 32, 35) transparent"
                                                                    }}
                                                                >
                                                                    <div className="status-title">{item?.info?.aggregatedDiscountInfoV3.header}</div>
                                                                </div> : " "
                                                        }
                                                        <div className="place-name-div">
                                                            <div className="name">{item?.info?.name}</div>                                                  
                                                            <div
                                                                className="food-items"
                                                                title="Italian, Pizzas, Fast Food, Mexican, Desserts, Beverages"
                                                            >
                                                                {(item?.info?.cuisines.join(", ")).substring(0, 40) + "..."}
                                                            </div>
                                                            <div style={{fontSize:"13px"}}>{`${item?.info?.areaName}`}</div>
                                                        </div>
                                                        <div className="info-div">
                                                            <div className="rating">
                                                                <span className="icon-star">
                                                                    <i className="fa-solid fa-star" />
                                                                </span>
                                                                <span>{item?.info?.avgRating}</span>
                                                            </div>
                                                            <div>•</div>
                                                            <div>{item?.info?.sla.slaString}</div>
                                                            <div>•</div>
                                                            <div className="price">{item?.info?.costForTwo}</div>
                                                        </div>

                                                    </div>
                                                    <div className="quick-view">
                                                        <span role="button" aria-label="Open" className="view-btn" >
                                                                QUICK VIEW
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })

                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}




const mapStateToProps = (state) => ({
    areaData: state.cusinesReducer.areaData
})

const mapDispatchToProps = {
    getLocationData
}

export default connect(mapStateToProps, mapDispatchToProps)(Maincontainer)