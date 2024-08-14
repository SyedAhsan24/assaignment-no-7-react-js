import React from 'react'
import navimage from "./src/Images/nav1.1.png"



const Navbar = () => {
  return (
<>
<ul className='navbar'>
    <img src={navimage} alt="" />
    <div className="nav">
    <p className='home'>Home</p>
    <p className='product'>All Products</p>
    <p className='About'>About Us</p>
    </div>
    <div className="right"></div>
</ul>

</>
  )
}

export default Navbar
