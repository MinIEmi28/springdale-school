import React from "react";
import "./details.css";

const Details = ({ icons, headings, paragraphs }) => {
    return (
        <div className="details-container">
            <div className="d-flex" style={{ maxWidth: "70%" }}>
                {icons.map((iconClass, index) => (
                    <div className="p-4 detail-item" key={index}>
                        <div className="icon">
                        <i className={`icon ${iconClass}`}></i>
                        </div>
                        <div className="heading">{headings[index]}</div>
                        <p>{paragraphs[index]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Details;
