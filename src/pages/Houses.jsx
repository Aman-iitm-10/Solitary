import NavBar from '../components/LandingPageNavBar';
import Footer from '../components/Footer';
import HousesCard from '../components/HousesCard';
import { getAllHouse } from '../services/operations/houseAPI';
import { useState, useEffect } from 'react';

const Houses = () => {
    const [houses, sethouses] = useState([]);

    useEffect(() => {
        const fetchHouses = async () => {
            try {
                const houseData = await getAllHouse();
                sethouses(houseData);
            } catch (error) {
                console.error('Error fetching houses:', error);
            }
        };
        fetchHouses();
    }, []);
    // console.log(houses)
    return (
        <div>
            <NavBar></NavBar>
            <div className="opacity-90 bg-gradient-to-br from-cover-overlay-1 to-cover-overlay-2 w-full h-[5.5rem]"></div>

            <div className=" bg-home-bg h-fit w-full pt-[10rem]">
                <div className="text-white text-4xl sm:text-6xl font-bold text-center">
                    Houses
                </div>
                <div className="w-11/12 flex gap-8 justify-center mx-auto mt-16 flex-wrap">
                    {houses.map((item, i) => (
                        <HousesCard
                            image={"/gir-logo.png"}
                            name={item.name}
                            description={item.description}
                            link={item.link}
                            key={i}
                        ></HousesCard>
                    ))}
                </div>

                <div className=" h-36"></div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Houses;
