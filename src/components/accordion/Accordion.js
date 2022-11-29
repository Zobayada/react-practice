import React, { useState } from "react";
import { ques } from "./api";
import "./accordion.css"
import Myaccordion from "./Myaccordion";

const Accordion = () => {
    const [ data, setData] = useState(ques);

    return(
        <>
        <section className="click">
        <div className="box">
        <h1>React Interview</h1>
            {
                data.map((curData) => {
                return <Myaccordion key={curData.id} {...curData}/>
            })
            }
        </div>
        </section>    
        </>
    )
}

export default Accordion;