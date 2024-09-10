'use client'

import { getCategories } from '@/app/Redax/categoriesSlice';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loding from '../_Loding/Loding';
import Image from 'next/image';


export default function Categorie() {

    let { CategoriesSlice } = useSelector((state) => state)
    // console.log(CategoriesSlice.product);

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    return <>
        {CategoriesSlice.isLoading ? <Loding /> : <div className="container mx-auto mt-20">
            <div className="flex flex-wrap">
                {CategoriesSlice?.product.map((pro) => <div key={pro.idCategory} className="md:w-1/4 w-full flex justify-center items-center">
                    <Link href={`/CategoriDetails/` + pro.strCategory}>
                        <div className='homeProduct my-10 px-2'>
                            <Image width={500} height={500} className='img ' src={pro.strCategoryThumb} alt="" />
                            <div className='textTitle px-2'>
                                <h2 className='text-2xl font-semibold'>{pro.strCategory}</h2>
                                <p className=''>{pro.strCategoryDescription}</p>
                            </div>
                        </div>
                    </Link>
                </div>)}

            </div>
        </div>}






    </>
}
