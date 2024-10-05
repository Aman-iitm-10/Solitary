import React from 'react';

const FeaturedEvents = (props) => {
  return (
    <div className="relative w-[60rem] h-[15rem] mt-3 expandevents">
      <div className="absolute inset-0 rounded-[10px] shadow-lg border border-[#cecece] backdrop-blur-[20px] p-3">
        {/* Top section: Event Image & Title */}
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
            {/*<div className="mt-2 text-sm text-[#a2a2a2] font-medium">50 Reviews</div>*/}
            <div className="flex mt-2 text-white font-montserrat text-[16px]">
              <div className=" text-[16px] space-y-1">
                <pre><strong>Date:</strong> {props.date}</pre>
                <pre><strong>Time:</strong> {props.time}</pre>
                <pre><strong>Location:</strong> {props.location}</pre>
                <pre><strong>Guest Speaker:</strong> {props.guest}</pre>
              </div>
            </div>
            {/* Registered Users Section */}
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
          Prof Hamza Farooq is known for his extensive experience in tech and academia, spanning various roles:
          Prof Hamza Farooq is known for his extensive experience in tech and academia, spanning various roles:
          Prof Hamza Farooq is known for his extensive experience in tech and academia, spanning various roles:
          Prof Hamza Farooq is known for his extensive experience in tech and academia, spanning various roles:
          Prof Hamza Farooq is known for his extensive experience in tech and academia, spanning various roles:
          Prof Hamza Farooq is known for his extensive experience in tech and academia, spanning various roles:
          Prof Hamza Farooq is known for his extensive experience in tech and academia, spanning various roles:
          Prof Hamza Farooq is known for his extensive experience in tech and academia, spanning various roles:
          Prof Hamza Farooq is known for his extensive experience in tech and academia, spanning various roles:
          
          <br />Founder of Traversal.ai | Adjunct Professor at UCLA | Senior Research Manager at Google | Lecturer at Stanford University | Instructor at Maven | Senior Manager at Walmart Labs
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvents;