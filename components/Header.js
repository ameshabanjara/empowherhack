"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const search = "/search.png";

const NavBar = () => {
    return (
        <div className="bg-pink w-screen p-3 flex flex-col items-center">
            {/* Top Container */}
            <div className="bg-snow min-h-20 min-w-1/2 text-3xl flex items-center justify-center m-5 rounded-full px-5">
                <img src={search} className="h-10 mr-2" />
                <h1 className='font-cursive text-5xl m-3 font-bold text-dark-purple mr-7'>accelherate: your ticket into tech</h1>
            </div>

            {/* Bottom Container */}
            <div className="flex w-screen p-1 flex-row justify-center items-center text-dark-purple">
                <NavLink href="/" label="career quiz" />
                <NavLink href="/careers" label="career" />
                <NavLink href="/resources" label="resources" />
                <NavLink href="/whowelookupto" label="who we look up to" />
            </div>
        </div>
    );
};

const NavLink = ({ href, label }) => {
    return (
      <Link href={href}>
        <div className="transition duration-300 ease-in-out hover:text-snow cursor-pointer mx-7">{label}</div>
      </Link>
    );
  };



export default NavBar;
