'use client'

import { getDetails } from '@/app/Redax/DitilesProductSlice';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loding from '../../_Loding/Loding';
import Image from 'next/image';

export default function DetailsProduct({ params }) {
    // console.log(params);

    let { details } = useSelector((state) => state)
    // console.log(details?.product?.map((item) => item.strArea));


    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetails(params.id))
    }, [dispatch,params.id])
    return <>
        {details.isLoading ? <Loding /> : <div className="container mx-auto mt-20">
            {details?.product?.map((item) => <div key={item.idMeal} className="flex flex-wrap">
                <div className="w-full md:w-1/4 mt-10">
                    <Image width={500} height={500} className='img' src={item.strMealThumb} alt="" />
                    <h3 className='text-white text-3xl font-bold mt-5 text-center'>{item.strMeal}</h3>
                </div>
                <div className="w-full md:w-3/4 mt-12 px-10">
                    <p className='text-white text-xl font-bold my-3'>Category: {item.strCategory}</p>
                    <p className='text-white  font-medium my-3'>Instructions: {item.strInstructions}</p>
                    <p className='text-white  text-xl font-bold my-3'>Area: {item.strArea}</p>
                    <div>
                        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><a href={item.strSource} target='_blank'>Source</a></button>

                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            <a target='_blank' href={item.strYoutube}>
                                Youtube
                            </a>
                        </button>
                    </div>
                </div>
            </div>)}
        </div>}



    </>
}