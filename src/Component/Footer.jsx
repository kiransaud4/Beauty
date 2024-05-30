import React from 'react'
import { FaYoutubeSquare } from "react-icons/fa";
import { BiLogoMessenger } from "react-icons/bi";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";





export default function Footer() {
  return (
    <>
    <footer className='footer'>
      <div className="container">
        <div className="row  text-light">
          <div className="col-lg-2 my-4 align-items-center">
            <h5 className='ps-4 fw-bold'>Shop</h5>
            <ul>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Delivery Information</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Brands</li>
            </ul>
          </div>
          <div className="col-lg-2 my-4 align-items-center">
            <h5 className='ps-4 fw-bold'>Account</h5>
            <ul>
              <li>Account</li>
              <li>Order History</li>
              <li>Wish List</li>
              <li>Newsletter</li>
              <li>Specials</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-lg-3 my-4 align-items-center">
            <div className="share">
          <h5 className='ps-4 fw-bold mb-3'>Share</h5>
          <a href="#"><FaYoutubeSquare /></a>
          <a href="#"><BiLogoMessenger /></a>
          <a href="#"><FaSquareInstagram /></a>
          <a href="#"><FaSquareTwitter /></a>
          </div>
          </div>
          <div className="col-lg-5 my-4">
            <div className='newsletter'>
              <h4 className='fw-bold'>Subscribe newsletter and get -20% off</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <form action="Post">
    <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email Address' />
</div>
        </form>

            </div>

          </div>
        </div>
      <hr className='text-light' />
      <p className='text-center text-light p-2'>Powered By OpenCart Grocery © 2024</p>
      </div>
    </footer>
    </>
  )
}
