// src/context/AdmissionFormContext.js
import React, { createContext, useState } from 'react';

export const AdmissionFormContext = createContext();

export const AdmissionFormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        grade: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submitForm = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form Submitted:', formData);
    };

    return (
        <AdmissionFormContext.Provider value={{ formData, handleInputChange, submitForm }}>
            {children}
        </AdmissionFormContext.Provider>
    );
};
