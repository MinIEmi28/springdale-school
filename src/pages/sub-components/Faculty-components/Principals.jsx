import React, { useState, useEffect } from 'react';
import "./principals.css";

const Principals = ({principal,vicePrincipal}) =>{
    
    const [selectedImage, setSelectedImage] = useState(principal);
    const [selectedDetail, setSelectedDetail] = useState('detail1');

    const handleDetailClick = (imageSrc, detailId) => {
        setSelectedImage(imageSrc);
        setSelectedDetail(detailId);
    };

    // Default selection on component mount
    useEffect(() => {
        handleDetailClick(principal, vicePrincipal, 'detail1');
    }, [principal]);

    return(
        <div className=' py-5 bg-light'>
            <div className="p-2">
                <p className="sec-heading">OUR GUIDES</p>
            </div>
            <div className="p-2">
                <h3>WE BELIEVE IN YOU </h3>
            </div>
            <div className="changeable card" style={{ maxWidth: '98%' }}>
                <div className="d-flex">
                    <div className="image-section">
                        <img id="displayed-image" src={selectedImage} alt="Displayed" />
                    </div>
                    <div className="details-section ">
                        <div
                            className={`detail my-auto flex-fill ${selectedDetail === 'detail1' ? 'selected' : ''}`}
                            onClick={() => handleDetailClick(principal, 'detail1')}
                        >
                            <h5>John Doe</h5>
                            <p>Principal, M.Ed, 20 years of experience in educational administration</p>
                        </div>
                        <div
                            className={`detail my-auto flex-fill ${selectedDetail === 'detail2' ? 'selected' : ''}`}
                            onClick={() => handleDetailClick(vicePrincipal, 'detail2')}
                        >
                            <h5>Jane Smith</h5>
                            <p>Vice Principal, M.Sc. in Physics, 15 years of teaching experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Principals;
