import FeaturedEventsFullPage from '../components/FeaturedEventsFullPage'
import searchLogo from "../assets/magnifying-glass 1.png"
import parse from 'html-react-parser';

const Events = () => {
  return (
    /*container class is removed to avoid extra margin*/
    /*h-screen is removed to make it flexible */
    <div className="bg-gradient-to-r from-black to-[#0F0527] font-inter">

      <div className="row">
        <div className=" col-12 pr-10">
          <div className="row">

            <div className="mt-4 flex items-center" style={{ maxWidth: "fit-content", margin: "auto" }}>
              <button className="bg-[#6600ff] p-1 rounded-l flex items-center justify-center">
                <img src={searchLogo} alt="Search" style={{ width: "32px", height: "32px", minWidth: "32px" }} />
              </button>
              <input type="text" placeholder="Search for something" className="p-2 text-black rounded-r outline-none" />
              <button className="relative bg-[#6600ff] text-white px-6 py-2 rounded-md ml-4">
                Login
              </button>
            </div>
          </div>
          
             
          
             
           <FeaturedEventsFullPage speakerDetails = {["Founder of Traversal.ai", "Adjunct Professor at UCLA","Senior Research Science Manager at Google","Lecturer at Stanford University","Instructorat Maven","Senior Manager at Walmart Labs"]} title=" 🌟 Join us for an 'Exclusive Workshop,' hosted by Code Crafters, 
          IITM BS Degree Coding Club! 🌟" description={parse("<strong>Dear learners</strong>,<br /> We are thrilled to announce our AI-ML series at CodeCrafters, starting with our first session featuring a special speaker event. Join Prof Hamza Farooq for a discussion on 'The Future of Generative AI and Hyper Personalization,' exploring the next frontier in AI and how it will redefine digital experiences. Dear learners,<br /> We are thrilled to announce our AI-ML series at CodeCrafters, starting with our first session featuring a special speaker event. Join Prof Hamza Farooq for a discussion on The Future of<br />")} information=" He  is known for his extensive experience in 
               the tech industry and academia. His work spans various roles, such as" date="23.09.1990" 
               time="23:00" location="Taramani, Chennai" guest="Shaurya"/> 
        </div>
      </div>
    </div>
  )
}

export default Events
