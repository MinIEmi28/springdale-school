import HomeBanner from './sub-components/Home-components/HomeBanner';
import Details from './sub-components/Home-components/Details';
import image from"./sub-components/Home-components/banners/admission-banner.png";
import { AdmissionFormContext } from '../context/AdmissionFormContext';
import React, { useContext } from 'react';


const Admissions = () => {
    const icons = [
        "fa-regular fa-comments",
        "fa-regular fa-file-lines",
        "fa-solid fa-map-location-dot",
        "fa-solid fa-square-poll-horizontal"
    ];
    const headings = ['Admission Form Availability', 'Last Date for Submission', 'Entrance Test','Announcement of Results'];
    const paragraphs = ['March 1st',  'March 31st' ,'April 15th', ' April 30th'];
    const { formData, handleInputChange, submitForm } = useContext(AdmissionFormContext);

    return (
        <div>
            <HomeBanner heading={"Admissions"} para={"Admission forms are available for download. Submit the completed form along with required documents at the school office"} image={image}/>
            <div className="bg-light py-4" >
            <h2 className=" mb-2">Process</h2>
            <p className="pb-2"  >
                Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
            </p>
            </div>
            <div className="m-5">
                <h2 className="mb-4">Admission Form</h2>
                <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <textarea
                            className="form-control"
                            id="address"
                            name="address"
                            rows="3"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="grade" className="form-label">Grade Applying For</label>
                        <select
                            className="form-select"
                            id="grade"
                            name="grade"
                            value={formData.grade}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Grade</option>
                            <option value="1">Grade 1</option>
                            <option value="2">Grade 2</option>
                            <option value="3">Grade 3</option>
                            <option value="4">Grade 4</option>
                            <option value="5">Grade 5</option>
                            <option value="6">Grade 6</option>
                            <option value="7">Grade 7</option>
                            <option value="8">Grade 8</option>
                            <option value="9">Grade 9</option>
                            <option value="10">Grade 10</option>
                            <option value="11">Grade 11</option>
                            <option value="12">Grade 12</option>


                        </select>
                    </div>
                    <button type="submit" className="btn btn-warning p-4" style={{width: "100%"}}>Submit</button>
                </form>
            
            </div>
            <h2 className='pt-5 pb-5 bg-dark'  style={{color:"white"}}> Important Dates</h2>
            <Details icons={icons} headings={headings} paragraphs={paragraphs} />

         
            

        </div>
    );
};

export default Admissions;
