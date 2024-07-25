import React from 'react';
import Banner from './sub-components/Banner-components/Banner';
import Introduction from './sub-components/Home-components/Introduction';
import Details from './sub-components/Home-components/Details';

const Home = () => {
    const welcomeMessage ="WELCOME TO SPRINGDALE ACADEMY"
    const icons = [
        "fa-regular fa-comments",
        "fa-regular fa-file-lines",
        "fa-solid fa-map-location-dot"
    ];
    const headings = ['ENGAGED FACULTY', 'QUALITY PROGRAMMING', 'COMMITMENT TO YOUR SUCCESS'];
    const paragraphs = [
        'Our teachers are focused on the success of our students. We know what it is like to need support to reach our academic goals.We tailor your experience to you, ensuring you get the most of our time and attention.',
        'We take your future seriously. Our programming is based on leading methods for the best learning outcomes. Take in a class and see what we mean.',
        'We are commited to your long term success.We stay connected through your career to be sure you are as successful as you would like to be.'
    ];

    return (
        <div >
            <Banner welcomeMessage={welcomeMessage}/>
            <Introduction videoUrl={"https://d3id26kdqbehod.cloudfront.net/LEX-SPE/2021/08/17/DNR3NkKXXohSpTW23sO7qXhVfWduK4UWSdiD6IyckkieeEXyEdV2gnznmMJS/5+Brantly+Video-480p.mp4"}/>
            <Details icons={icons} headings={headings} paragraphs={paragraphs} />
        </div>
    );
};

export default Home;
