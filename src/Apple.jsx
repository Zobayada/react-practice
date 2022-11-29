import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
 
const Apple = () => {
    return (
        <Card 
            key = {Sdata[0].id}
            imgsrc = {Sdata[0].imgsrc}
            name = {Sdata[0].name}
            title = {Sdata[0].title}
            price = {Sdata[0].price}
        />
    )
}

export default Apple;