import NavBar from '../components/LandingPageNavBar.jsx';
import Cover from '../components/LandingByDeep.jsx';
import Footer from '../components/Footer';
// import SocialMediaPostContainer from '../components/SocialMediaPostContainer';
import { getAllEvents } from '../services/operations/eventAPI';
import { useState, useEffect } from 'react';
import {
    showEventDetailsContext,
    selectedEventContext,
    categoryContext,
} from '../context/context.js';

import RegisterPage from './Register.jsx';

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

    return (
        <showEventDetailsContext.Provider value={setShowEventDetails}>
            <selectedEventContext.Provider value={setSelectedEvent}>
                <categoryContext.Provider
                    value={[selectedCategory, setSelectedCategory]}
                >
                    <div>
                        <NavBar></NavBar>
                        <Cover></Cover>

                        <RegisterPage />
                        <Footer></Footer>
                    </div>
                </categoryContext.Provider>
            </selectedEventContext.Provider>
        </showEventDetailsContext.Provider>
    );
};

export default Home;
