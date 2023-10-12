import React, { useEffect, useState } from 'react'
import { CDN_RESTRAU_IMG_URL } from '../../utils/cdn_urls';
import Shimmer from '../Shimmer/Shimmer';

const Maincontainer = () => {
    const [advice, setAdvice] = useState("");
    const [restaurantList, setRestaurantList] = useState([]);



    useEffect(() => {
        const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6101645&lng=77.20674269999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.data.cards.length);
                for (let i = 0; i < json.data.cards.length; i++) {
                    if (json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants != null && json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants != "") {
                        let finalData = json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants;
                        console.log(finalData)
                        setRestaurantList(finalData)
                    }
                }
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    console.log(restaurantList)

    // const DilveryTime = () => {
    //     // restaurantList = )
    //     // console.log("HEY",restaurantList)
    //     setRestaurantList(restaurantList.sort((a,b) => a?.info?.sla?.deliveryTime - b?.info?.sla.deliveryTime))
    // }
    const DilveryTime = () => {

        setRestaurantList(restaurantList
            .filter(item => !isNaN(parseFloat(item?.info?.sla?.deliveryTime)))
            .sort((a, b) => {
                const slaA = parseFloat(a?.info?.sla?.deliveryTime);
                const slaB = parseFloat(b?.info?.sla?.deliveryTime);
                return slaA - slaB;
            }));
    }

    // data.sort((a, b) => {
    //     const costA = parseInt(a.costForTwo.slice(1), 10);
    //     const costB = parseInt(b.costForTwo.slice(1), 10);
    //     return costA - costB;
    // });

    const lowPrice = () => {
        console.log("lowPrice")
        setRestaurantList(restaurantList.filter(item => !isNaN(parseFloat(item?.info?.costForTwo.slice(1), 10))).sort((a, b) => {
            const costA = parseFloat(a?.info?.costForTwo.slice(1), 10);
            const costB = parseFloat(b?.info?.costForTwo.slice(1), 10);
            return costA - costB;
        }));
    }

    const highPrice = () => {
        console.log("highPrice")
        setRestaurantList(restaurantList.filter(item => !isNaN(parseFloat(item?.info?.costForTwo.slice(1), 10))).sort((a, b) => {
            const costA = parseFloat(a?.info?.costForTwo.slice(1), 10);
            const costB = parseFloat(b?.info?.costForTwo.slice(1), 10);
            return costB - costA;
        }));
    }

    const Rating = () => {
        console.log("Rating")
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
                        <div className="item-bar">
                            <div className="number">{restaurantList.length} restaurants</div>
                            <div className="filters">
                                <div className="relevance">Relevance</div>
                                <div className="delivery" onClick={DilveryTime}>Delivery Time</div>
                                <div className="rating" onClick={Rating}>Rating</div>
                                <div className="cost-lh" onClick={lowPrice}>Cost: Low to High</div>
                                <div className="cost-hl" onClick={highPrice}>Cost: High to Low</div>
                            </div>
                        </div>
                        <div className="restaurant-list">
                            {restaurantList.length === 0 ? (
                                <Shimmer /> /* Display a loading shimmer effect while fetching data */
                            ) : (
                                restaurantList.map((item) => {
                                    return (
                                        <div className="place">
                                            <a
                                                href="/restaurants/waffld-domlur-bangalore-303446"
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
                                                        {/* {
                                                        item?.info?.aggregatedDiscountInfoV3 != null && item?.info?.aggregatedDiscountInfoV3 != "" && item?.info?.aggregatedDiscountInfoV3 != undefined ?
                                                            <div className="offer-div">
                                                                <span className="icon-offer-filled">
                                                                    <i className="fa-solid fa-tag" />
                                                                </span>
                                                                <span className="offer-text">
                                                                    {item?.info?.aggregatedDiscountInfoV3?.header}  | Use WELCOME50
                                                                </span>
                                                            </div> : ""
                                                    } */}

                                                    </div>
                                                    <div className="quick-view">
                                                        <span role="button" aria-label="Open" className="view-btn">
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

export default Maincontainer