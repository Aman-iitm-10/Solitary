import React from 'react';
import DropdwnBtn from './DropdwnBtn';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const eventType = [
    { type: 'eventType', option: 'All' },
    { type: 'eventType', option: 'Music' },
    { type: 'eventType', option: 'Sports' },
    { type: 'eventType', option: 'Tech' },
    { type: 'eventType', option: 'Art' },
    { type: 'eventType', option: 'Food' },
    { type: 'eventType', option: 'Fashion' },
    { type: 'eventType', option: 'Health' },
    { type: 'eventType', option: 'Science' },
    { type: 'eventType', option: 'Entrepreneurship' },
    { type: 'eventType', option: 'Business' },
    { type: 'eventType', option: 'Education' },
    { type: 'eventType', option: 'Travel' },
    { type: 'eventType', option: 'Film' },
    { type: 'eventType', option: 'Student Activities' },
    { type: 'eventType', option: 'Community' },
    { type: 'eventType', option: 'Other' },
];

const Dates = [
    { type: 'date', option: 'All' },
    { type: 'date', option: 'Today' },
    { type: 'date', option: 'Tomorrow' },
    { type: 'date', option: 'This Weekend' },
    { type: 'date', option: 'Next Week' },
    { type: 'date', option: 'This Month' },
    { type: 'date', option: 'Custom Date' },
];

const organizations = [
    { type: 'organization', option: 'All' },
    { type: 'organization', option: 'Shah Maat' },
    { type: 'organization', option: 'Cosmos' },
    { type: 'organization', option: 'Synapse' },
    { type: 'organization', option: 'Boundless' },
    { type: 'organization', option: 'Heighers eSports' },
    { type: 'organization', option: 'RaSoR' },
    { type: 'organization', option: 'Sahara' },
    { type: 'organization', option: 'Kavach' },
    { type: 'organization', option: 'sportify' },
    { type: 'organization', option: 'Aayam' },
    { type: 'organization', option: 'Adhyay' },
    { type: 'organization', option: 'Akord' },
    { type: 'organization', option: 'Elan' },
    { type: 'organization', option: 'JITSIE' },
    { type: 'organization', option: 'ERUDITE' },
    { type: 'organization', option: 'Other' },
];

function CardSlider({ title, dropdown, filteredEvents }) {
    return (
        <div className="flex-row w-11/12 mx-auto text-white">
            <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className=" font-poppins text-4xl font-normal w-full ">
                    {title}
                </div>

                <DropdwnBtn data={eventType}>Event Type</DropdwnBtn>
                <DropdwnBtn data={Dates}>Date</DropdwnBtn>
                <DropdwnBtn data={organizations}>Organization</DropdwnBtn>
            </div>
            {/* <div className='flex justify-evenly w-[100%] mt-28 items-center relative'>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <div className='absolute left-10 h-full'><CardSliderLeftButton></CardSliderLeftButton></div>
    <div className='absolute right-10'><CardSliderRightButton></CardSliderRightButton></div>    
  </div> */}
            <div className="mt-14 sm:mt-28">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    breakpoints={{
                        0: {
                            // width: 576,
                            slidesPerView: 1,
                            spaceBetween: 100,
                        },
                        430: {
                            // width: 576,
                            slidesPerView: 2,
                            spaceBetween: 100,
                        },
                        1024: {
                            // width: 768,
                            slidesPerView: 2,
                            spaceBetween: 140,
                        },
                        1280: {
                            // width: 576,
                            slidesPerView: 3,
                            spaceBetween: 160,
                        },
                        1536: {
                            // width: 576,
                            slidesPerView: 3,
                            spaceBetween: 200,
                        },
                    }}
                    // spaceBetween={160}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    // pagination={{ el: '.swiper-pagination', clickable: false }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container w-11/12 m-auto"
                >
                    {filteredEvents.map((item, i) => (
                        <SwiperSlide key={i}>
                            <Card data={item}></Card>
                            {/* <Card date={item.date} image={item.image} title={item.title} description={item.description}></Card> */}
                        </SwiperSlide>
                    ))}

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow text-slate-100">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow text-slate-100">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </div>
    );
}

export default CardSlider;
