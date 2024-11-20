import Avatar from '../assets/Avater.png';
import GoogleLogo from '../assets/Social Icons.png';
import './style_register.css';

const RegisterPage = () => {
    return (
        <div className="flex h-screen  text-white">
            {/* Main content */}
            <div className="flex flex-col flex-grow justify-center items-center p-4">
                {/* Avatar and Login Section */}
                <div className="login-section flex flex-col items-center justify-center w-full">
                    {/* Avatar */}
                    <img
                        src={Avatar}
                        alt="Avatar"
                        className="w-40 h-40 rounded-full mb-8 avatar"
                    />{' '}
                    {/* Spacing between Avatar and Login button */}
                    {/* Login Button */}
                    <button
                        className="bg-[#5e1e9e] hover:bg-[#501E9E] text-white text-lg font-semibold px-4 py-3 rounded-full flex items-center justify-center mb-6 google-login-button 
                        animate-fadeInFromBottom hover:shadow-[0_0_15px_5px_rgba(94,30,158,0.8)] transition-shadow duration-300"
                    >
                        <img
                            src={GoogleLogo}
                            alt="Google Icon"
                            className="w-6 h-6 mr-2"
                        />
                        Login
                    </button>
                    <p className="text-sm">
                        Please login with your Student Email id.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
