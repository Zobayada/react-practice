import React from 'react'
import Common from './Common'
import web from "../images/web2.svg";

const About = () => {
    return (
        <>
            <Common h1=" Welcome To My About Page "
                visit="/contact"
                img={web}
                btn="Work With Me" />
        </>
    )
}

export default About
