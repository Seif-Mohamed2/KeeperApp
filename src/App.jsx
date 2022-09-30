import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import NoteRender from "./NotesRender";
import CreateArea from "./CreateArea";

function App(){

    const [NoteList, setNoteList] = React.useState([]);
    function deleteFun (id){
        console.log("clicked");
        setNoteList((prev)=> {
            return prev.filter((item, index) => {
                return index !== id;
            });}
        );
    }
    function handlePush(pushed){
        //console.log(NoteList);
        setNoteList((prev) => {
            console.log(prev);
            console.log(pushed);
            return ([...prev, pushed]);
        });
     
    }

    return (<div>
        <Header />
        <CreateArea addItem={handlePush} />
        <NoteRender deleteFun= {deleteFun} noteList= {NoteList}/>  
        <Footer />
    </div>);
}

export default App;