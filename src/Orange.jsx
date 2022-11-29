import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
 
const Orange = () => {
    return (
        <Card 
            key = {Sdata[1].id}
            imgsrc = {Sdata[1].imgsrc}
            name = {Sdata[1].name}
            title = {Sdata[1].title}
            price = {Sdata[1].price}
        />
    )
}

export default Orange;