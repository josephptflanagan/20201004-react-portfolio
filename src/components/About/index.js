import React from 'react';
import profilePicture from "../../assets/img/profile/profilePicture.jpg";
import htmlLogo from "../../assets/icons/HTML5_Logo.svg";
import cssLogo from "../../assets/icons/CSS3_Logo.svg";
import jsLogo from "../../assets/icons/JavaScript_Logo.svg";
import mongoLogo from "../../assets/icons/MongoDB_Logo.svg";
import expressLogo from "../../assets/icons/expressjs_Logo.svg";
import reactLogo from "../../assets/icons/React-icon.svg";
import nodeLogo from "../../assets/icons/Node.js_logo.svg";
import s3Logo from "../../assets/icons/aws-S3.svg";
import cloudfrontLogo from "../../assets/icons/aws-cloudfront.svg";
import cognitoLogo from "../../assets/icons/aws-cognito.svg";

function About() {
    return (
        
        <section className="about">
            <div>
                <h1 id="about">About me</h1>
                {/*<img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />*/}
                <img className="profile-picture" src={profilePicture} alt="Joseph Flanagan" />
            </div>
            <div className="bio">
                <p>
                    I've been working at Niece Equipment as Design Engineer for 6 years, ever since earning a BS in Engineering Technology with a Mechanical Specialization
                    graduating Magna Cum Laude from Texas State in August 2014.
                </p>
                <br />
                <p>
                    In that line of work I designed water, fuel, and fuel and lube units to customer specifications that have sold for hundreds of thousands of dollars and shipped
                    across the United States, Mexico, and Mali. The benefit of
                    working for a smaller company is that I've had a wide range of responsibilities, and have worn many hats.
                </p>
                <br />
                <p>
                    I recently completed a six month University of Texas Coding Bootcamp. This course introduced me to Git, HTML,
                    CSS, JavaScript, AJAX, jQuery, MySQL, MongoDB, Express.js, React, Node.js, HandleBars.js, Object Oriented Programing (OOP), Test Driven Development(TDD),
                    Object-Relational Mapping(ORM), Model-View-Controller(MVC), RegEx, Progressive Web Applications (PWA), and Amazon Web Services (specifically S3, Cognito, IAM, and Cloudfront).
                </p>
                <div>
                    <img src={htmlLogo} alt="html5" height="64" className="logo"/>
                    <img src={cssLogo} alt="css3" height="64" className="logo"/>
                    <img src={jsLogo} alt="js" height="64" className="logo"/>
                    <img src={mongoLogo} alt="mongoDB" height="64" className="logo"/>
                    <img src={expressLogo} alt="express.js" height="64" className="logo"/>
                    <img src={reactLogo} alt="react" height="64" className="logo"/>
                    <img src={nodeLogo} alt="node.js" height="64" className="logo"/>
                    <img src={s3Logo} alt="aws s3" height="64" className="logo"/>
                    <img src={cloudfrontLogo} alt="aws cloudfront" height="64" className="logo"/>
                    <img src={cognitoLogo} alt="aws cognito" height="64" className="logo"/>
                </div>
            </div>
        </section>
    );
}

export default About;