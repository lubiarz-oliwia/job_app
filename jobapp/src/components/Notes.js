import React, {useEffect, useState} from 'react'
import Navigation from './Navigation'
import { getAllNotes } from '../actions/notes'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'


function Notes() {
    const [notes, setNotes] = useState([]);
    const [isNoteEditable, setIsNotEditable] = useState(false);

    useEffect(() => {
        getAllNotes(setNotes);
    }, []);

    const calculateDays = (index) => {
    let noteDate = ''
    const dates = notes.map(item => item.date);

    for (let i=0; i<dates.length; i++){
        noteDate = dates[index];
    }

    let date1 = new Date(noteDate);
    let date2 = new Date();
     
    const differenceInTime = date2.getTime() - date1.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return Math.round(differenceInDays);
}

    const editNote = (git ) => {
        setIsNotEditable(true);
    }

    return (
        <div>
            <Navigation/>
            <CardColumns>
               
{notes.map((note, index) => {
    return (
        <Card className="text-center">
  <Card.Header>{note.title}</Card.Header>
  <Card.Body>
  {isNoteEditable ? <input value={note.text}></input> : 

    <Card.Text>
{note.text}    </Card.Text> }
  </Card.Body>
  <Card.Footer className="text-muted">{calculateDays(index)} {calculateDays(index) === 1 ? "day" : "days"}</Card.Footer>

   {isNoteEditable ? <button>zapisz</button> :  <button onClick={editNote}>Edit</button>}

</Card>


    )
})}
         </CardColumns>
   


        </div>
    )
}

export default Notes
