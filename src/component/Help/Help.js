import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Help = () => {
    // const [isCounting, setCounting] = useState(false);
    // const [count, setCount] = useState(0);

    // const handleAddClick = () => {
    //     setCounting(true);
    //     setCount(count + 1);
    // };

    // const handleIncrementClick = () => {
    //     setCount(count + 1);
    // };

    // const handleDecrementClick = () => {
    //     if (count > 0) {
    //         setCount(count - 1);
    //     }
    // };
    const buttonData = [
        { id: 1, label: "Button 1" },
        { id: 2, label: "Button 2" },
        { id: 3, label: "Button 3" },
        { id: 4, label: "Button 4" },
        { id: 5, label: "Button 5" },
        { id: 6, label: "Button 6" },
        { id: 7, label: "Button 7" },
        { id: 8, label: "Button 8" },
        { id: 9, label: "Button 9" },
        { id: 10, label: "Button 10" },
    ];


        const initialCounts = buttonData.reduce((acc, button) => {
            acc[button.id] = 0;
            return acc;
        }, {});

        const [counts, setCounts] = useState(initialCounts);

        const handleIncrementClick = (buttonId) => {
            const newCounts = { ...counts };
            newCounts[buttonId]++;
            setCounts(newCounts);
        };

        const handleDecrementClick = (buttonId) => {
            if (counts[buttonId] > 0) {
                const newCounts = { ...counts };
                newCounts[buttonId]--;
                setCounts(newCounts);
            }
        };

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
                        {/* <div class="faq">
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
                    </div> */}
                        {/* <div className="button-counter">
                        {!isCounting ? (
                            <button onClick={handleAddClick}>ADD</button>
                        ) : (
                            <div className="counter">
                                <div className="count-container">
                                    <button onClick={handleIncrementClick}>+</button>
                                    <span>{count}</span>
                                    <button onClick={handleDecrementClick}>-</button>
                                </div>
                            </div>
                        )}
                    </div> */}

                        <div className="button-counter">
                            {buttonData.map((button) => (
                                <div className="counter" key={button.id}>
                                    <div className="count-container">
                                        <button onClick={() => handleIncrementClick(button.id)}>+</button>
                                        <span>{counts[button.id]}</span>
                                        <button onClick={() => handleDecrementClick(button.id)}>-</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>
                <Footer />
            </div>
        )
    }

    export default Help