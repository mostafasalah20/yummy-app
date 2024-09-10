"use client"

import { getIngredientsSlice } from '@/app/Redax/IngredientsSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Loding from '../_Loding/Loding';

export default function Ingredients() {
    let product = useSelector((state) => state.ingredient)
    // console.log(product);


    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getIngredientsSlice())
    }, [dispatch])

    return <>
        {product.isLoading ? <Loding /> : <div className="container mx-auto mt-20">
            <div className="flex flex-wrap">
                {product.product?.map((pro) => <div key={pro.idIngredient} className="w-full md:w-1/4 text-center p-5">
                    <Link href={`/IngredientDitils/` + pro.strIngredient}>
                        <div className="text-white">
                            <FontAwesomeIcon icon={faDrumstickBite} size="4x" />
                        </div>
                        <div>
                            <h2 className="text-white text-3xl font-medium">{pro.strIngredient}</h2>
                            <p className='text-white text-center'>{pro?.strDescription?.split(' ').slice(0, 30).join(' ')}</p>
                        </div>
                    </Link>
                </div>)}

            </div>
        </div>}




    </>
}
