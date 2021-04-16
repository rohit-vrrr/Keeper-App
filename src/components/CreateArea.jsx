import React from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {
    const [note, setNote] = React.useState({
        title: "",
        content: ""
    });

    const [isExpanded, setIsExpanded] = React.useState(false);

    function handleChange(event) {
        const {name, value} = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({title: "", content: ""});
        event.preventDefault();
    }

    function expand() {
        setIsExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && ( 
                    <input 
                    name="title"
                    value={note.title}
                    onChange={handleChange}
                    placeholder="Title"
                    autoComplete="off" />
                )}
                <textarea 
                    name="content"
                    value={note.content}
                    onClick={expand}
                    onChange={handleChange}
                    placeholder="Take a note..."
                    rows={isExpanded ? "3" : "1"}
                    autoComplete="off" />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
