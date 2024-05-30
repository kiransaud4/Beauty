import React, { useEffect, useState } from 'react'
import CatData, { ProductData } from '../Data/Data';
import SliderData from '../Component/SliderData';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart } from '../Component/CartSlice';

export default function Home() {
  let [data,setdata]=useState([])
  const cart = useSelector((state) => state.cart.ProductData)
  const dispatch = useDispatch()
  return (
    <>
      <SliderData />
      <div className="container">
        <h2 className='my-4'>Product Lists:</h2>
        <div className="row ">
          {ProductData.map((pp) => (
            < div className="col-lg-4 my-3 p-2 " >
              <div className="shadow border text-center py-2" key={pp.id} >
                <img src={pp.thumbnail} alt="" className="w-100" />
                <h5 className='my-2'>{pp.title}</h5>
                <p className='f'>{pp.description}</p>
                <button className='btn btn-primary px-4 mx-5'>{pp.price}$</button>
                <button className='btn btn-warning' onClick={()=>dispatch(add_to_cart(pp))}> Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div >
    </>
  )
}
