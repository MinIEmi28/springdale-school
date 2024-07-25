// ContactFormContext.js
import React, { createContext, useState } from 'react';

export const ContactFormContext = createContext();

export const ContactFormProvider = ({ children }) => {
    const [formStatus, setFormStatus] = useState('');

    const submitForm = (status) => {
        setFormStatus(status);
    };

    return (
        <ContactFormContext.Provider value={{ formStatus, submitForm }}>
            {children}
        </ContactFormContext.Provider>
    );
};

