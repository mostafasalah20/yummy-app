'use client'


import { getAreaSlice } from '@/app/Redax/AreaSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseLaptop } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Loding from '../_Loding/Loding';



export default function Area() {


    let product = useSelector((state) => state.getArea)
    console.log(product);

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAreaSlice())
    }, [dispatch])


    return <>
        {product.isLoading ? <Loding /> : <div className="container mx-auto text-center mt-20">
            <div className="flex flex-wrap">
                {product.product?.map((pro, index) => <div key={index} className='w-full md:w-1/4 text-white my-5'>
                    <Link href={`/AreaDetails/` + pro.strArea}>
                        <div>
                            <FontAwesomeIcon icon={faHouseLaptop} size="4x" className="text-white" />
                        </div>

                        <h2 className='text-2xl font-medium'>{pro.strArea}</h2>
                    </Link>
                </div>)}
            </div>
        </div >}

    </>
}
