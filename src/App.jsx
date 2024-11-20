import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../src/pages/Home';
// import AboutUs from '../src/pages/AboutUs';
import OurTeam from './pages/OurTeam';
import SocietiesAndClubs from './pages/SocietiesAndClubs';
import Houses from './pages/Houses';
import './App.css';
import Events from './pages/Events';
import Register from './pages/Register';
// import FeaturedEvents from './components/FeaturedEvents';
import Resources from './pages/Resources';
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/events" element={<Events/>} />
                {/* <Route path="/about" element={<AboutUs></AboutUs>} /> */}
                <Route path="/ourteam" element={<OurTeam></OurTeam>} />
                <Route
                    path="/societiesandclubs"
                    element={<SocietiesAndClubs></SocietiesAndClubs>}
                />
                <Route path="/resources" element={<Resources/>} />
                <Route path="/houses" element={<Houses></Houses>} />
                <Route path="/register" element={<Register></Register>} />
                
            </Routes>
        </>
    );
}

export default App;
