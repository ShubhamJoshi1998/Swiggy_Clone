import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Help = () => {

    // const toggleButton = document.querySelector('.toggle-button');
    // const answer = document.querySelector('.answer');

    // toggleButton.addEventListener('click', () => {
    //     answer.classList.toggle('active');
    //     toggleButton.textContent = answer.classList.contains('active') ? '▼' : '▶';
    // });
    return (
        <div className="main-container">
            <Header />
            <section className="restaurants">
                <div className="container">
                    <div class="faq">
                        <div class="question">
                            <span>Can I edit my order?</span>
                            <button class="toggle-button">▶</button>
                        </div>
                        <div class="answer">
                            Your order can be edited before it reaches the restaurant. You could contact the customer support team via chat or call to do so. Once the order is placed and the restaurant starts preparing your food, you may not edit its contents.
                        </div>
                    </div>
                    <div className="faq">
                        <div className="question">
                            <span>Can I edit my order?</span>
                            <button className="toggle-button">▲</button>
                        </div>
                        <div className="answer">
                            Your order can be edited before it reaches the restaurant. You could contact the customer support team via chat or call to do so. Once the order is placed and the restaurant starts preparing your food, you may not edit its contents.
                        </div>
                    </div>
                    <div className="faq">
                        <div className="question">
                            <span>Can I edit my order?</span>
                            <button className="toggle-button">▲</button>
                        </div>
                        <div className="answer">
                            Your order can be edited before it reaches the restaurant. You could contact the customer support team via chat or call to do so. Once the order is placed and the restaurant starts preparing your food, you may not edit its contents.
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Help