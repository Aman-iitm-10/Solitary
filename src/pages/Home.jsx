import React from 'react';
import NavBar from '../components/LandingPageNavBar.jsx';
import Cover from '../components/Cover';
import CardSlider from '../components/CardSlider';
import Footer from '../components/Footer';
import SocialMediaPostContainer from '../components/SocialMediaPostContainer';
import { getAllEvents } from '../services/operations/eventAPI';
import { useState, useEffect } from 'react';
import {
    showEventDetailsContext,
    selectedEventContext,
    categoryContext,
} from '../context/context.js';

const Home = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showEventDetails, setShowEventDetails] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState({
        eventType: 'All',
        organization: 'All',
        date: 'All',
    });

    const filterEvents = (selectedCategory) => {
        // Filter events based on selectedCategory
        return events.filter((event) => {
            if (
                (selectedCategory.eventType === 'All' ||
                    event.eventType === selectedCategory.eventType) &&
                (selectedCategory.organization === 'All' ||
                    event.organization.includes(
                        selectedCategory.organization
                    )) &&
                (selectedCategory.date === 'All' ||
                    event.date === selectedCategory.date)
            ) {
                return true;
            }
            return false;
        });
    };
    
    const filteredEvents = filterEvents(selectedCategory);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventData = await getAllEvents();
                setEvents(eventData);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchEvents();
    }, []);

    // console.log(events)
    const smtest = [
        {
            image: '../assets/Sm-card-placeholder.jpeg',
            title: "Paradox'23, presented by Paradox, is all set to unfold its splendid wing",
            description:
                "a grand inauguration! From September 14th to 17th, join us in this majestic celebration that's as captivating as the vibrant ...",
            date: '12 Dec - Paradox IITM',
        },
        {
            image: '../assets/Sm-card-placeholder.jpeg',
            title: "Paradox'23, presented by Paradox, is all set to unfold its splendid wing",
            description:
                "a grand inauguration! From September 14th to 17th, join us in this majestic celebration that's as captivating as the vibrant ...",
            date: '12 Dec - Paradox IITM',
        },
        {
            image: '../assets/Sm-card-placeholder.jpeg',
            title: "Paradox'23, presented by Paradox, is all set to unfold its splendid wing",
            description:
                "a grand inauguration! From September 14th to 17th, join us in this majestic celebration that's as captivating as the vibrant ...",
            date: '12 Dec - Paradox IITM',
        },
        {
            image: '../assets/Sm-card-placeholder.jpeg',
            title: "Paradox'23, presented by Paradox, is all set to unfold its splendid wing",
            description:
                "a grand inauguration! From September 14th to 17th, join us in this majestic celebration that's as captivating as the vibrant ...",
            date: '12 Dec - Paradox IITM',
        },
        {
            image: '../assets/Sm-card-placeholder.jpeg',
            title: "Paradox'23, presented by Paradox, is all set to unfold its splendid wing",
            description:
                "a grand inauguration! From September 14th to 17th, join us in this majestic celebration that's as captivating as the vibrant ...",
            date: '12 Dec - Paradox IITM',
        },
        {
            image: '../assets/Sm-card-placeholder.jpeg',
            title: "Paradox'23, presented by Paradox, is all set to unfold its splendid wing",
            description:
                "a grand inauguration! From September 14th to 17th, join us in this majestic celebration that's as captivating as the vibrant ...",
            date: '12 Dec - Paradox IITM',
        },
        {
            image: '../assets/Sm-card-placeholder.jpeg',
            title: "Paradox'23, presented by Paradox, is all set to unfold its splendid wing",
            description:
                "a grand inauguration! From September 14th to 17th, join us in this majestic celebration that's as captivating as the vibrant ...",
            date: '12 Dec - Paradox IITM',
        },
        {
            image: '../assets/Sm-card-placeholder.jpeg',
            title: "Paradox'23, presented by Paradox, is all set to unfold its splendid wing",
            description:
                "a grand inauguration! From September 14th to 17th, join us in this majestic celebration that's as captivating as the vibrant ...",
            date: '12 Dec - Paradox IITM',
        },
        {
            image: '../assets/Sm-card-placeholder.jpeg',
            title: "Paradox'23, presented by Paradox, is all set to unfold its splendid wing",
            description:
                "a grand inauguration! From September 14th to 17th, join us in this majestic celebration that's as captivating as the vibrant ...",
            date: '12 Dec - Paradox IITM',
        },
        {
            image: '../assets/Sm-card-placeholder.jpeg',
            title: "Paradox'23, presented by Paradox, is all set to unfold its splendid wing",
            description:
                "a grand inauguration! From September 14th to 17th, join us in this majestic celebration that's as captivating as the vibrant ...",
            date: '12 Dec - Paradox IITM',
        },
        {
            image: '../assets/Sm-card-placeholder.jpeg',
            title: "Paradox'23, presented by Paradox, is all set to unfold its splendid wing",
            description:
                "a grand inauguration! From September 14th to 17th, join us in this majestic celebration that's as captivating as the vibrant ...",
            date: '12 Dec - Paradox IITM',
        },
        {
            image: '../assets/Sm-card-placeholder.jpeg',
            title: "Paradox'23, presented by Paradox, is all set to unfold its splendid wing",
            description:
                "a grand inauguration! From September 14th to 17th, join us in this majestic celebration that's as captivating as the vibrant ...",
            date: '12 Dec - Paradox IITM',
        },
        {
            image: '../assets/Sm-card-placeholder.jpeg',
            title: "Paradox'23, presented by Paradox, is all set to unfold its splendid wing",
            description:
                "a grand inauguration! From September 14th to 17th, join us in this majestic celebration that's as captivating as the vibrant ...",
            date: '12 Dec - Paradox IITM',
        },
        {
            image: '../assets/Sm-card-placeholder.jpeg',
            title: "Paradox'23, presented by Paradox, is all set to unfold its splendid wing",
            description:
                "a grand inauguration! From September 14th to 17th, join us in this majestic celebration that's as captivating as the vibrant ...",
            date: '12 Dec - Paradox IITM',
        },
        {
            image: '../assets/Sm-card-placeholder.jpeg',
            title: "Paradox'23, presented by Paradox, is all set to unfold its splendid wing",
            description:
                "a grand inauguration! From September 14th to 17th, join us in this majestic celebration that's as captivating as the vibrant ...",
            date: '12 Dec - Paradox IITM',
        },
        {
            image: '../assets/Sm-card-placeholder.jpeg',
            title: "Paradox'23, presented by Paradox, is all set to unfold its splendid wing",
            description:
                "a grand inauguration! From September 14th to 17th, join us in this majestic celebration that's as captivating as the vibrant ...",
            date: '12 Dec - Paradox IITM',
        },
    ];

    return (
        <showEventDetailsContext.Provider value={setShowEventDetails}>
            <selectedEventContext.Provider value={setSelectedEvent}>
                <categoryContext.Provider
                    value={[selectedCategory, setSelectedCategory]}
                >
                    <div>
                        <NavBar></NavBar>
                        <Cover></Cover>
                        {/* ---------------------------------------------- */}
                        <div className="bg-home-bg h-fit w-full pt-[10rem] relative">
                            <CardSlider
                                title={'Upcoming Events'}
                                filteredEvents={filteredEvents}
                            ></CardSlider>
                            <div className="h-36"></div>
                            <CardSlider
                                title={'Past Events'}
                                filteredEvents={filteredEvents}
                            ></CardSlider>
                            <div className="h-36"></div>
                            <SocialMediaPostContainer
                                data={smtest}
                            ></SocialMediaPostContainer>
                            <div className="h-20"></div>
                            {showEventDetails && selectedEvent && (
                                <div
                                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                                    onClick={() => setShowEventDetails(false)}
                                >
                                    <div className="flex flex-col gap-4 bg-slate-800 text-white p-8 rounded-lg shadow-lg h-[70vh] w-[70vw]">
                                        <h2 className="text-xl font-bold mb-4">
                                            Event Details
                                        </h2>
                                        <p>Event Name: {selectedEvent.title}</p>
                                        <p>
                                            Date:{' '}
                                            {`${selectedEvent.date.month} ${selectedEvent.date.day}`}
                                            , 2024
                                        </p>
                                        <p>
                                            Description:{' '}
                                            {selectedEvent.description}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Footer></Footer>
                    </div>
                </categoryContext.Provider>
            </selectedEventContext.Provider>
        </showEventDetailsContext.Provider>
    );
};

export default Home;
