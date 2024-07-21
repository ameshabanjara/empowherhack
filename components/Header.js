import React from 'react';
const search = "/search.png";

const Header = () => {
    return (
        <div className="bg-pink w-screen p-3 flex flex-col items-center">
            {/* Top Container */}
            <div className="bg-snow min-h-20 min-w-1/2 text-3xl flex items-center justify-center m-5 rounded-full px-5">
                <img src={search} className="h-10 mr-2" />
                <h1 className='font-cursive text-5xl m-3 font-bold text-dark-purple mr-7'>accelherate: your ticket into tech</h1>
            </div>

            {/* Bottom Container */}
            <div className="flex w-screen p-1 flex-row justify-center items-center">
                <p className="font-normal mx-2">career quiz</p>
                <p className="font-normal mx-2">resources</p>
                <p className="font-normal mx-2">careers</p>
                <p className="font-normal mx-2">who we look up to</p>
            </div>
        </div>
    );
};



export default Header;