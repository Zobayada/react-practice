import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function ChildNote(props) {
  const deleteNote = () => {
    props.deleteItem(props.id)
  }
    
  return (
    <>
      <div className='box'>
      <div className='cnote'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <Button className='cnotebtn' onClick={deleteNote}>
            <DeleteIcon />
        </Button>
      </div>
      </div>
    </>
  )
}

export default ChildNote;
