import React from 'react';
import sac_placeholder from '../assets/sac-placeholder.png';
import './CustomScrollbar.css';
import { Link } from 'react-router-dom';
const SaCcards = ({ image, name, description, link }) => {
    return (
        <div className="flex flex-col gap-2 w-64 h-96 lg:h-80 rounded-lg backdrop-blur bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)] mb-10">
            <div className=" w-full relative ">
                <div className=" bg-indigo-900 h-28 backdrop-blur rounded-t-lg"></div>
                <Link to={link}>
                    <div className="absolute -bottom-1/2 left-1/4">
                        <img src={image} className="rounded-full w-32" alt="" />
                    </div>
                </Link>
            </div>
            <div className="text-white font-dm-sans text-2xl mx-auto mt-14 text-center">
                {name}
            </div>
            <div className="font-dm-sans text-neutral-300 w-10/12 mx-auto overflow-auto mb-5 text-sm">
                {' '}
                {description}
            </div>
        </div>
    );
};

export default SaCcards;
