import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section id='header' className='d-flex align-items-center'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                    <h1>{props.h1} <strong className='brand-name'>AfnanTech</strong></h1>
                                    <h2 className='my-3'>Work With Professional Developers</h2>
                                    <div className="mt-4">
                                        <NavLink to={props.visit} className='btn-get'>{props.btn}</NavLink>
                                    </div>
                                </div>
                                <div className="col-md-6 order-1 order-lg-2">
                                    <img src={props.img} alt="Common img" className='img-fluid animated-img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common
