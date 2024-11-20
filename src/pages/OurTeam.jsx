import Footer from '../components/Footer';
import placeholder from '../assets/placeholder-user.webp';
import { FiLinkedin, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi';
import { getAllTeamMembers } from '../services/operations/teamMembersAPI';
import { useEffect, useState } from 'react';
import NavBar from '../components/LandingPageNavBar';


const OurTeam = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const memberData = await getAllTeamMembers();
                setMembers(memberData);
            } catch (error) {
                console.error('Error fetching members:', error);
            }
        };
        fetchMembers();
    }, []);
    return (
        <div className="min-h-screen">
            <NavBar></NavBar>
            <div className="opacity-90  from-cover-overlay-1 to-cover-overlay-2 w-full h-[5.5rem]"></div>
            {/* bg-gradient-to-br */}
            <div className=" bg-home-bg h-full w-full pt-[10rem] pb-[10rem]">
                <div className="text-white text-4xl sm:text-6xl font-bold text-center">
                    Technical Team
                </div>
                <div className=" h-16"></div>
                <div className="flex gap-5 items-center justify-around w-11/12 mx-auto flex-wrap">
                    {members
                        .filter((member) => member.team === 'Tech team')
                        .map((member) => (
                            <div
                                key={member._id}
                                className="flex flex-col items-center text-center gap-2 backdrop-blur bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)] w-64 h-80 rounded-lg mb-7"
                            >
                                <div className="mx-auto w-full mt-5 mb-3">
                                    {' '}
                                    <img
                                        src={placeholder}
                                        alt={member.name}
                                        srcSet=""
                                        className=" rounded-full w-1/2 mx-auto "
                                    />
                                </div>
                                <div className=" text-white font-dm-sans text-2xl">
                                    {member.name}
                                </div>
                                <div className=" text-white font-poppins text-xl">
                                    {member.role}
                                </div>
                                <div className="text-white text-lg flex gap-4 mt-5">
                                    {member.links.linkedin && (
                                        <FiLinkedin
                                            onClick={() =>
                                                window.open(
                                                    member.links.linkedin
                                                )
                                            }
                                        ></FiLinkedin>
                                    )}
                                    {member.links.github && (
                                        <FiGithub
                                            onClick={() =>
                                                window.open(member.links.github)
                                            }
                                        ></FiGithub>
                                    )}
                                    {member.links.instagram && (
                                        <FiInstagram
                                            onClick={() =>
                                                window.open(
                                                    member.links.instagram
                                                )
                                            }
                                        ></FiInstagram>
                                    )}
                                    {member.links.twitter && (
                                        <FiTwitter
                                            onClick={() =>
                                                window.open(
                                                    member.links.twitter
                                                )
                                            }
                                        ></FiTwitter>
                                    )}
                                </div>
                            </div>
                        ))}
                </div>

                <div className="text-white text-4xl sm:text-6xl font-bold text-center mt-20">
                    Design Team
                </div>
                <div className=" h-16"></div>
                <div className="flex gap-5 items-center justify-around w-11/12 mx-auto flex-wrap">
                    {members
                        .filter((member) => member.team === 'Statical team')
                        .map((member) => (
                            <div
                                key={member._id}
                                className="flex flex-col items-center text-center gap-2 backdrop-blur bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)] w-64 h-80 rounded-lg mb-7"
                            >
                                <div className="mx-auto w-full  mt-5 mb-3">
                                    {' '}
                                    <img
                                        src={placeholder}
                                        alt={member.name}
                                        srcSet=""
                                        className=" rounded-full w-1/2 mx-auto "
                                    />
                                </div>
                                <div className=" text-white font-dm-sans text-2xl">
                                    {member.name}
                                </div>
                                <div className=" text-white font-poppins text-xl">
                                    {member.role}
                                </div>
                                <div className="text-white text-lg flex gap-4 mt-5">
                                    {member.links.linkedin && (
                                        <FiLinkedin
                                            onClick={() =>
                                                window.open(
                                                    member.links.linkedin
                                                )
                                            }
                                        ></FiLinkedin>
                                    )}
                                    {member.links.github && (
                                        <FiGithub
                                            onClick={() =>
                                                window.open(member.links.github)
                                            }
                                        ></FiGithub>
                                    )}
                                    {member.links.instagram && (
                                        <FiInstagram
                                            onClick={() =>
                                                window.open(
                                                    member.links.instagram
                                                )
                                            }
                                        ></FiInstagram>
                                    )}
                                    {member.links.twitter && (
                                        <FiTwitter
                                            onClick={() =>
                                                window.open(
                                                    member.links.twitter
                                                )
                                            }
                                        ></FiTwitter>
                                    )}
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default OurTeam;
