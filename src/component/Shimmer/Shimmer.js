import React from 'react';

const RestaurantShimmer = () => {

    const items = [...Array(12)];
    return (
        <>
            {items.map((item,index) => (
                <div key={index} className="list-item shimmer-card">
                    <div className="item-content">
                        <div className="place-name-div">
                            <div className="name shimmer-text"></div>
                            <div className="food-items shimmer-text"></div>
                        </div>
                        <div className="info-div">
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
    );
};

export default RestaurantShimmer;
