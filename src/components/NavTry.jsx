import React from 'react';
import Avatar from"../assets/Avater.png"
import GoogleLogo from"../assets/Social Icons.png"
import searchLogo from"../assets/magnifying-glass 1.png"
import instaLogo from"../assets/insta.png"
import facebookLogo from"../assets/facebook.png"
import linkedInLogo from"../assets/linkedIn.png"
import xLogo from"../assets/X.png"

export default function NavTry(){
    return (
        <nav className="bg-[#180037] p-5 flex flex-col h-full sidebar">
            <div className="logo text-center">
                <h1 className="text-2xl font-bold">SOLITARY</h1>
            </div>
            <ul className="space-y-5 nav-list">
                <li><a href="#" className="text-lg hover:bg-[#6600ff] py-2 px-2 rounded block">Home</a></li>
                <li><a href="#" className="text-lg hover:bg-[#6600ff] py-2 px-2 rounded block">Events</a></li>
                <li><a href="#" className="text-lg hover:bg-[#6600ff] py-2 px-2 rounded block">About Us</a></li>
                <li><a href="#" className="text-lg hover:bg-[#6600ff] py-2 px-2 rounded block">Society and Clubs</a></li>
                <li><a href="#" className="text-lg hover:bg-[#6600ff] py-2 px-2 rounded block">Houses</a></li>
                <li><a href="#" className="text-lg hover:bg-[#6600ff] py-2 px-2 rounded block">Resources</a></li>
            </ul>
            <div className="border-t-2 border-white mt-1"></div>
            <div className="footer text-left">
                <p className="text-sm text-gray-500 leading-5 mb-5">Solitary Inc.<br />About Us<br />All Rights Reserved<br />2024</p>
                <div className="flex space-x-2">
                    <a href="#" className="hover:scale-110 transform transition-transform duration-300">
                        <img src={facebookLogo} alt="Facebook" className="w-6 h-6" />
                    </a>
                    <a href="#" className="hover:scale-110 transform transition-transform duration-300">
                        <img src={instaLogo} alt="Instagram" className="w-6 h-6" />
                    </a>
                    <a href="#" className="hover:scale-110 transform transition-transform duration-300">
                        <img src={linkedInLogo} alt="LinkedIn" className="w-6 h-6" />
                    </a>
                    <a href="#" className="hover:scale-110 transform transition-transform duration-300">
                        <img src={xLogo} alt="X" className="w-6 h-6" />
                    </a>
                </div>
            </div>
    </nav>
    )
}