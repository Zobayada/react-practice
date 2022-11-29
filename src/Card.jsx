import React from "react";
import Img from "./Img";
import Heading from "./Heading";

function Card(props){
    return(
        <>
            <div className="products">
                <div className="product">
                    <Img imgsrc={props.imgsrc} />
                    <div className="product_info">
                        <h3 className="product_title">{props.title}</h3>
                        <Heading name={props.name} />
                        <h5 className="product_price">{props.price}</h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;