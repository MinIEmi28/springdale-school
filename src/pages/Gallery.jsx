import React from 'react';
import HomeBanner from './sub-components/Home-components/HomeBanner';
import Teachers from './sub-components/Faculty-components/Teachers';
import Introduction from './sub-components/Home-components/Introduction';

import image from "./sub-components/Gallery-components/images/gallery-banner.png";
import student1 from "./sub-components/Gallery-components/images/student1.png";
import student2 from "./sub-components/Gallery-components/images/student2.png";
import student3 from "./sub-components/Gallery-components/images/student3.png";
import student4 from "./sub-components/Gallery-components/images/student4.png";
import student5 from "./sub-components/Gallery-components/images/student5.png";
import student6 from "./sub-components/Gallery-components/images/student6.png";
import student7 from "./sub-components/Gallery-components/images/student7.png";
import student8 from "./sub-components/Gallery-components/images/student8.png";
import student9 from "./sub-components/Gallery-components/images/student9.png";
import student10 from "./sub-components/Gallery-components/images/student10.png";


const Gallery = () => {
    const studentData = [
        { name: 'Alice', message: 'I can’t believe I won! This is the best day ever!' },
        { name: 'Bob', message: 'All the hard work paid off! I’m so happy!' },
        { name: 'Charlie', message: 'Winning this competition is a dream come true!' },
        { name: 'David', message: 'I’m so proud of myself and my team!' },
        { name: 'Ella', message: 'This moment is unforgettable! I’m over the moon!' },
        { name: 'Frank', message: 'I’m ecstatic! This victory means a lot to me!' },
        { name: 'Grace', message: 'I’m thrilled to have won! Thanks to everyone who supported me!' },
        { name: 'Hannah', message: 'This achievement feels amazing! I’m so grateful!' },
        { name: 'Isaac', message: 'I’m on cloud nine! This is such a huge honor!' },
        { name: 'Jade', message: 'I’m so excited! Winning this is a fantastic feeling!' }
    ];    
    const studentImages = [
        student1,student2,student3,student4,student5,student6,student7,student8,student9,student10
    ];
    return (
        <div>
            <HomeBanner heading={"Gallery"} para={"The precious memories we shared with our family"} image={image}/>
            <Teachers data={studentData} imageList={studentImages}/>
            <Introduction videoUrl={"https://d3id26kdqbehod.cloudfront.net/LEX-SPE/2021/08/17/ZoPrCeLRi18LenoDGz0rMsyl1TESCm3a44Z7LtECynpu5Yob563081h3sgRU/2+Harman-480p.mp4"}/>
            <Introduction videoUrl={"https://d3id26kdqbehod.cloudfront.net/LEX-SPE/2021/08/17/fEtWTq8FAFt1gbyJvcafD8FaSwSQD6tQUgzxeuqH4V0vacJwcBxZEpfYzIm3/Wagar+Video-480p.mp4"}/>
        </div>
    );
};

export default Gallery;
