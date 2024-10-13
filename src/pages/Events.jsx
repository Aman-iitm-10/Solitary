import FeaturedEvents from '../components/FeaturedEvents'
import LeftNav from '../components/LeftNav'
import Nav from '../components/Nav'
import FeaturedEventsFullPage from '../components/FeaturedEventsFullPage'
import SearchBar from '../components/SearchBar'
import NavTry from '../components/NavTry'

import Avatar from"../assets/Avater.png"
import GoogleLogo from"../assets/Social Icons.png"
import searchLogo from"../assets/magnifying-glass 1.png"
import instaLogo from"../assets/insta.png"
import facebookLogo from"../assets/facebook.png"
import linkedInLogo from"../assets/linkedIn.png"
import xLogo from"../assets/X.png"

import RegConfirmation from '../components/RegConfirmation'
import Cards from '../components/n';

import parse from 'html-react-parser';

const Events = () => {
  return (
    /*container class is removed to avoid extra margin*/
    /*h-screen is removed to make it flexible */
    <div className="bg-gradient-to-r from-black to-[#0F0527] font-inter">
      
      <div className="row">
        <div className="col-3">
          <NavTry />
        </div>
        <div className="col-9 pr-10">
        <div className="row">
        
          <div className="mt-4 flex items-center" style={{maxWidth: "fit-content",margin:"auto"}}>
                      <button className="bg-[#6600ff] p-1 rounded-l flex items-center justify-center">
                          <img src={searchLogo} alt="Search" style={{width: "32px", height: "32px", minWidth:"32px"}} />
                      </button>
                      <input type="text" placeholder="Search for something" className="p-2 text-black rounded-r outline-none" />
                      <button className="relative bg-[#6600ff] text-white px-6 py-2 rounded-md ml-4">
                          Login
                      </button>
          </div>
      </div>
             {/*   <FeaturedEventsFullPage title=" 🌟 Join us for an 'Exclusive Workshop,' hosted by Code Crafters, IITM BS Degree Coding Club! 🌟" description=" Dear learners,<br />
              We are thrilled to announce our AI-ML series at CodeCrafters, starting with our first session featuring a special speaker event. Join Prof Hamza Farooq for a discussion on 'The Future of Generative AI and Hyper Personalization,' exploring the next frontier in AI and how it will redefine digital experiences. Dear learners,<br />
              We are thrilled to announce our AI-ML series at CodeCrafters, starting with our first session featuring a special speaker event. Join Prof Hamza Farooq for a discussion on The Future of Generative AI and Hyper Personalization, exploring the next frontier in AI and how it will redefine digital experiences.
              Dear learners,<br />
              We are thrilled to announce our AI-ML series at CodeCrafters, starting with our first session featuring a special speaker event. Join Prof Hamza Farooq for a discussion on The Future of Generative AI and Hyper Personalization, exploring the next frontier in AI and how it will redefine digital experiences." information=" He is known for his extensive experience in the tech industry and academia. His work spans various roles, such as" date="23.09.1990" time="23:00" location="Taramani, Chennai" guest="Shaurya"/> 
              
              
             
          
             
           <FeaturedEventsFullPage title=" 🌟 Join us for an 'Exclusive Workshop,' hosted by Code Crafters, 
          IITM BS Degree Coding Club! 🌟" description={parse("<strong>Dear learners</strong>,<br /> We are thrilled to announce our AI-ML series at CodeCrafters, starting with our first session featuring a special speaker event. Join Prof Hamza Farooq for a discussion on 'The Future of Generative AI and Hyper Personalization,' exploring the next frontier in AI and how it will redefine digital experiences. Dear learners,<br /> We are thrilled to announce our AI-ML series at CodeCrafters, starting with our first session featuring a special speaker event. Join Prof Hamza Farooq for a discussion on The Future of<br />")} information=" He  is known for his extensive experience in 
               the tech industry and academia. His work spans various roles, such as" date="23.09.1990" 
               time="23:00" location="Taramani, Chennai" guest="Shaurya"/> 
              <FeaturedEvents  title=" 🌟 Join us for an 'Exclusive Workshop,' hosted by Code Crafters, IITM BS Degree Coding Club! 🌟" description=" Dear learners,<br />
              We are thrilled to announce our AI-ML series at CodeCrafters, starting with our first session featuring a special speaker event. Join Prof Hamza Farooq for a discussion on 'The Future of Generative AI and Hyper Personalization,' exploring the next frontier in AI and how it will redefine digital experiences. Dear learners,<br />
              We are thrilled to announce our AI-ML series at CodeCrafters, starting with our first session featuring a special speaker event. Join Prof Hamza Farooq for a discussion on The Future of Generative AI and Hyper Personalization, exploring the next frontier in AI and how it will redefine digital experiences.
              Dear learners,<br />
              We are thrilled to announce our AI-ML series at CodeCrafters, starting with our first session featuring a special speaker event. Join Prof Hamza Farooq for a discussion on The Future of Generative AI and Hyper Personalization, exploring the next frontier in AI and how it will redefine digital experiences." information=" He  is known for his extensive experience in the tech industry and academia. His work spans various roles, such as" date="23.09.1990" time="23:00" location="Chennai" guest="Shaurya"/>  
             
          <RegConfirmation/>

<Cards />
             <FeaturedEvents/>
             <FeaturedEvents/>
             */} 
             <Cards />
             <FeaturedEvents/>
             <FeaturedEvents/>
             
        </div>
      </div>
    </div>
  )
}

export default Events
