import React, { useState } from 'react';
import "./header.css";
import Header from "./Header";
import Note from './Note';
import ChildNote from './ChildNote';


function KeepApp() {
  const [addItem, setAddItem] = useState([])
  const addNote = (note) => {
    setAddItem((preData) => {
      return[
        ...preData, note
      ]
    })
    
  }
  const onDelete = (id) => {
    setAddItem((preValue) => 
    preValue.filter((curData,index) =>{
      return index !== id;
    })
    )
  }
  
  return (
    <>
      <Header />
      <Note passNote = {addNote}/>
      {addItem.map((val, index) => {
          return (
            <ChildNote
            key={index}
            id = {index}
            title ={val.title}
            content = {val.content}
            deleteItem = {onDelete}
          />
          )
        })}

    </>
  )
}

export default KeepApp
