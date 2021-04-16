import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../notes";

function App() {
    const [newNote, setNewNote] = React.useState({
        title: "",
        content: ""
    });
    
    return(
        <div>
            <Header />
            <CreateArea />

            <Note key={1} title="Note title" content="Note content" />

            <Footer />
        </div>
    );
}

export default App;
