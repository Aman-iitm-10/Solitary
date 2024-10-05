import { Link } from 'react-router-dom';
import User_1 from '../assets/Home/user_1.png';

const LeftNav = () => {
    return (
        <aside className="w-68 bg-transparent text-white h-screen fixed top-16 left-0 font-inter">
            <div className="p-4">
                <nav className="mt-8 ml-8">
                    <ul className="space-y-4 font-medium text-lg">
                        <li>
                            <Link
                                href="/aboutUs"
                                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/events"
                                className="block py-2 px-4 hover:bg-gray-700 rounded"
                            >
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/houses"
                                className="block py-2 px-4 hover:bg-gray-700 rounded"
                            >
                                Houses
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/society&clubs"
                                className="block py-2 px-4 hover:bg-gray-700 rounded"
                            >
                                Society and Clubs
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/resources"
                                className="block py-2 px-4 hover:bg-gray-700 rounded"
                            >
                                Resources
                            </Link>
                        </li>
                        {/* Add more navigation links here */}
                    </ul>
                </nav>
                <hr className="my-6 ml-8 border-gray-600 " />
                <div className="bg-transparent border p-4 rounded-lg ml-8">
                <h3 className="text-xl font-medium mb-4 text-center"> Join Us </h3>
                    <div className="flex justify-center">
                        <img
                            src={User_1}
                            width={60}
                            height={60}
                            alt="user image"
                        />
                    </div>
                    <p className="mb-4 text-center mt-4 font-light">
                        Sign up to get access to all exclusive events
                    </p>
                    <button className="w-full bg-custom-purple text-white font-normal py-2 rounded-lg hover:bg-violet-800">
                        Sign Up
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default LeftNav;
