import React from 'react';
import './navbar.css'

const Navbar = () =>{
    return (
    <div className = "navbar">
       <div className = "navlogo">
          <h1>EDYODA</h1>     
          <h3><i>Stories</i></h3>
       </div>
       
       <div className="dropdown">
          <div className="dropEle">
            Explore Categories <span className="fa-solid fa-caret-down"></span>
          </div>
        </div>   
        <div className='headerLink'>
         <div className='linkBox'>
            <p>Go To Main Website</p>
         </div>
         </div>   
    </div>
    );
}
export default Navbar;