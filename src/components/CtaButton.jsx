import { Link } from 'react-router-dom';

function CtaButton({ children, linkto }) {
    return (
        <Link linkto={linkto}>
            <div className="w-[9rem] h-[2.5rem] bg-pink-600 rounded-[50px] shadow text-white text-lg font-bold font-dm-sans flex justify-center items-center">
                {children}
            </div>
        </Link>
    );
}

export default CtaButton;
