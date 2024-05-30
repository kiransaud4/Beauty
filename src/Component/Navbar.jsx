import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'
import Categories from '../Pages/Categories'
import Cat from '../Pages/Cat'
import Details from '../Pages/Details'
 import SearchItem from '../Component/SearchItem'
import Cart from '../Component/Cart' 
export default function Navbar() {
  return (
    <>
   <nav className="navbar navbar-expand-lg">
  <div className="container ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent ">
      <ul className="navbar-nav  mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/categories' >Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to='services'>Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact" >Contact us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/categories" element={<Categories/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/contact" element={<Contact us/>}/>
  <Route path="/categories/:aa" element={<Cat/>}/>
  <Route path="/Details/:id" element={<Details/>}/>
  <Route path="/search/:term" element={<SearchItem/>}/>
  <Route path='/cart'element={<Cart/>}/>


</Routes>
    </>
  )
}
