import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductData } from '../Data/Data'
import { add_to_cart } from '../Component/CartSlice'
import { useDispatch ,useSelector} from 'react-redux'


export default function Details() {
    let {id}=useParams()
    let bb=ProductData.find((a)=>a.id==id)


    let [data,setdata]=useState([])
    const cart = useSelector((state) => state.cart.ProductData)
    const dispatch = useDispatch()
  return (
    <>
    <div className="container">
        <div className="row my-5">
            <div className="col-lg-4">
                <img src={bb.thumbnail} alt=""  className='w-100 detail-img'/>
            </div>
            <div className="col-lg-8">
                <h4 className='fw-bold'>{bb.title}</h4>
                <p>{bb.description}</p>
                <h5>Price:{bb.price}</h5>
                <h6>DicountPercentage-{bb.discountPercentage}</h6>
                <h4>Brand: {bb.brand}</h4>
                <button className='btn btn-warning mx-5' onClick={()=>dispatch(add_to_cart(a))}>Add To Cart</button>

            </div>
        </div>
    </div>
    </>
  )
}
