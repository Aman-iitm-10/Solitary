import { Link } from 'react-router-dom';

const HousesCard = ({ image, name, description, link }) => {
    return (
        <div>
            <div className="flex flex-col gap-2 w-64 h-80 rounded-lg backdrop-blur bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)] mb-10">
                <div className=" w-full relative ">
                    <div className=" bg-indigo-900 h-28 backdrop-blur rounded-t-lg"></div>
                    <div className="absolute -bottom-1/2 left-1/4">
                        <Link to={link}>
                            <img
                                src={image}
                                className="rounded-full w-32"
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
                <div className="text-white font-dm-sans text-2xl mx-auto mt-14">
                    {name}
                </div>
                <div className="font-dm-sans text-neutral-300 w-10/12 mx-auto overflow-hidden mb-5 text-sm">
                    {' '}
                    {description}
                </div>
            </div>
        </div>
    );
};

export default HousesCard;
