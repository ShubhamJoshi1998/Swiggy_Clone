import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAndAnswers = [
    {
      question: 'What is Swiggy Customer Care Number?',
      answer: "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution.You no longer have to go through the maze of an IVRS call support.Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly.You can also email us your issue on support@swiggy.in Note: We value your privacy and your information is safe with us.Please do not reveal any personal information, bank account number, OTP etc.to another person.A Swiggy representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails."
},
  {
    question: 'Can I edit my order?',
    answer:
        'Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents',
  },
  {
    question: 'I want to cancel my order',
    answer: 'We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.',
  },
  {
    question: 'Will Swiggy be accountable for quality/quantity? ',
    answer:
        'Quantity and quality of the food is the restaurants responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.',
  },
  {
    question: 'Is there a minimum order value?',
    answer: 'We have no minimum order value and you can order for any amount. ',
  },,
  {
    question: 'Do you charge for delivery?',
    answer:
        'Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the Review Order page. ',
  },
  {
    question: 'How long do you take to deliver?',
    answer: 'Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.',
  },,
  {
    question: 'Can I edit my order?',
    answer:
        'You can install React by using npm or yarn. Create a new React app with the command: npx create-react-app my-app',
  },
  {
    question: 'Can I order from any location?',
    answer: 'We will deliver from any restaurant listed on the search results for your location. We recommend enabling your GPS location finder and letting the app auto-detect your location.',
  },,
  {
    question: 'What is Swiggy Money?',
    answer:
        'Swiggy Money is a secure digital wallet where you can store digital currency and use it for faster check outs. It prevents payment failures and gives you seamless refunds when necessary.',
  },
  {
    question: 'Did not receive referral coupon?',
    answer: 'Referral coupon is given upon the first successful transaction of the referred person. If you still have not received it, kindly send us your details at support@swiggy.in. We will contact you within 48 hours.',
  },
  ];

const handleAccordionClick = (index) => {
  if (activeIndex === index) {
    setActiveIndex(null); // Collapse the active section if clicked again
  } else {
    setActiveIndex(index); // Expand the clicked section
  }
};

return (
  <div className="main-container">
    <Header />
    <div className="container">
      <div className="accordion">
        <div className='MayIhelp'>May I Help You ?</div>
        {questionsAndAnswers.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div
              className={`accordion-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleAccordionClick(index)}
            >
              {item.question}
            </div>
            <div
              className={`accordion-answer ${activeIndex === index ? 'show' : ''}`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);
};

export default Help;
