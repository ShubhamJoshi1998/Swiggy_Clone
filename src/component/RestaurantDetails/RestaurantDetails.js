
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
// import useRestaurantMenu from '../utils/useRestaurantMenu';
import { CDN_RESTRAU_IMG_URL } from '../../utils/cdn_urls';
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import RestaurantShimmer from '../Shimmer/Shimmer';
import Header from '../Header/Header';
// import MenuCard from './MenuCard';
// import MenuItems from './MenuItems';
import Shimmer from '../Shimmer/Shimmer';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

const RestaurantDetails = () => {
    const [detailsPage, setDetailsPage] = useState();
    const [restrauInfo, setRestrauInfo] = useState();
    const navigate = useNavigate();
    const params = useParams();
    //check the names before destructuring
    const { resId } = useParams();
    // const { restaurantInfo, restaurantMenu } = useRestaurantMenu(resId);
    console.log("params", params.id)


    const RESTRA_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

    useEffect(() => {
        const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId=${params.id}&catalog_qa=undefined&submitAction=ENTER`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json?.data);
                const filteredData = json?.data.cards.filter((item) => {
                    return Object.keys(item).some((key) => key.startsWith("groupedCard"));
                });
                console.log(filteredData);
                let detailsData = filteredData[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                console.log("detailsData", detailsData);
                const itemCardsData = detailsData.filter((item) => item?.card?.card?.title == "Recommended")
                console.log(itemCardsData)
                const recommendedData = itemCardsData[0]?.card?.card.itemCards
                console.log("recommendedData", recommendedData)
                setDetailsPage(recommendedData)
                const filteredData1 = json?.data.cards.filter((item) => item?.card?.card?.info?.id == params.id);
                console.log("filteredData1", filteredData1)
                setRestrauInfo(filteredData1)

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
    console.log(restrauInfo)


    if (!restrauInfo) {
        return <div>
            <Shimmer />
        </div>;
    }
    return (
        <div className="main-container">
            <Header />
            <section className="restaurants">
                <div className="container">
                    <div className="restaurant-page">
                        <Link className="previous" to="/">&laquo; Back</Link>

                        <div className="restaurant-info">
                            <div className="restaurant-image">
                                <img
                                    src={restrauInfo ? (CDN_RESTRAU_IMG_URL + restrauInfo[0].card.card.info.cloudinaryImageId) : ''}
                                    alt={restrauInfo ? restrauInfo[0].card.card.info.name : ''}
                                />
                            </div>
                            <div className="restaurant-details">
                                <h1 className="restaurant-name">
                                    {/* {restrauInfo[0]?.card?.card?.info?.name} */}

                                    {restrauInfo ? restrauInfo[0].card.card.info.name : ''}
                                </h1>
                                <p className="restaurant-rating">
                                    <b>Avg Rating:</b>
                                    {restrauInfo ? restrauInfo[0]?.card?.card?.info?.avgRating : ''}
                                </p>
                                <p className="restaurant-ratings">
                                    <b>Total Ratings:</b>
                                    {restrauInfo ? restrauInfo[0]?.card?.card?.info?.totalRatingsString : ''}
                                </p>
                                <p className="restaurant-delivery-time">
                                    <b>Delivery Time:</b>
                                    {restrauInfo ? restrauInfo[0]?.card?.card?.info?.sla.slaString : " "}
                                    {/* ({restrauInfo ? restrauInfo[0]?.card?.card?.info?.expectationNotifiers[0]?.text : " "} ) */}
                                </p>
                                <p className="restaurant-cuisines">
                                    <b>Cuisines:</b>
                                    {restrauInfo ? restrauInfo[0]?.card?.card?.info?.cuisines.join(", ") : ""}
                                </p>
                                <p className="restaurant-cost">
                                    <b>Cost for Two:</b>
                                    {restrauInfo ? restrauInfo[0]?.card?.card?.info?.costForTwoMessage : " "}
                                </p>
                                <p className="restaurant-address">
                                    <b>Address:</b>
                                    {restrauInfo ? restrauInfo[0]?.card?.card?.info?.labels[1].message : ""},{" "}
                                    {restrauInfo ? restrauInfo[0]?.card?.card?.info?.city : ""}
                                </p>
                            </div>
                        </div>

                        <div className="restaurant-menu">
                            <h2 className="menu-heading">Menu</h2>
                            <ul className="menu-list">
                                {detailsPage?.map((item, index) => (
                                    <li key={item?.card?.info?.id} className="menu-item">
                                        <img
                                            src={RESTRA_CDN_URL + item.card.info.imageId}
                                            alt={item?.card?.info?.name}
                                            className="menu-item-image"
                                        />
                                        <div className="menu-item-details">
                                            <h3 className="item-name">{item?.card?.info?.name}</h3>
                                            <p className="item-description">{item?.card?.info?.description}</p>
                                            <span className="item-price">₹{(item?.card?.info?.price) ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
                
                                        </div>
                                        
                                        <button
                                                data-testid="addBtn"
                                                className="Add-button"
                                            // onClick={() => addFoodItem(ItemDetails)}
                                            >
                                                Add
                                            </button>
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetails
