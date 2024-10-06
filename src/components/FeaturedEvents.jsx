

import React, { useState } from 'react';
import './FeaturedEvents.css'; 

const FeaturedEvents = (props) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const toggleDropdown = (filter) => {
    setSelectedFilter(selectedFilter === filter ? null : filter);
  };

  return (
    <div className="relative w-[60rem] h-[15rem] mt-3 expandevents">
      <div className="absolute inset-0 rounded-[10px] shadow-lg border border-[#cecece] backdrop-blur-[20px] p-3">
       
        <div className="flex">
          <img
            className="w-[250px] h-[200px] object-cover rounded-md"
            src="https://via.placeholder.com/288x295"
            alt="Event"
          />
          <div className="ml-6">
            <h2 className="text-white text-xl font-bold font-montserrat">
              🌟 Join us for an "Exclusive Workshop," hosted by Code Crafters, IITM BS Degree Coding Club! 🌟
            </h2>
            <div className="flex mt-2 text-white font-montserrat text-[16px]">
              <div className="text-[16px] space-y-1">
                <pre><strong>Date:</strong> {props.date}</pre>
                <pre><strong>Time:</strong> {props.time}</pre>
                <pre><strong>Location:</strong> {props.location}</pre>
                <pre><strong>Guest Speaker:</strong> {props.guest}</pre>
              </div>
            </div>
            <div className="flex items-center mt-1">
              <div className="bg-violet-700 rounded-full w-12 h-[15px] flex justify-center items-center">
                <span className="text-white text-m font-semibold">151+</span>
              </div>
              <div className="ml-4 text-white/80 text-[20px] font-bold">Already Registered</div>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="absolute right-4 top-40">
          <button className="bg-[#49108b] text-white text-lg font-bold py-2 px-6 rounded-[10px]">
            Register Now
          </button>
        </div>

        {/* Event Description */}
        <div className="mt-6 text-white text-[13px] font-bold font-montserrat leading-tight">
          Dear learners,<br />
          We are thrilled to announce our Ai-ML series at CodeCrafters, starting with our first session featuring a special speaker event. Join Prof Hamza Farooq for a discussion on "The Future of Generative AI and Hyper Personalization," exploring the next frontier in AI and how it will redefine digital experiences.
        </div>

        {/* Speaker Information */}
        <div className="mt-6 text-white text-[10px] font-bold leading-[15px]">
          Prof Hamza Farooq is known for his extensive experience in tech and academia, spanning various roles:
          <br />Founder of Traversal.ai | Adjunct Professor at UCLA | Senior Research Manager at Google | Lecturer at Stanford University | Instructor at Maven | Senior Manager at Walmart Labs
        </div>
      </div>

      {/* filter btn */}
      <button
        onClick={toggleFilter}
        className="filter-button fixed right-4 top-4 bg-[#49108b] text-white font-bold px-4 py-2 rounded hover:bg-[#5e1e9e]"
      >
        Filter
      </button>

      
      <div className={`filter-section ${isFilterVisible ? 'slide-in' : 'slide-out'}`}>
        <div className="filter-category p-4 text-white">
          
          <div className="filter-item">
            <button onClick={() => toggleDropdown('house')} className="w-full text-left">
              Search By House
            </button>
            {selectedFilter === 'house' && (
              <div className="dropdown-content mt-2 fade-in">
                <div>
                  <input type="radio" id="all-houses" name="house" />
                  <label htmlFor="all-houses" className="text-white">All Houses</label>
                </div>
                <div>
                  <input type="checkbox" id="house-gir" />
                  <label htmlFor="house-gir" className="text-white">Gir</label>
                </div>
                <div>
                  <input type="checkbox" id="house-wayanad" />
                  <label htmlFor="house-wayanad" className="text-white">Wayanad</label>
                </div>
                <div>
                  <input type="checkbox" id="house-pichavaram" />
                  <label htmlFor="house-pichavaram" className="text-white">Pichavaram</label>
                </div>
                <div>
                  <input type="checkbox" id="house-kahna" />
                  <label htmlFor="house-kahna" className="text-white">Kahna</label>
                </div>
              </div>
            )}
          </div>

          
          <div className="filter-item mt-4">
            <button onClick={() => toggleDropdown('clubs')} className="w-full text-left">
              Search By Clubs
            </button>
            {selectedFilter === 'clubs' && (
              <div className="dropdown-content mt-2 fade-in">
                <div>
                  <input type="radio" id="all-clubs" name="club" />
                  <label htmlFor="all-clubs" className="text-white">All Clubs</label>
                </div>
                <div>
                  <input type="checkbox" id="club-gir" />
                  <label htmlFor="club-gir" className="text-white">Gir</label>
                </div>
                <div>
                  <input type="checkbox" id="club-wayanad" />
                  <label htmlFor="club-wayanad" className="text-white">Wayanad</label>
                </div>
                <div>
                  <input type="checkbox" id="club-pichavaram" />
                  <label htmlFor="club-pichavaram" className="text-white">Pichavaram</label>
                </div>
                <div>
                  <input type="checkbox" id="club-kahna" />
                  <label htmlFor="club-kahna" className="text-white">Kahna</label>
                </div>
              </div>
            )}
          </div>

         
          <div className="filter-item mt-4">
            <button onClick={() => toggleDropdown('domain')} className="w-full text-left">
              Search By Domain
            </button>
            {selectedFilter === 'domain' && (
              <div className="dropdown-content mt-2 fade-in">
                <div>
                  <input type="radio" id="all-domains" name="domain" />
                  <label htmlFor="all-domains" className="text-white">All Domains</label>
                </div>
                <div>
                  <input type="checkbox" id="domain-gir" />
                  <label htmlFor="domain-gir" className="text-white">Gir</label>
                </div>
                <div>
                  <input type="checkbox" id="domain-wayanad" />
                  <label htmlFor="domain-wayanad" className="text-white">Wayanad</label>
                </div>
                <div>
                  <input type="checkbox" id="domain-pichavaram" />
                  <label htmlFor="domain-pichavaram" className="text-white">Pichavaram</label>
                </div>
                <div>
                  <input type="checkbox" id="domain-kahna" />
                  <label htmlFor="domain-kahna" className="text-white">Kahna</label>
                </div>
              </div>
            )}
          </div>
        </div>
        <button className="bg-purple-600 hover:bg-purple-800  text-white font-bold px-4 py-2 m-7 rounded mt-4">Apply</button>
      </div>
    </div>
  );
};

export default FeaturedEvents;
