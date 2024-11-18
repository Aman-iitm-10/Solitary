import Sm_card_placeholder from '../assets/SM-card-placeholder.jpeg';

const SocialMediaCard = ({ image, title, description, date }) => {
    return (
        <div className="flex flex-col w-[21rem] gap-4 mb-16">
            <div>
                <img
                    src={Sm_card_placeholder}
                    alt=""
                    className=" h-[13rem] w-full object-cover rounded-t-2xl"
                />
            </div>

            <div className="text-white text-xl font-bold font-dm-sans leading-8">
                {title}
            </div>

            <div className="text-neutral-200 text-base font-normal font-dm-sans leading-normal mt-6">
                {description}
            </div>

            <div className="text-neutral-400 text-sm font-normal font-dm-sans leading-5">
                {date}
            </div>
        </div>
    );
};

export default SocialMediaCard;
