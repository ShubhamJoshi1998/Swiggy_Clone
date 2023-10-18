// // import React from 'react'
// // import Footer from '../Footer/Footer'
// // import Header from '../Header/Header'

// // const Help = () => {

// //     // const toggleButton = document.querySelector('.toggle-button');
// //     // const answer = document.querySelector('.answer');

// //     // toggleButton.addEventListener('click', () => {
// //     //     answer.classList.toggle('active');
// //     //     toggleButton.textContent = answer.classList.contains('active') ? '▼' : '▶';
// //     // });
// //     return (
// //         <div className="main-container">
// //             <Header />
// //             <section className="restaurants">
// //                 <div className="container">
// //                     <div class="faq">
// //                         <div class="question">
// //                             <span>Can I edit my order?</span>
// //                             <button class="toggle-button">▶</button>
// //                         </div>
// //                         <div class="answer">
// //                             Your order can be edited before it reaches the restaurant. You could contact the customer support team via chat or call to do so. Once the order is placed and the restaurant starts preparing your food, you may not edit its contents.
// //                         </div>
// //                     </div>
// //                     <div className="faq">
// //                         <div className="question">
// //                             <span>Can I edit my order?</span>
// //                             <button className="toggle-button">▲</button>
// //                         </div>
// //                         <div className="answer">
// //                             Your order can be edited before it reaches the restaurant. You could contact the customer support team via chat or call to do so. Once the order is placed and the restaurant starts preparing your food, you may not edit its contents.
// //                         </div>
// //                     </div>
// //                     <div className="faq">
// //                         <div className="question">
// //                             <span>Can I edit my order?</span>
// //                             <button className="toggle-button">▲</button>
// //                         </div>
// //                         <div className="answer">
// //                             Your order can be edited before it reaches the restaurant. You could contact the customer support team via chat or call to do so. Once the order is placed and the restaurant starts preparing your food, you may not edit its contents.
// //                         </div>
// //                     </div>
// //                 </div>
// //             </section>
// //             <Footer />
// //         </div>
// //     )
// // }

// // export default Help

// import React from 'react';
// import styled from 'styled-components';

// // Styled-components
// const Container = styled.div`
//   margin-left: 13%;
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const RestaurantInfo = styled.div`
//   display: flex;
// `;

// const RestaurantImage = styled.img`
//   width: 3.5rem;
//   height: 3.5rem;
//   margin-right: 0.5rem;
// `;

// const RestaurantName = styled.div`
//   font-weight: bold;
//   cursor: pointer;
//   color: #ff5733;
//   text-decoration: underline;
// `;

// const AreaName = styled.div`
//   font-weight: bold;
// `;

// const ClearCartButton = styled.div`
//   padding: 0.25rem;
//   height: 2.5rem;
//   border: 1px solid #ccc;
//   font-weight: bold;
//   cursor: pointer;
//   max-width: 450px;
// `;

// const CartItemsContainer = styled.div`
//   height: 20rem;
//   margin: 0.5rem;
//   padding: 0.5rem;
//   overflow-y: auto;
//   overflow-x: hidden;
// `;

// const CartItem = styled.div`
//   width: 100%;
//   display: flex;
//   padding: 0.5rem;
//   margin: 1rem;
//   background: #ccc;
// `;

// const VegImage = styled.img`
//   width: 2rem;
//   height: 2rem;
//   margin-top: 0.25rem;
// `;

// const CartItemName = styled.div`
//   margin: 0.5rem;
//   font-size: 1rem;
// `;

// const QuantityContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   border: 1px solid #ccc;
//   height: 2.5rem;
//   width: 4rem;
//   padding: 0.25rem;
//   color: #00bf40;
// `;

// const QuantityButton = styled.button`
//   font-size: 1rem;
//   margin-bottom: 0.25rem;
// `;

// const TotalPrice = styled.div`
//   width: 33%;
//   margin: 0.5rem;
//   margin-left: 2rem;
//   font-size: 1rem;
// `;

// const BillDetails = styled.div`
//   margin: 0.5rem;
//   font-weight: bold;
// `;

// const BillItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 50%;
//   font-size: 0.875rem;
//   margin-left: 0.25rem;
// `;

// const BillSeparator = styled.div`
//   border: 1px solid black;
//   background: #333;
//   margin-top: 0.25rem;
//   height: 0.125rem;
// `;

// const ToPay = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 50%;
//   font-weight: bold;
//   margin-left: 0.25rem;
// `;

// const PlaceOrderButton = styled.button`
//   display: block;
//   text-align: center;
//   margin: 0 auto;
//   font-weight: bold;
//   border: 1px solid #ff5733;
//   padding: 0.75rem;
//   background: #ff5733;
//   color: white;
// `;

// const EmptyCart = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const EmptyCartImage = styled.img`
//   width: 9rem;
//   height: 8rem;
// `;

// const EmptyCartMessage = styled.div`
//   margin-top: 1.5rem;
//   color: #ccc;
// `;

// const OrderPlaced = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   text-align: center;
// `;

// const OrderPlacedImage = styled.img`
//   width: 200px;
//   height: 200px;
// `;

// const OrderPlacedMessage = styled.div`
//   font-weight: bold;
//   margin-top: 1rem;
// `;

// const Help = ({
//   resDetails,
//   handleClearCart,
//   cartItems,
//   _orderedItems,
//   totalPrice,
//   platformFee,
//   gstCharges,
//   toPay,
//   isOrderPlaced,
//   placeOrder
// }) => (
//   <Container className='lg:mx-[13%]'>
//     {/* {cartItems.length > 0 && ( */}
//       <div className='m-5'>
//         <Header>
//           <RestaurantInfo>
//             <RestaurantImage
//             //   alt={resDetails.name}
//             //   src={CDN_URL + resDetails.cloudinaryImageId}
//             />
//             <div>
//               <RestaurantName 
//             //   onClick={() => { navigate('/restaurant/' + resDetails.id) }}
//               >
//                 {/* {resDetails.name}   */}
//                 name
//               </RestaurantName>
//               <AreaName>
//               {/* {resDetails.areaName} */}
//               abcd
//               </AreaName>
//             </div>
//           </RestaurantInfo>
//           <ClearCartButton 
//         //   onClick={handleClearCart}
//           >Clear cart</ClearCartButton>
//         </Header>
//         <CartItemsContainer>
         
//         {/* {_orderedItems.map((item) => ( */}
//             <CartItem 
//             // key={item[0]}
//             >
//               <div>
//                 {/* <VegImage
//                   src={item[1].item?.itemAttribute?.vegClassifier === 'VEG'
//                     ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png'
//                     : 'https://m.media-amazon.com/images/I/31KiTfpLyFL.jpg'}
//                   alt='veg'
//                 /> */}
//                 <CartItemName>abcd
//                     {/* {item[1].item.name} */}
//                 </CartItemName>
//               </div>
//               <QuantityContainer>
//                 <QuantityButton 
//                 // onClick={() => handleItemCount(item[1].item, 'remove')}
//                 >-</QuantityButton>
//                 <div className="flex-1 text-center mt-1">qwer
//                     {/* {item[1].count} */}
//                     </div>
//                 <QuantityButton 
//                 // onClick={() => handleItemCount(item[1].item, 'add')}
//                 >+</QuantityButton>
//               </QuantityContainer>
//               <TotalPrice>
//                 {/* &#8377;{(item[1].item.price ? item[1].item.price / 100 : item[1].item.defaultPrice / 100) * item[1].count} */}
//               </TotalPrice>
//             </CartItem>
//            {/* ))} */}
//         </CartItemsContainer>
//         <div className='m-3'>
//           <BillDetails>Bill Details</BillDetails>
//           <BillItem>
//             <div className='text-sm ml-1'>Item Total</div>
//             {/* <div>&#8377;{totalPrice}</div> */}
//           </BillItem>
//           <BillItem>
//             <div className='text-sm ml-1'>Platform Fee</div>
//             {/* <div>&#8377;{platformFee}</div> */}
//           </BillItem>
//           <BillItem>
//             <div className='text-sm ml-1'>GST and Restaurant Charges</div>
//             {/* <div>&#8377;{gstCharges}</div> */}
//           </BillItem>
//           <BillSeparator></BillSeparator>
//           <ToPay>
//             <div className='ml-1 mt-1 font-bold'>TO PAY</div>
//             {/* <div>&#8377;{toPay}</div> */}
//           </ToPay>
//         </div>
//         <div>
//           <PlaceOrderButton 
//         //   onClick={placeOrder}
//           >
//             Place Order
//           </PlaceOrderButton>
//         </div>
//       </div>
//     {/* )} */}

//     {/* {cartItems.length === 0 && !isOrderPlaced && ( */}
//       <div>
//         <EmptyCart>
//           <EmptyCartImage
//             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
//             alt='Your cart is empty'
//           />
//           <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
//           <EmptyCartMessage>You can go to the home page to view more restaurants</EmptyCartMessage>
//         </EmptyCart>
//       </div>
//     {/* )} */}

//     {/* {cartItems.length === 0 && isOrderPlaced && ( */}
//       <OrderPlaced>
//         <OrderPlacedImage
//           src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnE3MWZobzgxbjhoMm90bTloaXhibGxiOGhkYTUwbHN5aTRtZGptaSZlcD12MV9pbnRlcm5hbF9naWZfYnl_faWQmY3Q9Zw/cmCHuk53AiTmOwBXlw/giphy.gif'
//           alt='Swiggy delivery boy'
//         />
//         <OrderPlacedMessage>
//           Thank you for ordering. <br/>
//           Your order will reach you in approximately 30 mins
//         </OrderPlacedMessage>
//       </OrderPlaced>
//     {/* )} */}
//   </Container>
// );

// export default Help;

import React, { useState } from 'react';
// import './LocationPopup.css'; 
// Import your CSS file

function Help() {
  const [showLocationPopUp, setShowLocationPopUp] = useState(true);
  const [location, setLocation] = useState('');
  const [loadingLocations, setLoadingLocations] = useState(false); // Replace with your loading logic
  const possibleLocations = []; // Replace with your location data

  const selectedLocation = (selected) => {
    // Handle selected location logic
  };

  return (
    <div className={`popup-container ${showLocationPopUp ? 'active' : ''}`}>
      <div className="m-10">
        <div className="close-button" onClick={() => setShowLocationPopUp(false)}>
          <img
            alt="close"
            src="https://static.thenounproject.com/png/1202535-200.png"
            className="close-icon"
          />
        </div>
        <div className="input-container">
          <input
            className="location-input"
            placeholder="Search for area, street name..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="locations-list">
          {loadingLocations ? (
            <div>Fetching Locations...</div>
          ) : (
            possibleLocations &&
            possibleLocations.map((location) => (
              <div
                key={location.place_id}
                className="location-item cursor-pointer"
                onClick={() => selectedLocation(location)}
              >
                <div className="location-details">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/cv-curriculum-vitae/100/set-cv2-15-512.png"
                    alt="location"
                    className="location-icon"
                  />
                  <div className="location-info">
                    <div className="location-name font-bold text-md hover-text-orange-500">
                      {location.place}
                    </div>
                    <div className="location-address text-sm text-gray-600">
                      {location.address}
                    </div>
                  </div>
                </div>
                <div className="separator"></div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Help;
