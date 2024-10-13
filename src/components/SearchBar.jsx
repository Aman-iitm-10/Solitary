import React from 'react';
import Avatar from"../assets/Avater.png"
import GoogleLogo from"../assets/Social Icons.png"
import searchLogo from"../assets/magnifying-glass 1.png"
import instaLogo from"../assets/insta.png"
import facebookLogo from"../assets/facebook.png"
import linkedInLogo from"../assets/linkedIn.png"
import xLogo from"../assets/X.png"

export default function SearchBar(){
    return (
        <div className="absolute top-5 left-1/2 ml-[10vw] transform -translate-x-1/2 flex items-center">
                    <button className="bg-[#6600ff] p-1 rounded-l flex items-center justify-center">
                        <img src={searchLogo} alt="Imgage not found" style={{width: "32px", height: "32px", minWidth:"32px"}}/>
                    </button>
                    <input type="text" placeholder="Search for something" className="p-2 text-black rounded-r outline-none" />
                    <button className="relative bg-[#6600ff] text-white px-6 py-2 rounded-md ml-4">
                        Login
                    </button>
        </div>
    )
}