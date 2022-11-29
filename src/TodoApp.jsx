import React, { useState } from "react";
import TodoList from "./TodoList";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

const TodoApp = () => {
    const [item, setItem] = useState("")
    const [list, setList] = useState([]);
    const inputEvent = (event) => {
        setItem(event.target.value)
    }
const sub = () => {
    setList((preValue) =>{
        return [...preValue, item]
    })
    setItem("")
    }    
const deleteItem = (id) => {
    setList((preValue) =>{
        return preValue.filter((arr, index) =>{
            return index !== id;
        })
    })
}    
    return(
        <>
            <div className="click">
                <div className="box">
                    <br />
                    <h1> ToDo List </h1>
                    <br />
                    <input type="text" placeholder="Add a Items" onChange={inputEvent} name="product" value={item}/>
                    <Button variant="contained" color="success" onClick={sub}><AddIcon className="addIcon" /></Button>
                    <br />
                    <ul>
                        {list.map((itemValue, index) => {
                            return <TodoList text = {itemValue} key={index} id={index} /*onSelect={deleteItem}*/
                            />
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TodoApp;