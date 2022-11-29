import React from "react";


const Slot = (props) => {
    let x = props.x;
    let y = props.y;
    let z = props.z;

    if((x===y) && (y===z)){
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
    else{
        return(
            <>
                <div style={{textAlign:"center", background:"#000"}}>
                        <h1>{x}{y}{z}</h1>
                        <h1>This is not maching</h1>
                        <hr/>
                    </div>
            </>
        )
    }
    
     
}

export default Slot;