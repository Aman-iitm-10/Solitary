// // import React from 'react';
// // import Coverimg from '../assets/Desktop - 23.png';
// // import CtaButton from './CtaButton';

// // function Cover() {
// //     return (
// //         <div className="relative">
// //             <img
// //                 src={Coverimg}
// //                 alt=""
// //                 className="w-full h-[800px] object-cover"
// //             />
            // <div className="opacity-90 bg-gradient-to-br from-cover-overlay-1 to-cover-overlay-2 absolute inset-0"></div>

            // <div className="flex flex-col justify-center items-center gap-10 flex-wrap absolute w-10/12  top-[30%] right-[7%] sm:top-[35%] sm:right-[17%] sm:w-8/12 text-white z-10">
            //     <div className="text-center font-poppins text-[1.65rem] xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
            //         Solitary Maximizing Students Experience
            //     </div>
            //     <div className="text-center font-poppins text-[1.085rem] xs:text-lg sm:text-lg lg:text-xl xl:text-[1.53rem] font-normal leading-normal">
            //         At Solitary we want to maximize your experience by
            //         optimizing your performance.
            //     </div>

            //     <CtaButton linkto={'/'}>Learn More</CtaButton>
            // </div>
// //         </div>
// //     );
// // }

// // export default Cover;

// import React from 'react';
// import Coverimg from '../assets/Desktop - 23.png'; // Adjust the path to your actual image
// import CtaButton from './CtaButton'; // Assuming you have a CTA button component

// const Cover = () => {
//     return (
//         <div className="relative">
//             {/* Cover Image */}
//             <img
//                 src={Coverimg}
//                 alt="Cover"
//                 className="w-full h-[800px] object-cover"
//             />
//             {/* Gradient Overlay */}
//             <div className="opacity-90 bg-gradient-to-br from-cover-overlay-1 to-cover-overlay-2 absolute inset-0"></div>

//             {/* Text and CTA Section */}
//             <div className="flex flex-col justify-center items-center gap-10 flex-wrap absolute w-10/12  top-[30%] right-[7%] sm:top-[35%] sm:right-[17%] sm:w-8/12 text-white z-10">
//                 <div className="text-center font-poppins text-[1.65rem] xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
//                     Solitary Maximizing Students Experience
//                 </div>
//                 <div className="text-center font-poppins text-[1.085rem] xs:text-lg sm:text-lg lg:text-xl xl:text-[1.53rem] font-normal leading-normal">
//                     At Solitary, we want to maximize your experience by optimizing your performance.
//                 </div>

//                 {/* Call To Action Button */}
//                 <CtaButton linkto={'/'}>Learn More</CtaButton>
//             </div>
//         </div>
//     );
// };

// export default Cover;

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CharacterImg from '../assets/Component 3.png';
import './styles.css'; // Assuming you store your CSS here

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
      document.querySelectorAll('.star').forEach(star => {
        star.style.animationDuration = `${(Math.random() * 10 + 20) / scrollSpeedFactor}s`;
      });
    });

    // GSAP animations
    // gsap.from("h1", {
    //   opacity: 0,
    //   x: -100,
    //   duration: 1,
    // });

    // gsap.from("h2", {
    //   opacity: 0,
    //   x: 200,
    //   duration: 1.5,
    // });

    // gsap.from(".options", {
    //   opacity: 0,
    //   y: -80,
    //   duration: 1.5,
    //   stagger: 0.2,
    //   ease: "power2.out",
    // });

    // gsap.from(".info-box1", {
    //   opacity: 0,
    //   y: 200,
    //   stagger: 0.3,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: ".info-section",
    //     start: "top 90%",
    //     end: "bottom 30%",
    //     scrub: true,
    //   },
    // });

    // gsap.from(".info-box2", {
    //   opacity: 0,
    //   y: 200,
    //   stagger: 0.3,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: ".info-section",
    //     start: "top 90%",
    //     end: "bottom 30%",
    //     scrub: true,
    //   },
    // });

    // gsap.from(".info-box3", {
    //   opacity: 0,
    //   y: 200,
    //   stagger: 0.3,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: ".info-section",
    //     start: "top 90%",
    //     end: "bottom 30%",
    //     scrub: true,
    //   },
    // });

    gsap.from(".character", {
      y: 100,
      duration: 1.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".character",
        start: "top 85%",
        end: "bottom 40%",
        scrub: true,
      },
    });

    gsap.from(".footer", {
      opacity: 0.09,
      y: 90,
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".footer",
        start: "top 90%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    gsap.to(".character", {
      y: "-=40",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.6,
    });
  }, []);

  return (
    <div>
      <div className="starfield" id="starfield"></div>

      <div className="container">
        {/* <div className="nav">
          <img src="Solitary(2) 1.png" alt="Solitary Logo" className="logo" />
          <div className="options">
            <a href="#">Events</a>
            <a href="#">About Us</a>
            <a href="#">Society and Clubs</a>
            <a href="#">Houses</a>
            <a href="#">Resources</a>
            <button>Register Now</button>
          </div>
        </div> */}

        {/* <h1>Solitary Maximizing</h1>
        <h1>Students Experience</h1>
        <h2>At Solitary, we aim to enhance your experience by optimizing your performance through collaboration and community growth.</h2> */}
    

    {/* <div className="opacity-90 bg-gradient-to-br from-cover-overlay-1 to-cover-overlay-2 absolute inset-0"></div> */}

{/* <div className="flex flex-col justify-center items-center gap-10 flex-wrap absolute w-10/12  top-[30%] right-[7%] sm:top-[35%] sm:right-[17%] sm:w-8/12 text-white z-10">
    <div className="text-center font-poppins text-[1.65rem] xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
        Solitary Maximizing Students Experience
    </div>
    <div className="text-center font-poppins text-[1.085rem] xs:text-lg sm:text-lg lg:text-xl xl:text-[1.53rem] font-normal leading-normal">
        At Solitary we want to maximize your experience by
        optimizing your performance.
    </div>

    {/* <CtaButton linkto={'/'}>Learn More</CtaButton> */}
    <div class="tagh1">
    <h1>Solitary Maximizing</h1>
        <h1>Students Experience</h1>
        <h2>At Solitary, we aim to enhance your experience by optimizing your performance through collaboration and community growth.</h2>
    </div>

        <div className="info-section">
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
          <img src={CharacterImg} alt="Character" className="character" />

          <div className="info-box3">
            <p>This website is designed for community service of IITM BS</p>
          </div>
        </div>
      </div>

      <a href="#" className="arg">Skip to the main content</a>
      <div className="footer">
        <p>&copy;2023 Solitary - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default SolitaryMaximizing;
