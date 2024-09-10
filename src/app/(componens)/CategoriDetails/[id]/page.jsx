'use client'
import { getDitilsCategories } from '@/app/Redax/detailsCategry'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loding from '../../_Loding/Loding'
import Image from 'next/image';


export default function CategoriDetails({ params }) {

  let product = useSelector((state) => state.detailsCatogryReducer)
  // console.log(product);

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDitilsCategories(params.id))
  }, [dispatch,params.id])


  return <>
    {product.isLoading ? <Loding /> : <div className="container mx-auto mt-20">
      <div className='flex flex-wrap'>
        {product.product?.map((pro) => <div key={pro.idMeal} className="w-full md:w-1/5 p-4">
          <Link href={'/DetailsProduct/' + pro.idMeal} >
            <div className="homeProduct">
              <Image width={500} height={500} src={pro.strMealThumb} alt={pro.strMeal} className="w-full img" />
              <div className="textTitle flex justify-center items-center">
                <h3 className="text-2xl font-semibold">{pro.strMeal}</h3>
              </div>
            </div>

          </Link>
        </div>)}
      </div>
    </div>}

  </>
}
