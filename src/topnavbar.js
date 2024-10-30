import React from "react";
import './tobnavbar.css'; // Make sure the path is correct

const Topbar = () => {
   return (
      <div className="curved-navbar">
         {/* Brand or Logo */}
         <div className="navbar-brand">
            
         </div>

         {/* Navigation Links */}
         <div className="nav-links">
            <div className="nav-item about-us">About Us</div>
            <div className="nav-item blogs">Blogs</div>
            <div className="nav-item courses">Courses</div>
         </div>

         {/* Sign In Button */}
         <button className="signin-btn">Sign In</button>
      </div>
   );
};

export default Topbar;
