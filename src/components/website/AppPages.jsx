import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Home from './Home';
import Navbar from './Navbar';
import Service from './Service';
import './AppPages.scss';
import Footer from './Footer';

const AppPages = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/service' element={<Service />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </>
    )
}

export default AppPages