import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductData } from '../Data/Data'
import { useDispatch, useSelector } from 'react-redux'
import { add_to_cart } from '../Component/CartSlice'
export default function Cat() {
    let {aa}=useParams()
    let ee=ProductData.filter((a)=>a.category==aa)

    let [data,setdata]=useState([])
    const cart = useSelector((state) => state.cart.ProductData)
    const dispatch = useDispatch()
  return (
    <>
    <div className="container">
     <h4 className='mt-3'>Category {aa}</h4>
     <div className="row ">
          {ee.map((a)=>(
            < div className = "col-lg-4 my-3 p-2 " >
              <div className="shadow border text-center py-2 ">
        <img src={a.thumbnail} alt="" className="w-100"/>
        <h5 className='my-2'> <Link to={`/Details/${a.id}`}> {a.title} </Link> </h5>
        <p>{a.description}</p>
        <button className='btn btn-primary px-4 mx-5'>{a.price}₹</button>
        <button className='btn btn-warning' onClick={()=>dispatch(add_to_cart(a))}>Add To Cart</button>
      </div>
      </div>
     ) )}
      </div>
    </div></>
  )
}
