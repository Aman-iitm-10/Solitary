// import React from 'react';
// import Avatar from"../assets/Avater.png"
// import GoogleLogo from"../assets/Social Icons.png"
// import searchLogo from"../assets/magnifying-glass 1.png"
// import instaLogo from"../assets/insta.png"
// import facebookLogo from"../assets/facebook.png"
// import linkedInLogo from"../assets/linkedIn.png"
// import xLogo from"../assets/X.png"
// import NavTry from '../components/SideNavbar'
// import SearchBar from '../components/SearchBar'
// import gsap from 'gsap';
// // import Avatar from"../assets/Avater.png"
// import './style_register.css'; 
// import BackgroundImage from "../assets/Solitary(3) 1.png"; // Replace with your image path


// const RegisterPage = () => {
   
//     return (

        


//         <div className="flex h-full bg-[#2c1055] text-white"
//         style={{ 
//             backgroundImage: `url(${BackgroundImage})`,  // Background image
//             backgroundSize: 'cover',                     // Make the image cover the entire div
//             backgroundPosition: 'center'                 // Center the image
//         }}
        
//         >

//             {/* Sidebar */}
//             {/* Sidebar */}
//             <NavTry />


//             {/* Main content */}
//             <div className="flex flex-col items-center justify-center  relative">
//                 {/* Search bar */}
//                 <SearchBar />
                
//                 {/* Avatar and Login Section */}
// <div className="login-section text-center mt-[9vh] d-flex justify-contain-center justify-items-center ">
//     <div>
//     <img src={Avatar} alt="Avatar" className="w-40 h-40 rounded-full mx-auto mb-10 avatar" />

//     <button className="bg-[#5e1e9e] hover:bg-[#501E9E] text-white text-lg font-semibold px-4 py-3 rounded-full flex items-center justify-center mx-auto mb-5 google-login-button 
//         animate-fadeInFromBottom hover:shadow-[0_0_15px_5px_rgba(94,30,158,0.8)] transition-shadow duration-300">
//         <img src={GoogleLogo} alt="Google Icon" className="w-6 h-6 mr-2" />
//         Login
//     </button>
//     <p className="text-sm">Please login with your Student Email id.</p>

//     </div>
    
    
// </div>

//             </div>
//         </div>
//     );
// };

// export default RegisterPage;


import React from 'react';
import Avatar from"../assets/Avater.png";
import GoogleLogo from"../assets/Social Icons.png";
import NavTry from '../components/SideNavbar';
import SearchBar from '../components/SearchBar';
import './style_register.css'; 
import BackgroundImage from "../assets/Solitary(3) 1.png"; // Replace with your image path

const RegisterPage = () => {
    return (
        <div className="flex h-screen bg-[#2c1055] text-white"
            style={{ 
                backgroundImage: `url(${BackgroundImage})`,  // Background image
                backgroundSize: 'cover',                     // Make the image cover the entire div
                backgroundPosition: 'center'                 // Center the image
            }}
        >
            {/* Sidebar */}
            <div className="w-[250px] h-full fixed top-0 left-0 z-50">
                <NavTry />
            </div>

            {/* Main content */}
            <div className="flex flex-col flex-grow ml-[250px] justify-center items-center p-4">
                
                {/* Search bar */}
                <div className="mb-12 w-full max-w-[600px] px-4 sm:px-8">  {/* Added responsive width and padding */}
                    <SearchBar />
                </div>

                {/* Avatar and Login Section */}
                <div className="login-section flex flex-col items-center justify-center w-full">
                    {/* Avatar */}
                    <img src={Avatar} alt="Avatar" className="w-40 h-40 rounded-full mb-8 avatar" /> {/* Spacing between Avatar and Login button */}

                    {/* Login Button */}
                    <button className="bg-[#5e1e9e] hover:bg-[#501E9E] text-white text-lg font-semibold px-4 py-3 rounded-full flex items-center justify-center mb-6 google-login-button 
                        animate-fadeInFromBottom hover:shadow-[0_0_15px_5px_rgba(94,30,158,0.8)] transition-shadow duration-300">
                        <img src={GoogleLogo} alt="Google Icon" className="w-6 h-6 mr-2" />
                        Login
                    </button>

                    <p className="text-sm">Please login with your Student Email id.</p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
