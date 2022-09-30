import React from "react";
import Note from "./Note";
//import NoteList from "./Notes";


function NotesRender(props){
    const list = props.noteList; 
    
    return (
        <div>{list.map((item, index) => {
            return (<Note  
                key={index}
                id = {index}
                title={item.title}
                content={item.content}
                deleteFun = {props.deleteFun}
        />);
        })}</div>
    );
}

export default NotesRender;