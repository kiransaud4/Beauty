import React, { useState } from 'react'
import CatData, { ProductData } from '../Data/Data'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { add_to_cart } from '../Component/CartSlice'



export default function Categories() {
  
  let [data,setdata]=useState([])
  const cart = useSelector((state) => state.cart.ProductData)
  const dispatch = useDispatch()
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ul class="list-group shadow my-3 ">
              <li class="list-group-item active" aria-current="true">Categories</li>
              {CatData.map((a) => (
                <li class="list-group-item Uppercase" key={a}><Link to={`/Categories/${a}`}>{a}</Link></li>
              ))}
            </ul>
          </div>
          <div className="col-lg-9 my-3">
            <div className="row">
            {ProductData.map((pp) => (
              < div className="col-lg-6 " >
                <div className="shadow border text-center  ">
                  <img src={pp.thumbnail} alt="" className="w-100" />
                  <h5 className='my-2'> {pp.title}</h5>
                  <p className='f'>{pp.description}</p>
                  <button className='btn btn-primary px-4 mx-5 my-3'>{pp.price}$</button>
                  <button className='btn btn-warning' onClick={()=>dispatch(add_to_cart(pp))} >Add To Cart</button>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>

    </>
  )
}
