import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa";



export default function Header() {
   
    const cart=useSelector((state)=>state.cart)

  return (
    <>
        <header className='sticky-top'>
                <div className="container">
                    <div className="row align-items-center py-3">
                        <div className="col-lg-2">
                            <Link to='/'> <span className='text-warning'>ON </span>LINE SHOPING
                            </Link>
                        </div>
                        <div className="col-lg-6 ">
                            <form>
                                <input type="text" placeholder='Search-Products..' className='search p-2 rounded' />
                            </form>
                        </div>
                        <div className="col-lg-2  c">
                            <div className="d-flex gap-5 text-white align-items-center">
                            <button type="button" class="btn btn-secondary px-3">LogIn</button>
                            <p className='my-2 fw-bold  '> Sign Up</p>
                            </div>
                        </div>
                        <div className="col-lg-2 cart ms-auto ">
                        <Link to='/cart' > <FaCartArrowDown /><span className=' Quantity'>{cart. quantity}</span> </Link> 
                        </div>
                    </div>
            </div>
        </header>
    </>
  )
}
