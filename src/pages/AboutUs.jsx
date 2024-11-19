import './styles.css';

const AboutUs = () => {
    
  const toggleFoldable = (id) => {
    const content = document.getElementById(id);
    content.classList.toggle('open');
  };


  return (
    <div>
      <div className=" h-fit w-full p-[10rem]">
        <p className="text-white text-4xl sm:text-6xl font-bold text-center">
            Welcome to Solitary: The Standalone Community
        </p>

        <p>Ah, esteemed scholars and seekers of wisdom, allow me to present to you the splendor of Solitary: Solitary is not your average academic hangout; its a lively sanctuary where solitary souls unite, weaving harmony amid diverse minds. Here, beyond the label of a club, every member discovers connection, embarks on exciting explorations, and unlocks the potential for personal empowerment.</p>

        <h2 className="foldable-label" onClick={() => toggleFoldable('vision')}>Our Vision</h2>
        <div className="foldable-content" id="vision">
            <p>Solitary is a transformative sanctuary for standalone scholars. Beyond merely bringing together like-minded individuals, we aim to foster an environment where each member feels valued, supported, and motivated to pursue their aspirations. Our vision is to cultivate a community where every individual finds solace, encouragement, and the fuel to soar to new heights of success and fulfillment.</p>
            <img src="public\vision_image_url.jpg" alt="Students collaborating on a project"  width="800" height="600" />
        </div>

        <h2 className="foldable-label" onClick={() => toggleFoldable('inclusivity')}>Inclusivity</h2>
        <div className="foldable-content" id="inclusivity">
            <p>While everyone is welcome to partake in our activities, we take great joy in crafting tailored experiences specifically for full-time standalone students. Nevertheless, our doors are wide open to anyone who shares our fervor for personal growth and collaborative spirit.</p>
        </div>

        <h2 className="foldable-label" onClick={() => toggleFoldable('offer')}>What We Offer</h2>
        <div className="foldable-content" id="offer">
            <p>
                <li>Specialized Support: We provide specialized support tailored to the unique needs of standalone students, whether it is academic guidance, career advice, or simply a friendly ear to listen.</li>
                <li>Career Exploration: Through webinars, workshops, and networking events, we help our members explore diverse career paths and opportunities.</li>
                <li>Community Engagement: Our community fosters meaningful connections between seniors and juniors, creating a supportive network that extends beyond the classroom.</li>
                <li>Awareness: We keep our members informed about a wide range of opportunities, from extracurricular activities to internships, ensuring they have the resources they need to succeed.</li>
                <li>Campus Exposure: We organize offline activities in collaboration with other institutions, providing valuable exposure and networking opportunities for our members.</li>
            </p>
            <img src="public\offer_image_url.jpg" alt="Students participating in an outdoor activity" width="800" height="600"/>
        </div>

        <h2 className="foldable-label" onClick={() => toggleFoldable('commitment')}>Our Commitment</h2>
        <div className="foldable-content" id="commitment">
            <p>At Solitary, we hold transparency, accountability, and inclusivity as our guiding principles. Collaboration is not just a notion but a cornerstone of our ethos, as we actively seek partnerships with other organizations to enrich the student journey.</p>
        </div>

        <h2 className="foldable-label" onClick={() => toggleFoldable('join')}>Join Us</h2>
        <div className="foldable-content" id="join">
            <p>Whether you are a standalone student seeking support, a curious explorer eager to learn, or simply someone who values community, Solitary welcomes you with open arms. Together, let us embark on a journey of growth, exploration, and empowerment.</p>
            <b><button onClick={() => window.location.href='membership_form_url'}>Ready to join us? Fill out our membership form and become a part of something special.</button></b>
        </div>     
      </div>
    </div>
  );
};

export default AboutUs;
