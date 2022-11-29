import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Note = (props) => {
    const [expand, setExpand] = useState(false)
    const [note, setNote] = useState({
        title: '',
        content: ''
    });
    const inputEvent = (event) => {
        const {name , value} = event.target;
        setNote((preValue) => {
            return{
                ...preValue,
                [name] : value
            }
        })
    }
    const addNote = () => {
        props.passNote(note);
        setNote({
            title: '',
            content: ''
        })
    }
    const expandIt = () => {
        setExpand(true)
    }
    const normal = () => {
        setExpand(false)
    }
    return(
        <>
            <div className="note">
                <form>
                {expand ?
                    <input type="text" value={note.title} placeholder="Title" autoComplete="off" name="title" onChange={inputEvent}/> : null}

                    <textarea value={note.content} placeholder="Enter your Text" name="content" onClick={expandIt} onDoubleClick={normal} onChange={inputEvent}></textarea>
                    {expand ?
                    <Button className="notebtn" onClick={addNote}>
                        <AddIcon />
                    </Button> : null}
                </form>
            </div>
        </>
    )
}

export default Note;