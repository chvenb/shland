import React from "react";
import { Container, Navbar } from "react-bootstrap";
import bgreenlogo from './bgreenlogo.png'; // Import your full logo
import './tobnavbar.css'; // Ensure the file name matches

const Topbar = () => {
   return (
      <Navbar className="curved-navbar" expand="lg">
         <Container>
            <Navbar.Brand href="#" >
               <img
                  src={bgreenlogo}
                  width="104"
                  height="48"
                  className="d-inline-block align-top"
                  alt="Bgreen Logo"
               />
               
            </Navbar.Brand>
            {/* more components */}
         </Container>
      </Navbar>
   );
};

export default Topbar;
