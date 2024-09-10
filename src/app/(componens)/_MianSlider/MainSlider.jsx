"use client"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';


import React, { useEffect } from 'react'
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '@/app/Redax/categoriesSlice';


export default function MainSlider() {

    let { product } = useSelector((state) => state.CategoriesSlice)
   

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    };

    var setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    };


    return <>

        <div className='md:block hidden'>

            <Slider {...settings}>

                {product.map((pro) => <div className='text-center mt-2 ' key={pro.idCategory}>
                    <Image width={500} height={500} src={pro.strCategoryThumb}  className='text-white' alt="Slide 1" />
                    <h2 className='text-white'>{pro.strCategory}</h2>
                </div>)}


            </Slider>
        </div>

        <div className='block md:hidden'>

            <Slider {...setting}>

                {product.map((pro) => <div className='text-center mt-2 ' key={pro.idCategory}>
                    <Image width={500} height={500} src={pro.strCategoryThumb} className='text-white' alt="Slide 1" />
                    <h2 className='text-white'>{pro.strCategory}</h2>
                </div>)}


            </Slider>
        </div>

    </>
}

