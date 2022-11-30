import { queryByDisplayValue } from '@testing-library/react';
import React from 'react';
import Card from './Card';
import Sdata from "./Sdata";

const Service = () => {
    return (
        <>
            <section id='service' className='my-5'>
                <div className="container-fluid">
                    <div className="my-5">
                        <h2 className="text-center">Our Services</h2>
                    </div>
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                {
                                    Sdata.map((value, index) => {
                                        return <Card
                                            key={index}
                                            img={value.img}
                                            title={value.title}
                                        />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service;
