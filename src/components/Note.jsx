import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
    const [isHover, setIsHover] = React.useState(false);

    function handleDelete() {
        props.onDelete(props.id);
    }

    function onHoverIn() {
        setIsHover(true);
    }
    function onHoverOut() {
        setIsHover(false);
    }

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button 
                onMouseOver={onHoverIn} 
                onMouseOut={onHoverOut}
                onClick={handleDelete}
                style={{ backgroundColor: isHover && "gray"}}
            >
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;
