import React from 'react';

const LightButton = ({ children, onClick }) => {
    return (
        <div>
            <button
                className=" w-44 h-14 rounded-3xl shadow border border-white text-center text-white text-lg font-normal font-dm-sans"
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
};

export default LightButton;
