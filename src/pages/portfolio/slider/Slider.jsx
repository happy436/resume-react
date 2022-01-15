import React from 'react'
import { Item } from './Item'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Slider.scss"

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export const Slider = (props) => {

    const data = props.data

    const ItemElement = data.map(item => {
        return (
            <SwiperSlide key={item.title}>
                <Item
                    language={props.language}
                    modules={[Pagination]}
                    title={item.title}
                    img={item.img}
                    description={item.description}
                    link={item.link}
                />
            </SwiperSlide>)
    })

    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            pagination={{
                "dynamicBullets": true,
                "clickable": true,
            }}
            className="mySwiper"
            slidesPerView={1}
            onSlideChange={() => { }}
            onSwiper={(swiper) => { }}
        >
            {ItemElement}
        </Swiper>
    )
}
