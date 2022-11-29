import React, { useState } from "react";

const Myaccordion = ({question,answer}) => {
    const [show, setShow] = useState(false )
    return(
        <>
            <div className="mainHead">
                <p onClick={() => setShow(!show)}>{show ? "➖" : "➕"}</p>
                <h1>{question}</h1>
            </div>
            {show && <p className="answer">{answer}</p>}
            
        </>
    )
}

export default Myaccordion;