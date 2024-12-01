import React, { useEffect, useState} from 'react';
import "./Navbar.scss"

const Navbar = () => {

  const [active, setActive] = useState(false);

  const isActive = ()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(()=>{
    window.addEventListener("scroll", isActive);

    return ()=>{
      window.removeEventListener("scroll", isActive);  
    };
  }, []);

  const currentUser= {
    id:1,
    username:"John Doe",
    isSeller:true
  }

  return (
    <div className={active ? "navbar active" :"navbar"}>
     <div className="container">
        <div className="logo">
            <span className='text'> FoodyEco</span>
            <span className='dot'>.</span>
        </div>
        <div className="links">
            <span>Business Pro</span>
            <span>Explore</span>
            <span>English</span>
            {!currentUser?.isSeller && <span>Become a Seller</span>}
            <span>Sign in</span>
            {!currentUser && <button>Sign Up</button>}
            {currentUser && (
              <div className="user">
                <img src="" alt="" />
                <span>{currentUser?.username}</span>
                <div className="options">
                  {
                    currentUser?.isSeller && (
                      <>
                      <span>Gigs</span>
                      <span>Add New Gig</span>
                      </>
                    )}
                </div>
              </div>
            )}
            <span>Orders</span>
            <span>Messages</span>
            <span>Logout</span>
        </div>
     </div>
      {active && (
       <>
         <hr />
         <div className="menu">
           <span>Test</span>
           <span>Test</span>
           <span>Test</span>
           <span>Test</span>
         </div>
       </>
      )}
     </div>
  );
};

export default Navbar;