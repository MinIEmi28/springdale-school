import React from "react";
import "./homebanner.css";

const HomeBanner = ({heading,para,image}) => {
    return(
        <div className=" banner-container p-0">
            <div className="banner-image"  style={{ backgroundImage: `url(${image})` }}>
                
            </div>
            <div className="overlay">
                <div className="banner-overlay">
                    <h3>{heading}</h3>
                    <p style={{color: "white"}}>{para}</p>
                </div>
            </div>
        </div>
    );
}

export default HomeBanner;