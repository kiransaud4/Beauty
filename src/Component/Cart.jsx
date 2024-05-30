import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_to_cart, remove_from_cart } from './CartSlice'
import { Link } from 'react-router-dom'

function Cart() {
  const cart = useSelector((state) => state.cart)
  // const quantity =useSelector((state)=>state.cart.quantity)
  // const k =useSelector((state)=>state.cart)

  // console.log('okay!!',cart)
  const dispatch = useDispatch()
  return (
    <div className='container py-3 mx-auto'>
      <h2>Cart</h2>

      <table className=' border shodow '>


        {/* {JSON.stringify(k)} */}
        <tr className='border fw-bold'>
          <td className='border p-5'>Id</td>
          <td className='border p-5' >name</td>
          <td className='border p-5'>Price</td>
          {/* <td className='border p-5'>Image</td> */}
          <td className='border p-5'>Quality</td>
          <td className='border p-5'>Action</td>
        </tr>
        {cart.cartItems.map((a) => (
          <tr className='my-4 ' key={a.id}>
            <td className='border p-5'>{a.id}</td>
            <td className='border p-5'>{a.title}</td>
            <td className='border p-5'>{a.price}</td>
            {/* <td className='border p-5'>{a.thumbnail}</td> */}
            <td className='border p-5'>{a.quantity}</td>
            <td className='border p-5'><button className='btn btn-danger mx-3' onClick={() => dispatch(remove_from_cart(a))}>Remove</button></td>
          </tr>
        ))}
        <div className='d-flex justify-content-between'>
              <h2 className='p-5'>Total Amount: {cart.totalAmount}</h2>
              <button className='btn btn-secondary'>Checkout</button>
        </div>
      </table>
    </div >
  )
}
export default Cart