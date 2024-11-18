import NavBar from '../components/LandingPageNavBar';
import Footer from '../components/Footer';
import SaCcards from '../components/SaCcards';
import { useState, useEffect } from 'react';
import { getAllClubs } from '../services/operations/clubAPI';

const SocietiesAndClubs = () => {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        const fetchClubs = async () => {
            try {
                const clubData = await getAllClubs();
                setClubs(clubData);
            } catch (error) {
                console.error('Error fetching clubs:', error);
            }
        };
        fetchClubs();
    }, []);
    // console.log(clubs)
    return (
        <div>
            <NavBar></NavBar>
            <div className="opacity-90 bg-gradient-to-br from-cover-overlay-1 to-cover-overlay-2 w-full h-[5.5rem]"></div>

            <div className=" bg-home-bg h-fit w-full pt-[10rem]">
                <div className="text-white text-4xl sm:text-6xl font-bold text-center">
                    Societies & Clubs
                </div>
                <div className="w-11/12 flex gap-8 justify-center mx-auto mt-16 flex-wrap">
                    {clubs.map((item, i) => (
                        <SaCcards
                            image={item.image}
                            name={item.name}
                            description={item.description}
                            link={item.link}
                            key={i}
                        ></SaCcards>
                    ))}
                </div>

                <div className=" h-36"></div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SocietiesAndClubs;
