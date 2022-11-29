import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


const CountApp = () =>{
    const [number, setNumber] = useState(0);
    const inc =() => {
        setNumber(number+1)
    }
    const dec =() => {
        if(number>0){
            return setNumber(number - 1)
        }
        else{
            alert("Not Allowed")
        }
    }
    return (
        <>
            <div className="click">
                <div className="box">
                    <h1>{number}</h1>
                    <br/>
                    <Tooltip title="Delete" arrow>
                    <Button variant="outlined" onClick={dec}><RemoveCircleIcon /></Button>
                    </Tooltip>
                    <Tooltip title="Add" arrow>
                    <Button variant="outlined" onClick={inc}>
                    <AddIcon />
                    </Button>
                    </Tooltip>
                </div>
            </div>
        </>
    )
}
export default CountApp;