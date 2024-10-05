import React, { useState } from 'react';
import SocialMediaCard from './SocialMediaCard';
import LightButton from './LightButton';

const SocialMediaPostContainer = ({ data }) => {
    const [visible, setVisible] = useState(3);
    return (
        <div className="flex flex-col gap-16">
            <div className="text-white text-4xl font-normal font-poppins w-full text-center">
                Social Media Posts
            </div>

            <div className="flex justify-evenly items-center w-11/12 mx-auto flex-wrap gap-5">
                {data.slice(0, visible).map((item, i) => (
                    <SocialMediaCard
                        date={item.date}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        key={i}
                    ></SocialMediaCard>
                ))}
            </div>

            <div className="mx-auto">
                <LightButton onClick={() => setVisible((prev) => prev + 6)}>
                    Load More
                </LightButton>
            </div>
        </div>
    );
};

export default SocialMediaPostContainer;
