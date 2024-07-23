"use client";

import React, { useState } from 'react';
import { careers } from '../public/careerInfo'; // Adjust the import path as necessary
import CareerDetails from './CareerDetails';

const CareersList = () => {
    const [selectedCareer, setSelectedCareer] = useState(null);

    const handleCareerClick = (career) => {
        setSelectedCareer(career);
    };

    const handleClose = () => {
        setSelectedCareer(null);
    };

    return (
        <div className="bg-snow p-1">
        <div className="text-center my-12 mx-6">
            <h1 className="text-5xl font-bold m-5 text-dark-purple">Career Paths</h1>
            <div className="flex flex-col items-center w-full">
                {careers.map((career) => (
                    <button
                        key={career.id}
                        onClick={() => handleCareerClick(career)}
                        className="w-1/2 bg-pink text-dark-purple text-2xl font-bold m-2 p-3 rounded-full hover:bg-amethyst"
                    >
                        {career.name}
                    </button>
                ))}
            </div>
            <CareerDetails career={selectedCareer} onClose={handleClose} />
        </div>
    </div>
    );
};

export default CareersList;
