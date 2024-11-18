import { useState } from 'react';
import './NavBar.css'; // Import the CSS file

import Logo from '../assets/Logo.jpeg';
import { Link } from 'react-router-dom';
import Hamburger from '../assets/hamburger.svg';


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header
            className={
                isOpen
                    ? `w-full bg-home-bg absolute text-white z-20`
                    : `w-full bg-transparent absolute text-white z-20`
            }
        >
            
                <div className="flex sticky ml-4  gap-3 justify-between items-center top-0">
                    <Link to={'/'}>
                        <div className="flex  items-center gap-5 m-2">
                            <img
                                src={Logo}
                                alt=""
                                className="w-[75px] rounded-full"
                            />
                            <div className="font-poppins text-2xl">
                                Solitary
                            </div>
                        </div>
                    </Link>

                    <div className="hidden md:flex font-dm-sans text-base gap-9 font-medium" >
                        <Link to={'/events'}>
                            <div id='nav-item'>Events</div>
                        </Link>
                        <Link to={'/societiesandclubs'}>
                            <div id='nav-item'>Societies & Clubs</div>
                        </Link>
                        <Link to={'/houses'}>
                            <div id='nav-item'>Houses</div>
                        </Link>
                        {/* <Link to={'/ourteam'}>
                            <div id='nav-item'>Our Team</div>
                        </Link> */}
                         <Link to={'/resources'}>
                            <div id='nav-item'>Resources</div>
                        </Link>
                        <Link to={'/register'}>
                            <div id='nav-item1'>Register Now</div>
                        </Link>
                        
                    </div>

                    <button
                        className="md:hidden focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <img
                            src={Hamburger}
                            alt="Hamburger"
                            className="w-6 h-6 m-2"
                        />
                    </button>
                </div>

                {isOpen && (
                    <div className="mt-4 space-y-4">
                        <Link to={'/about'}>
                            <div className="block py-4 px-4 bg-home-bg hover:bg-cover-overlay-1">
                                About Us
                            </div>
                        </Link>
                        <Link to={'/events'}>
                            <div className="block py-4 px-4 bg-home-bg hover:bg-cover-overlay-1">
                                Events
                            </div>
                        </Link>
                        <Link to={'/societiesandclubs'}>
                            <div className="block py-4 px-4 bg-home-bg hover:bg-cover-overlay-1">
                                Societies & Clubs
                            </div>
                        </Link>
                        <Link to={'/houses'}>
                            <div className="block py-4 px-4 bg-home-bg hover:bg-cover-overlay-1">
                                Houses
                            </div>
                        </Link>
                        {/* <Link to={'/ourteam'}>
                            <div className="block pt-4 pb-12 px-4 bg-home-bg hover:bg-cover-overlay-1">
                                Ourteam
                            </div>
                        </Link> */}
                        <Link to={'/resource'}>
                            <div className="block pt-4 pb-12 px-4 bg-home-bg hover:bg-cover-overlay-1">
                                Resource
                            </div>
                        </Link>
                        <Link to={'/register'}>
                            <div className="block pt-4 pb-12 px-4 bg-home-bg hover:bg-cover-overlay-1">
                                Register now
                            </div>
                        </Link>
                    </div>
                )}
            
        </header>
    );
};

export default NavBar;
