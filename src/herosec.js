import React from "react";
import bgLines from "./bglines.png"; // Import the background image
import heroimg from "./heroimage.png"; // Import the hero image

const HeroSection = () => {
    const myStyle = {
        height: "100vh", // Full viewport height
        marginTop: "-4.375rem", // Equivalent to -70px
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        opacity: "60%",
    };

    const heroStyl = {
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <>
            <div style={myStyle}>
                <img src={bgLines} alt="Background Lines" />
            </div>

            
        </>
    );
};

export default HeroSection;
