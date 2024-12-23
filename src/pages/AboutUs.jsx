import './styles.css';

const AboutUs = () => {
    const toggleFoldable = (id) => {
        const content = document.getElementById(id);
        content.classList.toggle('open');
    };

    return (
        <div>
            <div className=" mt-20 h-fit w-full p-[10rem] text-2xl">
                <p className="text-white text-4xl sm:text-6xl font-bold text-center">
                    Welcome to Solitary: The Standalone Community
                </p>

                <p className="mt-20 text-2xl">
                    Solitary is more than a community - it's a movement. We
                    exist to bridge gaps, foster connections, and help IITM BS
                    students, particularly standalone learners, achieve their
                    academic and career dreams.
                </p>

                <h1 className=" mt-20" onClick={() => toggleFoldable('vision')}>
                    Our Vision
                </h1>
                <div id="vision">
                    <p>
                        Our mission is to provide tailored support, foster
                        collaboration, and empower students to thrive
                        academically and beyond
                    </p>
                    {/* <img src="public\vision_image_url.jpg" alt="Students collaborating on a project"  width="800" height="600" /> */}
                </div>
                <h1
                    className=" mt-20"
                    onClick={() => toggleFoldable('objective')}
                >
                    Our Objective
                </h1>
                <div id="objective">
                    <p>
                        Strengthen the senior-junior network. Provide academic,
                        personal, and career guidance. Organize skill-building
                        and career exploration events.
                    </p>
                </div>

                <h1
                    className="mt-20"
                    onClick={() => toggleFoldable('inclusivity')}
                >
                    Inclusivity
                </h1>
                <div id="inclusivity">
                    <p>
                        While everyone is welcome to partake in our activities,
                        we take great joy in crafting tailored experiences
                        specifically for full-time standalone students.
                        Nevertheless, our doors are wide open to anyone who
                        shares our fervor for personal growth and collaborative
                        spirit.
                    </p>
                </div>

                <h1 className="mt-20" onClick={() => toggleFoldable('offer')}>
                    What We Offer
                </h1>
                <div id="offer">
                    <p>
                        <li>
                            Specialized Support: We provide specialized support
                            tailored to the unique needs of standalone students,
                            whether it is academic guidance, career advice, or
                            simply a friendly ear to listen.
                        </li>
                        <li>
                            Career Exploration: Through webinars, workshops, and
                            networking events, we help our members explore
                            diverse career paths and opportunities.
                        </li>
                        <li>
                            Community Engagement: Our community fosters
                            meaningful connections between seniors and juniors,
                            creating a supportive network that extends beyond
                            the classroom.
                        </li>
                        <li>
                            Awareness: We keep our members informed about a wide
                            range of opportunities, from extracurricular
                            activities to internships, ensuring they have the
                            resources they need to succeed.
                        </li>
                        <li>
                            Campus Exposure: We organize offline activities in
                            collaboration with other institutions, providing
                            valuable exposure and networking opportunities for
                            our members.
                        </li>
                    </p>
                </div>

                <h1
                    className="mt-20"
                    onClick={() => toggleFoldable('commitment')}
                >
                    Our Commitment
                </h1>
                <div id="commitment">
                    <p>
                        At Solitary, we hold transparency, accountability, and
                        inclusivity as our guiding principles. Collaboration is
                        not just a notion but a cornerstone of our ethos, as we
                        actively seek partnerships with other organizations to
                        enrich the student journey.{' '}
                    </p>
                </div>

                <h1 className="mt-20" onClick={() => toggleFoldable('join')}>
                    Join Us
                </h1>
                <div id="join">
                    <p>
                        Whether you are a standalone student seeking support, a
                        curious explorer eager to learn, or simply someone who
                        values community, Solitary welcomes you with open arms.
                        Together, let us embark on a journey of growth,
                        exploration, and empowerment.
                    </p>
                    <b>
                        <button
                            onClick={() =>
                                (window.location.href = 'membership_form_url')
                            }
                        >
                            Ready to join us? Fill out our membership form and
                            become a part of something special.
                        </button>
                    </b>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
