"use client"
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Banner1 from '../../../public/image/banner/banner1.png'
import Banner2 from '../../../public/image/banner/banner2.png'
import Banner3 from '../../../public/image/banner/banner3.png'
import Image from 'next/image';

function Banner() {
  return (
      <Carousel
          className='carousel autoplay infinite-loop interval-3000'>
                <div className='py-5 carousel-item'>
                    <Image className='rounded-md' src={Banner1} />
                    <p className="legend">Shop Now</p>
                </div>
                <div className='py-5 carousel-item'>
                    <Image className='rounded-md' src={Banner2} />
                    <p className="legend">Your Online Shop</p>
                </div>
                <div className='py-5 carousel-item'>
                 <Image className='rounded-md' src={Banner3} />
                    <p className="legend">Online Shopping</p>
                </div>
            </Carousel>
  )
}

export default Banner