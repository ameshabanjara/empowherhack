import React from 'react';
import './custom.css'; // Ensure you create this file for custom styles if needed

const Ticket = () => {
    // Function to handle scrolling
    const handleScroll = () => {
        window.scrollBy({
            top: 700, // Scroll down by 300px
            behavior: 'smooth' // Smooth scrolling
        });
    };

    return (
        <div className="bg-snow p-5">
            <div className="relative w-5/6 max-w-4xl h-fit bg-pink border-8 border-dark-purple rounded-xl m-auto my-7 shadow-lg flex justify-center items-center overflow-hidden">
                {/* Dotted line */}
                <div className="vertical-dotted-line hidden md:flex" style={{ left: 'calc(66.666% - 0.5px)' }}></div>
                
                {/* Vertical semicircles on edges */}
                <div className="absolute top-8 bottom-8 left-[-10px] h-full flex flex-col justify-between hidden md:flex">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="w-5 h-5 bg-dark-purple border-4 border-dark-purple rounded-full"></div>
                    ))}
                </div>
                <div className="absolute top-8 bottom-8 right-[-10px] h-full flex flex-col justify-between hidden md:flex">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="w-5 h-5 bg-dark-purple border-4 border-dark-purple rounded-full"></div>
                    ))}
                </div>
                
                {/* Decorative elements */}
                <div className="absolute w-10 h-10 bg-dark-purple border-8 border-dark-purple rounded-full z-10 top-[-25px] left-[calc(66.666%)] transform -translate-x-1/2 hidden md:flex"></div>
                <div className="absolute w-10 h-10 bg-dark-purple border-8 border-dark-purple rounded-full z-10 bottom-[-25px] left-[calc(66.666%)] transform -translate-x-1/2 hidden md:flex"></div>
                
                <div className="relative z-20 text-dark-purple flex w-full h-full justify-between items-center text-center flex-col md:flex-row">
                    <div className="m-5 w-2/3">
                        <h1 className="text-6xl font-cursive m-4">empowering women in technology,<br />step by step.</h1>
                        <p className="my-6 text-xl">not sure where to start? take our quiz
                            <br />to find out which career suits you best!
                        </p>
                        <button 
                            className="mt-4 bg-dark-purple text-white px-4 py-2 rounded text-xl"
                            onClick={handleScroll} // Attach the click handler
                        >
                            begin
                        </button>
                    </div>
                    <div className="w-1/3 text-xl m-5">
                        <p>ai/ml,
                            <br />consulting,
                            <br />software,
                            <br />uiux,
                            <br />product,
                            <br />and more!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
