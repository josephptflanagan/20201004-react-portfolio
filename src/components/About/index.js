import React from 'react';
//import coverImage from "../../assets/cover/cover-image.jpg";
import profilePicture from "../../assets/img/profile/profilePicture.jpg"

function About() {
    return (
        
        <section className="about">
            <div>
                <h1 id="about">Who am I?</h1>
                {/*<img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />*/}
                <img class="profile-picture" src={profilePicture} alt="Joseph Flanagan" />
            </div>
            <div class="bio">
                <p>
                    I've been working at Niece Equipment as Design Engineer for nearly 6 years, ever since earning a BS in Engineering Technology with a Mechanical Specialization
                    graduating Magna Cum Laude from Texas State in August 2014.
                </p>
                <br />
                <p>
                    In that line of work I designed water, fuel, and fuel and lube units to customer specifications that have sold for hundreds of thousands of dollars and shipped
                    across the United States, Mexico, and Mali. The benefit of
                    working for a smaller company is that I've had a wide range of responsibilities.
                </p>
                <br />
                <p>
                    I am currently attending a University of Texas Coding Bootcamp, to be concluded in December 2020. Since starting this course I've become familiar with Git, HTML,
                    CSS, JavaScript, AJAX, jQuery, MySQL, MongoDB, Express.js, React, Node.js, HandleBars.js, Object Oriented Programing (OOP), Test Driven Development(TDD),
                    Object-Relational Mapping(ORM), Model-View-Controller(MVC), RegEx, and Progressive Web Applications (PWA).
                </p>
            </div>
        </section>
    );
}

export default About;