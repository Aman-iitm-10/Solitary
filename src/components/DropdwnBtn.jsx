import React, { useState, useContext } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';
import { categoryContext } from '../context/context';

function DropdwnBtn({ children, data }) {
    const [category, setCategory] = useContext(categoryContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleCategorySelect = (item) => {
        setIsOpen(false);
        setCategory((prev) => ({
            ...prev,
            eventType: item.type === 'eventType' ? item.option : category.eventType,
            organization: item.type === 'organization' ? item.option : category.organization,
            date: item.type === 'date' ? item.option : category.date,
        }));
    };
    return (
        <div className=" transition-all">
            <button
                className="flex justify-between items-center px-6 w-44 h-[3rem] bg-indigo-900 rounded-[3rem] text-white text-sm font-medium font-dm-sans text-center relative"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {children}
                {isOpen ? (
                    <FiChevronUp></FiChevronUp>
                ) : (
                    <FiChevronDown></FiChevronDown>
                )}
            </button>

            {isOpen && (
                <div className="absolute left-[220px] top-[218px] md:left-[auto] md:top-[auto] w-48 bg-indigo-900 mt-2 flex flex-col gap-4 items-center rounded-xl justify-evenly py-2 z-10 bg-opacity-95 transition-all">
                    {data.map((item, i) => (
                        <div
                            className={`${i === data.length - 1 ? '' : 'border-b-2'} border-white font-dm-sans w-[80%] text-center p-3 cursor-pointer hover:bg-slate-50 hover:text-indigo-900 hover:rounded-3xl hover:w-[85%] transition-all`}
                            key={i}
                            onClick={() => {
                                handleCategorySelect(item);
                            }}
                        >
                            {item.option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DropdwnBtn;
