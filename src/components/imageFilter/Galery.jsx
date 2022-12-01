import React from 'react';
import "./img.css";
import Card from './Card';
import ImgData from "./ImgData";
import { useState } from 'react';

const btnValue = [...new Set(ImgData.map((curBtn) => curBtn.category)), "all"];

const Galery = () => {

    const [btn, setBtn] = useState(btnValue);
    console.log(setBtn);

    const [items, setItems] = useState(ImgData);
    const filterItem = (categoryItem) => {
        if (categoryItem === "all") {
            setItems(ImgData);
            return;
        }
        const updateItem = ImgData.filter((curElement) => {
            return curElement.category === categoryItem;
        })
        setItems(updateItem);
    }
    return (
        <>
            <h1 className='mt-5 text-center'>Order Our Favourite Dish</h1>
            <hr />
            <div className="container">
                <div className="d-flex justify-content-around">
                    {
                        btn.map((curData, index) => {
                            return <button key={index} className='btn btn-warning' onClick={() => filterItem(curData)}>{curData}</button>
                        })
                    }
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
