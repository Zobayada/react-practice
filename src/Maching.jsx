import React from "react";

let Maching = (props) => {
    let x = props.x;
    let y = props.y;
    let z = props.z;
    console.log(props.z)
    return(
        <>
            <div style={{textAlign:"center", background:"#000"}}>
                    <h1>{x}{y}{z}</h1>
                    <h1>This is maching</h1>
                    <hr/>
                </div>
        </>
    );
}

export default Maching;