import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CharacterImg from '../assets/Component 3.png';
import './styles.css'; // Assuming you store your CSS here
import AboutUs from '../pages/AboutUs';

gsap.registerPlugin(ScrollTrigger);

const SolitaryMaximizing = () => {
    useEffect(() => {
        const starfield = document.getElementById('starfield');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.animationDuration = `${Math.random() * 10 + 10}s`;
            starfield.appendChild(star);
        }

        let scrollSpeedFactor = 1;
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            scrollSpeedFactor = 1 + scrollY / 2000;
            document.querySelectorAll('.star').forEach((star) => {
                star.style.animationDuration = `${(Math.random() * 10 + 20) / scrollSpeedFactor}s`;
            });
        });

        gsap.from('.character', {
            y: 100,
            duration: 1.5,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.character',
                start: 'top 85%',
                end: 'bottom 40%',
                scrub: true,
            },
        });

        gsap.from('.footer', {
            opacity: 0.09,
            y: 90,
            duration: 3,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.footer',
                start: 'top 90%',
                end: 'bottom 20%',
                scrub: true,
            },
        });

        gsap.to('.character', {
            y: '-=40',
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            duration: 1.6,
        });
    }, []);

    return (
        <div>
            <div className="starfield" id="starfield"></div>

            <div className="container">
                <div className="tagh1 mt-80">
                    <h1>Solitary </h1>
                    <h4>Maximizing Students' Experience</h4>
                    <div className="tag2 mt-20">
                        <h2>
                            At Solitary, we aim to enhance your experience by
                            optimizing your performance through collaboration
                            and community growth.
                        </h2>
                    </div>
                </div>

                <div className=" info-section bg-home-bg mt-40">
                    <div>
                        <div className="info-box1">
                            <h3>20+</h3>
                            <p>Collaborations with Clubs and Societies</p>
                        </div>
                        <div className="info-box2">
                            <h3>500+</h3>
                            <p>Community Base</p>
                        </div>
                    </div>
                    <img
                        src={CharacterImg}
                        alt="Character"
                        className="character"
                    />

                    <div className="info-box3">
                        <p>
                            This website is designed for community service of
                            IITM BS
                        </p>
                    </div>
                </div>
            </div>

            {/* <a href="#" className="arg">
                Skip to the main content
            </a> */}
            <AboutUs />
        </div>
    );
};

export default SolitaryMaximizing;
