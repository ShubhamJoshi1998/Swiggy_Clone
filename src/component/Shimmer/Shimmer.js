import React from 'react';

const RestaurantShimmer = () => {
    return (
        <>
        {/* // <div className="restaurant-list"> */}
            {/* // <div className="place"> */}
                {[...Array(12)].map((index) => (
                    <div className="list-item shimmer-card">
                        <div className="item-content">
                            {/* <div className="top-img shimmer-img"></div> */}
                            <div className="place-name-div">
                                <div className="name shimmer-text"></div>
                                <div className="food-items shimmer-text"></div>
                            </div>
                            <div className="info-div">
                                {/* <div className="rating shimmer-text"></div> */}
                                <div className="delivery shimmer-text"></div>
                                <div className="price shimmer-text"></div>
                            </div>
                            <div className="offer-div shimmer-offer"></div>
                        </div>
                        <div className="quick-view">
                            <span role="button" aria-label="Open" className="view-btn shimmer-text">QUICK VIEW</span>
                        </div>
                    </div>
                ))}
                </>
            // {/* // </div> */}
        //  </div>
    );
};

export default RestaurantShimmer;
