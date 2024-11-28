import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
     <div className="container">
        <div className="logo">
            <span className='text'> FoodyEco</span>
            <span className='dot'>.</span>
        </div>
        <div className="links">
            <span>Business Pro</span>
            <span>Explore</span>
            <span>English</span>
            <span>Become a Seller</span>
            <span>Sign in</span>
            <button>Sign Up</button>
        </div>
     </div>
     <hr />
     <div className="menu">
      <span>Test</span>
      <span>Test</span>
      <span>Test</span>
      <span>Test</span>
     </div>
    </div>
  );
};

export default Navbar;