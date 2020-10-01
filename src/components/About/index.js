import React from 'react';
//import coverImage from "../../assets/cover/cover-image.jpg";
import profilePicture from "../../assets/img/profile/profilePicture.jpg"

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={profilePicture} alt="Joseph Flanagan"/>
            {/*<img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />*/}
        </section>
    );
}

export default About;