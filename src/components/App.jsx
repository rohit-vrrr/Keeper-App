import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = React.useState([]);

    function addNote(newNote) {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        });
    }
    
    return(
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            
            {notes.map((eachNote) => {
                return <Note title={eachNote.title} content={eachNote.content} />
            })}

            <Footer />
        </div>
    );
}

export default App;
