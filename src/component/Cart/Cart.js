import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import { connect } from 'react-redux'
import { addCusinesData } from '../../redux/actions/cusinesActions'

const CartPage = (props) => {
    const { addCusinesData, assetList } = props

    // console.log(assetList)
    const [cartItems, setCartItems] = useState(assetList);
    const navigate = useNavigate();

    const RESTRA_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

    const [isPaymentPopupOpen, setPaymentPopupOpen] = useState(false);
    const [isOrderPlaced, setOrderPlaced] = useState(false);

    const clearCart = () => {
        setCartItems([]);
        addCusinesData([]);
    };

    const calculateTotalPrice = () => {
        return assetList?.reduce((total, item) => total + item.price * item.count, 0).toFixed(2);
    };

    const incrementCount = (itemId) => {
        const updatedCart = assetList?.map((item) => {
            if (item.name === itemId) {
                item.count += 1;
            }
            return item;
        });
        setCartItems(updatedCart);
        addCusinesData(updatedCart)
    };

    const decrementCount = (itemId) => {
        const updatedCart = cartItems.map((item) => {
            if (item.name === itemId && item.count > 1) {
                item.count -= 1;
            }
            return item;
        });
        setCartItems(updatedCart);
        addCusinesData(updatedCart)
    };

    const openPaymentPopup = () => {
        setPaymentPopupOpen(true);
    };

    const closePaymentPopup = () => {
        setPaymentPopupOpen(false);
    };

    const handlePay = () => {
        setOrderPlaced(true);
        closePaymentPopup();
        setCartItems([]);
        // Automatically remove the message after 4 seconds
        setTimeout(() => {
            navigate('/'); // Redirect to the home page
        }, 2000);
    };

    return (
        <div className="main-container">
            <Header />
            <section className="restaurants">
                <div className="container">
                    <div className="cart-page">
                        {cartItems.length > 0 ? (
                            <>
                                <h1>Your Cart</h1>
                                <div className="clear-cart-container">
                                    <button onClick={clearCart} className="clear-cart-button">
                                        Clear Cart
                                    </button>
                                </div>
                            </>) : ""}
                        {cartItems?.map((item) => (
                            <div key={item.name} className="cart-item">
                                <img src={RESTRA_CDN_URL + item.image} alt={item.name} className="item-image" />
                                <div className="item-details">
                                    <h2 className="item-title">{item.name}</h2>
                                    <p className="item-price">₹{(item.price * item.count).toFixed(2)}</p>
                                </div>
                                <div className="quantity-controls">
                                    <button onClick={() => decrementCount(item.name)} className="quantity-button">-</button>
                                    <span className="item-count">{item.count}</span>
                                    <button onClick={() => incrementCount(item.name)} className="quantity-button">+</button>
                                </div>
                            </div>
                        ))}
                        {cartItems.length > 0 ? (


                            <div className="cart-footer">
                                <div className="total-price">Total: ₹{calculateTotalPrice()}</div>
                                <button onClick={openPaymentPopup} className="proceed-to-payment-button">
                                    Proceed to Payment
                                </button>
                            </div>
                        ) : (
                            <div className="empty-cart-container">
                                <div className="empty-cart-message">
                                    <div className="empty-cart-icon"></div>
                                    <div className="empty-cart-title">Your cart is empty</div>
                                    <div className="empty-cart-subtitle">You can go to the home page to view more restaurants</div>
                                    <button className="see-restaurants-button" onClick={() => navigate('/')}>See restaurants near you</button>
                                </div>
                            </div>
                        )}

                        {isPaymentPopupOpen && !isOrderPlaced && (
                            <div className="payment-popup">
                                <div className="payment-content">
                                    <div className="payment-amount">
                                        Payment Amount: ₹{calculateTotalPrice()}
                                    </div>
                                    <button onClick={handlePay} className="pay-button">
                                        Pay
                                    </button>
                                    <button className="close-button" onClick={closePaymentPopup}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                        {isOrderPlaced && (
                            <div className="order-placed-message">
                                Your order is successfully placed!
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};


const mapStateToProps = (state) => ({
    assetList: state.cusinesReducer.assetList
})

const mapDispatchToProps = {
    addCusinesData
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
