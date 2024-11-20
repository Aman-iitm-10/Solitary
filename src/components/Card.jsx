import React, { useContext, useState } from 'react';
import card_placholder from '../assets/card-placeholder.png';
import './CustomScrollbar.css';
import {
    showEventDetailsContext,
    selectedEventContext,
} from '../context/context';
const Card = (props) => {
    // console.log(data)
    const setShowEventDetails = useContext(showEventDetailsContext);
    const setSelectedEvent = useContext(selectedEventContext);

    const handleCardClick = () => {
        setShowEventDetails(true);
        setSelectedEvent(props.data);
    };
    return (
        // <div className={`${isActive ? " scale-125":"scale-100"}`} >
        <div
            className=" flex-row  shadow-[0_20px_50px_rgba(75,75,75,_0.3)] rounded-b-3xl"
            onClick={handleCardClick}
        >
            <div>
                <img
                    src={props.data.image}
                    className="w-full h-auto max-h-52 object-cover rounded-t"
                    alt=""
                />
            </div>

            <div className="flex h-48 p-2">
                {/* <div className=' flex flex-col gap-2 items-center justify-center h-full w-[22%]'>
                    <div className=' font-bold font-dm-sans text-xs text-indigo-800 '>{data.data.date.month}</div>
                    <div className=' text-neutral-200 font-bold font-dm-sans text-2xl'>{data.data.date.day}</div>
                </div> */}
                <div className="flex flex-col items-center justify-start overflow-auto mt-2 h-full w-full px-2 gap-3">
                    <div className=" text-neutral-200 text-sm font-bold font-poppins leading-5">
                        {props.data.title}
                    </div>
                    <div className=" text-neutral-400 text-xs font-normal leading-none font-poppins">
                        {props.data.description}
                    </div>
                </div>
            </div>
        </div>

        /* <button onClick={()=>setIsActive((prev) => !prev)}>Click</button>
    </div> */
    );
};

export default Card;
