import React from 'react';
import "./img.css";
import Card from './Card';
import ImgData from "./ImgData";
import { useState } from 'react';

const Galery = () => {
    const [items, setItems] = useState(ImgData)
    const filterItem = (categoryItem) => {
        const updateItem = ImgData.filter((curElement) => {
            return curElement.category == categoryItem
        })
        setItems(updateItem);
    }
    return (
        <>
            <h1 className='mt-5 text-center'>Order Our Favourite Dish</h1>
            <hr />
            <div className="container">
                <div className="d-flex justify-content-around">
                    <button className='btn btn-warning' onClick={() => setItems(ImgData)}>All</button>
                    <button className='btn btn-warning' onClick={() => filterItem("breakfast")}>Breakfast</button>
                    <button className='btn btn-warning' onClick={() => filterItem("lunch")}>Lunch</button>
                    <button className='btn btn-warning' onClick={() => filterItem("evening")}>Evening</button>
                    <button className='btn btn-warning' onClick={() => filterItem("dinner")}>Dinner</button>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            {
                                items.map((val, ind) => {
                                    return <Card
                                        key={ind}
                                        img={val.img}
                                        title={val.title}
                                        price={val.price}
                                        dec={val.dec} />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Galery
