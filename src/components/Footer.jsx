import React from 'react';
import Logo from '../assets/Logo.jpeg';
import Instagram_logo from '../assets/instagram.svg';
import Youtube_logo from '../assets/youtube.svg';
import Linkedin_logo from '../assets/linkedin.svg';
import CtaButton from './CtaButton';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-neutral-600 w-full py-20">
            <div className="container mx-auto pb-10">
                <div className="flex lg:justify-between lg:items-start items-center justify-between">
                    <div className="flex flex-col gap-5 w-full items-center mb-9 lg:items-center">
                        <div className="flex items-center gap-5">
                            <div>
                                <img
                                    src={Logo}
                                    alt=""
                                    className="w-20 rounded-full"
                                />
                            </div>
                            <div className="text-neutral-50 font-poppins text-3xl">
                                Solitary
                            </div>
                        </div>

                        <div className="text-white text-lg font-poppins leading-normal font-normal text-center lg:text-start">
                            At Solitary we want to maximize your experience by
                            optimizing your performance
                        </div>

                        <div className="flex gap-4">
                            <Link
                                to={
                                    'https://youtube.com/@Studentwelfare_iitmbs_?si=cWhZh6JIXKG_-ciJ'
                                }
                                target="_blank"
                            >
                                <img
                                    src={Youtube_logo}
                                    className="w-9 h-9"
                                    alt=""
                                />
                            </Link>
                            <Link
                                to={
                                    'https://www.instagram.com/solitary_iitmbs?igsh=Z2RoNjFmM28wMXgw'
                                }
                                target="_blank"
                            >
                                <img
                                    src={Instagram_logo}
                                    className="w-9 h-9"
                                    alt=""
                                />
                            </Link>
                            <Link
                                to={
                                    'https://www.linkedin.com/in/solitary-student-welfare-club-bb8037290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                                }
                                target="_blank"
                            >
                                <img
                                    src={Linkedin_logo}
                                    className="w-9 h-9"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="w-full justify-center gap-20 hidden lg:flex ">
                        <div className="flex flex-col gap-5">
                            <div className="text-neutral-50 text-lg font-bold font-dm-sans capitalize">
                                Plan Events
                            </div>
                            <div className="flex flex-col text-white text-sm font-medium font-dm-sans leading-7">
                                <div>
                                    <Link to={'/societiesandclubs'}>
                                        Societies
                                    </Link>
                                </div>
                                <div>
                                    <Link to={'/houses'}>Houses</Link>
                                </div>
                                <div>
                                    <Link to={'/ourteam'}>Our Team</Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="text-neutral-50 text-lg font-bold font-dm-sans capitalize">
                                Eventick
                            </div>
                            <div className="flex flex-col text-white text-sm font-medium font-dm-sans leading-7">
                                <div>
                                    <Link to={'/about'}>About Us</Link>
                                </div>
                                <div>
                                    <Link to={'/'}>Contact Us</Link>
                                </div>
                                <div>
                                    <Link to={'/'}>Feedback</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:flex-col w-full gap-7 hidden lg:flex">
                        <div className="text-neutral-50 text-lg font-bold font-dm-sans capitalize">
                            Stay in the Loop
                        </div>

                        <div className="text-zinc-100 text-sm font-normal font-dm-sans leading-snug">
                            Join our mailing list to stay in the loop with all
                            the Important information.
                        </div>

                        <div className="relative flex min-w-[320px] md:min-w-[410px]">
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Enter your email"
                                className="w-full hidden text-md lg:block bg-neutral-50 rounded-[3rem] h-[4rem] px-7 outline-none"
                            />
                            <div className="justify-center lg:absolute lg:right-1 lg:top-1">
                                <CtaButton>
                                    <p className="text-sm tracking-wide">
                                        <Link
                                            to={
                                                'https://forms.gle/kMBrWEi5KJjfqx5x5'
                                            }
                                            target="_blank"
                                        >
                                            Subscribe Now
                                        </Link>
                                    </p>
                                </CtaButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-xs md:text-base md:min-w-[410px] w-full gap-5 my-9 lg:hidden">
                    <div className="text-neutral-50 text-lg font-bold font-dm-sans capitalize">
                        Stay in the Loop
                    </div>

                    <div className="text-zinc-100 text-sm font-normal font-dm-sans leading-snug text-center lg:text-start">
                        Join our mailing list to stay in the loop with all the
                        Important information.
                    </div>

                    <div className="relative flex min-w-[320px] md:min-w-[410px]">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter your email"
                            className="w-full text-md bg-neutral-50 rounded-[3rem] h-[4rem] px-5 outline-none"
                        />
                        <div className="justify-center absolute right-1 top-1">
                            <CtaButton>
                                <Link
                                    to={'https://forms.gle/kMBrWEi5KJjfqx5x5'}
                                >
                                    <p className="text-sm tracking-wide">
                                        Subscribe Now
                                    </p>
                                </Link>
                            </CtaButton>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center gap-20 mt-[5.5rem] lg:hidden">
                    <div className="flex flex-col gap-5">
                        <div className="text-neutral-50 text-lg font-bold font-dm-sans capitalize">
                            Plan Events
                        </div>
                        <div className="flex flex-col text-white text-sm font-medium font-dm-sans leading-7">
                            <div>
                                <Link to={'/societiesandclubs'}>Societies</Link>
                            </div>
                            <div>
                                <Link to={'/houses'}>Houses</Link>
                            </div>
                            <div>
                                <Link to={'/ourteam'}>Our Team</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="text-neutral-50 text-lg font-bold font-dm-sans capitalize">
                            Eventick
                        </div>
                        <div className="flex flex-col text-white text-sm font-medium font-dm-sans leading-7">
                            <div>
                                <Link to={'/about'}>About Us</Link>
                            </div>
                            <div>
                                <Link to={'/'}>Contact Us</Link>
                            </div>
                            <div>
                                <Link to={'/'}>Feedback</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center bottom-1 text-white text-sm font-normal font-poppins w-full leading-snug pb-4 -mb-20 mt-20">
                    Copyright © 2023 Solitary Team
                </div>
            </div>
        </div>
    );
};

export default Footer;
