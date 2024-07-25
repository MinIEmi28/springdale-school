import React, { useState, useEffect } from 'react';
import HomeBanner from "./sub-components/Home-components/HomeBanner.jsx";
import imageFaculty from "./sub-components/Home-components/banners/banner3.png"
import Principals from "./sub-components/Faculty-components/Principals.jsx";
import principal from "./sub-components/Faculty-components/images/principal.png"
import vicePrincipal from "./sub-components/Faculty-components/images/vicePrincipal.png"
import Teachers from './sub-components/Faculty-components/Teachers.jsx';

import image from "./sub-components/Home-components/banners/banner2.png";

import teacher1 from "./sub-components/Faculty-components/images/teacher1.png";
import teacher2 from "./sub-components/Faculty-components/images/teacher2.png";
import teacher3 from "./sub-components/Faculty-components/images/teacher3.png";
import teacher4 from "./sub-components/Faculty-components/images/teacher4.png";
import teacher5 from "./sub-components/Faculty-components/images/teacher5.png";
import teacher6 from "./sub-components/Faculty-components/images/teacher6.png";
import teacher7 from "./sub-components/Faculty-components/images/teacher7.png";
import teacher8 from "./sub-components/Faculty-components/images/teacher8.png";
import teacher9 from "./sub-components/Faculty-components/images/teacher9.png";
import teacher10 from "./sub-components/Faculty-components/images/teacher10.png";

const Faculty = () => {
    const teacherData = [
        { name: 'Mrs. Smith', message: 'Hello, welcome to our school!' },
        { name: 'Mr. Johnson', message: 'Hello, welcome to our school!' },
        { name: 'Ms. Lee', message: 'Hello, welcome to our school!' },
        { name: 'Mr. Brown', message: 'Hello, welcome to our school!' },
        { name: 'Mrs. Wilson', message: 'Hello, welcome to our school!' },
        { name: 'Mr. Garcia', message: 'Hello, welcome to our school!' },
        { name: 'Ms. Martinez', message: 'Hello, welcome to our school!' },
        { name: 'Mr. Davis', message: 'Hello, welcome to our school!' },
        { name: 'Mrs. Rodriguez', message: 'Hello, welcome to our school!' },
        { name: 'Ms. Lewis', message: 'Hello, welcome to our school!' }
    ];
    const imageList = [
        teacher1,
        teacher2,
        teacher3,
        teacher4,
        teacher5,
        teacher6,
        teacher7,
        teacher8,
        teacher9,
        teacher10
    ];
    return (
        <div>
            <HomeBanner heading={"Faculty"} para={"Meet our dedicated faculty, committed to inspiring and guiding students through their academic journey at Springdale Academy"} image={imageFaculty}/>
            <Principals principal={principal} vicePrincipal={vicePrincipal}            />
            <Teachers data={teacherData} imageList={imageList}/>
        </div>
    );
};

export default Faculty;
