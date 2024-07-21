"use client"

import React from 'react';
import Ticket from './Ticket'
import Quiz from './Quiz';
import Result from './Results';

const LandingPage = () => {
    return (
        <div>
            <Ticket/>
            <Quiz/>
        </div>
    );
};

export default LandingPage;