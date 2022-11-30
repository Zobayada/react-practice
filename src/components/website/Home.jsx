import React from 'react'
import Common from './Common'
import web from "../images/web.svg";

const Home = () => {
    return (
        <>
            <Common h1="Grow Your Business With "
                visit="/service"
                img={web}
                btn="Get Started" />
        </>
    )
}

export default Home
