import Avatar from"../assets/Avater.png";
import GoogleLogo from"../assets/Social Icons.png";
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

            {/* Main content */}
            <div className="flex flex-col flex-grow ml-[250px] justify-center items-center p-4">

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
