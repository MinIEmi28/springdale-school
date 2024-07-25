import React from 'react';
import HomeBanner from './sub-components/Home-components/HomeBanner';
import image from "./sub-components/Home-components/banners/contact-us-banner.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
    return (
        <div>
            <HomeBanner 
                heading={"CONTACT US"} 
                para={"Please contact us with any enquiries or queries!"} 
                image={image}
            />
            <div className=" my-4">
                <div className="row">

                
                <div className="d-flex flex-column col-md-6">
                    <div className="my-4" >
                        <div className="bg-light p-4 rounded shadow-sm">
                            <h2 className="mb-4">Contact Information</h2>
                            <p><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
                            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                            <p><strong>Email:</strong> <a href="mailto:info@springdale.edu">info@springdale.edu</a></p>
                        </div>
                    </div>
                    <div className="bg-light my-4">
                        <div className=" p-4 rounded shadow-sm">
                            <h2 className="mb-4">Contact Form</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input type="text" id="name" className="form-control" name="name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" id="email" className="form-control" name="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message:</label>
                                    <textarea id="message" className="form-control" name="message" rows="4" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-success p-3" style={{width : "100%"}}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                        <div className="bg-light p-4 rounded shadow-sm my-4"  style={{height:"94%"}}>
                            <h2 className="my-4">Find Us on Google Maps</h2>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103039.63791126575!2d-94.24508359773687!3d36.19115702578601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c96b7d3c0ee395%3A0x20f839ffa115f8ca!2sOrchard%20Children&#39;s%20Academy!5e0!3m2!1sen!2sin!4v1721901000914!5m2!1sen!2sin" 
                                width="100%" 
                                height="450" 
                                style={{ border: '0' }}  
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps Location"
                            ></iframe>
                        </div>
                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
